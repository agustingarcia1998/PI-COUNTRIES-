const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const activityRouter = require('./activities.js');
const countryRouter = require('./countries.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/activities', activityRouter);//post
router.use('/countries', countryRouter);//todos los get

module.exports = router;

