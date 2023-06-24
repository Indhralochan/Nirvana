const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require("body-parser");
const path = require("path");
app.use(express.static(path.join(__dirname, "/public")));

//V2 Artist details
app.post('/:artistId', async (request, response) => {
    const options = {
        method: 'GET',
        url: 'https://shazam-core.p.rapidapi.com/v2/artists/details',
        params: {
            artist_id: request.params.artistId
        },
        headers: {
            'X-RapidAPI-Key': '833e9c8452msh10cd5a67b2e4b0fp15dcbajsn24848a4d7c23',
            'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
        }
    };
    async function showData() {
        try {
            const resp = await axios.request(options);
            //console.log(resp.data);
            return response.json(resp.data)
        } catch (error) {
            console.error(error);
        }
    } showData()
}
)
//Multi search
app.post('/:type/:query', async (request, response) => {
    const options = {
        method: 'GET',
        url: 'https://shazam-core.p.rapidapi.com/v1/search/multi',
        params: {
            search_type: request.params.type,
            query: request.params.query
        },
        headers: {
            'X-RapidAPI-Key': '833e9c8452msh10cd5a67b2e4b0fp15dcbajsn24848a4d7c23',
            'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
        }
    };
    async function showData() {
        try {
            const resp = await axios.request(options);
            //console.log(resp.data);
            return response.json(resp.data)
        } catch (error) {
            console.error(error);
        }
    } showData()
})
//Search suggest
app.post('/:SingleArtist', async (request, response) => {
    const axios = require('axios');

    const options = {
        method: 'GET',
        url: 'https://shazam-core.p.rapidapi.com/v1/search/suggest',
        params: { query: request.params.SingleArtist },
        headers: {
            'X-RapidAPI-Key': '833e9c8452msh10cd5a67b2e4b0fp15dcbajsn24848a4d7c23',
            'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
        }
    };
    async function showData() {
        try {
            const resp = await axios.request(options);
            //console.log(resp.data);
            return response.json(resp.data)
        } catch (error) {
            console.error(error);
        }
    } showData()
})
//V2 Track Details
app.post('/track/:trackId', async (request, response) => {
    const options = {
        method: 'GET',
        url: 'https://shazam-core.p.rapidapi.com/v2/tracks/details',
        params: {
            track_id: request.params.trackId
        },
        headers: {
            'X-RapidAPI-Key': '833e9c8452msh10cd5a67b2e4b0fp15dcbajsn24848a4d7c23',
            'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
        }
    };
    async function showData() {
        try {
            const resp = await axios.request(options);
            //console.log(resp.data);
            return response.json(resp.data)
        } catch (error) {
            console.error(error);
        }
    } showData()
})
//Track Similarities
app.post('/track/trackSimilarity/:trackId', async (request, response) => {
    const options = {
        method: 'GET',
        url: 'https://shazam-core.p.rapidapi.com/v1/tracks/similarities',
        params: request.params.trackId,
        headers: {
            'X-RapidAPI-Key': '833e9c8452msh10cd5a67b2e4b0fp15dcbajsn24848a4d7c23',
            'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
        }
    };
    async function showData() {
        try {
            const resp = await axios.request(options);
            //console.log(resp.data);
            return response.json(resp.data)
        } catch (error) {
            console.error(error);
        }
    } showData()
})
//Tracks Related
app.post("/track/related/:trackId", async (request, response) => {
    const axios = require('axios');

    const options = {
        method: 'GET',
        url: 'https://shazam-core.p.rapidapi.com/v1/tracks/related',
        params: {
            track_id: request.params.trackId
        },
        headers: {
            'X-RapidAPI-Key': '833e9c8452msh10cd5a67b2e4b0fp15dcbajsn24848a4d7c23',
            'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
        }
    };

    async function showData() {
        try {
            const resp = await axios.request(options);
            //console.log(resp.data);
            return response.json(resp.data)
        } catch (error) {
            console.error(error);
        }
    } showData()
})
//Country Most popular 
app.post("/", async (request, response) => {
    const options = {
        method: 'GET',
        url: 'https://shazam-core.p.rapidapi.com/v1/charts/country',
        params: { country_code: 'IN' },
        headers: {
            'X-RapidAPI-Key': '833e9c8452msh10cd5a67b2e4b0fp15dcbajsn24848a4d7c23',
            'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
        }
    };
    async function showData() {
        try {
            const resp = await axios.request(options);
            //console.log(resp.data);
            return response.json(resp.data)
        } catch (error) {
            console.error(error);
        }
    } showData()
})
// Top world Charts based on genre
app.post('/charts/:genre', async (request, response) => {
    const axios = require('axios');

    const options = {
        method: 'GET',
        url: 'https://shazam-core.p.rapidapi.com/v1/charts/genre-world',
        params: { genre_code: request.params.genre },
        headers: {
            'X-RapidAPI-Key': '833e9c8452msh10cd5a67b2e4b0fp15dcbajsn24848a4d7c23',
            'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
        }
    };
    async function showData() {
        try {
            const resp = await axios.request(options);
            //console.log(resp.data);
            return response.json(resp.data)
        } catch (error) {
            console.error(error);
        }
    } showData()
})
// chart by country and genre
app.post("/chart/:genre/:country", async (request, response) => {
    const options = {
        method: 'GET',
        url: 'https://shazam-core.p.rapidapi.com/v1/charts/genre-country',
        params: {
            genre_code: request.params.genre,
            country_code: request.params.country
        },
        headers: {
            'X-RapidAPI-Key': '833e9c8452msh10cd5a67b2e4b0fp15dcbajsn24848a4d7c23',
            'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
        }
    };
    async function showData() {
        try {
            const resp = await axios.request(options);
            //console.log(resp.data);
            return response.json(resp.data)
        } catch (error) {
            console.error(error);
        }
    } showData()
})
module.exports = app;