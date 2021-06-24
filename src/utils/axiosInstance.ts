import axiosCore from "axios";
import cookies from "js-cookie";

const axiosInstance = axiosCore.create();

axiosInstance.defaults.headers.common["Authorization"] =
  cookies.get("access_token");

export default axiosInstance;
