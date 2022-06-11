import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const LogIn = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [avatar, setAvatar] = useState("");

  const formSchema = yup.object().shape({
    userName: yup.string().required("This field cannot be empty"),
    email: yup.string().email().required("This field cannot be empty"),
    password: yup.string().required("This field cannot be empty"),
    confirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    setAvatar(file);
  };

  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    const { userName, email, password } = value;
    // const url = "http://localhost:2331/api/user/register";

    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    const config = {
      "content-type": "multipart/form-data",
      onUploadProgress: (ProgressEvent) => {
        const { loaded, total } = ProgressEvent;
        const percent = Math.floor((loaded * 100) / total);
        console.log(percent);
      },
    };

    const options = {
      onUploadProgress: (ProgressEvent) => {
        const { loaded, total } = ProgressEvent;
        const percent = Math.floor((loaded * 100) / total);
        console.log(percent);
      },
    };

    // await axios.post(url, formData, config).then((res) => {
    //   console.log("Error Data: ", res);
    // });

    navigate("/signup/signin");
  });

  return (
    <div>
      <Container>
        <Card>
          <Wrap>
            <Holder>
              <Picture src={image} />
              <Input type="file" id="pix" style={{ visibility: "none" }} />
              <Label htmlFor="pix">Upload</Label>
            </Holder>
            <Form onSubmit={onSubmit} type="multipart/form-data">
              <Inputs placeholder="UserName" {...register("userName")} />
              <Error>{errors?.message.userName}</Error>

              <Inputs placeholder="Email" {...register("email")} />
              <Error>{errors?.message.email}</Error>

              <Inputs placeholder="Password" {...register("password")} />
              <Error>{errors?.message.password}</Error>

              <Inputs placeholder="Confirm Password" {...register("confirm")} />
              <Error>{errors?.message.confirm}</Error>

              <Button type="submit">Submit</Button>
            </Form>
            {/* <Text>SignIn if you have an account with Us</Text> */}
          </Wrap>
        </Card>
      </Container>
    </div>
  );
};

export default LogIn;

const Input = style.input`
display: none;
`;
const Button = style.button`
font-weight: 600;
margin-top: 10px;
padding: 15px 30px;
border-radius: 5px;
border: none;
background: #65accf;
color: white;
:hover{
  transform: scale(1.03);
  cursor: pointer;
  background: grey;
}
`;

const Error = style.div`
  color: red;
  font-weight: 500;
  font-size: 12px;
`;
const Text = style.div``;
const Inputs = style.input`
display: block;
margin-top: 10px;
padding: 10px;
border-radius: 5px;
width: 350px;

`;
const Form = style.form`
width: 100%;
height: 75%;
// background: grey;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
`;
const Label = style.label`
background: #65accf;
font-weight: 600;
border: none;
padding: 10px 30px;
border-radius: 5px;
text-decoration: none;
outline: none;
transition: all 350ms;
transforrm: scale(1);
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
margin-top: 10px;
color: white;

:hover{
    transform: scale(1.03);
    cursor: pointer;
    background: grey;
`;
const Picture = style.img`
width: 150px;
height: 150px;
background: #65accf;
border-radius: 100%;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
object-fit: contain;
text-decoration: none;

`;
const Holder = style.div`
margin-top: 20px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// height: 100%;
`;
const Wrap = style.div`
width: 100%;
height: 100%;
// background: blue;

`;

const Card = style.div`
margin-top: 140px;
width: 400px;
height: 600px;
background: white;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border: silver solid 5px;
`;
const Container = style.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;
