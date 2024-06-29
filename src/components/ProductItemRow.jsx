import React,{useState}  from 'react';
import './sassFiles/product_item_row.scss';
import {Row,Col,Container,Button} from "react-bootstrap";
import {IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaEdit,FaTrash } from "react-icons/fa";
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import {removeProduct} from '../../redux/slices/products_slice.js';
import { useNavigate } from "react-router";


const ProductItemRow  =  ({i,item}) =>  {
  
const [showHide,setShowHide] = useState("product_hide");
//const [strip,setStrip] = useState("strip");
const dispatch = useDispatch();
const nevigate = useNavigate();

/*const delPro = async (id) => {
  try{
    const result = await axios.post("http://localhost:5000/products/delet",id,
    {withCredentials: true});
    if(result){
    //console.log(result);
    }
  }
  catch(err){
    console.log(err);
  }
}*/
const delPro = async (id) => {
 const data = await dispatch(removeProduct(id));
 console.log(data)
}


  return (
    <>
    <div className={i % 2 == 1 ? 'strip' : ''}>
    <Row >
    <Col md={12}>
      <div className="item_flex">
        <div className="num_div">{i + 1}</div>
        <div className="title_div">{item.title}</div>
        <div className="item_cat" >
        {item.category}
        </div>
        <div className="item_status" >
        Available
        </div>
        <div className="item_btn">
          <button 
          onClick={() => {
            showHide == "product_hide"? setShowHide("product_show")  : setShowHide("product_hide")
          }}
          >{showHide == "product_hide" ?
          (<IoIosArrowDown />):(<IoIosArrowUp />)
          }
          </button>
        </div>
        


       <div className="item_qty" >
       1000
        </div>
        <div className="item_supplier" >
        {item.supplier}
        </div>
               <div className="item_status2" >
        Available
        </div>
       <div className="item_options" >
        <FaEdit className="edit_icon"
        onClick={() => nevigate("/editproduct",{state:{item:item}})}
        />
        <FaTrash className="trash_icon" 
        onClick={()=> delPro({'id':item._id})}
        />
        </div>
     </div>
    </Col>
    </Row>
    </div>
</>
  );
}


   export default ProductItemRow;