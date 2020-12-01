const Discord = require('discord.js')

module.exports = {
    name: 'tails',
	description: 'Informações do Tails!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
            .setColor('#9803fc')
            .setTitle('Acesse o site oficial do Tails')
            .setURL('https://tails.boum.org/index.pt.html')
            .setAuthor('O que é o Tails?', 'https://ih1.redbubble.net/image.555430353.4190/flat,750x1000,075,f.u2.jpg')
            .setDescription('O Tails é um sistema operacional criado especialmente para proteger o seu anonimato na internet. Ele foi desenvolvido com base no Debian, uma das distribuições Linux mais tradicionais que existem.\n\nA sigla Tails é um acrônimo para “The Amnesic Incognito Live System”, nome que já indica o propósito da plataforma: permitir que você fique incógnito na rede. A palavra “Amnesic” também não está ali somente para enfeitar; o sistema roda diretamente a partir de um DVD, pendrive ou cartão SD, impedindo que ele registre qualquer dado das suas atividades na máquina.\n\nCom isso, os dados não ficam armazenados em um HD quando você liga o sistema: tudo fica em um disco virtual criado na memória RAM. Deste modo, quando você desliga o computador, o Tails realiza uma varredura na memória RAM para eliminar completamente qualquer traço de atividade recente, causando uma verdadeira “amnésia” no sistema quando a máquina for ligada novamente.\n\nIsso significa que o Tails garante o seu anonimato e a sua privacidade por completo na internet, evitando censuras e eliminando os rastros completamente, a não ser, é claro, que você queira manter algum dado gravado no computador.')
            .setImage('https://img.ibxk.com.br///2014/06/24/24165704617689.jpg')
            .addFields(
                { name: 'Criador', value: '	Tor', inline: true },
                { name: "Criação", value: '23 de junho de 2009', inline:true},
                { name: '\u200B', value: '\u200B' },
                { name: 'Gerenciador de pacotes', value: 'APT', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt-get update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64' , inline: true}
            )
            .setTimestamp()

        message.channel.send(embed)
    },
};