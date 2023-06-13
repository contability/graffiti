"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const WebWorkPage = () => {
  const workerRef = useRef<Worker>();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    workerRef.current = new Worker(new URL("../../worker.ts", import.meta.url));
    workerRef.current.onmessage = (event: MessageEvent<number | string>) => {
      console.log("워커에서 페이지로 다시 보내온 데이터: ", event.data);
    };
    return () => {
      workerRef.current.terminate();
    };
  }, []);

  const handleWork = useCallback(() => {
    workerRef.current?.postMessage(price);
  }, [price]);
  return (
    <div>
      <input type="number" onChange={(e) => setPrice(Number(e.target.value))} />
      <button onClick={handleWork}>web worker</button>
    </div>
  );
};

export default WebWorkPage;
