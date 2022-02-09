import { useState } from 'react';
import { signInWithEmailPassword } from '../firebase/auth';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState(null);

  const onSubmit = async () => {
    const id = await signInWithEmailPassword(email, password);

    if (id) {
      setUserId(id);
    } else {
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return userId ? (
    <div>userId: {userId}</div>
  ) : (
    <div>
      <label>email</label>
      <input
        className="SignIn-input"
        value={email}
        label="email"
        type="text"
        onChange={(event) => setEmail(event.target.value)}
      />
      <label>pw</label>
      <input
        className="SignIn-input"
        value={password}
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button className="submit-button" onClick={onSubmit}>
        ok
      </button>
    </div>
  );
};

export default SignInForm;
