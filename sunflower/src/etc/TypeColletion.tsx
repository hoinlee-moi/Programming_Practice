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

//Recoil 타입
export type UserToken = {
  AccessToken: "";
  RefreshToken: "";
};
