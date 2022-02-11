import { useState } from 'react';

import { postJumpNumber } from '../firebase/jump';

const LetMeKnow = () => {
  const [masterNum, setMasterNum] = useState(0);
  const [beginnerNum, setBeginnerNum] = useState(0);
  const date = '2022-02-11';

  const onSubmit = async () => {
    await postJumpNumber(date, masterNum);
    alert('저장되었습니다');
  };

  return (
    <div>
      <div>오늘의 기록을 알려주세요</div>
      <label>Master</label>
      <input
        className="Number-input"
        value={masterNum}
        type="number"
        onChange={(event) => setMasterNum(event.target.value)}
      />
      <button className="Number-submit-button" onClick={onSubmit}>
        save
      </button>
      <label>Beginner</label>
      <input
        className="Number-input"
        value={beginnerNum}
        type="number"
        onChange={(event) => setBeginnerNum(event.target.value)}
      />
      <button className="Number-submit-button" onClick={onSubmit}>
        save
      </button>
    </div>
  );
};

export default LetMeKnow;
