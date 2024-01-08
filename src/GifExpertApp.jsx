import { useState } from "react";
import { AddCategory } from "./components";
import { GifGrid } from "./components";


export const GifExpertApp =()=>{
    const[categories,setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategory)=>{

        if(categories.includes(newCategory))return;
        
        setCategories([newCategory, ...categories]);
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