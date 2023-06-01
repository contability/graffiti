import { useEffect } from 'react';
import * as gtag from '../../../lib/gtag';

const CustomEvent: React.FC = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // 이런 식으로 이벤트 보내기 가능
    gtag.event({
      action: 'custom_event',
      category: 'ce',
      label: '커스텀 이벤트',
      value: 0,
    });

    console.log('custom-event');
  };

  return (
    <div>
      <h1>커스텀 이벤트</h1>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default CustomEvent;
