const Discord = require("discord.js")

module.exports = {
	name: 'feren',
	aliases: ['ferenos'],
	description: 'Informações do Feren OS!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setColor('#406cff')
	        .setTitle('Acesse o site oficial do Feren OS')
	        .setURL('https://ferenos.weebly.com')
	        .setAuthor('O que é o Feren OS?', 'https://i.ytimg.com/vi/Krc4wk_C77s/maxresdefault.jpg')
	        .setDescription(' Feren OS pode ser considerada uma das mais interessantes distribuições Linux. De acordo com as informações publicada no site do projeto, esta distribuição é uma alternativa gratuita ao Windows e ao macOS e vem com o melhor que se faz na comunidade Linux tanto ao nível da personalização, aplicações e muito mais.Esta distribuição é baseada no Linux Mint e foi desenhada para ser rápida e segura.\n\nEm termos de ambiente gráfico esta distribuição usa o Cinnamon e vem já com um vasto leque de aplicações instaladas como por exemplo o  LibreOffice e o WPS Office,  PlayOnLinux e Steam e o Web Browser Manager foi “roubado” ao ZorinOS.')
	        .setThumbnail('https://ferenos.weebly.com/uploads/2/0/2/6/20267985/8926205.png')
	        .addFields(
				{ name: "Criação", value: '16 de dezembro de 2016', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'APT', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt-get update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
