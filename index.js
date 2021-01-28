const fs = require('fs');

const command = require ('./command');

const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
client.config = config;



//READYS
client.on('ready', () => {

  
    //muestra en consola + función de presencia
    console.log(`❤️  My little bot ❤️  is ready ass: ${client.user.tag} with a status '${client.user.presence.status}'`);
    presence();
        
        
    //Estado del bot
        
    function presence() {
        client.user.setPresence( {
            status: `idle`,
            activity: {
                name: "Roblox | Adoptme",
                url:  "https://www.twitch.tv/CraterMaik",
                type: "STREAMING",
                 }
        } )
    };

    //Respuesta a comando con conf.Prefix: '!' Contador de usuarios del server
    
    command(client, 'servers', (message) => {
        client.guilds.cache.forEach((guild) => {
            message.channel.send(`🌎 ${guild.name} 𝗛𝗔𝗦 𝗔 𝗧𝗢𝗧𝗔𝗟 𝗢𝗙  🌍  ${guild.memberCount} 𝗠𝗘𝗠𝗕𝗘𝗥𝗦  🌏`)
        })
    });
});

//RECIVING MESSAGE
client.on('message', message => {
    
    console.log(message.content);

    // === reply.
    if (message.content === `Ping`) {
        message.reply(`🏓 Pong 🏓`);
    }
    if (message.content === `Hello`) {
        message.channel.send(`🐱 𝗛𝗲𝗹𝗹𝗼 ${message.author}!𝘄𝗵𝗮𝘁 𝘄𝗼𝘂𝗹𝗱 𝘆𝗼𝘂 𝗹𝗶𝗸𝗲 𝘁𝗼 𝗱𝗼? 🐱`);
    }


    //startsWith: Goodbye, bye, goodbye
    if (message.content.startsWith(`Goodbye`)) {
        message.channel.send(`💐 𝗕𝘆𝗲 𝗕𝘆𝗲 ${message.author}  𝗱𝗼𝗻'𝘁 𝗱𝗲𝗹𝗮𝘆 𝗶𝗻 𝗿𝗲𝘁𝘂𝗿𝗻𝗶𝗻𝗴! 💐`);
    }
    if (message.content.startsWith(`bye`)) {
        message.channel.send(`🌈 𝗚𝗼𝗼𝗱𝗯𝘆𝗲 ${message.author} 𝘀𝗲𝗲 𝘆𝗼𝘂 𝗹𝗮𝘁𝗲𝗿! 🌈`);
    }
    if (message.content.startsWith(`goodbye`)) {
        message.channel.send(`🐸 𝗚𝗼𝗼𝗱𝗯𝘆𝗲  ${message.author} 𝘄𝗲 𝘁𝗮𝗹𝗸 𝗹𝗮𝘁𝗲𝗿!!!! 🐸`);
    }


    //Embed: Hi,hi, hello, HI
    if (message.content === `Hi`) {
        const embed = new Discord.MessageEmbed()
        .setDescription(` 🍇 🍒 𝗪𝗵𝗮𝘁'𝘀 𝗨𝗽 ${message.author} ? 🍇 🍒`)
        .setColor(0xC308F7)
        .setFooter('𝗕𝗹𝗼𝘅𝗵𝘂𝗻𝘁𝗲𝗿.𝗰𝗼𝗺','https://i.imgur.com/ijv1YTj.gif')

        message.channel.send(embed);
    }
    if (message.content === `hi`) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`🍓 🍋 𝗪𝗵𝗮𝘁'𝘀 𝗨𝗽 ${message.author}? 𝗜 𝗵𝗼𝗽𝗲 𝘆𝗼𝘂 𝗮𝗿𝗲 𝗲𝗻𝗷𝗼𝘆𝗶𝗻𝗴 𝗶𝘁 𝗮𝗿𝗼𝘂𝗻𝗱 𝗵𝗲𝗿𝗲!! 🍋 🍓`)
        .setColor(0xC308F7)
        .setFooter('𝗕𝗹𝗼𝘅𝗵𝘂𝗻𝘁𝗲𝗿.𝗰𝗼𝗺','https://i.imgur.com/ijv1YTj.gif')

        message.channel.send(embed);
    }
    if (message.content === `hello`) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`🍀 𝗛𝗶 ${message.author} 𝗪𝗵𝗮𝘁'𝘀 𝗨𝗽? 🍀`)
        .setColor(0xC308F7)
        .setFooter('𝗕𝗹𝗼𝘅𝗵𝘂𝗻𝘁𝗲𝗿.𝗰𝗼𝗺','https://i.imgur.com/ijv1YTj.gif')

        message.channel.send(embed);
    }
    if (message.content === `HI`) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`🌈 ☀️ 𝗛𝗲𝗹𝗹𝗼 ${message.author} 𝗛𝗼𝘄 𝗮𝗿𝗲 𝘆𝗼𝘂? 🌈 ☀️`)
        .setColor(0xC308F7)
        .setFooter('𝗕𝗹𝗼𝘅𝗵𝘂𝗻𝘁𝗲𝗿.𝗰𝗼𝗺','https://i.imgur.com/ijv1YTj.gif')

        message.channel.send(embed);
    }
    if (message.content === `HELLO`) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`🦋 🌺 𝗪𝗵𝗮𝘁'𝘀 𝗨𝗽 ${message.author} 🌺 🦋`)
        .setColor(0xC308F7)
        .setFooter('𝗕𝗹𝗼𝘅𝗵𝘂𝗻𝘁𝗲𝗿.𝗰𝗼𝗺','https://i.imgur.com/ijv1YTj.gif')

        message.channel.send(embed);
    }
    
});


//RESPUESTA A COMANDOS CON CONF.PREFIX "!"

client.on('message', message => {


    //evitar el bucle
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    //comandos
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let prefix = config.prefix;

    //respuesta simple
    if(command === `roblox`){
        message.channel.send(`🍒🌟 𝗥𝗼𝗯𝗹𝗼𝘅'𝘀 𝗧𝗵𝗲 𝗯𝗲𝘀𝘁 𝗚𝗮𝗺𝗲!!! 🌟🍒`)
    }
    //con embed
    if(command === `robux`){
        const embed = new Discord.MessageEmbed()
        .setDescription(`😎 𝗗𝗼 𝗨 𝘄𝗮𝗻𝘁 💥 **FREE** 𝗥$ 💥 ${message.author}? 😎 𝗚𝗼 𝘁𝗼 𝘁𝗵𝗲 ▶️ http://bloxhunter.com/ ◀️ ` )
        .setColor(0xC308F7)
        .setFooter('𝗕𝗹𝗼𝘅𝗵𝘂𝗻𝘁𝗲𝗿.𝗰𝗼𝗺','https://i.imgur.com/ijv1YTj.gif')

        message.channel.send(embed);
    }
    //Con Get
    //if(command === 'purge') {
        //client.commands.get('purge').execute(message, args);
   // } else if (command === 'ping') {
       // client.commands.get('ping').execute(message, args);
   // }
});


//GIVEAWAYS

// Init discord giveaways
const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "#e512ea",
        reaction: "🎉"
    }
});
// We now have a client.giveawaysManager property to manage our giveaways!

client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} entered giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});

client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} unreact to giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});

client.giveawaysManager.on("giveawayEnded", (giveaway, winners) => {
    console.log(`Giveaway #${giveaway.messageID} ended! Winners: ${winners.map((member) => member.user.username).join(', ')}`);
});

/* Load all events */
fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`👌 Event loaded: ${eventName}`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});

client.commands = new Discord.Collection();

/* Load all commands */
fs.readdir("./commands/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`👌 Command loaded: ${commandName}`);
    });
});



// Login
client.login(config.token);