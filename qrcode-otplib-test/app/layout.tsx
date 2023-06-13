import Link from "next/link";
import StyledComponentsRegistry from "../lib/registry";

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
        <StyledComponentsRegistry>
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
                use speakeasy for google-authenticator(미구현)
              </Link>
            </li>
            <li>
              <Link href="/otplib">use otplib for google-authenticator</Link>
            </li>
            <li>
              <Link href="/otpauth">
                use otpauth for google-authenticator(미구현)
              </Link>
            </li>
          </nav>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
