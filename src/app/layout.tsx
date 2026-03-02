import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corca — AI Automation Partner",
  description: "전략 설계부터 실행까지, Corca가 함께합니다. AI를 도입하는 게 아니라, 일하는 방식을 완전히 바꿔드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
