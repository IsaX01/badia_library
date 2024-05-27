
import { loginSuccess, loginFailure, logout } from './authSlice';
// const host = "10.0.0.7";
const host = "192.168.1.164";


export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await fetch(`http://${host}:8080/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(loginSuccess(data));
    } else {
      const errorMessage = await response.text();
      dispatch(loginFailure(errorMessage || "Error trying to login"));
    }
  } catch (error) {
    dispatch(loginFailure("Error conecting to the server"));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const response = await fetch(`http://${host}:8080/api/user/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      dispatch(logout());
    }
    
  } catch (error) {
    console.error('Error:', error);
  }
};