export type MyInputProps = {
    type: string;
    placeHolder: string;
  };

export type MyButtonProps = {
    onClick : ()=>void ;
    children : React.PropsWithChildren
}