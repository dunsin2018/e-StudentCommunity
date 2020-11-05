import React, { createContext, useReducer, useContext } from "react";
import authActionTypes from "./authActionTypes";

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

const initialState = {
  currentUser: null,
  error: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
      };

    case authActionTypes.LOGIN_FAILD:
      return {
        ...state,
        currentUser: null,
        error: payload,
      };

    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthStateContext.Provider value={state}>
        {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  );
};

export const useAuthState = () => useContext(AuthStateContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);
