import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {Image} from 'cloudinary-react'
import style from "./Styles/DashBoardAdmin.module.css";
import axios from "axios";
import {GoMail} from "react-icons/go"
import {BsBoxSeam} from "react-icons/bs"

function DashBoard(){


  return (
          <div className={style.container} >
            <div className={style.flex}>
              <div className={style.card}> Mailing Options <GoMail className={style.icon}/></div>
              <div className={style.card}> Create Package <BsBoxSeam className={style.icon}/></div>
            </div>
          </div>


  );
};

export default DashBoard;