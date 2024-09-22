"use client";

import React from "react";
export type MODAL_SIZE =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "full";
type MODAL_VIEWS =
  | "GET_DEAL"
  | "AVAILABILITY"
  | "MESSAGE_VENDOR"
  | "SHARE"
  | "DELETE_TASK"
  | "CLIENT_MESSAGE_VENDOR"
  | "REMOVE_VENDOR"
  | "ADD_VENDOR"
  | "DELETE_ACCOUNT"
  | "SAVE_LINK"
  | "CREATE_CUSTOM_DEAL"
  | "EDIT_CUSTOM_DEAL"
  | "CREATE_QUICK_SHARE_LINK"
  | "REMOVE_ACCESS"
  | "CREATE_NEW_SET"
  | "ADD_WATERMARK"
  | "UPLOAD_WATERMARK_IMAGE"
  | "CHANGE_EMAIL"
  | "DELETE_CHAT"
  | "REPORT_SENDER"
  | "DELETE_PHOTOS"
  | "ADD_EVENT";
interface openState {
  modal?: MODAL_VIEWS;
  title: string;
  subTitle?: string;
  size?: MODAL_SIZE;
  payload?: any;
  bodyOnly?: boolean;
}
interface State {
  view?: MODAL_VIEWS;
  data?: any;
  isOpen: boolean;
  title: string;
  subTitle?: string;
  size?: MODAL_SIZE;
  bodyOnly?: boolean;
}
type Action =
  | {
      type: "open";
      view?: MODAL_VIEWS;
      payload?: any;
      title: string;
      subTitle?: string;
      size: MODAL_SIZE;
      bodyOnly?: boolean;
    }
  | { type: "close" };

const initialState: State = {
  view: undefined,
  isOpen: false,
  data: null,
  title: "Modal",
  size: "md",
  bodyOnly: false,
};

function modalReducer(state: State, action: Action): State {
  switch (action.type) {
    case "open":
      return {
        ...state,
        view: action.view,
        data: action.payload,
        isOpen: true,
        title: action.title,
        subTitle: action.subTitle,
        size: action.size,
        bodyOnly: action.bodyOnly,
      };
    case "close":
      return {
        ...state,
        view: undefined,
        data: null,
        isOpen: false,
        title: "MODAL",
      };
    default:
      throw new Error("Unknown Modal Action!");
  }
}

const ModalStateContext = React.createContext<State>(initialState);
ModalStateContext.displayName = "ModalStateContext";
const ModalActionContext = React.createContext<
  React.Dispatch<Action> | undefined
>(undefined);
ModalActionContext.displayName = "ModalActionContext";

export function ModalProvider({ children }: React.PropsWithChildren<{}>) {
  const [state, dispatch] = React.useReducer(modalReducer, initialState);
  return (
    <ModalStateContext.Provider value={state}>
      <ModalActionContext.Provider value={dispatch}>
        {children}
      </ModalActionContext.Provider>
    </ModalStateContext.Provider>
  );
}

export function useModalState() {
  const context = React.useContext(ModalStateContext);
  if (context === undefined) {
    throw new Error(`useModalState must be used within a ModalProvider`);
  }
  return context;
}

export function useModalAction() {
  const dispatch = React.useContext(ModalActionContext);
  if (dispatch === undefined) {
    throw new Error(`useModalAction must be used within a ModalProvider`);
  }
  return {
    openModal({ title, subTitle, size, modal, payload, bodyOnly }: openState) {
      dispatch({
        type: "open",
        subTitle,
        size: size || "md",
        view: modal,
        payload,
        title,
        bodyOnly,
      });
    },
    closeModal() {
      dispatch({ type: "close" });
    },
  };
}
