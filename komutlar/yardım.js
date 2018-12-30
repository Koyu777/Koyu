const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [':pushpin:**Bot Hakkında Bilgi**\n\n\n' + 'Koyu#0627 tarafından üretilen Moderasyon ve Eğelence botudur.',
  ':pushpin: **Üye Bot Komutları**\n\n\n' + ' **Afk ve Geldim komutları:**\n :white_small_square: `_afk` Klavye başında olmadığınızı/müsait olmadığınızı belirtir.\n:white_small_square: `_geldim` Klavye başında olduğunuzu/müsait olduğunuzu belirtir',
  ':pushpin: **Üye Bot Komutları**\n\n\n' + '**Avatar komutu:**\n :white_small_square: `_avatarım` Avatarınızı gösterir.\n **Havadurumu komutu**:\n:white_small_square: `_havadurumu(şehir_ismi)` Yazdığınız bölgenin anlık havadurumunu size söyler.',
  ':pushpin: **Üye Bot Komutları**\n\n\n' + '**Tavsiye komutu:**\n :white_small_square: `_tavsiye(tavsiyeniz)` Bot hakkındaki tavsiyelerinizi bot sahibine gönderir.\n **Sunucu komutu**:\n:white_small_square: `_sunucu` Bulunduğunuz sunucunun bilgilerini gösterir.'
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};
