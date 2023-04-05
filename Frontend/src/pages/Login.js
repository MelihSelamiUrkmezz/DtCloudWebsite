import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px;
border-radius: 20px;
background-color: #f2f2f2;
box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Input = styled.input`
padding: 10px;
  margin: 10px;
  width: 100%;
  border: solid;
  border-color: #245CA6;
  border-radius: 20px;
  background-color: #f5f5f5;
  font-size: 16px;
}
`;

const Button = styled.button`
padding: 10px;
margin: 10px;
width: 15%;
border: none;
border-radius: 5px;
background-color: #245CA6;
color: #fff;
font-size: 16px;
cursor: pointer;
transition: background-color 0.3s ease;

  &:hover {
    background-color: #2f70c8;
  }
`;

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  localStorage.setItem('response','')
  const navigate = useNavigate();




  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/authenticate",
        {
          email: email,
          password: password,
        },
         {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
          }
        }
      )
      navigate('/dashboard');
      console.log("Response: ", response.data);
      localStorage.setItem("response", JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    <center><img src="./logo.png" alt="Resim" style={{ width: "50%", height: "auto" }} /></center>
    <Form onSubmit={handleSubmit}>
      <Label>
        Email:
        <Input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Label>
      <Label>
        Password:
        <Input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Label>
      <Button type="submit">Login</Button>
    </Form>
    </div>
  );
}

export default App;




