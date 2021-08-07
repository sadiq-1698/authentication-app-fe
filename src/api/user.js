import axios from "axios";
import { API_ENDPOINTS } from "../globals/constants";

export const registerUser = async payload => {
  try {
    const response = await axios.post(API_ENDPOINTS.user.regsister, payload);
    return response;
  } catch (error) {
    let response = { error: "Some error occured" };
    return response;
  }
};

export const loginUser = async payload => {
  try {
    const response = await axios.post(API_ENDPOINTS.user.login, payload);
    return response;
  } catch (error) {
    let response = { error: "Some error occured" };
    return response;
  }
};
