import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <p>현대카드 무이자 이벤트중</p>
      </body>
    </html>
  );
}