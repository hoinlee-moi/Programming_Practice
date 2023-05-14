import axios from "axios";
import { getCookie } from "./etc/cookie";

type signData = {
  emailId: string;
  password: string;
  nickname: string;
};
type loginData = {
  emailId: string;
  password: string;
};

// 카카오 로그인 부분은 컴포넌트 내에 작성하였습니다.

export const emailDuplicate = async (userEmail: string) => {
  try {
    const response = await axios.get(
      `http://52.79.35.132:8080/api/auth/emailIds/${userEmail}/exists`
    );
    return response.status;
  } catch (err) {
    throw err;
  }
};

export const nickNameDuplicate = async (userNick: string) => {
  try {
    const response = await axios.get(
      `http://52.79.35.132:8080/api/auth/nicknames/${userNick}/exists`
    );
    return response.status;
  } catch (err) {
    throw err;
  }
};

export const signUp = async (userData: signData) => {
  try {
    const response = await axios.post(
      "http://52.79.35.132:8080/auth/signup",
      userData
    );
    return response.status;
  } catch (err) {
    throw err;
  }
};

export const login = async (userData: loginData) => {
  try {
    const response = await axios.post(
      "http://52.79.35.132:8080/auth/login",
      userData
    );
    return response;
  } catch (err) {
    throw err;
  }
};

export const getBoardPostList = async (page: number) => {
  try {
    const response = await axios.get(`test/posts?page=${page}`, {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });
    return response;
  } catch (err) {
    throw err;
  }
};
