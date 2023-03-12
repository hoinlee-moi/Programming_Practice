// Props 타입
export type UserInputProps = [
  any,
  (e: React.ChangeEvent<HTMLInputElement>) => void
];
export type MyButtonProps = {
  onClick: () => void;
  children: React.ReactNode | string;
  className?: string;
  id?: string;
};
export type AlertModalPorps = {
  closeModal: () => void;
  children: string;
  buttonFunc?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export type MakeModalProps = {
  closeModal: () => void;
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
  setUploadedImages: (files: FileList | undefined) => [string[], () => void];
  uploadedImages: string[];
};

export type MyCanvasProps = {
  imageSrc: File|null;
};

export type SearchMenuProps = {
  closeSearch : ()=>void
  closeState:boolean
}
//Recoil 타입
export type UserToken = {
  AccessToken: string;
  RefreshToken: string;
};
export type CreatPostType = {
  postContents: string;
  // postImageUrls: FormData;
  menuList: string[];
  nuCarbs: number;
  nuProtein: number;
  nuFat: number;
  nuKcal: number;
};

export type CreatMenuType = {
  menuList: string[];
  nuCarbs: number;
  nuProtein: number;
  nuFat: number;
  nuKcal: number;
};


//CreatePost type
export type Foodnutrient = {
  foodCode: string; 
  foodName: string;
  nuCarbs: string;
  nuProtein: string;
  nuFat: string;
  nuKcal: string;
};
