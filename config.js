const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'LNFUXYDQ#Qp9tlHa4MLnuydBArB9Y8p4PQmjmudM7LdBHRetolAE' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT, 
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'ʜɪʀᴀɴʏᴀ ꜱᴀᴛʜꜱᴀʀᴀ' : process.env.SESSION_NAME,  

};
