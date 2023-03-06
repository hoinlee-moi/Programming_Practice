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
  buttonFunc? : (e:React.MouseEvent<HTMLButtonElement>)=>void
};
export type MakeModalProps = {
  closeModal: () => void;
  anime: boolean;
};
export type PostItemBoxProps = {
  itemList: {
    postId: string;
    postImageUrls: string;
    postLikeCounts: string;
    commentCounts: string;
    mealCount: string;
    nuKcal: string;
  }[];
};
export type MakeModalUploadProps = {
  setUploadedImages : (files:FileList|undefined)=>[string[],()=>void];
  uploadedImages : string[]
}

export type MyCanvasProps = {
  imageSrc : string;
}

//Recoil 타입
export type UserToken = {
  AccessToken: "";
  RefreshToken: "";
};
