const express = require('express')
const psaRouter = express.Router()
const axios = require('axios')
psaRouter.get('',async(req, res) => {
    // res.render('PSA')

    try {
        const psaAPI = await axios.get(`https://www.cdc.gov/coronavirus/2019-ncov/communication/public-service-announcements.html`)
        res.render('PSA', {articles: psaAPI.data})
    }
    catch (err) {
        if(err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request) {
            console.log(err.request)
        } else {
            console.log('Error', err.response.data)
        }

    }
})

module.exports = psaRouter