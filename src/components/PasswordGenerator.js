import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import PasswordDisplay from './PasswordDisplay';
import PreviousPassword from './PreviousPassword';

const PasswordGenerator = () => { 
   
  const [password, setPassword] = useState('');
  const [history, setHistory] = useState([]);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeLetters, setIncludeLetters] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('previousPassword')) || [];
    setHistory(storedHistory);
  }, []);

  const generatePassword = () => {
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let characters = '';
    if (includeNumbers) characters += numbers;
    if (includeLetters) characters += letters;
    if (includeSymbols) characters += symbols;

    let newPassword = '';
      for (let i = 0; i < 8; i++) {

      newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(newPassword);
    updateHistory(newPassword);
  };

  const updateHistory = (newPassword) => {

    const updatedHistory = [newPassword, ...history.slice(0, 4)];
    setHistory(updatedHistory);
    localStorage.setItem('previousPassword', JSON.stringify(updatedHistory));
  };
 
   const refersh={}
  return (
    <Container className="mt-5">
      <h1 className="mb-4">Password Generator</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Include Numbers"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          <Form.Check
            type="checkbox"
            label="Include Letters"
            checked={includeLetters}
            onChange={(e) => setIncludeLetters(e.target.checked)}
          />
          <Form.Check
            type="checkbox"
            label="Include Symbols"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
        </Form.Group>
        <Button variant="primary" onClick={generatePassword}>
          Generate Password
        </Button>
      </Form>
      <PasswordDisplay  password={password} refersh={refersh} />
      <PreviousPassword history={history} />
    </Container>
  );
};

export default PasswordGenerator;
