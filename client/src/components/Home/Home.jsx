import React from 'react';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getActivities, orderByName, filterByContinent, sortPopulation, filterActivity} from '../../actions';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { Div } from './Styled';


export default function Home(){

const dispatch = useDispatch()
const allCountries = useSelector((state) => state.countries)//equivale a mapStateToPtops
const activities = useSelector((state) => state.activities)

//estados para mi paginacion
const [order, setOrder] = useState('');
const [currentPage, setCurrentPage] = useState(1);//página inicial
const [countriesPerPage, setcountriesPerPage] = useState(10);//países por página
const indexOfLastCountry = currentPage * countriesPerPage;//9
const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; //0
const currentCountries = allCountries.length ? allCountries.slice(indexOfFirstCountry, indexOfLastCountry) : []



function nextPage(){
    setCurrentPage(currentPage+1)
}

function prevPage(){
    setCurrentPage(currentPage-1)
}

//TRAIGO LOS PAISES
useEffect (() => {
    dispatch(getCountries());
    dispatch(getActivities())
}, [dispatch])

//FUNCIONES
function handleClick(e){
    e.preventDefault();
    dispatch(getCountries());
};

function handleSortName(e){
    e.preventDefault();
    dispatch(orderByName(e.target.value))//elem clickeado
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`)
};

function handleFilterContinent(e){
    dispatch(filterByContinent(e.target.value))
    setCurrentPage(1)
    setOrder(`Ordenado ${e.target.value}`)
};

function handleSortPopulation(e){
    e.preventDefault()
    dispatch(sortPopulation(e.target.value))
    setCurrentPage(1)
    setOrder(`Ordenado ${e.target.value}`)
};

function handleFilterActivity(e){
    dispatch(filterActivity(e.target.value))
    setCurrentPage(1)
    setOrder(`Ordenado${e.target.value}`)
};


//Lógica para que el filtro de activities solo me renderice una actividad
//y no verla miles de veces

let activitiesName = activities.map(act => act.name) // me traigo solo el name de cada activity

function borrar(arr) { // funcion para borrar los elementos repetidos en el array 
    return arr.sort().filter(function(currentActivity, currentPosition, arr) {
        return !currentPosition || currentActivity !== arr[currentPosition - 1];
    })
}

let activNameFilt = borrar(activitiesName) // invoco funcion para q se borre 
console.log(currentCountries);
return(
    <Div>
    <div>
        <h1>World Adventure</h1>
        <SearchBar/>
        <div className='contbuttons'>
            <div className='buttonAddAct'>
        <Link to='/create'><button className='buttonadd'> Add Activity </button></Link>
            </div>
        <button className='allcount' onClick={e => {handleClick(e)}}>
            All Countries
        </button>
        </div>
        <div className='contfilters'>
            <select className='selectfilter' onChange={e => handleSortName(e)}>
                <option value='Order'> Alphabetical Order </option>
                <option value='Asc'> Z-A </option> 
                <option value='Desc'> A-Z </option>   
            </select> 
            <select className='selectfilter' onChange={e => handleSortPopulation(e)}>
                <option value='OrderPop'> Population </option>
                <option value='Lower'> Lower </option>   
                <option value='Higher'> Highest </option>   
            </select> 
            <select className='selectfilter' onChange={e => handleFilterContinent(e)}>
                       <option value='Continent'>Continent</option> 
                       <option value='Asia'>Asia</option> 
                       <option value='Africa'>Africa</option> 
                       <option value='Europe'>Europe</option> 
                       <option value='Americas'>Americas</option> 
                       <option value='Oceania'>Oceania</option> 
                       <option value='Antarctic'>Antarctic</option> 
            </select>
            <div>
                <select className='selectfilter' onChange={(e) => handleFilterActivity(e)}>
                    <option value='All'>All Activities</option>
                    {activNameFilt?.map((activ) => {
                        return (
                            <option key={activ} value={activ}>{activ}</option>
                        )
                    })}
                </select>
            </div>
        </div>
        <div className='divpag'>
            {/* PAGINADO */}
            {currentPage  === 1 ? null : <button className='buttonpag' onClick={() => prevPage()}>Back</button>}
            {currentPage < allCountries.length/countriesPerPage ? <button className='buttonpag' onClick={() => nextPage()}>Next</button> : null}
        </div>
        <div className='allcards'>
            {currentCountries.length > 0 && Array.isArray(currentCountries) ? (currentCountries.map(c => {
                return(
                    <div className='card' key={c.id}>
                    <Link className='link' to={"/home/" + c.id}>
                    <Card name={c.name} img={c.img} id={c.id} region={c.region} population={c.population}/>
                    </Link>
                    </div>
                )
            })) : <p className='notfound'>COUNTRY NOT FOUND...</p>
            }
        </div>
       
    </div>
    </Div>
)

}