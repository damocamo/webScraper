const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.dhhs.vic.gov.au/victorian-coronavirus-covid-19-data';

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const statsValue = $('.lvn-box h4');
        const statsName = $('.lvn-box p');
        const list = [];
        const name = [];

        statsValue.each(function () {

            let value = $(this).text();
          //  console.log($(this).text());
            list.push({
                value
            });
        });

        statsName.each(function () {
            let words = $(this).text();
          //  console.log($(this).text());

            name.push({
                words
            });
        });
        console.log("Todays Numbers: " + name[0].words + ": " + list[0].value );
        
    })
    .catch(console.error);