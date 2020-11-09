const Discord = require('discord.js')

module.exports = {
    name:"help",
    description:'Dar uma pequena ajuda.',
    execute(message){
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Acesse o arquivo MD para obter a lista de ajuda!")
            .setURL('https://github.com/Drack112/Bot-Linux-Helper/blob/main/commands/READMEhelp.md')
	        .setTimestamp()
        message.channel.send(embed)    
    }
}