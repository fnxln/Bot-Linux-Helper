const Discord = require("discord.js")

module.exports = {
	name: 'ubuntu-info',
	aliases: ['ubuntuinfo', 'infoubuntu'],
	description: 'Informações do Ubuntu!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setColor('#ff5100')
	        .setTitle('Acesse o site oficial da Ubuntu')
	        .setURL('https://ubuntu.com/')
	        .setAuthor('O que é o Ubuntu?', 'https://cdn0.iconfinder.com/data/icons/flat-round-system/512/ubuntu-512.png')
	        .setDescription("O Ubuntu é uma das mais populares distribuição Linux. Existem centenas delas disponíveis para o usuário, Xubuntu, Lubuntu, Kubuntu e entre outros. Cada uma apresentando as suas peculiaridades, vantagens e desvantagens, dependendo de qual usuário for instalar e suas necessidades.\n\n O Ubuntu é bastante popular pelo seu Desktop moderno, atraente e simples de usar. Sua principal vantagem é na usabilidade, assim o usuário pode se sentir mais a vontade com a distribuição.\n\nFoi desenvolvido em 2004 pela empresa Canonical, fundada pelo sul-africano Mark Shuttleworth, baseado na distribuição Debian.  Sua filosofia difere dos demais sistemas por defender que ele seja usado pelas pessoas em suas línguas locais. Além do mais, ele pode ser personalizado de forma a atender toda e qualquer necessidade do usuário.\n\nO Ubuntu tem um novo lançamento a cada seis meses: um no mês de abril e outro em outubro. Por conta dessa característica, o numero da versão é composto pelos dois dígitos do ano e do mês, por exemplo: 19.04 = 04/2019, 20.10 = 10/2020. Além disso ele recebe um nome de um animal a cada atualização por exemplo: Ubuntu 20.10 Grovy Gorila.\n\nO Ubuntu também oferece uma loja propia para instalar programas e pacotes ao gosto do usuário, também oferece uma lista de drivers para placa de video caso o usuário tenha uma na maquina. Desse jeito facilitando a pós-instalação do sistema")
	        .setThumbnail('https://i.dlpng.com/static/png/6541105_preview.png')
	        .addFields(
                { name: 'Criador', value: 'Mark Shuttleworth', inline: true },
				{ name: 'Empresa', value: 'Canonical', inline: true},
				{ name: "Criação", value: '20 de outubro de 2004', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'apt', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt-get update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
