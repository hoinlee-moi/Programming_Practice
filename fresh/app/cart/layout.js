import "../globals.css";
import Banner from "./Banner";

export default function RootLayout({ children }) {
  return (
    <div>
      {children}
      <Banner cardName="롯데카드"/>
      <Banner cardName="현대카드"/>
    </div>
  );
}
