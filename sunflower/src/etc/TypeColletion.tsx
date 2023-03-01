// Props 타입
export type UserInputProps = [
  any,
  (e: React.ChangeEvent<HTMLInputElement>) => void
];
export type MyButtonProps = {
  onClick: () => void;
  children: React.ReactNode | string;
  className?: string;
};
export type AlertModalPorps = {
  closeModal: () => void;
  children: string;
};
//Recoil 타입
export type UserToken = { 
  AccessToken : "",
  RefreshToken: ""
} 