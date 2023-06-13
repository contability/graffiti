import comma from "./utils/comma";

addEventListener("message", (event: MessageEvent<number | string>) => {
  const convertNumber = comma(event.data);
  console.log("페이지에서 워커로 온 데이터: ", event.data);
  postMessage(convertNumber);
});
