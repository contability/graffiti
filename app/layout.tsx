export const metadata = {
  title: "qr-test",
  description: "qrcode 테스트ㅡㅡㅡ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
