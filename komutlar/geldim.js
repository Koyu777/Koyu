

const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()

  .setColor("RANDOM")
  .addField('Artık klavye başında!', message.author.username + '#' + message.author.discriminator)
  .setFooter("Artık sizinleyim!", " ")
    message.delete(4500);


  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'geldim',
  description: 'Klavye başında olduğunu belirtmeni sağlar.',
  usage: 'geldim'
};
