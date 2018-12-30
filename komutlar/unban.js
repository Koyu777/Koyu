const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('Dur!', '`kick` komutunu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = guild.channels.find('name', 'ceza-takipi');
  if (!modlog) return message.reply('`ceza-takip` kanalını bulamıyorum.');
  if (reason.length < 1) return message.reply('Ban kaldırma sebebini yazmalısın.');
  if (!user) return message.reply('Kişinin ID numarasını yazmalısın.').catch(console.error);
  message.guild.unban(user);

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .addField('Eylem:', 'Ban kaldırma')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return guild.channels.get(modlog.id).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'Kişinin banını kaldırır.',
  usage: 'unban [kullanıcı] [sebep]'
};
