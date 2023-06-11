"use client";

import { useQRCode } from "next-qrcode";

const NextQrCodePage = () => {
  const { Canvas } = useQRCode();

  return (
    <div>
      <code>yarn add next-qrcode</code>
      <p>
        <Canvas text={"https://github.com/contability/qrcode-test"} />
        Empty options
      </p>
      <p>
        <Canvas
          text={"https://github.com/contability/qrcode-test"}
          options={{
            level: "H",
            margin: 3,
            scale: 4,
            width: 200,
            color: {
              dark: "#331B3F",
              light: "#ACC7B4",
            },
          }}
        />
        add options
      </p>
    </div>
  );
};

export default NextQrCodePage;
