import React from "react";
import { Div } from "./Styled";

export default function CountryCard({ name, img, region, population, id, activities}) {//paso por props
   
    return(
        <Div>
        <div className="card" key={id}>
            <h2>{name}</h2>
            <img className="image" src={img} alt="Img not found" width="200px" height="250px"/>
            <h4>Continent: {region}</h4>
            <h4>Population: {population}</h4>
        </div>
        </Div>)
}