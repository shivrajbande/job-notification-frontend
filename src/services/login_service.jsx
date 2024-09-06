import { ACTIONS } from "../reducers/login/action";

export const login = (dispatch) => async (credentials) => {
  dispatch({ type: ACTIONS.LOGIN_REQUEST });
  try {
    const response = await fetch("https://job-notification-backend.onrender.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch({ type: ACTIONS.LOGIN_SUCCESS, payload: data });
    } else {
      const error = await response.text();
      dispatch({ type: ACTIONS.LOGIN_ERROR, payload: error });
    }
  } catch (error) {
    dispatch({ type: ACTIONS.LOGIN_ERROR, payload: error.message });
  }
};
