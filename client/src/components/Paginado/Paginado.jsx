// import React from "react";
// import { Div } from "./Styled";


// export default function Paginado({countriesPerPage, allCountries, paginado}){
//     const pageNumber= []//comienza como array vacio;

//     for(let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++){//redondeamos al entero igual o mayor mas cercano del resultado de la division

//         pageNumber.push(i)
//     }

//     return(
//         <Div>
//         <div>
//             <div className="paginado">
//                 {pageNumber?.map(numb => {//si el array tiene algo
//                 return(
//                     <ul key={numb}>
//                         <button className="contnumbers" onClick={() => paginado(numb)}>{numb}</button>
//                     </ul>
//                 )
//                 })}
//             </div>
//         </div>
//         </Div>)
// }