const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //!coins
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;


  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .addField("💸", uCoins);

  let coinschannel = message.guild.channels.find(`name`, "bot-chat");
  if(!coinschannel) return message.channel.send("Can't find bot-chat channel.");

  coinschannel.send(coinEmbed);

}

module.exports.help = {
  name: "coins"
}
