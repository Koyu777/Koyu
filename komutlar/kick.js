const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('Dur!', '`kick` komutunu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'ceza-takip');
  if (!modlog) return message.reply('`ceza-takip` kanalı oluşturman lazım.');
  if (reason.length < 1) return message.reply('Sebep ?');
  if (message.mentions.users.size < 1) return message.reply('kimi atacağımı yazmadın.').catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply('Bu adamı atmamı istemezsin.');
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .addField('Eylem:', 'Sunucudan kovma')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return guild.channels.get(modlog.id).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
};
