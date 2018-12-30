
const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  var konum = ''
        if(message.guild.region === "russia") {
            var konum = 'Rusya'
        }
        if(message.guild.region === "us-west") {
            var konum = 'Batı Amerika'
        }
        if(message.guild.region === "us-south") {
            var konum = 'Güney Amerika'
        }
        if(message.guild.region === "us-east") {
            var konum = 'Doğu Amerika'
        }
        if(message.guild.region === "us-central") {
            var konum = 'Amerika'
        }
        if(message.guild.region === "brazil") {
            var konum = 'Brezilya'
        }
        if(message.guild.region === "singapore") {
            var konum = 'Singapur'
        }
        if(message.guild.region === "sydney") {
            var konum = 'Sidney'
        }
        if(message.guild.region === "eu-west") {
            var konum = 'Batı Avrupa'
        }
        if(message.guild.region === "eu-south") {
            var konum = 'Güney Avrupa'
        }
        if(message.guild.region === "eu-east") {
            var konum = 'Doğu Avrupa'
        }
        if(message.guild.region === "eu-central") {
            var konum = 'Avrupa'
        }
        if(message.guild.region === "hongkong") {
            var konum = 'Hong Kong'
        }
        if(message.guild.region === "japan") {
            var konum = 'Japonya'
        }
	   message.delete();

	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor("Random")
    .setTimestamp()
    .setAuthor(message.tag)
    const sunucubilgi = new Discord.RichEmbed()
    .addField('Dur!', '`sunucubilgi` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL || message.guild.iconURL)
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter('Koyu 0.1', client.user.avatarURL)
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Ad:', message.guild.name)
    .addField('ID', message.guild.id)
    .addField('Bölge ', konum)
    .addField('Üye sayısı :', message.guild.memberCount)
    .addField('Sahibi :', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('Kanal sayısı :', message.guild.channels.size)
    .addField('Sunucu oluşturma tarihi:', moment(message.guild.createdAt).format('DD/MM/YYYY'), true);
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucu'
};
