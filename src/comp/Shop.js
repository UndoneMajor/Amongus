import React, { useEffect, useState } from "react";
const Shop = () => {
    
    const [cat ,setCat] = useState([])
    const fetchData = async ()=>{
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json();
            console.log("data",data);
            setCat(data)
           
    }
    useEffect(() => {
        fetchData()
        
    }, []);

    return ( 
        <div>Shop

{cat.map(el => <p>{el}</p>)}
             
        </div>
     );
}
 
export default Shop;