const Discord = require('discord.js');
const bot = new Discord.Client();
const token = "";
const PREFIX = "!";
const ownerUser = bot.users.fetch("476510760793669653");
const version = "1.0.0"

function loadcmds () {
const fs = require('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    delete require.cache[require.resolve(`./commands/${file}`)];
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);}}
loadcmds();

bot.on('ready', () => {
    console.log('Taco power activated!');
    bot.user.setActivity('Dank memes', { type: "WATCHING" });
})

bot.on('message', msg => {
    let args = msg.content.toLowerCase().substring(PREFIX.length).split(" ");
    if (msg.content.startsWith(PREFIX) && !msg.author.bot) { // Prevent bot from responding to its own messages
        switch (args[0]) {
           case 'info':
                if (args[1] === 'version' || args[1] === 'Version') {
                    const embed = new Discord.MessageEmbed()
                        .setTitle("Version")
                        .addField(`The Version is ${version} This was never accurate`)
                        .setColor(0x00FF00)
                        .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
                    msg.channel.send(embed);
                } else if (args[1] === 'credits' || args[1] === 'Credits') {
                    const embed = new Discord.MessageEmbed()
                        .setTitle("Credits")
                        .addField("Author", "<@476510760793669653>")
                        .addField("Special Thanks", "<@390780842416406540> for helping me with most of the bot")
                        .setColor(0x00FF00)
                        .setFooter("Requested by " + msg.author.username, msg.author.avatarURL())
                    msg.channel.send(embed)
                } else {
                    const embed = new Discord.MessageEmbed()
                        .setTitle("Error")
                        .addField("Insufficent Information", "You didn't tell me what to do or you just made a typo.")
                        .setColor(0xFF0000)
                        .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
                    msg.channel.send(embed);
                }
                break;
            case 'clear':
                bot.commands.get('clear').execute(msg, args);
                break;
            case 'say':
                if (!args[1]) {
                    const embed = new Discord.MessageEmbed()
                        .setTitle("say")
                        .setDescription("!say (something)")
                        .setColor(0x0000FF)
                        .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
                    msg.channel.send(embed);
                } else {
                    msg.channel.send(msg.content.substr(PREFIX.length + 3));
                    msg.delete();
                }
                break;
            case '8ball':
                var Answers = ['Yes', 'No', 'Maybe', 'Possibly', 'Probably', 'Probably not', 'Definately', 'Never'];
                msg.channel.send(Answers[Math.floor(Math.random() * Answers.length)]);
                break;
            case 'kick':
                bot.commands.get('kick').execute(msg, args);
                break;
            case 'ban':
                bot.commands.get('ban').execute(msg, args);
                break;
            case 'math':
                bot.commands.get('math').execute(msg, args);
                break;
            case 'setprefix':
                if (msg.member.hasPermission('ADMINISTRATOR')) {
                    if (!args[1]) {
                        msg.channel.send("pls specify what to set the prefix to");
                    } else {
                        PREFIX = args[1];
                        msg.channel.send("prefix was set to " + "\'" + PREFIX + "\'");
                    }
                } else { msg.channel.send("You must have administrator perms"); }
                break;
            case 'setstatus':
                if (msg.author.id == "476510760793669653") {
                    if (!args[2] || !args[1]) {
                        msg.channel.send("Please specify what to set the status to (\"1\" \"people using light mode\").");
                    }
                    else if (args[1] % 1 == 0) {
                        var statusVar = msg.content.substr(PREFIX.length + 12);
                        if (statusVar != null && args[1] == 0) {
                            bot.user.setActivity(statusVar, { type: "WATCHING" });
                            msg.channel.send("status was set to watching " + "\'" + statusVar + "\'");
                        } else if (statusVar != null && args[1] == 1) {
                            bot.user.setActivity(statusVar, { type: "STREAMING" });
                            msg.channel.send("status was set to streaming " + "\'" + statusVar + "\'");
                        } else if (statusVar != null && args[1] == 2) {
                            bot.user.setActivity(statusVar, { type: "LISTENING" });
                            msg.channel.send("status was set to listening " + "\'" + statusVar + "\'");
                        } else if (statusVar != null && args[1] == 3) {
                            bot.user.setActivity(statusVar, { type: "PLAYING" });
                            msg.channel.send("status was set to playing " + "\'" + statusVar + "\'");
                        }
                    } else { msg.reply("use a number for the first part") }
                }
                break;
            case 'yugioh':
                bot.commands.get('yugioh').execute(msg, args);
                break;
            case 'oof':
                const Embed = new Discord.MessageEmbed()
                    .setImage("https://cdn.discordapp.com/attachments/626843465535455243/627895503140421643/download_1.jpeg")
                    .setColor(0x0000FF)
                    .setFooter("Requested by " + msg.author.username, msg.author.avatarURL());
                msg.channel.send(Embed);
                break;
            case 'help':
                bot.commands.get('help').execute(msg, args);
                break;
            case 'suggest':
                bot.users.fetch("476510760793669653").then(ownerUser => {
                    const suggestchannel = bot.channels.cache.get("628575684888887305");
                    if (args[1] != null) {
                        ownerUser.send(msg.content.substr(PREFIX.length + 7));
                        msg.channel.send("your suggestion has been sent to the authors, Thank you very much for your contribution");
                        suggestchannel.send(msg.content.substr(PREFIX.length + 7));
                    } else { msg.channel.send("What would you like to suggest?"); }});
                break;
            case 'avatar':
                bot.commands.get('avatar').execute(msg, args);
                break;
            case 'reload':
                    if(!msg.author == bot.users.fetch("476510760793669653")){msg.channel.send('How did you find this command?') 
            }else{
                msg.channel.send('Reloaded!')
                loadcmds()
            }
                break;
            case 'height':
            if (!args[1]){
                msg.channel.send("Please tell me your height for accurate measurment")
            }else{
                msg.channel.send('Your height is ' + args.slice(1).join(' '))
            }
            break;
        }
    }
});

bot.login(token);