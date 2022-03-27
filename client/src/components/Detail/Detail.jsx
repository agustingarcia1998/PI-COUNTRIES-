import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailsCountry, getActivities, getCountries } from "../../actions";
import { Div } from "./Styled";

export default function CountryDetail(){
    const dispatch = useDispatch()
    const myCountry = useSelector((state) => state.details)
    console.log(myCountry)

    const {id} = useParams()
    console.log(myCountry)
    useEffect(() => {
        dispatch(detailsCountry(id));
    }, [dispatch])

    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])


    return(
        <Div>
        <div>
        <Link to='/home'>
            <button className="buttonBack">Go back</button>
        </Link>

        <div className="detailback">
            {
            myCountry?
            <div className="contdetail">
                <div>
                <h1>{myCountry.name}</h1>
                <img className="image" src={myCountry.img} alt="img not found" width="300px" height="300px"/>
                <h4>Code: {myCountry.id}</h4>
                </div>
                <div>
                    <h3>Information: </h3>
                <h4>Continent: {myCountry.region}</h4>
                <h4>Capital: {myCountry.capital}</h4>
                <h4>Subcontinent: {myCountry.subregion}</h4>
                <h4>Area: {myCountry.area} km²</h4>
                <h4>Population: {myCountry.population}</h4>
                </div>
                <div>
                    <h3>Tourist Activities:</h3>
                    {
                        myCountry.hasOwnProperty("activities") ? myCountry.activities.map(act => {
                            return(
                                <div key={act.name}>
                                    <h4>Name: {act.name}</h4>
                                    <h4>Difficulty: {act.difficulty}</h4>
                                    <h4>Season: {act.season}</h4>
                                    <h4>Duration: {act.duration} hs</h4>
                                </div>
                            )
                        }) : <p>Activities not found</p>
                    }
                </div>
            </div> : <p>Loading...</p>
            }
        </div>
        </div>
        </Div>
    )
    
}