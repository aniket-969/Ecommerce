import { useState,useEffect } from "react"
import axios from "axios"

export const customReactQuery = (urlPath)=>{
    const [products, setProducts] = useState([])
    const[error,setError] = useState(false)
    const[loading,setLoading] = useState(false)
  
    useEffect(()=>{ 
  
       (async()=>{
  
        try {
            
          setLoading(true)
        //   console.log(loading);
          setError(false)
          const res = await axios.get(urlPath) 
        //   console.log(res.data.products);
          setProducts(res.data.products)
          setLoading(false)
        //   console.log(loading);
            
        } catch (error) {
            // console.log(error);
          setError(true)
          setLoading(false)
        }
        
       })()
    },[])

    return{
      products,error,loading
    }
  
  }
  