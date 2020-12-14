const Discord = require('discord.js')

module.exports={
    name:"info-mageia",
    aliases: ['info-mageia-linux'],
    description:"Informações sobre o Mageia",
    execute(message) {
        const embed = new Discord.MessageEmbed()
            .setColor('c7c7c7')
            .setTitle("Acesse o site oficial do Mageia Linux")
            .setURL('https://www.mageia.org/pt-br/')
            .setAuthor('O que é o  Mageia?', 'https://banner2.cleanpng.com/20181106/ukg/kisspng-mageia-linux-mint-logo-linux-distribution-mageia-wikipedia-5be18ab9b47a48.3101372015415077697392.jpg')
            .setDescription('Mageia é um sistema operacional linux, uma distribuição Linux disponibilizada como software livre e código aberto, criada a partir de um fork da distribuição Mandriva Linux. A Mageia é desenvolvida de forma comunitária, com a contribuição de usuários e desenvolvedores de diversos países, com líderes eleitos pela comunidade, sob a coordenação da Mageia.Org, uma associação francesa sem fins lucrativos.\n\nAinda assim, a Mageia tem sido uma Distro com uma aceitação impressionante, tendo recentemente, em novembro de 2017, atingido o 4.º lugar do ranking da DistroWatch. Espera-se que surja o apoio de uma comunidade reforçada ou mesmo de alguma grande empresa, como acontece com outras Distros, para que este projeto possa florescer como aconteceu desde o seu início.')
	        .setImage("https://upload.wikimedia.org/wikipedia/commons/9/9c/Mageia_7_KDE_Plasma_PT-BR.png")
	        .addFields(
				{ name: "Criação", value: '1 de junho de 2011', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'RPM', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo dnf update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()
        message.channel.send(embed)    
    }
}