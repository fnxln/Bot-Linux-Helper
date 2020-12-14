const Discord = require("discord.js")

module.exports = {
	name: 'info-emmabuntus',
	description: 'Informações do Emmabuntus!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setColor('#406cff')
	        .setTitle('Acesse o site oficial do Emmabuntus')
	        .setURL('https://emmabuntus.org/')
	        .setAuthor('O que é o Emmabuntus?')
	        .setDescription("Emmabuntüs é uma distribuição Linux derivada do Ubuntu e agora do Debian e projetado para facilitar a recondicionamento de computadores dados para comunidades Emaús. Emmabuntüs é uma contração de Emaús e Ubuntu. Em maio de 2013, o Ubuntu 10.04 LTS não é mais suportada.")
	        .setImage("https://upload.wikimedia.org/wikipedia/commons/4/42/Emmabuntus-3-14.04-Desktop.png")
	        .addFields(
				{ name: "Criação", value: 'Maio de 2013', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'APT', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt-get update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
