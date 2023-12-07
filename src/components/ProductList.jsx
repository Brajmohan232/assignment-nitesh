import React from 'react'
import Product from './Product'
import data from  "../data.json"
import { Box } from '@mui/material'
function ProductList() {
  const handleClick = (e) =>{
console.log(e.target.value)
  }
  return (
   <Box sx ={{marginTop:"100px" , display:"flex" ,
   flexWrap:"wrap",
    alignItems:"center",  justifyContent:"center", gap:"20px",
   flexDirection: {   xs:"column" , lg:"row"}}}>
 {
  data.map((ele,index) =>(

    <Product key = {index}
  
    
    image = {data[index].image} title = {data[index].title} description = {data[index].description}/>
  ))
 }

    </Box>
  )
}

export default ProductList