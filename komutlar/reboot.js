const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("Yeniden başlatılıyor").then(msg => {
        console.log("Yeniden başlatılıyor");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};
