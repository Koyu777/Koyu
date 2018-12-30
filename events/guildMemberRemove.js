module.exports = member => {
  let guild = member.guild;
  member.send('nereye');
  guild.defaultChannel.sendMessage(`${member.user.username} gitti.`);
};
