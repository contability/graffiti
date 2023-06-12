"use client";

import React, { useState } from "react";
import * as OTPAuth from "otpauth";
import qrcode from "qrcode";

const LoginPage = () => {
  // 서버에서 생성한 비밀키
  //   const secret = OTPAuth.Secret.random(20);
  const secret = "NB2W45DFOIZA";
  const [qrImg, setImg] = useState("");

  // OTP 인스턴스 생성
  const otp = new OTPAuth.TOTP({
    issuer: "My issuer",
    label: "My label",
    algorithm: "SHA1",
    digits: 6,
    period: 30,
    secret: secret,
  });

  // QR 코드 생성
  const generateQRCode = async () => {
    const otpURL = otp.toString();
    const qrCodeDataURL = await qrcode.toDataURL(otpURL);
    // return qrCodeDataURL;
    setImg(qrCodeDataURL);
  };

  // verify

  return (
    <div>
      <h1>Login Page</h1>
      <img src={qrImg} alt="QR Code" />
      {/* QR 코드를 스캔한 후 입력 받는 폼 */}
      <form>
        <input type="text" placeholder="Enter OTP" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
