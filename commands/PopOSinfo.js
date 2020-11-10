const Discord = require('discord.js')

module.exports={
    name:"popos",
    aliases: ['pop-os', 'pop!_os', 'pop!-os'],
    description:"Informações sobre o Pop!_OS Linux",
    execute(message) {
        const embed = new Discord.MessageEmbed()
            .setColor('#34ebeb')
            .setTitle("Acesse o site oficial do Pop!_OS Linux")
            .setURL('https://pop.system76.com/')
            .setDescription("Pop!_OS é um o nome (original) que a empresa System76 (fabricante de referência no mercado do Linux) decidiu dar ao seu sistema operativo direcionado para quem costuma “criar” coisas com o computador. O objetivo desta distribuição é facilitar o trabalho de engenheiros, programadores, devops, etc, garantindo a melhor produtividade de cada um.\n\nSe procuram uma distribuição moderna e com bom suporte, então experimentem o Pop!_OS que tem como base a popular distribuição Linux Ubuntu. De acordo com o que testamos, esta distribuição tem um bom desempenho e é bastante polida. Destaque também para o Artwork da distribuição. Experimentem! É necessario pleo menos 2GB de RAM, e 20GB de armazenamento.")
            .setAuthor('O que é o Pop!_OS?', 'https://preview.redd.it/ms9je823h6y31.png?auto=webp&s=f722e4dc8a3646634230ede3c95539258becf6cf')
	        .setThumbnail('https://preview.redd.it/ms9je823h6y31.png?auto=webp&s=f722e4dc8a3646634230ede3c95539258becf6cf')
	        .addFields(
                { name: 'Empresa', value: 'System76', inline: true },
				{ name: "Criação", value: '27 de outubro de 2017', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'APT', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt-get update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()
        message.channel.send(embed)    
    }
}