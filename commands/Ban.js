const Discord = require('discord.js');
module.exports = {
    name: 'ban',
    description: "ban",
    execute(msg, args){
        if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply('you can\'t ban anyone without permission.')
                    .then(msg => msg.delete(5000))

                var user = msg.mentions.users.first();

                if (user) {
                    var member = msg.guild.member(user);

                    if (member) {
                        member.ban({ reason: args.slice(2).join(' ')}).then(() => {
                            const embed = new Discord.MessageEmbed()
                    .setDescription(`${user} got banned for ${args.slice(2).join(' ')}`)
                    .setImage("https://tenor.com/view/banned-thor-banned-thor-ban-thor-admin-gif-12850590")
                    .setColor(0x0000FF)
                    .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
                msg.channel.send(embed);
                        })
                    } else {
                        return msg.reply('That user isn\'t in this server.')
                            .then(msg => msg.delete(5000))
                    }
                } else {
                    return msg.reply('You didn\'t mention anyone.')
                        .then(msg => msg.delete(5000))
                }
        }
    }