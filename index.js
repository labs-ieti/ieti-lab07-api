import express from 'express'
import bodyParser from 'body-parser'
import router from './controller/TaskController'
import cors from 'cors'

const app = express()
const corsOptions = {
    origin: '*'
}

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api',cors(corsOptions), router)


app.get('/', (req, res) =>  res.send('Welcome to TaskAPI'))
    

const server = app.listen(process.env.PORT || 8000, () => {
    console.log(`http://localhost:${server.address().port}`)
})


export default app