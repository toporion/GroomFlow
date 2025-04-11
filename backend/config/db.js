const mongoose=require('mongoose')
const mongo_url=process.env.MONGO_URL

mongoose.connect(mongo_url)
.then(()=>{
    console.log('successfully connect with database')
})
.catch(err=>console.log('see the full error',err))