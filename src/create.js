import React from "react";
import {useState} from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
 const [title, setTitle] = useState('');
 const [body, setBody] = useState('');
 const [author, setAuthor] = useState('lyn');
 const [isPending, setIsPending] = useState(false);
 const history = useHistory();

 const handleSubmit = (e) =>{
  e.preventDefault();
  const blog = {title, body, author};
  setIsPending(true);

  fetch('http://localhost:8000/blogs',{
   method:'POST',
   headers:{'Content-Type':'application/json'},
   body: JSON.stringify(blog)
  }).then(() => {
   console.log('new blog added');
   setIsPending(false);
   //history.go(-1);
   history.push('/');
  })

 }

 return (
  <div className="create">
   <form onSubmit={handleSubmit}>
   <label>Blog title: </label>
   <input 
   type="text"
   required
   value={title}
   onChange={(e) => setTitle(e.target.value)}
   />
   <label>Blog body: </label>
   <textarea
    required
    value={body}
    onChange={(e) => setBody(e.target.value)}
   ></textarea>
   <label>Author</label>
   <select
   value={author}
   onChange={(e) => setAuthor(e.target.value)}
   >
    <option value="mario">Mario</option>
    <option value="lyn">Lyn</option>
   </select>
   {!isPending && <button>Add New Blog</button>}
   <p>{title}</p>
   <p>{body}</p>
   
   </form>
  </div>
 );
}
 
export default Create;