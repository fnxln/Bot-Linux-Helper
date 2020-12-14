const Discord = require('discord.js')

module.exports = {
    name: 'info-funtoo',
	description: 'Informações do Funtoo!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
            .setColor('#ddadff')
            .setTitle('Acesse o site oficial do Funtoo')
            .setURL('https://www.funtoo.org/Welcome')
            .setAuthor('O que é o Funtoo?')
            .setDescription("Daniel Robbins originalmente escreveu a Filosofia Gentoo Linux, e nisso definiu o conceito de uma ferramenta ideal assim sendo algo que 'simplesmente funciona', não fica no caminho do usuário, e responde a vontade do usuário ao invés de forçar o usuário a trabalhar de um jeito particular. Funtoo Linux é um projeto de pessoas que concordam filosofia da ferramenta ideal, e que são apaixonadas pelo nosso desejo de melhorar a tecnologia de ser tão próximo desse ideal quanto possível. O foco de nossos esforços é o melhoramento contínuo da distribuição Gentoo Linux. O foco do desenvolvimento do Funtoo Linux é atualmente direcionado ao sistema central (core system), significando qualquer coisa em um stage3, portage, core languages, kernels, aplicações de servidor, e em cima do X11 e gerenciadores de janelas simples, e incluindo ambientes desktop como o GNOME e o KDE.\n\nOs desenvolvedores devem utilizar esses princípios gerais para determinar em quais prioridades focar primeiro. -Essas áreas abaixo estão listadas em ordem de prioridade, então o próximo parágrafo é a mais alta prioridade (top priority), seguido pela próxima prioridade, etc. Só por que algo é prioridade mais baixa não significa que é 'menos importante' - somente significa tratar as coisas de prioridades mais altas (higher-priority) primeiro.")
            .setImage("https://i.ytimg.com/vi/iSREHD7RLrg/maxresdefault.jpg")
            .addFields(
                { name: 'Criador', value: 'Daniel Robbins', inline: true },
                { name: "Criação", value: 'Dezembro de 2007 ', inline:true},
                { name: '\u200B', value: '\u200B' },
                { name: 'Gerenciador de pacotes', value: 'Portage', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'emerge -auDN @world', inline: true },
                { name: "Disponivel para sistemas: ", value: 'Multiplataforma' , inline: true}
            )
            .setTimestamp()

        message.channel.send(embed)
    },
};