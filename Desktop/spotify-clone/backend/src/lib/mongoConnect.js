import mongoose from 'mongoose'

export const mongoConnect =async()=>{
    try {
        const  conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongodb ${conn.connection.host}`)
    } catch (error) {
        console.log("error in connecting mongoDb",error)
        process.exit(1);
    }

}