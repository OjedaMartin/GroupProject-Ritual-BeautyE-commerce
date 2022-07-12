import React, { useEffect, useState } from 'react';
import style from "./Styles/CategoriesAdmin.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {getAllCategories, postCategory, putCategory, hideCategory} from "../../redux/actions/index"
import swal from 'sweetalert';
import { ImCross } from "react-icons/im"
import { BiPlusMedical } from "react-icons/bi"
import { HiPencilAlt } from "react-icons/hi"







function CategoriesAdmin(){


const dispatch = useDispatch()
const categories = useSelector((state)=> state.category)
const [estado, setEstado] = useState({  
  category: "",
});
const [edit, setEdit] = useState({
  name: "",
})

useEffect(() => {
dispatch(getAllCategories());
}, [dispatch,]);


function handleChange(e) {
  e.preventDefault();
  setEstado({
    ...estado,
    [e.target.name]: e.target.value,
  });
//  SetErr(inputValidate({ ...estado, [e.target.name]: e.target.value }));
}

async function  handleDelete(e){
  
    const deleteName = {name: e.name}
    console.log(deleteName)  
    dispatch(hideCategory(deleteName))
    swal("Category Deleted")
    dispatch(getAllCategories())
   
  
}

function handlePut(e){
    const putInfo = {name: edit.name, id: e.id}
    
    console.log(putInfo)   
    dispatch(putCategory(putInfo))
    swal("Category changed")
    setEdit({    
      name: "",
    });
    dispatch(getAllCategories())
}

function handleEdit(e){
  e.preventDefault();
  setEdit({
    ...edit,
    [e.target.name]: e.target.value,
  });
}

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
            <h2 className={style.gridinfoid}>Id</h2>
            <h2 className={style.gridinfoname}>Name</h2>
            <h2 className={style.gridinfoname}>Status</h2>
            </div>

            {categories.map(e=> {
                return(
                        <div className={style.card} key={e.id}>
                           
                            <button className={style.DelBtn} name={e.name} onClick={() => handleDelete(e)}><ImCross/></button>
                            <div>
                                <input key={e.id} className={style.changeinput} type="text" value={edit.name} name='name' onChange={(e) => handleEdit(e)}/>
                                <button className={style.addbtn} name={e.name} id={e.id} onClick={() => handlePut(e)}><HiPencilAlt/></button>
                            </div>
                            <p className={style.element}>{e.id}</p>
                            <p className={style.element}>{e.name}</p>
                            <p className={style.element}>{e.status}</p>
                                              
                        </div>




                )
            } )}

            
          </div>
  );
};

export default CategoriesAdmin;