import { PropsWithChildren } from "react";
import { JsxElement } from "typescript";

type MyInputProps = {
  type: string;
  placeHolder: string;
};

const MyInput = ({ type, placeHolder }: MyInputProps) => {
  return <input type={type} placeholder={placeHolder} />;
};

export default MyInput;
