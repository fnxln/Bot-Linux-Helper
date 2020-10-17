const Discord = require('discord.js')

module.exports={
    name:"Debianinfo",
    description:"Informações sobre o Debian",
    execute(message) {
        const embed = new Discord.MessageEmbed()
            .setColor('#f54260')
            .setTitle("Acesse o site oficial do Debian")
            .setURL('https://www.debian.org/intro/about.pt.html')
            .setDescription('Debian, ou pros mais antigos, a "Distribuição universal". Foi criada em 1993 e agradeça Ian Murdock por ele ter criado ele, pois são grandes as distribuições que são baseadas no Debian, principalmente a mais famosa, o Ubuntu. O Ubuntu ele é baseado em Debian porém ele sofre alterações que dão mais liberdade ao usuário do que o Debian.\n\nO Debian é uma das mais antigas distribuições que sofre atualizações até hoje, seu objetivo é servir tanto em computadores modernos quanto em computadores antigos. A sua instalação é simples e pratica, mas o que merece mais atenção é que o usuário pode escolher qual interface de desktop ele pode instalar e utilizar. Seus requisitos são bem simples, e ela é recomendada tanto para quem quer utilizar de forma normal quanto para desenvolvedores.\n\n\O Debian oferece suporte a longo prazo, e sua filosofia principal é sempre deixar o sistema estavél e equilibrado, ou seja, o usuário por mais que consiga adicionar ppa, ele estara quebrando a regra da distribuição, os drivers instalados sempre serão a versão que o Debian recomenda. Existe também uma versão dessa distro onde o mesmo só ira aceitar a instalação e uso de Softwares livres.\n\nO Debian é leve e é recomendado para todos, se você quer estudar Debian vai em frente, pois assim você ira expandir seu conhecimento através da "distribuição universal". Uma curiosidade divertida: O Debian a cada atualização recebe o nome de um personagem de Toy Story.')
            .setAuthor('O que é o Debian?', 'https://cdn0.iconfinder.com/data/icons/flat-round-system/512/debian-512.png')
	        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Openlogo-debianV2.svg/1200px-Openlogo-debianV2.svg.png')
	        .addFields(
                { name: 'Criador', value: 'Ian Murdock', inline: true },
				{ name: "Criação", value: '16 Agosto de 1993', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'apt', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt-get update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()
        message.channel.send(embed)    
    }
}