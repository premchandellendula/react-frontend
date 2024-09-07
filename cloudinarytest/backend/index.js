const express = require('express');
const cloudinary = require("./utils/cloudinary")
const cors = require('cors')

const app = express();
app.use(cors());
app.use(
    express.json({
        limit: "20mb"
    })
)

app.post('/upload', async (req, res) => {
    const image_url = req.body.image_url;

    try{
        console.log('hi');
        const response = await cloudinary.uploader.upload(image_url, {
            folder: "/cloudinary-demo"
        })
    
        console.log(response)

        res.json({
            response
        })
    }catch(err){
        console.log(err)
        console.log("error")
    }
})

app.listen(3000, () => {
    console.log("Server is listening on localhost:3000")
})