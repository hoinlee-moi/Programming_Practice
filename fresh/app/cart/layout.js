import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <div>
      {children}
      <p>현대카드 무이자 이벤트중</p>
    </div>
  );
}
