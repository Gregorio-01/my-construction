const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// const companiesRouter = require ("./Companies.js")
// const materialsRouter = require ("./Materials.js")
const usersRouter = require ("./users.js")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.use("/companies", companiesRouter)
// router.use("/materials", materialsRouter)
router.use("/users", usersRouter)

module.exports = router;
