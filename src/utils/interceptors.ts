import { AxiosRequestConfig } from 'axios';

import * as HttpStatus from 'http-status-codes';

import store from '../store';
import http, { punkHttp } from './http';
import config from '../config';
import { logout } from '../actions/logout';
import { refreshToken } from '../actions/login';
import { AUTHORIZATION_HEADER } from '../constants/common';

/**
 * Get the Authorization Header value.
 *
 * @param {string} accessToken
 * @returns {string}
 */
function getAuthorizationHeader(accessToken: string): string {
  return `Bearer ${accessToken}`;
}

/**
 * Interceptor to catch Unauthorized responses and refresh the access token.
 *
 * @param {any} err - Response error.
 */
export async function unauthorizedResponseHandlerInterceptor(err: any) {
  try {
    if (err.response && err.response.config && err.response.config.url === config.endpoints.refresh) {
      store.dispatch(logout({ force: true }));

      return Promise.reject(err);
    }

    const originalRequest = err.config;
    let code = err.response && err.response.status;

    if (code === HttpStatus.UNAUTHORIZED && !originalRequest['__isRetryRequest']) {
      originalRequest.__isRetryRequest = true;
      try {
        const accessToken = (await store.dispatch(refreshToken())) as any;
        originalRequest.headers[AUTHORIZATION_HEADER] = getAuthorizationHeader(accessToken.value);
        return http.request(originalRequest);
      } catch (error) {
        store.dispatch(logout({ force: true }));

        return Promise.reject(error);
      }
    }
    const storedData = store.getState() as any;
    const accessToken = storedData.data.user.accessToken;
    originalRequest.headers[AUTHORIZATION_HEADER] = getAuthorizationHeader(accessToken);
  } catch (err) {
    store.dispatch(logout({ force: true }));
  }

  return Promise.reject(err);
}

/**
 * Interceptor to add Access Token header in all requests.
 *
 * @param {Request} request
 * @returns {Request}
 */
export function authorizationInterceptor(request: AxiosRequestConfig): AxiosRequestConfig {
  const storedData = store.getState() as any;
  const { accessToken } = storedData.data.user;

  // If the access token is already resolved in the store,
  // but isn't set in the request authorization header; set it.
  if (!request.headers) throw Error('No headers set in request');

  if (accessToken && !request.headers[AUTHORIZATION_HEADER]) {
    request.headers[AUTHORIZATION_HEADER] = getAuthorizationHeader(accessToken);
  }

  return request;
}

export async function rateLimiterInterceptor(err: any) {
  const originalRequest = err.config;
  let code = err.response && err.response.data && err.response.data.code;

  if (code === HttpStatus.TOO_MANY_REQUESTS && !originalRequest['__isRetryRequest']) {
    originalRequest.__isRetryRequest = true;

    try {
      setTimeout(function () {
        return punkHttp.request(originalRequest);
      }, 5000);
    } catch (err) {
      store.dispatch(logout({ force: true }));

      return Promise.reject(err);
    }
  }

  return Promise.reject(err);
}
