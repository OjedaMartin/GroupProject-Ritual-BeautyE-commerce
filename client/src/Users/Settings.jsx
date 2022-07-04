import React from "react";
// import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Form, FormGroup, Label, Input,Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { putUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";
export const Settings = () => {
  const dispatch = useDispatch();
  const { logout } = useAuth0();
  const navigate= useNavigate();
  const currentUser = useSelector((state) => state.users);
  const [edit, setEdit] = useState({
    image: "",
    email: "",
    name: "",
    address: "",
    cp: "",
    state: "",
  });
  useEffect(() => {
    setEdit({
      image: currentUser.image,
      email: currentUser.email,
      name: currentUser.name,
      address: currentUser.address,
      cp: currentUser.cp,
      state: currentUser.state,
    });
  }, [currentUser]);
  function handleChange(e) {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
    console.loge(edit);
  }
  function handleSubmit(e) {
    if (edit.name !== "") {
      e.preventDefault();
      alert("Saved");
      dispatch(putUser(edit));
      setEdit({
        image: "",
        email: "",
        name: "",
        address: "",
        cp: "",
        state: ""
      });
     navigate(-2) 
    } else {
      e.preventDefault();
      alert("Complete all fields");
    }
  }

  function handleDelete(e) {
    e.preventDefault();
    let choose = window.confirm(
      "Are you sure you want to delete this account?"
    );
    if (choose) {
      logout({ returnTo: window.location.origin });
      dispatch(putUser({ email: currentUser.email, del: true }));
    }
  }
  return (
    <div>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <h1>Your Data</h1>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input id="exampleFile" name="file" type="file" />
        </FormGroup>
        <h3>Email</h3>
        <Input type="text" value={currentUser.email} disabled />
        <h3>Nombre</h3>
        <Input
          type="text"
          defaultValue={currentUser.name}
          name="name"
          onChange={(e) => handleChange(e)}
        />
        <h3>Dirección</h3>
        <Input
          type="text"
          defaultValue={currentUser.address}
          name="address"
          onChange={(e) => handleChange(e)}
        />
        <h3>Código Postal</h3>
        <Input
          type="text"
          defaultValue={currentUser.cp}
          name="cp"
          onChange={(e) => handleChange(e)}
        />
        <h3>Ciudad</h3>
        <div>
          <Input
            type="text"
            defaultValue={currentUser.state}
            name="state"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <Button type="submit">Save</Button>
      </Form>
      <Button onClick={(e) => handleDelete(e)}>Delete</Button>
    </div>
  );
};
