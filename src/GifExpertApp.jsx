import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp =()=>{
    const[categories,setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategory)=>{

        if(categories.includes(newCategory))return;
        
        setCategories([...categories, newCategory]);
    }
    return (
      <>
        {/*titulo*/}
        <h1>GifExpertApp</h1>

        {/*input*/}
        <AddCategory 
            onNewValue={onAddCategory}
        />
        {/*listado de gif*/}
      
          {categories.map((category) => (
             <GifGrid 
                key={category}
                category={category}
             />)
          )}
           
        {/*gif item*/}
      </>
    );
}