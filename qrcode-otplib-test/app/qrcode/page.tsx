"use client";

import React, { useEffect } from "react";
import QRCode from "qrcode";

const QrCodePage = () => {
  const emptyOptionsCanvasRef = React.useRef<HTMLCanvasElement>();
  const addOptionsCanvasRef = React.useRef<HTMLCanvasElement>();
  const toDataURLCanvasRef = React.useRef<HTMLCanvasElement>();

  useEffect(() => {
    const emptyOptionsCanvas = emptyOptionsCanvasRef.current;
    QRCode.toCanvas(
      emptyOptionsCanvas,
      "https://github.com/contability/qrcode-test",
      {
        errorCorrectionLevel: "L",
      }
    );

    const addOptionsCanvas = addOptionsCanvasRef.current;
    QRCode.toCanvas(
      addOptionsCanvas,
      "https://github.com/contability/qrcode-test",
      {
        errorCorrectionLevel: "M",
        width: 200,
        scale: 4,
        margin: 3,
        color: {
          dark: "#010599FF",
          light: "#FFBF60FF",
        },
      }
    );

    const toDataURLCanvas = toDataURLCanvasRef.current;
    QRCode.toDataURL(
      // 이 ref를 담는 태그에
      toDataURLCanvas,
      // 이 내용을 가진 qrcode를 바인딩한다.
      "https://github.com/contability/qrcode-test",
      {
        errorCorrectionLevel: "H",
        type: "image/jpeg",
        quality: 0.3,
        margin: 5,
        width: 400,
        color: {
          dark: "#A4193D",
          light: "#FFDFB9",
        },
      },
      (err, url) => {
        if (err) throw err;

        // url: 요청한 내용으로 생성되어 return 된 svg string.
        console.log(url);
      }
    );
  }, []);
  return (
    <div>
      <code>yarn add qrcode</code>
      <p>
        <canvas ref={emptyOptionsCanvasRef} />
        empty options
      </p>
      <p>
        <canvas ref={addOptionsCanvasRef} />
        add options
      </p>
      <p>
        <canvas ref={toDataURLCanvasRef} />
        toDataURL
      </p>
    </div>
  );
};

export default QrCodePage;
