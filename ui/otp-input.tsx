import { authenticator } from "otplib";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  .otp-field {
    display: flex;
  }
  .otp-field input {
    width: 24px;
    font-size: 32px;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    margin: 2px;
    border: 2px solid #55525c;
    background: #21232d;
    font-weight: bold;
    color: #fff;
    outline: none;
    transition: all 0.1s;
  }
  .otp-field input:focus {
    border: 2px solid #a527ff;
    box-shadow: 0 0 2px 2px #a527ff6a;
  }
  .disabled {
    opacity: 0.5;
  }
  .space {
    margin-right: 1rem !important;
  }
`;

const OtpInput = ({ secret, setIsValid }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");
  const [token, setToken] = useState("");

  const executeVerified = () => {
    const verified = authenticator.verify({ secret, token });
    if (verified) setIsValid(true);
  };

  useEffect(() => {
    setToken(input1 + input2 + input3 + input4 + input5 + input6);
  }, [input1, input2, input3, input4, input5, input6]);

  useEffect(() => {
    if (token.length === 6) executeVerified();
  }, [token]);

  return (
    <Container>
      <h1>Enter OTP</h1>
      <p className="otp-field">
        <input
          type="text"
          maxLength={1}
          pattern="[0-9]+"
          onChange={(e) => setInput1(e.target.value)}
        />
        <input
          type="text"
          maxLength={1}
          onChange={(e) => setInput2(e.target.value)}
        />
        <input
          className="space"
          type="text"
          maxLength={1}
          onChange={(e) => setInput3(e.target.value)}
        />
        <input
          type="text"
          maxLength={1}
          onChange={(e) => setInput4(e.target.value)}
        />
        <input
          type="text"
          maxLength={1}
          onChange={(e) => setInput5(e.target.value)}
        />
        <input
          type="text"
          maxLength={1}
          onChange={(e) => setInput6(e.target.value)}
        />
      </p>
    </Container>
  );
};

export default OtpInput;
