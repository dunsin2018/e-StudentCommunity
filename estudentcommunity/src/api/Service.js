import authActionTypes from "../context/authActionTypes";
import {
  firestore,
  createUserProfileData,
  auth,
  getCurrentUser,
} from "./firebase.config";

export const getSnapShotFromUserAuth = async (
  userAuth,
  additionalData,
  dispatch
) => {
  try {
    const userRef = await createUserProfileData(userAuth, additionalData);
    const userSnapShot = await userRef.get();
    dispatch({
      type: authActionTypes.LOGIN_SUCCESS,
      payload: { id: userSnapShot.id, ...userSnapShot.data() },
    });
  } catch (error) {
    dispatch({ type: authActionTypes.LOGIN_FAILD, payload: error });
  }
};

export const signUpNewUser = async (userData, dispatch) => {
  const {
    firstName,
    lastName,
    department,
    email,
    program,
    country,
    gender,
    password,
    year,
  } = userData;

  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    getSnapShotFromUserAuth(
      user,
      {
        firstName,
        lastName,
        displayName: firstName,
        department,
        program,
        country,
        gender,
        year,
      },
      dispatch
    );
  } catch (error) {
    dispatch({ type: authActionTypes.LOGIN_FAILD, payload: error });
  }
};

export const checkUserSession = async (dispatch) => {
  try {
    const userAuth = await getCurrentUser();
    if (!userAuth) return;
    await getSnapShotFromUserAuth(userAuth, null, dispatch);
  } catch (error) {
    dispatch({ type: authActionTypes.LOGIN_FAILD, payload: error });
  }
};

export const signInWithEmail = async ({ email, password }, dispatch) => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    await getSnapShotFromUserAuth(user, null, dispatch);
  } catch (error) {
    dispatch({ type: authActionTypes.LOGIN_FAILD, payload: error });
  }
};
