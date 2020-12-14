const Discord = require('discord.js')

module.exports={
    name:"info-lubuntu",
    description:"Informações sobre o Lubuntu",
    execute(message) {
        const embed = new Discord.MessageEmbed()
            .setColor('#5b39b8')
            .setTitle("Acesse o site oficial do Lubuntu")
            .setURL('https://lubuntu.me')
           .setDescription('Lubuntu  é um projeto derivado da distribuição Linux Ubuntu que utiliza o ambiente de desktop LXQt (anteriormente usava o LXDE). Seu diferencial está em seu desenvolvimento, que foca computadores e notebooks antigos, com menos de 512 MB de RAM.\n\nComo o Xubuntu, o Lubuntu é voltado para ambientes com baixos requisitos de sistema e pouca memória RAM como netbooks, dispositivos móveis e PCs mais antigos e lentos. Testes mostram que ele pode usar metade da quantidade de memória RAM do Xubuntu, tornando-o uma opção atraente para instalação em hardwares mais antigos, como computadores reformados para distribuição de caridade.')
            .setAuthor('O que é o Lubuntu?', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Lubuntu_logo_only.svg/1024px-Lubuntu_logo_only.svg.png')
	        .setImage('https://upload.wikimedia.org/wikipedia/commons/8/83/Lubuntu_20.10_Desktop_en.png')
	        .addFields(
                { name: 'Criadores', value: 'Lubuntu Community e LXDE Foundation', inline: true },
				{ name: "Criação", value: '2 de maio de 2010', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'APT', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt-get update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()
        message.channel.send(embed)    
    }
}