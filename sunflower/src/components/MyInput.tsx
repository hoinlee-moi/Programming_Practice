import { PropsWithChildren } from "react";
import { JsxElement } from "typescript";
import { MyInputProps } from "../etc/TypeColletion";

const MyInput = ({ type, placeHolder,onChange }: MyInputProps) => {
  return <input type={type} placeholder={placeHolder} onChange={(e)=>onChange(e.target.value)} />;
};

export default MyInput;
