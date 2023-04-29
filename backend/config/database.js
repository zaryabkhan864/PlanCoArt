const mongoose = require('mongoose');
const connectDatabase = () => {
    mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`connected with mongodb with host: ${con.connection.host}`)
    })
}
module.exports = connectDatabase