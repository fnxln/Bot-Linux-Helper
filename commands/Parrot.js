const Discord = require("discord.js")

module.exports = {
	name: 'info-parrot',
	description: 'Informações do Parrot!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setColor('#3498eb')
	        .setTitle('Acesse o site oficial da Parrot')
	        .setURL('https://parrotlinux.org/' , 'https://upload.wikimedia.org/wikipedia/commons/4/45/Parrot_Logo.png')
	        .setAuthor('O que é o Portal?')
	        .setDescription("O Parrot Security OS tem como foco a área de segurança, um dos vários setores de TI que exigem muito estudo, testes e superações. Projetado para pentest, análise forense em computadores, engenharia reversa, ataque, aplicações para ataques de palavras-chave, criptografia e muito mais. Possui um vasto e seleto conjunto de ferramentas, sendo também uma ótima solução ao trabalhar com criptomoedas.\n\nAo contrário do Kali Linux que utiliza por padrão o ambiente GNOME, o Parrot faz uso do MATE. Inclusive em seu site existe uma opção com KDE. O sistema é baseado em Debian e na última atualização disponibilizada.\n\n")
	        .setImage('https://i.redd.it/yv40m3xffia01.png')
	        .addFields(
                { name: 'Criador', value:'Lorenzo "Palinuro" Faletra Parrot Dev Team', inline: true},
				{ name: "Criação", value: '10 de abril de 2013', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'APT', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
