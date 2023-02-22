import { PropsWithChildren } from "react";
import { JsxElement } from "typescript";
import { MyInputProps } from "../etc/TypeColletion";

const MyInput = ({ type, placeHolder }: MyInputProps) => {
  return <input type={type} placeholder={placeHolder} />;
};

export default MyInput;
