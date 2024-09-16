import React from "react";
import Form from "./form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleRegister = async (data) => {
  try {
    const response = await axios.post("http://localhost:8000/web-users", data);
    if (response.status === 201) {
      navigate("/login");
    } else {
      alert("registration failed");
    }
  } catch (error) {
    alert(error.response.data.message)
  }
  };
  return <Form type="Register" onSubmit={handleRegister}></Form>;
};
export default Register;
