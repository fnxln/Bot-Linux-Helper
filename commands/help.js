const Discord = require('discord.js')

module.exports = {
    name:"help",
    description:'Dar uma pequena ajuda.',
    execute(message){
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Acesse o arquivo MD para obter a lista de ajuda!")
            .setURL('https://www.debian.org/intro/about.pt.html')
	        .setTimestamp()
        message.channel.send(embed)    
    }
}