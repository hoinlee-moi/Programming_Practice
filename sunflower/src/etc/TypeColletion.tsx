export type MyInputProps = {
    type: string;
    placeHolder: string;
    onChange : (value:string)=>void
  };

export type MyButtonProps = {
    onClick : ()=>void;
    children : React.ReactNode | string;
    className?:string;
}