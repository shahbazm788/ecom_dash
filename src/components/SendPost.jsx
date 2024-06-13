import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import axios from 'axios';

const SendPost = () => {

const [file,setFile] = useState();
const [text,setText] = useState();


    // const handleChange = () => {

    // }

    const handleSubmit = (e) => {
        e.preventDefault();
     const fd = new FormData();
     fd.append("text", text);
     fd.append("file",file)
     console.log(fd);

     axios.post("http://localhost:5000/upload",fd,{
        onDownloadProgress: (ProgressEvent) => {console.log(ProgressEvent.progress*100)},
        headers:{
            "Custom-headers":"value"
        }
     }).then((res) => console.log(res.data)).catch(err => console.log(err))
     
    }
  return (
    <>
    <div className="send_post_outer">
        <Form onSubmit={(e) => handleSubmit(e)}>
            <InputGroup >
                <Form.Control type="file" name='file' onChange={(e) => setFile(e.target.files[0])} />
            </InputGroup>
            <InputGroup >
                <Form.Control type="text" name='text' onChange={(e) => setText(e.target.value)} />
            </InputGroup>
            <Button type='submit'>Uploade File</Button>
        </Form>
    </div>
   </>
  )
}

export default SendPost