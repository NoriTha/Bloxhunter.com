module.exports = (client) => {
    console.log(`🤖 My pretty Bot 🤖 is Ready as ${client.user.tag} whit status *${client.user.presence.status}* server in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`);
};

//`My pretty Bot's Ready as 
//${client.user.tag} whit status : nombre y #tag del bot
//*${client.user.presence.status}* serve : estado (online, ausente, invisible, ...)    
//in ${client.channels.cache.size} :total de canales del server
//channels on ${client.guilds.cache.size} servers,: servidores q usan el bot
//for a total of ${client.users.cache.size} users.`); : Programadores del bot