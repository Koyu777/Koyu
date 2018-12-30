module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hoş geldin!');
    member.guild.defaultChannel.send('hg '+username+'');
};
