const Discord = require('discord.js');
module.exports = {
    name: 'kick',
    description: "kick",
    execute(msg, args){
        if (!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply('You can\'t kick anyone without the kick members permission.')
                    .then(m => m.delete({timeout: 5000}))
                var user = msg.mentions.users.first();
                if (user) {
                    var member = msg.guild.member(user);

                    if (member) {
                        member.kick(`kicked for ${args.slice(2).join(' ')}`).then(() => {
                        	if(!args[2])
                        		{msg.reply(`Successfully kicked ${user}`);
                        }else{
                        	msg.reply(`Successfully kicked ${user} for ${args.slice(2).join(' ')}`);
                        }}).catch(err => {
                            msg.reply(`OH SNAP ${user} RESISTED MY KICK let's hope I'm not broken.`);
                            console.log(err);
                        });
                    } else {
                        return msg.reply('That user isn\'t in this server.')
                            .then(m => m.delete({timeout: 5000}))
                    }
                } else {
                    return msg.reply('You didn\'t mention anyone.')
                        .then(m => m.delete({timeout: 5000}))
                }
        }
    }