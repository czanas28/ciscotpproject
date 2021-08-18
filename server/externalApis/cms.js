const axios = require('axios'); //Easy API requests
const parseString = require('xml2js').parseString; //CMS API returns XML, this module converts it to JSON
const { variables } = require('../maps/variables');

//Creates the CMS API module
const cms = axios.create({
    baseURL: process.env.CMS_URL,
    auth: {
        username: process.env.CMS_API_USER,
        password: process.env.CMS_API_PASSWORD
    }
});

module.exports = {
    name: 'cms',
    desc: 'Cisco Meeting Server api',
    async execute(hostname, widgetId) {        
        
        const res = await cms.get(`coSpaces/${widgetId}`);

        parseString(res.data, (err, result) => {
            
        });
    },
    async listenToCalls(callId, hostname) {
        //Filters through the coSpaces in CMS and finds the coSpace that matches the called URI
        const res = await cms.get(`coSpaces/?filter=${callId}`);
        //CMS returns XML - Parse it to turn it into JSON for ease of use
        parseString(res.data, (err, result) => {
            //Retrieves the coSpace unique id
            variables.set(`${hostname}${callId}coSpaceId`, result.coSpaces.coSpace[0].$.id);
        });
        //Uses the retrieved coSpace id to query the specific coSpace for additional details
        const resTwo = await cms.get(`/coSpaces/${variables.get(`${hostname}${callId}coSpaceId`)}`);
        //CMS returns XML - Parse it to turn it into JSON for ease of use
        parseString(resTwo.data, (err, result) => {
            variables.set(`${hostname}${callId}ownerJid`, result.coSpace.ownerJid); //Grabs the ownerJid for authorization
            variables.set(`${hostname}${callId}cmsPin`, result.coSpace.passcode); //Grabs the PIN to send when a call connects
        });
    }
}