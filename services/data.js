const Data = require('../models/data') 

async function create(procedure, timestamp, value) {
    const data = Data({procedure, timestamp, value})
    await data.save()
}

async function list({from, to}) {
    return await Data.find({ 
        timestamp: {
            $gte: from,
            $lt: to
        }
    })
}

module.exports = {
    create,
    list
}