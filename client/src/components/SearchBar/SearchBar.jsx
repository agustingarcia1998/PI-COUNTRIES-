import React  from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountries } from "../../actions";
import { Div } from "./Styled";

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState("")

function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
    dispatch(getNameCountries(name.toLowerCase()))
    setName("")
}

    return (
        <Div>
        <div className="searchbar">
            <input
            className="inputSearch"
            type='text'
            placeholder='Search...' 
            value={name}
            onChange = {(e) => handleInputChange(e)}
            />
            <button className="buttonSearch" type="submit" onClick={(e) => handleSubmit(e)}>Search Country</button>
        </div>
        </Div>
    )
}