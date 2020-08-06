const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
mongoose.promise = global.Promise

async function removeAllCollections () {
    const collections = Object.keys(mongoose.connection.collections)
    for (const collectionName of collections) {
        const collection = mongoose.connection.collections[collectionName]
        await collection.deleteMany()
    }
}

async function dropAllCollections () {
    const collections = Object.keys(mongoose.connection.collections)
    for (const collectionName of collections) {
        const collection = mongoose.connection.collections[collectionName]
        try {
            await collection.drop()
        } catch (error) {
            // Sometimes this error happens, but you can safely ignore it
            if (error.message === 'ns not found') return
            if (error.message.includes('a background operation is currently running')) return
            console.log(error.message)
        }
    }
}

module.exports = {
    setupDB () {
        // Connect to Mongoose
        beforeAll(async () => {
            const { MONGO_TEST_USER, MONGO_TEST_PASSWORD, MONGO_TEST_PATH } = process.env;
            const url = `mongodb+srv://${MONGO_TEST_USER}:${MONGO_TEST_PASSWORD}${MONGO_TEST_PATH}`;
            await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        })

        // Cleans up database between each test
        afterEach(async () => {
            await removeAllCollections()
        })

        // Disconnect Mongoose
        afterAll(async () => {
            await dropAllCollections()
            await mongoose.connection.close()
        })
    }
}
