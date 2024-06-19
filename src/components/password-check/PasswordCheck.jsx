import { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './PasswordCheck.css';

function PasswordCheck() {
  const [password, setPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState({ length: false, alphanumeric: false, specialCharacter: false, upperCase: false });
  
  const handleChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setPasswordValidation({
      length: newPassword.length >= 8,
      alphanumeric: /^(?=.*[A-Za-z])(?=.*\d)/.test(newPassword),
      specialCharacter: /[^A-Za-z0-9]/.test(newPassword),
      upperCase: /[A-Z]/.test(newPassword),
    });
  };

  return (
    <div>
      <div className='input-div'>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <ul>
        <li className={passwordValidation.length ? 'valid' : 'invalid'}>
          <span className="icon">
            {passwordValidation.length ? <FaCheckCircle /> : <FaTimesCircle />}
          </span>
          Password should be at least 8 characters long
        </li>
        <li className={passwordValidation.alphanumeric ? 'valid' : 'invalid'}>
          <span className="icon">
            {passwordValidation.alphanumeric ? <FaCheckCircle /> : <FaTimesCircle />}
          </span>
          Password should contain alphanumeric characters
        </li>
        <li className={passwordValidation.specialCharacter ? 'valid' : 'invalid'}>
          <span className="icon">
            {passwordValidation.specialCharacter ? <FaCheckCircle /> : <FaTimesCircle />}
          </span>
          Password should contain special characters
        </li>
        <li className={passwordValidation.upperCase ? 'valid' : 'invalid'}>
          <span className="icon">
            {passwordValidation.upperCase ? <FaCheckCircle /> : <FaTimesCircle />}
          </span>
          Password should contain uppercase letters
        </li>
      </ul>
    </div>
  )
}

export default PasswordCheck;