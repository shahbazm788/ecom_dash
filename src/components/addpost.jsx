import  { useState, useRef,useEffect, useMemo, useTransition } from 'react';
import JoditEditor from 'jodit-react';
import {Form , Button} from 'react-bootstrap';
import './sassFiles/addPost.scss';
import axios from 'axios';
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

const AddPost = () => {
  const placeholder = '';
const [cookies, removeCookie] = useCookies([]);

 const nevigate = useNavigate();
  const [editorval , setEditorval] = useState();
  const [file,setFile] = useState();
  const [fData,setFdata] = useState({
    heading:'',
    files:null,
    editorval:''
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
fd.append('heading',fData.heading);
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
  
  if (!cookies.jwt) {
    nevigate("/login");
  }
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
              setFdata({...fData,heading:e.target.value})
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
export default AddPost;