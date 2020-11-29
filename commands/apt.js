const Discord = require("discord.js")

module.exports = {
	name: 'apt',
	aliases: ['apt-info', 'apt'],
	description: 'Informações do gerenciador de pacotes APT!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setColor('#eb3455')
	        .setTitle('O que é APT?')
	        .setDescription('APT (Advanced Packaging Tool, em português Ferramenta de Empacotamento Avançada) é um conjunto de ferramentas usadas pelo GNU/Linux Debian e suas respectivas derivações, entre eles o Ubuntu, para administrar os pacotes .deb de uma forma automática, de modo que quando um programa é instalado o APT instala e/ou atualiza também todos os pacotes que são necessários para um funcionamento do programa.\n\nQuando o apt-get é utilizado no Linux, o comando consulta um arquivo denominado sources.list, geralmente disponível no diretório /etc/apt/. Esse arquivo informa onde estão os locais (repositórios) nos quais ele obterá os pacotes requisitados pelo usuário.')
	        .setImage('https://techedemic.com/wp-content/uploads/2014/10/apt-get.jpg')
	        .addFields(
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Distros que usam APT', value: 'Baseadas em Debian', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt-get update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
