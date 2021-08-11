import mongoose from 'mongoose'

const connectDatabase = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_DB_LOCAL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        })
        console.log(`Database connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(`${error}`);
        process.exit(1)
    }
}

export default connectDatabase