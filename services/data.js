const Data = require('../models/data') 

async function create(params) {
    const data = Data(params)
    await data.save()
}

async function list({from, to}) {
    return await Data.find({ 
        timestamp: {
            $gte: new Date(Number(from)),
            $lt: new Date(Number(to))
        }
    })
}

module.exports = {
    create,
    list
}