import * as React from 'react';
import { connect } from 'react-redux';

import './beer.css';

import AppState from 'types/state/AppState';
import { BeerParams, PunkBeerInterface, MyBeerInterface, MyBeerPayload } from '../../types/Beer';

import MyBeer from './myBeer/myBeer';
import AllBeer from './allBeer/allBeer';
import AddMyBeerModal from '../common/modal/addMyBeer/modal';

import { useTabChange, useComponentState } from './hooks';

import { FetchAllBeer, FetchMyBeer, CreateMyBeer } from '../../actions/beer';
import { logout } from '../../actions/logout';

interface StatePropsInterface {
  punkBeers: PunkBeerInterface[];
  myBeer: MyBeerInterface[];
  isLoadingPunkBeers: boolean;
  isLoadingMyBeers: boolean;
}

interface DispatchPropsInterface {
  FetchMyBeer: () => void;
  FetchAllBeer: (params: BeerParams) => void;
  CreateMyBeer: (params: MyBeerPayload) => void;
  logout: ({ force }: { force: boolean }) => {};
}

type InjectedProps = StatePropsInterface & DispatchPropsInterface;

function Beer(props: InjectedProps) {
  const { punkBeers, FetchAllBeer, isLoadingPunkBeers, myBeer, isLoadingMyBeers, CreateMyBeer, logout } = props;
  const { state, dispatch } = useTabChange();
  const { state: componentState, dispatch: componentDispatch } = useComponentState();

  const openModal = () => {
    componentDispatch({ type: 'TOGGLE_MODAl', payload: true });
  };

  const closeModal = () => {
    componentDispatch({ type: 'TOGGLE_MODAl', payload: false });
  };

  const handleFormSubmit = async (payload: MyBeerPayload) => {
    try {
      await CreateMyBeer(payload);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    async function fetchPunkBeers() {
      const queryParams = componentState || { perPage: 10, page: 1 };

      await FetchAllBeer(queryParams);
      await FetchMyBeer();
    }

    fetchPunkBeers().catch((err) => console.log(err));
  }, [componentState?.page]);

  React.useEffect(() => {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (!scrollPosition) return;
    window.scrollTo(0, parseInt(scrollPosition, 10));
    localStorage.removeItem('scrollPosition');
  }, [punkBeers]);

  const isOpenModal = componentState?.isOpenModal || false;

  return (
    <React.Fragment>
      <AddMyBeerModal
        handleFormSubmit={handleFormSubmit}
        openModal={openModal}
        closeModal={closeModal}
        isOpenModal={isOpenModal}
      />
      <div className="m-24">
        <div className="m-24 row">
          <ul className="tabs" data-tabs id="beer-tabs flex-container">
            <li className={state?.tab_1.titleClass}>
              <a
                className="hollow"
                aria-selected={state?.tab_1.ariaLabel}
                onClick={() => {
                  dispatch({ type: 'TAB_1', payload: '' });
                }}
              >
                All Beers
              </a>
            </li>
            <div className="flex-container align-justify align-bottom">
              <li className={state?.tab_2.titleClass}>
                <a
                  className="disabled"
                  aria-selected={state?.tab_2.ariaLabel}
                  onClick={() => {
                    dispatch({ type: 'TAB_2', payload: '' });
                  }}
                >
                  My Beers
                </a>
              </li>
              <li className={`${state?.tab_2.titleClass} ${state?.addCustomButton.visibilityState}`}>
                <button className="small button custom-button" onClick={openModal}>
                  <span className="mr-3">Add a new beer</span>
                </button>
              </li>
            </div>
          </ul>

          <div className="tabs-content" data-tabs-content="beer-tabs">
            <div className={state?.tab_1.tabPanel} id="panel1">
              {!isLoadingPunkBeers && <AllBeer beers={punkBeers} />}
            </div>
            <div className={state?.tab_2.tabPanel} id="panel2">
              {!isLoadingMyBeers && <MyBeer beers={myBeer} openModal={openModal} />}
            </div>
          </div>
          <div className="flex-container align-center">
            <a
              className={`medium button hollow no-border ${state?.loadMoreButton.visibilityState}`}
              onClick={() => {
                componentDispatch({ type: 'NEXT', payload: '' });
                localStorage.setItem('scrollPosition', `${window.pageYOffset}`);
              }}
            >
              <span className="mr-3">Load More</span>
              <i className="fa fa-4 fa-chevron-down"></i>
            </a>
          </div>
          <div className="flex-container align-right">
            <a
              className={`medium button Secondary`}
              onClick={() => {
                logout({ force: true });
              }}
            >
              <span className="mr-3">Logout</span>
              <i className="fa fa-4 fa-chevron-down"></i>
            </a>
          </div>
        </div>
        <div className="flex-child-auto"></div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    punkBeers: state.data.punkBeer.beers,
    isLoadingPunkBeers: state.ui.punkBeer.isLoadingPunkBeer,
    myBeer: state.data.myBeer.beers,
    isLoadingMyBeers: state.ui.myBeer.isLoadingMyBeer,
  };
};

const mapDispatchToProps = {
  FetchAllBeer,
  FetchMyBeer,
  CreateMyBeer,
  logout,
};

export default connect<StatePropsInterface, DispatchPropsInterface>(mapStateToProps, mapDispatchToProps)(Beer);
