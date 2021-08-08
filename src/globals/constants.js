export const API_BASE_URL = process.env.REACT_APP_BASE_API_URL;

export const API_ENDPOINTS = {
  user: {
    regsister: `${API_BASE_URL}/user/register`,
    login: `${API_BASE_URL}/user/login`,
    editProfile: `${API_BASE_URL}/user/editProfile`,
    getAllUsers: `${API_BASE_URL}/users`,
    google: {
      login: `${API_BASE_URL}/user/google/login`,
      register: `${API_BASE_URL}/user/google/register`
    },
    github: {
      login: `${API_BASE_URL}/user/github/login`,
      register: `${API_BASE_URL}/user/github/register`
    }
  }
};

export const USER_INFO = "auth-app-user-info";
export const ACCESS_TOKEN = "auth-app-user-token";

// ICON CLASSES
export const ICONS = {
  MAIL: "fa fa-envelope",
  LOCK: "fa fa-lock",
  LOGOUT: "fa fa-sign-out",
  PROFILE: "fa fa-user",
  CHAT: "fa fa-weixin",
  SEND: "fa fa-paper-plane"
};
