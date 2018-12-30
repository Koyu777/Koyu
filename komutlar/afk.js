

const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()

  .setColor("RANDOM")
  .addField('Artık klavye başında değil.', message.author.username + '#' + message.author.discriminator)
  .setFooter("Uzaklardayım.", " ")
    message.delete(4500);


  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk,afkol'],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'Klavye başında olmadığınızı belirmenizi sağlar.',
  usage: 'afk'
};
