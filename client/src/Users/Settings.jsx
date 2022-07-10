import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { putUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";
export const Settings = () => {
  const dispatch = useDispatch();
  const { logout, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.putUser);

  const [edit, setEdit] = useState({
    // image: "",
    // email: "",
    name: "",
    address: "",
  });
  useEffect(() => {
    setEdit({
      // image: currentUser.image,
      // email: currentUser.email,
      name: currentUser.name,
      address: currentUser.address,
    });
  }, [currentUser]);
  function handleChange(e) {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
    console.log(edit);
  }
  function handleSubmit(e) {
    if (edit.name !== "") {
      e.preventDefault();
      dispatch(putUser(edit,user.email));
      console.log(edit)
      alert("Saved");
      setEdit({
        // image: "",
        // email: "",
        name: "",
        address: "",
      });
    } else {
      e.preventDefault();
      alert("Complete all fields");
    }
    console.log(edit);
  }
  // function handleDelete(e) {
  //   e.preventDefault();
  //   let choose = window.confirm(
  //     "Are you sure you want to delete this account?"
  //   );
  //   if (choose) {
  //     logout({ returnTo: window.location.origin });
  //     dispatch(putUser({ email:user.email, del: true }));
  //   }
  // }
  return (
    <div>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <h1>Your Data</h1>
        {/* <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input
            id="exampleFile"
            name="file"
            type="file"
           
          />
        </FormGroup> */}

        <h3>Name</h3>
        <Input
          type="text"
       
          name="name"
          onChange={(e) => handleChange(e)}
        />
        <h3>adress</h3>
        <Input
          type="text"
     
          name="address"
          onChange={(e) => handleChange(e)}
        />

        <Button type="submit">Save</Button>
      </Form>
      {/* <Button onClick={(e) => handleDelete(e)}>Delete</Button> */}
    </div>
  );
};
