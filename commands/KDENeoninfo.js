const Discord = require('discord.js')

module.exports = {
	name: 'KDENeoninfo',
	description: 'Informações do KDE Neon!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
            .setColor('#32a8a4')
            .setTitle('Acesse o site oficial do KDE Neon')
            .setURL('https://neon.kde.org/')
            .setDescription('KDE neon é um conjunto de repositórios de softwares para o Ubuntu com suporte de longo prazo com lançamentos mais recentes da versão 64-bit do ambiente de desktop KDE e seus aplicativos. É também o nome dado a uma distribuição Linux e sistema operacional baseada no Ubuntu LTS que utiliza destes mesmos repositórios.\n\nTem como objetivo proporcionar aos usuários versões rapidamente atualizadas do Qt e de softwares do KDE, enquanto atualiza o resto dos componentes do sistema operacional Ubuntu no ritmo normal. Está disponível em edições para usuários e desenvolvedores.\n\nSendo uma distribuição Linux e sistema operacional derivada do Ubuntu, o KDE neon possui como foco o desenvolvimento de software para a comunidade KDE. A ênfase em pacotes em suas versões mais recentes (denominadas como bleeding edge, obtidos diretamente a partir do KDE antes do lançamento estável) oferece aos programadores acesso antecipado a novas funcionalidades livres de bugs.\n\nPelo fato do Kubuntu ter a interface KDE Plasma em uma base Ubuntu, muitas vezes o KDE neon acaba sendo confundido com o Kubuntu (e vice-versa). No entanto, a principal diferença entre os dois sistemas operacionais é que o Kubuntu mantém versões estáveis e LTS do Ubuntu, enquanto o KDE neon foca em atualizações de edições para desenvolvedores de aplicativos do KDE sem a manutenção de versões estáveis do Ubuntu, salvo em caso do usuário root decidir atualizar (upgrade) o seu sistema.')
            .setAuthor('O que é o KDE Neon?', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Neon-logo.svg/1024px-Neon-logo.svg.png')
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Neon-logo.svg/1024px-Neon-logo.svg.png')
            .addFields(
                { name: 'Criadores', value: 'Comunidade KDE', inline: true },
                { name: "Criação", value: '8 de junho de 2016', inline:true},
                { name: '\u200B', value: '\u200B' },
                { name: 'Gerenciador de pacotes', value: 'APT', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt-get update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
            .setTimestamp()

        message.channel.send(embed)
    },
};