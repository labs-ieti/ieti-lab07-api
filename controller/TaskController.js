import { Router } from 'express'
import TaskRepo from '../repository/TaskRepo'

const router = new Router()

// Obtiene ejercicios disponibles
router.get('/task', TaskRepo.index)

// Crea un nuevo ejercicio
router.post('/task', TaskRepo.store)

// Obtiene detalles del ejercicio
router.get('/task/:id', TaskRepo.details)

export default router
