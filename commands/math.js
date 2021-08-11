const Discord = require('discord.js');
module.exports = {
    name: 'math',
    description: "math",
    execute(msg, args){
            const PREFIX = '!';
        if (!args[1] || isNaN(args[1]) || !args[2] || !args[3] || isNaN(args[3])) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Error")
                .setDescription(PREFIX + "math {+ (add),x (multiply),- (subtract),/ (divide),% (remainder)}")
                .setColor(0xFF0000)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);
        } else if (args[2] == "+") {
            let Sum = +args[1] + +args[3];
            msg.channel.send('The sum of ' + args[1] + ' + ' + args[3] + ' is '+ Sum +'.');
        } else if (args[2] == "x") {
            msg.channel.send('The product of ' + args[1] + ' x ' + args[3] +' is '+ args[1]*args[3] +'.');
        } else if (args[2] == "-") {
            let difference = args[1] - args[3]
            msg.channel.send('The difference of ' + args[1] + ' - ' + args[3] + ' is '+ difference +'.');
        } else if (args[2] == "/") {
            msg.channel.send('The quotient of ' + args[1] + ' / ' + args[3] + ' is '+ args[1] / args[3] +'.');
        } else if (args[2] == "%") {
            msg.channel.send('The remainder of ' + args[1] + ' % ' + args[3] + ' is '+ args[1] % args[3] +'.');// i really need to work on making this loop
        } else {
            const embed = new Discord.MessageEmbed()
                .setTitle("Error")
                .setDescription(PREFIX + "math {+ (add),x (multiply),- (subtract),/ (divide),% (remainder)}")
                .setColor(0xFF0000)
                .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
            msg.channel.send(embed);}}}