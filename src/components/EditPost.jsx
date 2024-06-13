import  { useState, useRef,useEffect} from 'react';
import { useLocation } from "react-router-dom";
import JoditEditor from 'jodit-react';
import {Form , Button} from 'react-bootstrap';
import './sassFiles/addPost.scss';
import axios from 'axios';
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

const EditPost = () => {
  const location = useLocation();
  const {_id,postHeading,post_body,post_img,posted_at,posted_by} = location.state.post;
  const placeholder = '';
const [cookies, removeCookie] = useCookies([]);

 const nevigate = useNavigate();
  const [editorval , setEditorval] = useState();
  const [file,setFile] = useState();
  const [fData,setFdata] = useState({
   id:_id,
    heading:postHeading,
    files:null,
    editorval:post_body,
    posted_by:posted_by,
    post_img:post_img

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
fd.append('id',fData.id)
fd.append('heading',fData.heading);
fd.append('content',fData.editorval);
fd.append('post_img',fData.post_img);
fd.append('file',file);
fd.append('posted_by',fData.posted_by);





axios.post('http://localhost:5000/updatepost',fd,{
//   onDownloadProgress: (ProgressEvent) => {console.log(ProgressEvent.progress*100)},
//   headers:{
//     "Custom-headers":"value"
// }
withCredentials: true
}).then(res => console.log(res)).catch(err => console.log(err));



 }
 
useEffect(() => {
  
  if (!cookies.jwt) {
    nevigate("/login");
  }
  // else{
  //   console.log(cookies.jwt)
  // }
console.log(location.state)
},[]);
 
	return (
		<>
    <div className="add_post_outer">
      <h1>Add Post</h1>
      {/* {//encType="multipart/form-data"} */}
      <Form  onSubmit={(e) => handeleSubmit(e)} id='myForm'> 
      <Form.Group controlId="">
            <Form.Label>Add Post Heading</Form.Label>
            <Form.Control type="text" placeholder="Add Post Heading..."value={fData.heading}  name='post_heading' 
            onChange={e => {
              setFdata({...fData,heading:e.target.value})
            }} 
            />
          </Form.Group>
        <Form.Group controlId="">
          {/* Form.Label, Form.Control, Form.Text, Form.Check, InputGroup, etc */}
         
          <Form.Label>Add Image</Form.Label>
          <Form.Control type="file" name='file'  onChange={(e) => setFile(e.target.files[0])} />
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
            value={fData.editorval}
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
export default EditPost;