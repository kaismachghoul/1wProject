import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"


export default function SignUp() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState(null);
  const [confirmPassword, setConfirmpassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    e.preventDefault();
    setLastname(e.target.value);
  };
  const handleAge = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  };
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    e.preventDefault();
    setConfirmpassword(e.target.value);
  };
  const handlePhoenNumber = (e) => {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  };
  const hansdleimg = (e) => {
    e.preventDefault();
    console.log(e.target.files)
    setImg(e.target.files[0]);
  };

  const onSubmitData = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("please verify your password");
    } else {
      
      // console.log("data", data);
      let image64=new FileReader()
    
      image64.readAsDataURL(img);
      image64.onload = async () => {
        
      
        let data = {
          name: name,
          lastname: lastname,
          email: email,
          age: age,
          password: password,
          profileImg: image64.result,
          contact: phoneNumber,
        }
        console.log(data)
      

      let options ={
        ContentType : "Application/json"
      }
      axios.post("/api/items/SignUp", data,options)
    }
  }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sajjel Rou7ek</h2>
          <Form onSubmit={onSubmitData}>
            <Form.Group className="mb-1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" required onChange={handleName} />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>lastName</Form.Label>
              <Form.Control type="text" required onChange={handleLastName} />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required onChange={handleEmail} />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" required onChange={handleAge} />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                required
                onChange={handlePhoenNumber}
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                onChange={handlePassword}
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                required
                onChange={handleConfirmPassword}
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Image Profile</Form.Label>
              <Form.Control type="file" required onChange={hansdleimg} />
            </Form.Group>
            <Button className="w-100 mt-4" type="submit ">
              Enzel
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        3ndek Compte ? Connecti mela !!
      </div>
    </>
  );
}
