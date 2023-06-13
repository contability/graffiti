"use client";

import { authenticator } from "otplib";
import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import OtpInput from "../../ui/otp-input";
import { styled } from "styled-components";

const Container = styled.div`
  height: 500px;
  width: 1000px;
  background: #ffffff;
  margin: 0;
  padding: 0;
  display: flex;
  /* background: #375f4e; */
  border: 1px solid #375f4e;
  border-radius: 15px;

  .left-panel {
    padding: 5px;
    width: 300px;
    border-radius: 15px;
    align-self: center;
    color: #396251;
  }

  .right-panel {
    border-radius: 15px;
    background: #396251;
    color: #ffffff;
    flex: 1;
    padding: 166px;
  }
`;

const OtpLibPage = () => {
  const [token, setToken] = useState("");
  const [isValid, setIsValid] = useState(false);
  const qrcodeCanvas = React.useRef<HTMLCanvasElement>();

  // 1. secret key
  // 원래 db에 저장되어 있는걸 서버에 요청하여 꺼내 왔다고 가정.
  // 유저 마다 secret키 따로따로 생성해서 db에 저장하여 가지고 있다.
  const secret = process.env.NEXT_PUBLIC_SECRET;

  // 2. url
  // 위에서 생성한 secret key로 otpauth://프로토콜이 포함된 URL을 생성.
  const otpURL = authenticator.keyuri("accountName", "issuer", secret);

  // 4. token 값을 검증. 인증 성공이면 true, 아니면 false 반환
  const executeVerified = () => {
    // 둘이 똑같음. check(secret, token) === verify({secret, token})
    // const verified = authenticator.check(secret, token);
    const verified = authenticator.verify({ secret, token });

    if (verified) setIsValid(true);
  };

  useEffect(() => {
    // 3. qrcode 라이브러리를 활용하여 url을 qrcode로 표현
    const qrcodeCanvasRef = qrcodeCanvas.current;
    QRCode.toDataURL(qrcodeCanvasRef, otpURL, (err, imageData) => {
      if (err) console.error(err);

      console.log("img data:", imageData);
      console.log("url", otpURL);
      console.log("secret:", secret);
    });
  }, []);

  useEffect(() => {
    if (token.length === 6) executeVerified();
  }, [token]);

  return (
    <Container>
      <div className="left-panel">
        <h1>otplib</h1>
        <p>
          <code>yarn add otplib</code>
        </p>
        <p>
          <code>yarn add qrcode</code>
        </p>
        <canvas ref={qrcodeCanvas} />
      </div>
      <div className="right-panel">
        {/* 4. 모바일 google OTP(google authenticator) 앱에 생성된 token을 입력  */}
        {/* <input type="text" onChange={(e) => setToken(e.target.value)} /> */}
        <OtpInput secret={secret} setIsValid={setIsValid} />
        <p>{isValid && <span>인증 완료</span>}</p>
      </div>
    </Container>
  );
};

export default OtpLibPage;
