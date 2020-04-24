//#region Initalise stuff
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.test_bot);
//#endregion

//#region DEBUG
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});
//#endregion
