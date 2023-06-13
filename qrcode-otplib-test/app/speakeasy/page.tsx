"use client";

import speakeasy from "speakeasy";
import QRCode from "qrcode";
import React, { useEffect, useState } from "react";

const SpeakEasyPage = () => {
  const qrcodeCanvas = React.useRef<HTMLCanvasElement>();
  const [token, setToken] = useState<string>("");

  // 서버에서 생성한 비밀키
  const secret = speakeasy.generateSecret({
    length: 20,
    name: "qualcosa",
    issuer: "OTP TEST",
  });

  // OTP URL 생성
  const url = speakeasy.otpauthURL({
    secret: secret.ascii,
    issuer: "OTP TEST", // OTP 앱에 표시되는 부분
    label: "LABEL", // OTP 앱에 표시되는 부분
    algorithm: "sha512",
    period: 30,
  });

  // 인증
  const executeVerified = () => {
    const verified = speakeasy.totp.verify({
      // base32 쓰면 에러 나고 ascii나 다른 인코딩 사용해야 함.
      secret: secret.ascii,
      encoding: "ascii",
      token: token,
      // step의 unit은 second이며 default 값은 30이다.
      step: 30,
      // 제공된 비밀번호와 비교하여 미래와 과거의 코드를 확인한다. 1이면 앞뒤로 1개까지 확인하는 듯
      window: 1,
    });

    // alert(verified);
    console.log(verified);
  };

  useEffect(() => {
    console.log("url is: ", url);

    const qrcodeCanvasRef = qrcodeCanvas.current;
    QRCode.toDataURL(qrcodeCanvasRef, url, (err, imageData) => {
      if (err) console.error(err);

      // console.log("img data:", imageData);
      // console.log("url", url);
      console.log("secret.ascii:", secret.ascii);
    });
  }, []);

  useEffect(() => {
    //   if (token.length === 6) executeVerified();
  }, [token]);

  return (
    <div>
      <h1>speakeasy</h1>
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

export default SpeakEasyPage;
