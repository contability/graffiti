"use client";

import { authenticator } from "otplib";
import React, { useEffect, useState } from "react";
import QRCode from "qrcode";

const OtpLibPage = () => {
  const [token, setToken] = useState("");
  const qrcodeCanvas = React.useRef<HTMLCanvasElement>();

  // 서버에서 생성한 비밀키
  const secret = authenticator.generateSecret();
  // OTP URL 생성
  const otpURL = authenticator.keyuri("LABEL", "OTP TEST", secret);

  // 인증
  const executeVerified = () => {
    const verified = authenticator.verify({ secret, token });

    alert(verified);
  };

  useEffect(() => {
    const qrcodeCanvasRef = qrcodeCanvas.current;
    QRCode.toDataURL(qrcodeCanvasRef, otpURL, (err, imageData) => {
      if (err) console.error(err);

      console.log("img data:", imageData);
      console.log("url", otpURL);
      console.log("secret:", secret);
    });
  }, []);

  return (
    <div>
      <p>
        <code>yarn add speakeasy</code>
      </p>
      <p>
        <code>yarn add qrcode</code>
      </p>
      <canvas ref={qrcodeCanvas} />
      <input type="text" onChange={(e) => setToken(e.target.value)} />
      <button onClick={executeVerified}>submit</button>
    </div>
  );
};

export default OtpLibPage;
