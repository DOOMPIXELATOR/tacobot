const Discord = require('discord.js');
module.exports = {
    name: 'avatar',
    description: "avatar",
    execute(msg, args) {
        if (!args[1]) {
            const embed = new Discord.MessageEmbed()
                .setTitle(msg.author.username)
                .setImage(msg.author.avatarURL({size : 2048}))
                .setColor(0x0000FF);
            msg.channel.send(embed);
        } else {
            var user = msg.mentions.users.first();
            const embed = new Discord.MessageEmbed()
                .setTitle(user.username)
                .setImage(user.avatarURL({size : 2048}))
                .setColor(0x0000FF)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);}}}