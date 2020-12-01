const Discord = require('discord.js')

module.exports = {
    name: 'q4os',
	description: 'Informações do Q4OS!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
            .setColor('#352fa8')
            .setTitle('Acesse o site oficial do Q4OS')
            .setURL('https://q4os.org/')
            .setAuthor('O que é o Q4OS?', 'https://raw.githubusercontent.com/q4os/gui-art/master/icons_debonaire/drafts/jb/welcome7.png')
            .setDescription('O Q4OS é uma distribuição baseada no Debian 9 (Stretch) e agora está na versão 2.4 LTS chamada de Scorpion. Ela utiliza o ambiente Trinity 14.0.5. A missão do Q4OS é entregar um sistema que forneça segurança, confiabilidade, estabilidade (long-term) e uma integração estável nas novas features. Mas o maior diferencial deste sistema operacional é a velocidade e desempenho, tanto em equipamentos mais novos, quanto em equipamentos mais antigos.\n\nPara quem procura uma boa alternativa Linux ao Windows, sem duvida que o Q4OS é uma óptima escolha. Toda a navegação no sistema é muito intuitiva e o sistema facilita as mais diversas acções do utilizador.')
            .setThumbnail('https://raw.githubusercontent.com/q4os/gui-art/master/icons_debonaire/drafts/jb/welcome7.png')
            .addFields(
                { name: "Criação", value: '06 de junho de 2018', inline:true},
                { name: '\u200B', value: '\u200B' },
                { name: "Método de Atualização: ", value: 'sudo apt-get update' , inline: true},
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
            .setTimestamp()

        message.channel.send(embed)
    },
};