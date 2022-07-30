import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js"
import fileUpload from 'express-fileupload';


const PORT = 8000
const DB_URL = `mongodb+srv://alibek:alibek@cluster0.iudeu.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use(fileUpload({}))
app.use(express.static('static'))
app.use('/api', router)




async function startApp() {

    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log("SERVER is WORKING"))
    }
    catch (e) {
        console.log(e);
    }

}

startApp()