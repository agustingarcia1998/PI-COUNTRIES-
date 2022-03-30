require('dotenv').config();
const { Activity, Country } = require ('../db');
const { getDBactivities } = require ('../utils');
const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
    const { activity } = req.query;

    if(activity){ 
    let activities = await Activity.findAll({
        where: {activity: activity}
    })
    res.send(activities)
}})

// router.get('/', async (req, res) => {
//     let activityDb = await getDBactivities()
//     res.status(200).send(activityDb)
// })



router.post('/', async (req, res) => {
    try {
        let {name, difficulty, duration, season, country} = req.body
        name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
        })

        let activityCountry = await Country.findAll({
            where: {name: country}
        })

        activityCountry.forEach(country => {
            newActivity.addCountry(country)
        })

        res.send('Your activity was created!')
        
    } catch(error) {
        res.send("Your activity can not be created" + error)
    }
})


module.exports = router; 