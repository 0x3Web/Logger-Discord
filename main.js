const Discord = require('discord.js')
const {token} = require('./config.json')

const client = new Discord.Client()

client.on("ready", async() => {
 console.log(`[INFO]  Le logger est fonctionnel Logger by  Bl4ck`)})

 client.on("guildCreate", guild => {
  console.log(`[INFO]` + ` Vous avez rejoint ` + `${guild.name}`)
})

client.on("guildDelete", guild => {
  console.log(`[INFO]` + ` Vous avez quitté ` + `${guild.name}`)
})

client.on("messageDelete", message => {
  let chanName;
  if(message.channel.type == 'dm'){
      chanName = 'DM'
  } else {
      chanName = message.guild.name
  }
console.log(`[INFO]` + ` Message delete dans:` + ` ${chanName}` + `\n Contenu du message supprimé: ` + `${message.content}` + `\n Auteur du message supprimé: ` + `${message.author.username}`)
})

client.login(token)