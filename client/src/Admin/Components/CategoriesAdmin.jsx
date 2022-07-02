import React, { useEffect, useState } from 'react';
import style from "./Styles/CategoriesAdmin.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {getAllCategories, postCategory} from "../../redux/actions/index"
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im"
import { BiPlusMedical } from "react-icons/bi"







function CategoriesAdmin(){


let navigate = useNavigate();
const dispatch = useDispatch()
const categories = useSelector((state)=> state.category)
const [estado, setEstado] = useState({  
  category: "",
});

useEffect(() => {
dispatch(getAllCategories());
}, [dispatch]);


function handleChange(e) {
  e.preventDefault();
  setEstado({
    ...estado,
    [e.target.name]: e.target.value,
  });
//  SetErr(inputValidate({ ...estado, [e.target.name]: e.target.value }));
}

//function handleDelete(e){
//    e.preventDefault()
//    dispatch(deleteCategory(e.name))
//    swal("Category deleted")
//}


function handleSubmit(e) {
  e.preventDefault();
//  if (Object.keys(err).length)
//{return alert("Faltan datos")}
  dispatch(postCategory(estado));
  swal("Category added successfully");
  setEstado({    
    category: "",
  });
  dispatch(getAllCategories())
}




  return (
          <div className={style.container}>
            
            

              <div className={style.categoryAdder}>
                <h3>Add Category:</h3>
                <input className={style.inputadd} type="text" value={estado.category} name="category" onChange={(e) => handleChange(e)} />
                <button className={style.addbtn} onClick={(e) => handleSubmit(e)}><BiPlusMedical/></button>
              </div>

            <h3 className={style.font} >Current Categories:</h3>
            
            <div className={style.gridinfocont}>
            <h2 className={style.gridinfoid}>Id:</h2>
            <h2 className={style.gridinfoname}>Name:</h2>
            </div>

            {categories.map(e=> {
                return(
                        <div className={style.card} key={e.id}>
                           
                            <button className={style.DelBtn}><ImCross/></button>
                            
                            <p className={style.element}>{e.id}</p>
                            <p className={style.element}>{e.name}</p>
                                              
                        </div>




                )
            } )}

            
          </div>
  );
};

export default CategoriesAdmin;