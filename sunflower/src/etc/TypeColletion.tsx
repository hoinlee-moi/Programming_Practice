export type UserInputProps = [
  any,
  (e: React.ChangeEvent<HTMLInputElement>) => void
];
export type MyButtonProps = {
  onClick: () => void;
  children: React.ReactNode | string;
  className?: string;
};
