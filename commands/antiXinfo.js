const Discord = require("discord.js")

module.exports = {
	name: 'info-antix',
	description: 'Informações do AntiX Linux!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setTitle('Acesse o site oficial do AntiX Linux')
	        .setURL('https://antixlinux.com/')
	        .setAuthor('O que é o AntiX Linux?', 'https://antixlinux.com/wp-content/uploads/2017/03/logo_antiX.png')
	        .setDescription('O antiX é uma distribuição Linux construída diretamente no Debian Stable. É comparativamente leve e adequado para computadores mais antigos, além de fornecer aplicativos e kernel de ponta, além de atualizações e adições através do sistema de pacotes apt-get e repositórios compatíveis com o Debian.\n\nO antiX tem 4 versões, são elas o antiX-full, 4 gerenciadores de janelas – IceWM (padrão), fluxbox, jwm e herbstluftwm, além do pacote completo do libreoffice, antiX-base que contem 4 gerenciadores de janelas – IceWM padrão), fluxbox, jwm e herbstluftwm, antiX-cores, deve suportar a maioria dos dispositivos sem fio e o antiX-net, apenas o suficiente para conectar você (com fio) e pronto para construir.')
			.setImage('https://www.edivaldobrito.com.br/wp-content/uploads/2020/10/antix-19-3-lancado-com-correcoes-atualizacoes-de-pacotes-e-outras-melhorias.jpg')
			.addFields(
				{ name: "Criação", value: '9 de julho de 2007', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'apt', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt-get update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
