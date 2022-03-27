const { Router } = require('express');
const router = Router();
const { getApiCountries, getDBcountries } = require('../utils');
const { Activity, Country } = require ('../db');


router.get('/', async(req, res) => {

    let { name } = req.query;  
 
    if(name){
        try {

            name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
            const countriesBuscadas = await Country.findAll({
                include: Activity
            })
            const countryFound = countriesBuscadas.filter((c) => c.name.includes(name))
            if(countryFound.length){
                res.send(countryFound)
            } else{
                res.send("Country not found")
            }
        } catch (error) {
            res.send(error)
        }
    }else{

    let allCountriesDB = await getDBcountries()

    if(allCountriesDB.length){
        res.send(allCountriesDB) //si encuentra countries en la DB, mando esos directamente 
    } else { // si no encuentra nada en la DB, voy a buscar todos en la api
        let countries = await getApiCountries()
          countries.forEach(async (c) => {
              await Country.findOrCreate({
                  where: {
                      id: c.id,
                      name: c.name,
                      img: c.img,
                      region: c.region,
                      capital: c.capital,
                      subregion: c.subregion,
                      area: c.area,
                      population: c.population
                  }
              })
          })
         
          allCountriesDB = await getDBcountries();
          res.send(allCountriesDB)
    }
    }
   
})

    router.get('/:id', async (req, res) => {
        const { id } = req.params;
        if(id){
            try {
                const countryDb = await Country.findByPk(
                    id.toUpperCase(),
                    {include: Activity})
                    const myCountryDb = {
                        id: countryDb.id,
                        name: countryDb.name,
                        img: countryDb.img,
                        region: countryDb.region,
                        capital: countryDb.capital,
                        subregion: countryDb.subregion,
                        area: countryDb.area,
                        population: countryDb.population,
                        activities: countryDb.activities

                    } 

                    if(myCountryDb){
                        return res.send(myCountryDb)
                    }

                } catch (error) {
                    res.status(404).send('Country not found by id' + " " + error)
            }
        }else{
            try {
                const countryApi = await getApiCountries(id)
                res.send(countryApi);
            } catch (error) {
                res.status(404).send('Country not found by id' + error)
            }
        }
    })




module.exports = router; 