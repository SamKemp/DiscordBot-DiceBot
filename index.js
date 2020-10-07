require("dotenv").config()

const Discord = require("discord.js")
const client = new Discord.Client()

const { DiceRoller } = require('rpg-dice-roller');
const roller = new DiceRoller();

var prefix = "/";
MessageTimeout = 10;

// Wait for the bot to be logged in before we do anything
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ activity: { name: '/help' }, status: 'online' });
});

// When message is sent
client.on("message", msg => {
    // Ignore DM's
    if(!msg.guild){return;}
    // Ignore self
    if(msg.author.id == client.user.id) return;

    // If message is !help
    if (msg.content === prefix + "help")
    {
        var Output = "";

        Output = "**__Available commands__**\n";
        Output += "`" + prefix + "help` - Displays this help message\n";
        //Output += "`" + prefix + "roll` - Rolls 1d100\n";
        Output += "`" + prefix + "r {notation}` - Rolls based on the given notation\n\n";
        Output += "**__Defined notation__**\n";
        Output += "`$DADV` - Rolls 2d20's and keeps the highest\n";
        Output += "`$DDIS` - Rolls 2d20's and keeps the lowest\n";
        Output += "`$CADV` - Rolls 2d100's and keeps the lowest\n";
        Output += "`$CDIS` - Rolls 2d100 and keeps the highest\n";
        Output += "<https://greenimp.github.io/rpg-dice-roller/guide/notation/>\n";

        msg.reply(Output);
    }
    else if (msg.content === prefix + "Droll")
    {
        msg.reply(roller.roll('1d20').output);
    }
    else if (msg.content === prefix + "r $DADV")
    {
        msg.reply(roller.roll('2d20kh1').output);
    }
    else if (msg.content === prefix + "r $DDIS")
    {
        msg.reply(roller.roll('2d20kl1').output);
    }
    else if (msg.content === prefix + "Croll")
    {
        msg.reply(roller.roll('1d100').output);
    }
    else if (msg.content === prefix + "r $CADV")
    {
        msg.reply(roller.roll('(2d10kl1)*10 + 1d10').output);
    }
    else if (msg.content === prefix + "r $CDIS")
    {
        msg.reply(roller.roll('(2d10kh1)*10 + 1d10').output);
    }
    else if (msg.content.startsWith(prefix + "r"))
    {
        //msg.reply("This feature isn't available right now");

        var msgCommand = prefix + "r";
        const args = msg.content.slice(msgCommand.length).trim();
        //const command = args.shift().toLowerCase();

        try{
            msg.reply(roller.roll(args).output);
        }
        catch (error)
        {
            msg.reply("Given notation `" + msg.content.slice(msgCommand.length).trim() + "` not recognized");
        }
    }    

    if (msg.content === prefix + "clear")
    {
        console.log("Received clearing request from " + msg.author.username + " in server " + msg.guild.name);

        if(true) return;

        if(!msg.guild.me.hasPermission('MANAGE_MESSAGES')) return msg.reply('I do not have the `MANAGE_MESSAGES` permission');

        amount = 100;

        msg.channel.messages.fetch({ limit: amount }).then(messages => 
        {
        var error = false;

        msg.channel.bulkDelete(messages).catch(error = true)

        if(error)
        {
            messages.forEach(element => msg.channel.messages.fetch(element.id).then(message => message.delete().catch(console.error)).catch(console.error) )
        }
        });
    }
  
});

// Log our bot in
client.login(process.env.BOT_TOKEN)