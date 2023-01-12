import axios from "axios";

export const httpConfig = axios.create();
httpConfig.interceptors.request.use(function () {/*...*/});
httpConfig.interceptors.request.clear(); // Removes interceptors from requests
httpConfig.interceptors.response.use(function () {/*...*/});
httpConfig.interceptors.response.clear(); // Removes interceptors from responses