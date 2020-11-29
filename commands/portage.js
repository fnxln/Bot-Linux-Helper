const Discord = require("discord.js")

module.exports = {
	name: 'portage',
	aliases: ['portage-info'],
	description: 'Informações do gerenciador de pacotes portage!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setColor('#ddadff')
	        .setTitle('O que é Portage?')
	        .setDescription('Portage é uma grande ferramenta de gerenciamento de software. Possui uma grande quantidade de características que o tornam flexível a ponto de ser apontado por muitos como a melhor ferramenta em Linux dessa categoria. Neste artigo trabalharemos muito com o emerge, que faz a intermediação entre o Portage e o usuário.\n\n"Portage tree", a árvore do Portage. Ela é uma coleção de ebuilds - arquivos que contém toda a informação necessária para manter/gerenciar o software. Essa coleção de ebuilds fica em /usr/portage. Portanto é necessário fazer o updated da árvore do Portage de tempos em tempos, e isso é feito usando o programa rsync.')
	        .setImage('https://i.imgur.com/oEkuRmH.jpg')
	        .addFields(
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Distros que usam Portage', value: 'Baseadas em Gentoo', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo emerge --sync', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
