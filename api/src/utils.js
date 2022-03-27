const axios = require('axios');
const {Country, Activity} = require("./db")


async function getApiCountries () {
    const apiUrl = await axios.get('https://restcountries.com/v3/all')
    const apiInfo = await apiUrl.data.map(c => {
        return {
            id: c.cca3,
            name: c.name.common,
            img: c.flags[1],
            region: c.region,
            capital: c.hasOwnProperty('capital') ? c.capital[0] : 'None',
            subregion: c.hasOwnProperty('subregion') ? c.subregion : 'Not know',
            area: c.hasOwnProperty('area') ? c.area : 'Not know',
            population: c.hasOwnProperty('population') ? c.population : 'Not know',
        }
    });
    return apiInfo
}

const getDBcountries = async () => {
    return await Country.findAll({
        attributes: ['img', 'name', 'capital', 'population', 'id', 'region'],
        include:{
            model: Activity,
            attributes: ['name'],
            through:{
                attributes: []
            }
        }
    })
}

const getDBactivities = async () => {
    const activDB = await Activity.findAll()
    return activDB;
}

module.exports = {
    getApiCountries,
    getDBcountries,
    getDBactivities
}

