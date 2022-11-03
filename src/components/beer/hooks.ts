import { useReducer } from 'react';

interface tabState {
  tab_1: {
    ariaLabel: boolean;
    titleClass: string;
    tabPanel: string;
  };
  tab_2: {
    ariaLabel: boolean;
    titleClass: string;
    tabPanel: string;
  };
  loadMoreButton: {
    visibilityState: string;
  };
  addCustomButton: {
    visibilityState: string;
  };
}

interface Action<T, P = {}> {
  type: T;
  payload: P;
}
const TAB_1 = 'TAB_1';
type TAB_1 = typeof TAB_1;

const TAB_2 = 'TAB_2';
type TAB_2 = typeof TAB_2;

type tab1 = Action<TAB_1>;
type tab2 = Action<TAB_2>;
type TabActions = tab1 | tab2;

export function useTabChange() {
  let [state, dispatch] = useReducer(
    (state: tabState, action: TabActions) => {
      switch (action.type) {
        case TAB_1:
          return {
            tab_1: { ariaLabel: true, titleClass: 'tabs-title is-active', tabPanel: 'tabs-panel is-active' },
            tab_2: { ariaLabel: false, titleClass: 'tabs-title', tabPanel: 'tabs-panel' },
            loadMoreButton: { visibilityState: 'visible' },
            addCustomButton: { visibilityState: 'hide' },
          };
        case TAB_2:
          return {
            tab_1: { ariaLabel: false, titleClass: 'tabs-title', tabPanel: 'tabs-panel' },
            tab_2: { ariaLabel: true, titleClass: 'tabs-title is-active', tabPanel: 'tabs-panel is-active' },
            loadMoreButton: { visibilityState: 'hide' },
            addCustomButton: { visibilityState: 'visible' },
          };
        default:
          return;
      }
    },
    {
      tab_1: { ariaLabel: true, titleClass: 'tabs-title is-active', tabPanel: 'tabs-panel is-active' },
      tab_2: { ariaLabel: false, titleClass: 'tabs-title', tabPanel: 'tabs-panel' },
      loadMoreButton: { visibilityState: 'visible' },
      addCustomButton: { visibilityState: 'hide' },
    }
  );

  return { state, dispatch };
}

const NEXT = 'NEXT';
type NEXT = typeof NEXT;

const TOGGLE_MODAL = 'TOGGLE_MODAl';
type TOGGLE_MODAL = typeof TOGGLE_MODAL;

type next = Action<NEXT>;
type toggleMOdal = Action<TOGGLE_MODAL, boolean>;

type componentActions = next | toggleMOdal;

interface componentState {
  page: number;
  perPage: number;
  isOpenModal: boolean;
}

export function useComponentState() {
  let [state, dispatch] = useReducer(
    (state: componentState, action: componentActions) => {
      switch (action.type) {
        case NEXT:
          return { ...state, page: state.page + 1 };
        case TOGGLE_MODAL:
          return { ...state, isOpenModal: action.payload };
        default:
          return;
      }
    },
    {
      perPage: 10,
      page: 1,
      isOpenModal: false,
    }
  );

  return { state, dispatch };
}
