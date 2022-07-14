//import React, { useState } from "react";
//import { NavLink } from "react-router-dom";
//import {Image} from 'cloudinary-react'
//import style from "./Styles/DashBoardAdmin.module.css";
//import axios from "axios";
//
//function Cloudinary(){
//
//  const[imageSelected, SetImageSelected] = useState()
//
//  function uploadImage(files){
//    const formData = new FormData()
//    formData.append("file", imageSelected)
//    formData.append("upload_preset", "scu2lgfl")
//
//    axios.post("https://api.cloudinary.com/v1_1/dr6jqk5jw/image/upload",formData)
//    .then((res)=>{console.log(res)})
//    
//  }
//console.log('comp', Image)
//console.info('comp', Image)
//
//  return (
//
//          <div className={style.container}>
//                    
//            <input type="file" onChange={(e)=>{SetImageSelected(e.target.files[0])}}/>
//            <button onClick={uploadImage}> Upload Image </button>
//            <Image cloud_name="dr6jqk5jw" public_id="https://res.cloudinary.com/dr6jqk5jw/image/upload/v1657220385/uukzmdu9ldfm3athldp3.png" />
//            <h1>VER de manera local cambio de foto actual</h1>
//          </div>
//  );
//};
//
//export default Cloudinary;




import React, { useState } from 'react';


export default function Upload() {
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            console.error('error');
            setErrMsg('something went wrong!');
        };
    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            await fetch('/api/upload', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-Type': 'application/json' },
            });
            setFileInputState('');
            setPreviewSource('');
            setSuccessMsg('Image uploaded successfully');
        } catch (err) {
            console.error(err);
            setErrMsg('Something went wrong!');
        }
    };
    return (
        <div>
            <h1 className="title">Image: </h1>
            
            <form onSubmit={handleSubmitFile} className="form">
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    className="form-input"
                />
                <button className="btn" type="submit">
                    Submit
                </button>
            </form>
            {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: '300px' }}
                />
            )}
        </div>
    );
}