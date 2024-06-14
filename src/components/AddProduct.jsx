import  { useState, useRef,useEffect,createRef, useMemo, useTransition } from 'react';
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
  const [files,setFiles] = useState()
	const editor = useRef(null);
  const fileInput = createRef();
  const myUrl = "/addpost";
  // axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

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


 const handelClick =  (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.set("avatar",fileInput.current.value);


     fetch("http://localhost:5000/addpost",{
        method:"POST",
        body: formData,
      }).then((res) => {
        return res.json()
      })
      .then((data) => {
        return console.log(data);
      })
    
    


 }
useEffect(() => {
  
//   if (!cookies.jwt) {
//     nevigate("/login");
//   }
  // else{
  //   console.log(cookies.jwt)
  // }

},[]);
 
	return (
		<>
    <div className="add_post_outer">
      <h1>Add Post</h1>
      {/* {//encType="multipart/form-data"} */}
      <form onSubmit={handelClick} >
      <input type="file" 
      ref={fileInput}
      name='avatar'
      />
      <input type='submit' value="submit" />
      </form>
    </div>
   
    </>
	);
};
export default AddPost;