const Discord = require('discord.js')

module.exports={
    name:"Elementaryinfo",
    description:"Informações sobre o Elementary OS",
    execute(message) {
        const embed = new Discord.MessageEmbed()
            .setColor('c7c7c7')
            .setTitle("Acesse o site oficial do ElementaryOS")
            .setURL('https://elementary.io/pt_BR/')
            .setAuthor('O que é o ElementaryOS?', 'https://image3.mouthshut.com/images/imagesp/925793275s.png')
            .setDescription('Elementary OS é uma distribuição de Linux baseada nos lançamentos do Ubuntu com suporte de longo prazo e utiliza o ambiente de desktop Pantheon, que usa a linguagem de programação Vala. A sua interface de usuário visa ser intuitiva para novos usuários sem utilizar muitos recursos. Essa distribuição tem seu intuito ser o subtituto perfeito do Mac e do Windows.\n\nPara gerir todo o sistema, o elementary OS traz também bastantes ferramentas. Há um gestor do desktop, de notificações, várias ferramentas para gerir o hardware, ferramentas para configurar a rede, contas de serviços online, partilha de ficheiros, controlo parental, criação de contas e grupos, etc. Seu visual minimalista e bem definido é o que mais chama a atenção.\n\nSeus requisitos são um pouco pesados, 4GB de RAM, Intel i3 Dual-Core recente ou equivalente e 15GB de armazenamento.')
	        .setThumbnail('https://image3.mouthshut.com/images/imagesp/925793275s.png')
	        .addFields(
                { name: 'Criador', value: 'Daniel Foré', inline: true },
				{ name: "Criação", value: '31 de março de 2011', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'apt', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt-get update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()
        message.channel.send(embed)    
    }
}