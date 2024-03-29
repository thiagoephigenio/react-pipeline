import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/",
  withCredentials: true, 
});

const getCookies = () => {
  let cookies:string[] = [];
  document.cookie.split(";").forEach((result) => {
    const [, value] = result.split("=");
    cookies.push(value);
  });
  return cookies;
};

api.interceptors.request.use((config) => {
  const [, csrf_token] = getCookies();
  console.log(csrf_token);
  // CSRF Token.
  if (csrf_token) {
    config.headers["csrf-token"] = csrf_token;
  }
  return config;
});

export default api;