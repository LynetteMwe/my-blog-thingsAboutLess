import React from 'react';
import BlogList from './blogList';
import useFetch from './useFetch';

const Home = () => {
  const {data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs'); 

  // const [name, setName] = useState('Lynette');
  // const handleNameChange =() =>{
  //   setName('Mutuku');
  // }
  
 return ( 
  <div className="home">
    { error && <div>{error}</div>}
    {isPending && <div>Loading...</div>}
    {blogs && <BlogList blogs={blogs} title="All Blogs!!!"/>}
    {/* <button onClick={() => setName('Mutuku')}> Change name</button> */}
    {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Lyn')} title="Lyn's Blogs!!!"/> */}  
  </div>
  );
}
 
export default Home;