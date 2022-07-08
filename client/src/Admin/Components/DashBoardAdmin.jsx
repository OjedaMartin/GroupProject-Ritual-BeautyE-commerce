import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {Image} from 'cloudinary-react'
import style from "./Styles/DashBoardAdmin.module.css";
import axios from "axios";

function DashBoard(){

  const[imageSelected, SetImageSelected] = useState()

  function uploadImage(files){
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "scu2lgfl")

    axios.post("https://api.cloudinary.com/v1_1/dr6jqk5jw/image/upload",formData)
    .then((res)=>{console.log(res)})
    
  }
console.log('comp', Image)
console.info('comp', Image)

  return (

          <div className={style.container}>
                    
            <input type="file" onChange={(e)=>{SetImageSelected(e.target.files[0])}}/>
            <button onClick={uploadImage}> Upload Image </button>
            <Image cloud_name="dr6jqk5jw" public_id="https://res.cloudinary.com/dr6jqk5jw/image/upload/v1657220385/uukzmdu9ldfm3athldp3.png" />
            <h1>VER de manera local cambio de foto actual</h1>
          </div>
  );
};

export default DashBoard;