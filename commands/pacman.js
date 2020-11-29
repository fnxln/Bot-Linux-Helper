const Discord = require("discord.js")

module.exports = {
	name: 'pacman',
	aliases: ['pacman-info'],
	description: 'Informações do gerenciador de pacotes Pacman!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setColor('ffff14')
	        .setTitle('O que é Pacman?')
	        .setDescription("Pacman (de Package Manager) é um software gerenciador de pacotes criado por Judd Vinet para o Arch Linux, e é considerado uma de suas principais funcionalidades. O objetivo do pacman é tornar possível o fácil gerenciamento de pacotes tanto dos repositórios oficiais quanto do AUR. \n\nO pacman mantém o sistema atualizado sincronizando todos os pacotes com aqueles que estão atualmente nos servidores. Teoricamente, basta um simples comando para atualizar todos os pacotes (e consequentemente todo o sistema) para a última versão disponível.")
	        .setImage('https://miro.medium.com/max/680/1*Q12V4amXgYtyzpWso5iGGw.png')
	        .addFields(
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Distros que usam pacman', value: 'Baseadas em ArchLinux', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo pacman -Syu', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
