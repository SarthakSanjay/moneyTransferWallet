import Cookies from "js-cookie";

export function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  export const removeAllCookies = () => {
    const cookies = Cookies.get(); // Get all cookies
    Object.keys(cookies).forEach(cookieName => {
      Cookies.remove(cookieName); // Remove each cookie by its name
    });
  };