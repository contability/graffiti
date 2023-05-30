import Header from "../components/common/Header";
import * as gtag from "../../lib/gtag";

const CustomEvent = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    gtag.event({
      action: "custom_event",
      category: "ce",
      label: "커스텀 이벤트",
      value: 0,
    });
  };

  return (
    <div>
      <Header />
      <h1>커스텀 이벤트</h1>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default CustomEvent;
