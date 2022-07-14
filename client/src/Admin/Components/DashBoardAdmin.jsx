import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import style from "./Styles/DashBoardAdmin.module.css";
import axios from "axios";
import {GoMail} from "react-icons/go"
import {BsBoxSeam} from "react-icons/bs"

function DashBoard(){


  return (
          <div className={style.container} >
            <div className={style.flex}>
              <h3 className={style.text}>Welcome to the administration panel!</h3>              
              <h3 className={style.subtext}>Use the tabs above to move through the different features</h3>              
            </div>
          </div>


  );
};

export default DashBoard;