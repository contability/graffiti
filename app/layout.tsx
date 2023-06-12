import Link from "next/link";

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
      <body>
        <nav style={{ padding: "10px" }}>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/next-qrcode"> next-qrcode</Link>
          </li>
          <li>
            <Link href="/qrcode">qrcode</Link>
          </li>
          <li>
            <Link href="/speakeasy">
              use speakeasy for google-authenticator
            </Link>
          </li>
          <li>
            <Link href="/otplib">use otplib for google-authenticator</Link>
          </li>
          <li>
            <Link href="/otpauth">use otpauth for google-authenticator</Link>
          </li>
        </nav>
        {children}
      </body>
    </html>
  );
}
