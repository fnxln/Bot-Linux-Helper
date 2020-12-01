const Discord = require("discord.js")

module.exports = {
	name: 'arch',
	aliases: ['arch-linux', 'archlinux'],
	description: 'Informações do Arch!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setColor('#406cff')
	        .setTitle('Acesse o site oficial do Arch')
	        .setURL('https://www.archlinux.org/')
	        .setAuthor('O que é o Arch Linux?', 'https://cdn0.iconfinder.com/data/icons/flat-round-system/512/archlinux-512.png')
	        .setDescription("O Arch-Linux é uma distribuição famosa por seu modo de instalação e por conta de uma certa dificuldade na mesma. Sua proposta é 'Manter o estupidamente simples'. Isso porque quem ira criar o sistema será o usuario.\n\nO Arch-Linux não possui uma versão oficial. Esse conceito, conhecido como Rolling Release, garante um sistema sempre atualizado com as últimas versões da grande maioria dos pacotes.\n\nA ideia por trás disso é que a grande maioria das atualizações “não quebrará o sistema”. Caso de uma atualização de um LibreOffice, um GIMP ou mesmo um Chromium mais recente. Nestes casos, o usuário pode contar com a versão mais recente sempre.")
	        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Archlinux-icon-crystal-64.svg/1200px-Archlinux-icon-crystal-64.svg.png')
	        .addFields(
                { name: 'Criador', value: 'Judd Vinet', inline: true },
				{ name: "Criação", value: '11 de março de 2002', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'pacman', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo pacman -Syu', inline: true },
                { name: "Disponivel para sistemas: ", value: '64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
