const Discord = require('discord.js');
module.exports = {
    name: 'yugioh',
    description: "oof",
    execute(msg, args) {
        var ygo = ['https://cdn.discordapp.com/attachments/626701381838962688/627587614509236224/yu-gi-oh_card_get_lasered_above.jpg', 'https://cdn.discordapp.com/attachments/626701381838962688/627587613909581840/yu-gi-oh_get_lasered_belolw.jpg.jpg', 'https://cdn.discordapp.com/attachments/626701381838962688/627587613909581837/yu-gi-oh_card_anti_gay.jpg', 'https://cdn.discordapp.com/attachments/626701381838962688/627587613909581834/yu-gi-oh_card_boost.jpg', 'https://cdn.discordapp.com/attachments/632488722415222785/636828426027794443/yu-gi-oh_card_delet.jpg', 'https://cdn.discordapp.com/attachments/632488722415222785/637605671302463511/yu-gi-oh_card_luck.jpg', 'https://cdn.discordapp.com/attachments/632488722415222785/660155615926026285/yu-gi-oh_card_fake_tr.jpg', 'https://cdn.discordapp.com/attachments/632488722415222785/710543951903457360/yb6yb986zqp21.png' ,'https://cdn.discordapp.com/attachments/632488722415222785/710544005968035890/e1k56v7fdtm31.png'];
        if (!args[1]) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Yu-Gi-Oh")
                .setDescription("!yugioh 'laserup,laserdown,boost,anti-gay,delet,wishluck,faketr,random,nouwhite,nouhyper,help'")
                .setColor(0x0000FF)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);
        } else if (args[1] == "laserup") {
            const embed = new Discord.MessageEmbed()
                .setImage("https://cdn.discordapp.com/attachments/626701381838962688/627587614509236224/yu-gi-oh_card_get_lasered_above.jpg")
                .setColor(0x0000FF)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);
        } else if (args[1] == "laserdown") {
            const embed = new Discord.MessageEmbed()
                .setImage("https://cdn.discordapp.com/attachments/626701381838962688/627587613909581840/yu-gi-oh_get_lasered_belolw.jpg.jpg")
                .setColor(0x0000FF)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);
        } else if (args[1] == "antigay") {
            const embed = new Discord.MessageEmbed()
                .setImage("https://cdn.discordapp.com/attachments/626701381838962688/627587613909581837/yu-gi-oh_card_anti_gay.jpg")
                .setColor(0x0000FF)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);
        } else if (args[1] == "boost") {
            const embed = new Discord.MessageEmbed()
                .setImage("https://cdn.discordapp.com/attachments/626701381838962688/627587613909581834/yu-gi-oh_card_boost.jpg")
                .setColor(0x0000FF)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);
        } else if (args[1] == "delet") {
            const embed = new Discord.MessageEmbed()
                .setImage("https://cdn.discordapp.com/attachments/632488722415222785/636828426027794443/yu-gi-oh_card_delet.jpg")
                .setColor(0x0000FF)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);
        } else if (args[1] == "wishluck") {
            const embed = new Discord.MessageEmbed()
                .setImage("https://cdn.discordapp.com/attachments/632488722415222785/637605671302463511/yu-gi-oh_card_luck.jpg")
                .setColor(0x0000FF)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);
        } else if (args[1] == "faketr") {
            const embed = new Discord.MessageEmbed()
                .setImage("https://cdn.discordapp.com/attachments/632488722415222785/660155615926026285/yu-gi-oh_card_fake_tr.jpg")
                .setColor(0x0000FF)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);
        } else if (args[1] == "help") {
            const embed = new Discord.MessageEmbed()
                .setTitle("Yu-Gi-Oh")
                .setDescription("!yugioh 'laserup,laserdown,boost,anti-gay,delet,wishluck,faketr,random,nouwhite,nouhyper,help'")
                .setColor(0x0000FF)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);
        } else if (args[1] == "nouwhite") {
            const embed = new Discord.MessageEmbed()
                .setImage("https://cdn.discordapp.com/attachments/632488722415222785/710543951903457360/yb6yb986zqp21.png")
                .setColor(0x0000FF)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);
        } else if (args[1] == "nouhyper") {
            const embed = new Discord.MessageEmbed()
                .setImage("https://cdn.discordapp.com/attachments/632488722415222785/710544005968035890/e1k56v7fdtm31.png")
                .setColor(0x0000FF)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);
        } else if (args[1] == "random") {
            const embed = new Discord.MessageEmbed()
                .setImage(ygo[Math.floor(Math.random() * ygo.length)])
                .setColor(0x0000FF)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);
        } else {
            const embed = new Discord.MessageEmbed()
                .setTitle("Yu-Gi-Oh")
                .setDescription("!yugioh 'laserup,laserdown,boost,anti-gay,delet,wishluck,faketr,random,nouwhite,nouhyper,help'")
                .setColor(0x0000FF)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);
        }
    }
}