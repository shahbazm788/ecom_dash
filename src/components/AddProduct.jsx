import  { useState, useRef,useEffect, useMemo, useTransition } from 'react';
import JoditEditor from 'jodit-react';
import {Form , Button,Row,Col} from 'react-bootstrap';
import './sassFiles/addPost.scss';
import axios from 'axios';
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

const AddProduct = () => {
  const placeholder = '';
const [cookies, removeCookie] = useCookies([]);

 const nevigate = useNavigate();
  const [editorval , setEditorval] = useState();
  const [file,setFile] = useState();
  const [fData,setFdata] = useState({
    title:'',
    category:'',
    sub_category:"",
    files:null,
    editorval:'',
    supplier:"",
    price:"",
    product_location:"",
  });
	const editor = useRef(null);
 


  // const config = useMemo(
	// 	{
	// 		readonly: false, // all options from https://xdsoft.net/jodit/doc/,
	// 		placeholder: placeholder || 'Start typings...'
	// 	},
	// 	[placeholder]
	// );
  const config = {
    buttons:['bold','italic']
  }
 const handeleSubmit = (e) => {
    e.preventDefault();

 
const fd = new FormData();
fd.append('title',fData.title);
fd.append('category',fData.category);
fd.append('sub_category',fData.sub_category);
fd.append('supplier',fData.supplier);
fd.append('price',fData.price);
fd.append('product_location',fData.product_location);
fd.append('content',fData.editorval);
fd.append('file',file);





axios.post('http://localhost:5000/addpost',fd,{
//   onDownloadProgress: (ProgressEvent) => {console.log(ProgressEvent.progress*100)},
//   headers:{
//     "Custom-headers":"value"
// }
withCredentials: true
}).then(res => {
  if(res.status == 200){
    nevigate("/posts")
  }
}).catch(err => console.log(err));



 }
 
useEffect(() => {
  
  // if (!cookies.jwt) {
  //   nevigate("/login");
  // }
  // else{
  //   console.log(cookies.jwt)
  // }

},[]);
 
	return (
		<>
    <div className="add_post_outer">
      <h1>Add Post</h1>
      {/* {//encType="multipart/form-data"} */}
      <Form  onSubmit={(e) => handeleSubmit(e)} id='myForm'> 
      <Form.Group controlId="">
            <Form.Label>Add Post Heading</Form.Label>
            <Form.Control type="text" placeholder="Add Post Heading..." name='post_heading' 
            onChange={e => {
              setFdata({...fData,title:e.target.value})
            }} 
            />
          </Form.Group>
          <Row>
            <Col sm={6} >
              <Form.Group controlId="">
              <Form.Label>Add Category</Form.Label>
              <Form.Control type="text" placeholder="Add Category..." name='post_category' 
              onChange={e => {
                setFdata({...fData,category:e.target.value})
              }} 
              />
            </Form.Group>
            </Col>
            <Col sm={6} >
              <Form.Group controlId="">
              <Form.Label>Add sub category</Form.Label>
              <Form.Control type="text" placeholder="Add sub category..." name='sub_category' 
              onChange={e => {
                setFdata({...fData,sub_category:e.target.value})
              }} 
              />
            </Form.Group>
            </Col>

          </Row>
          <Row>
            <Col sm={6} >
              <Form.Group controlId="">
              <Form.Label>Add supplier</Form.Label>
              <Form.Control type="text" placeholder="Add supplier..." name='supplier' 
              onChange={e => {
                setFdata({...fData,supplier:e.target.value})
              }} 
              />
            </Form.Group>
            </Col>
            <Col sm={6} >
              <Form.Group controlId="">
              <Form.Label>Add price</Form.Label>
              <Form.Control type="text" placeholder="Add price..." name='price' 
              onChange={e => {
                setFdata({...fData,price:e.target.value})
              }} 
              />
            </Form.Group>
            </Col>

          </Row>
          <Form.Group controlId="">
              <Form.Label>Add product location</Form.Label>
              <Form.Control type="text" placeholder="Add product location..." name='product_location' 
              onChange={e => {
                setFdata({...fData,product_location:e.target.value})
              }} 
              />
            </Form.Group>
        <Form.Group controlId="">
          {/* Form.Label, Form.Control, Form.Text, Form.Check, InputGroup, etc */}
         
          <Form.Label>Add Image</Form.Label>
          <Form.Control type="file" name='file' onChange={(e) => setFile(e.target.files[0])} />
        </Form.Group>
        <Form.Group controlId="">
          <Form.Label>Add Content</Form.Label>
          <JoditEditor
            ref={editor}
            // config={config}
            // onChange={content => setEditorval(content)}
            onChange={content => {
              setFdata({...fData,editorval:content})
            }}
            name="myContent"
            />
            <Button variant="primary" type='submit'>
              Submit
            </Button>
        </Form.Group>
      </Form>
    </div>
   
    </>
	);
};
export default AddProduct;