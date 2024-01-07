import { useState } from "react"



export const AddCategory = ({onNewValue})=>{

    const [inputValue, setInputValue] = useState("");
    const onInputChange = (event) =>{
        setInputValue(event.target.value);
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if(inputValue.trim().length <=1 ) return;
        // setCategories(categories => [inputValue, ...categories]);
        onNewValue(inputValue.trim());
        setInputValue("");

    }


    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar gifts"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    );
}