import {useState, useEffect} from "react";

const ComponentA =()=>{
   const[resources, setResources] =useState("posts");
   const[resources2, setResources2] =useState("posts2");
   

    console.log("render");
   
  
   
    useEffect(()=>{
       console.log("useEffect function called")
    },[resources]);
   
  

    return (
        <>
            <button onClick={()=> setResources("posts")}>Posts</button>
            <button onClick={()=> setResources("users")}>Users</button>
            <button onClick={()=> setResources("comments")}>Comments</button>
            <button onClick={()=> setResources2("change2")}>Change2</button>
            <h1>
                {resources}
            </h1>
            <h1>
                {resources2}
            </h1>
        </>
    );
}

export default ComponentA;