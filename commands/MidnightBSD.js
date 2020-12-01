const Discord = require('discord.js')

module.exports = {
    name: 'midnightbsd',
    aliases: ['midnight-bsd'],
	description: 'Informações do Midnight BSD!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
            .setColor('BLACK')
            .setTitle('Acesse o site oficial do Midnight BSD')
            .setURL('https://www.midnightbsd.org/')
            .setAuthor('O que é o Midnight BSD?', 'https://www.jing.fm/clipimg/detail/445-4451468_freetoedit-black-cat-silhouette-cat-silhouette-png.png')
            .setDescription('O MidnightBSD é um sistema operacional gratuito, do tipo Unix, voltado para desktop, originalmente derivado do FreeBSD 6.1, e atualizado periodicamente com código e drivers de versões posteriores do FreeBSD. Seu ambiente de área de trabalho padrão, o GNUStep, empresta muito da interface gráfica do usuário NeXTSTEP.\n\nMidnightBSD começou como um fork do FreeBSD em 2005. O fundador do projeto, Lucas Holt, desejava criar um sistema operacional de desktop derivado do BSD. Ele estava familiarizado com vários projetos de live CD, mas não com o trabalho em TrueOS ou DesktopBSD. Ao mesmo tempo, ele também tinha interesse no GNUstep.\n\nAs duas ideias foram reunidas em um plano para criar um ambiente de área de trabalho amigável. MidnightBSD 0.1 foi lançado com base nos esforços de Lucas Holt, Caryn Holt, D. Adam Karim, Phil Pereira da bsdnexus e Christian Reinhardt. Esta versão apresenta uma versão modificada do sistema de ports do FreeBSD. O sistema de portas evoluiu para "mports", que incluem suporte falso, geração de pacotes antes da instalação, marcação de licença e regras estritas sobre geração de lista de pacotes e modificação de arquivos fora do destino. Muitos desses recursos foram introduzidos no MidnightBSD 0.1.1.')
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/MidnightBSDLogo.svg/1200px-MidnightBSDLogo.svg.png')
            .addFields(
                { name: 'Criadores', value: "Lucas and Caryn Holt's", inline: true },
                { name: "Criação", value: '6 de agosto de 2007', inline:true},
                { name: '\u200B', value: '\u200B' },
                { name: 'Gerenciador de pacotes', value: 'pkg', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
            .setTimestamp()

        message.channel.send(embed)
    },
};