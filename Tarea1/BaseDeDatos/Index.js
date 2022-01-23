const mongoose = require ('mongoose')
const MONGO_URI = 'mongodb+srv://alex-vel:alex2000@cluster0.ajxu6.mongodb.net/VMEI?retryWrites=true&w=majority'

const conectarMongo = async () => {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    })
      .then(()=>{
        console.log('Conectado a la base de datos: MongoDB')
      })
      .catch(err =>{
        console.error(err)
      })
}
  
module.exports = { conectarMongo }