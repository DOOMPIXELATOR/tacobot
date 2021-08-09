const Discord = require('discord.js');
let prefix = "!";
module.exports = {
    name: 'clear',
    description: "clear",
    execute(msg, args){
        if (!msg.member.hasPermission('MANAGE_MESSAGES')) {
            const embed = new Discord.MessageEmbed()
            msg.channel.send("You can't delete messages without the Manage Messages permission.")
            .then(msg => msg.delete({timeout: 5000}))
        } else if (!args[1]) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Clear")
                .setDescription(`${prefix}clear (number).`)
                .setColor()
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);
        } else if (isNaN(args[1])) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Error")
                .addField("NaN", "Type a number.")
                .setColor(0xFF0000)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);
        } else if (args[1] == "0") {
            const embed = new Discord.MessageEmbed()
                .setTitle("Error")
                .addField("NaN", "Type a number more than 0.")
                .setColor(0xFF0000)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);
        } else {
            msg.delete();
            msg.channel.bulkDelete(parseInt(args[1]));
        }
    }}