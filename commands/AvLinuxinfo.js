const Discord = require('discord.js')

module.exports = {
    name: 'info-avlinux',
	description: 'Informações do Av Linux!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
            .setColor('#034efc')
            .setTitle('Acesse o site oficial do Av Linux')
            .setURL('http://www.bandshed.net/avlinux/')
            .setAuthor('O que é o Av Linux?')
            .setDescription('O AV Linux é um sistema operacional baseado em Linux destinado a criadores de conteúdo multimídia. Disponível para as arquiteturas i386 e x86-64 com um kernel personalizado para desempenho máximo e produção de áudio de baixa latência, foi recomendado como plataforma Linux suportada pelo Harrison Mixbus\n\n')
            .setImage('https://4.bp.blogspot.com/-N6nCuKJhqv0/VhFX_M5lGpI/AAAAAAAAB6k/UpUSlSPpwxA/w1200-h630-p-k-no-nu/avlinux-logo.PNG')
            .addFields(
                { name: "Criação", value: '3 de abril de 2019', inline:true},
                { name: '\u200B', value: '\u200B' },
                { name: "Gerenciador de Pacotes: ", value: 'apt' , inline: true},
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt-get update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
            .setTimestamp()

        message.channel.send(embed)
    },
};