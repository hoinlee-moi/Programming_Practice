import axios from "axios";

// 카카오 로그인 부분은 컴포넌트 내에 작성하였습니다.

export const emailDuplicate = async (userEmail: string) => {
  try {
    const response = await axios.get(
      `http://52.79.35.132:8080/api/auth/emailIds/${userEmail}/exists`
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const nickNameDuplicate = async (userNick:string) => {
    try{
        const response = await axios.get(`http://52.79.35.132:8080/api/auth/nicknames/${userNick}/exists`);
        return response.data;
    }catch (err) {
        throw err
    }
}
