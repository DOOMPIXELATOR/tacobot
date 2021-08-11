const Discord = require('discord.js');
const prefix = '!'
module.exports = {
    name: 'help',
    description: "help",
    execute(msg, args) {
        if (!args[1]) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Help Modules")
                .setDescription("Moderation(or Mod)\nFun\nMisc")
                .setColor(0x0000FF)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);
        } else if(args[1].toLowerCase() == 'moderation' || args[1].toLowerCase() == 'mod') {
            const embed = new Discord.MessageEmbed()
                .setTitle('Moderation')
                .setDescription(prefix + "clear (amount of messages)\n" + prefix + "ban (user) (reason)\n" + prefix + "kick (user) (reason)\n" + prefix + "setprefix (string)")
                .setColor(0x0000FF)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);
        } else if (args[1].toLowerCase() == 'fun') {
            const embed = new Discord.MessageEmbed()
                .setTitle('Fun')
                .setDescription(prefix + 'yugioh (laserup,laserdown,boost,delet,wishluck,faketr)\n' + prefix + 'say(stuff you want me to say lol)\n' + prefix + '8ball(your question)\n' + prefix + 'oof')
                .setColor(0x0000FF)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);
        } else if (args[1].toLowerCase() == 'misc') {
            const embed = new Discord.MessageEmbed()
                .setTitle('Misc')
                .setDescription(prefix + 'info (version, credits)\n' + prefix + 'math (1st number) (+,x,-,/,%)\n' + prefix + 'avatar\n' + prefix + 'suggest')
                .setColor(0x0000FF)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);
        }else{
            const embed = new Discord.MessageEmbed()
            .setTitle("Help Modules")
            .setDescription("Moderation(or Mod)\nFun\nMisc")
            .setColor(0x0000FF)
            .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
        msg.channel.send(embed);}}}