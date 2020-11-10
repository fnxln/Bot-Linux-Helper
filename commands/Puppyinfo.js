const Discord = require("discord.js")

module.exports = {
	name: 'puppy',
	aliases: ['puppy-linux', 'puppylinux'],
	description: 'Informações do Puppy Linux!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setTitle('Acesse o site oficial do Puppy Linux')
	        .setURL('http://puppylinux.com')
	        .setAuthor('O que é o Puppy Linux?', 'https://img1.gratispng.com/20180427/pow/kisspng-puppy-linux-linux-distribution-puppy-clipart-5ae32a0d7ec540.4359623215248368775193.jpg')
	        .setDescription('Puppy Linux é uma distribuição Live CD Linux iniciada por Barry Kauler. O Puppy é muito pequeno, e desenvolvido para ser seguro, fácil de usar e completamente customizável. Todo o sistema operacional e todos os outros aplicativos rodam da memória RAM. Há algumas aplicações inclusas tais como SeaMonkey/Mozilla, AbiWord, Sodipodi, Gnumeric, e Gxine/Xine. Há ainda a possibilidade de se adicionar aplicações, com a ferramenta Setup, adicionar e remover. A distribuição foi desenvolvida do zero, não sendo baseada em nenhuma outra distribuição.\n\nO Puppy consegue ser rápido e leve porque funciona de uma forma um pouco diferente: todo o sistema e seus apps são carregados na memória RAM do computador, o que significa que ele ocupa muito pouco espaço na mídia em que está rodando. Essa característica o torna ideal para acessar HDs de máquinas antigas que não estão dando boot.')
	        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Puppy_logo.svg/768px-Puppy_logo.svg.png')
	        .addFields(
				{ name: "Criação", value: '29 de março de 2005', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'PetGet', inline: true },
                { name: "Disponivel para sistemas: ", value: '32' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
