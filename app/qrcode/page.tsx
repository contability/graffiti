"use client";

import React, { useEffect } from "react";
import QRCode from "qrcode";

const QrCodePage = () => {
  const emptyOptionsCanvasRef = React.useRef<HTMLCanvasElement>();
  const addOptionsCanvasRef = React.useRef<HTMLCanvasElement>();

  const initCanvas = (element, url, options = {}) => {
    return QRCode.toCanvas(element, url, options);
  };

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
    </div>
  );
};

export default QrCodePage;
