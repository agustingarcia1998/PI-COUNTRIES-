import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { postActivity, getCountries } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Div } from "./Styled";

function validate(input){
    let error = {}

    if(!input.name) {
        error.name = 'Name is required'
    } 

    if(!input.difficulty) {
        error.difficulty = 'Difficulty is required'
    } 

    if(!input.duration) {
        error.duration = 'Duration is required'
    } 

    if(!input.season) {
        error.season = 'Season is required'
    } 

    return error
}



export default function CreateActivity(){
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries)
    const [error, setError] = useState({});
    

    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        country: []
    })
    

    function handleChange(e){
        if(e.target.name === "difficulty"){
            setInput({
                ...input,
                [e.target.name] : Number(e.target.value) <= 0 || Number(e.target.value) > 5 ? "" : e.target.value,
            });
        }else if(e.target.name === "duration"){
            setInput({
                ...input,
                [e.target.name] : Number(e.target.value) <= 0 || Number(e.target.value) > 12 ? "" : e.target.value,
            })
        }
        else {
            setError(
              validate({
                ...input,
                [e.target.name]: e.target.value,
              })
            );
            setInput({
              ...input,
              [e.target.name]: e.target.value,
            });
          }
    }


    function handleSelect(e){
        setInput({
            ...input,
            country: [...input.country, e.target.value]//traigo y concateno
        })
    }

    function handleDelete(e){
        setInput({
            ...input,
            country: input.country.filter(c => c !== e)//filtro por los que no son ese e, y me devuelve los no clickeados
        })
    }

    let checkErrors = [];
    if(input.country.length < 1){
        checkErrors.push("Country is required");
    }
    

    function handleSubmit(e){
        e.preventDefault()
        if(Object.keys(error).length || checkErrors.length){
         return alert(Object.values(error).concat(checkErrors).join('\n'));
        }else{ 
        dispatch(postActivity(input))
        alert(`Your activity ${input.name} has been created succesfully`)

        setInput({//vacio campos form
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            country: []
        })
    }
}


    useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch])

    useEffect(() => {
        setError(validate(input))
    }, [input]);

    console.log(input);



    return(
        <Div>
        <div>
            <div className="divreturn">
            <Link to='/home'><button className="return">Return</button></Link>
            </div>
            <h1>Create your adventure!</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="formcompl">
                    <div className="contform">
                        <label>Name </label>
                        <input className="inputform" onChange={(e) => handleChange(e)} type='text' name='name' value={input.name} autoComplete='off'/>
                        {error.name && (
                            <p className="error">{error.name}</p>
                        )}
                    </div>
                    <div className="contform">
                        <label>Duration </label>
                        <input className="inputform" onChange={(e) => handleChange(e)} type='number' name='duration' value={input.duration}/> hs
                        {error.duration && (
                            <p className="error">{error.duration}</p>
                        )}
                    </div>
                    <div className="contform">
                        <label>Difficulty </label>
                        <input className="inputform" onChange={(e) => handleChange(e)} type='number' name='difficulty' value={input.difficulty} placeholder="Min 1 - Max 5"/>
                        {error.difficulty && (
                            <p className="error">{error.difficulty}</p>
                        )}
                    </div>
                    <div className="contform">
                        <label>Season </label>
                        <select className="inputform" name="season" onChange={e => handleChange(e)}>
                        <option defaultValue="disabled">---</option>
                        <option value="Summer">Summer</option>
                        <option value="Autumn">Autumn</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                    </select>
                    </div>
                    <div className="contform">
                        <label>Country </label>
                        <select className="inputform" onChange={(e) => handleSelect(e)} name="country">
                        <option defaultValue="disabled">---</option>
                            {
                                countries.map(country => (
                                    <option key={country.id} value={country.name}>{country.name}</option>
                                ))
                            }
                        </select>
                        <div className="delete">
                        {input.country?.map(el =>
                            <div key={el}>
                                <p>{el}</p>
                                <button className="deleteBut" onClick={() => handleDelete(el)}>x</button>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
                <div className="buttonconfirm">
                    <button className="btn-confirm" type="submit">Submit</button>
                </div>
            </form>
        </div>
        </Div>)
}