import { useState } from 'react';

const LetMeKnow = () => {
  const [num, setNum] = useState(0);

  const onSubmit = async () => {
    alert('저장하려면 로그인 해주세요');
  };

  return (
    <div>
      <div>오늘의 기록을 알려주세요</div>
      <input
        className="Number-input"
        value={num}
        type="number"
        onChange={(event) => setNum(event.target.value)}
      />
      <button className="Number-submit-button" onClick={onSubmit}>
        save
      </button>
    </div>
  );
};

export default LetMeKnow;
