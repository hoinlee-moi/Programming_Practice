import { Cookies } from "react-cookie";

const cookies = new Cookies();

//쿠키 값 저장

export const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};

// 쿠키 값 꺼내기

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name) => {
  return cookies.remove(name);
};
