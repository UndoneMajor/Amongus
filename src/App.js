import React,{useState,useEffect} from 'react';
import './App.css';
const App=()=>{
    const [fake,setFake]=useState([]);

    useEffect(()=>{
        // ON LOAD
        fakestore();
    },[])
    const fakestore=async()=>{
        
        console.log(fake);
      
        const response=await fetch("https://fakestoreapi.com/products");
        const jsonData=await response.json();
        setFake(jsonData);
    }
    return(
        <>
        <h2>Shop</h2>
        <div className='container'>
            {fake.map((values)=>{
                return(
                    <>
                   <div className='box'>
                <div className='content'>
                    <h5>{values.title}</h5>
                    <p>{values.description}</p>
                </div>
                <img src={values.image}></img>
            </div> 
            </>
                )
            })}
            
        </div>
            
        </>
    )
}
export default App;