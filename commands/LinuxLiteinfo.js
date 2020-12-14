const Discord = require("discord.js")

module.exports = {
	name: 'info-linuxlite',
	aliases: ['info-lite-linux', 'info-litelinux', 'info-lowlinux'],
	description: 'Informações do Linux Lite!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setColor('#c5cf72')
	        .setTitle('Acesse o site oficial do Linux Lite')
	        .setURL('https://www.linuxliteos.com')
	        .setAuthor('O que é o Linux Lite?', 'https://www.linuxliteos.com/assets/img/logos/linux_lite_feather_logo.png')
	        .setDescription("Como o próprio nome sugere, Linux Lite é uma distribuição Linux peso pena que não precisa de um super hardware, ou seja, ela pode ser usada facilmente em computadores mais antigos. A equipe por trás da distro afirma que: “Linux Lite é totalmente funcional “Out of the box” (fora da caixa, ou como é entregue), isso significa que você não terá que instalar nenhum software extra quando iniciar o computador pela primeira vez.\n\nIsso é muito útil, principalmente para iniciantes, já que eles não precisam sair a procura de alguns aplicativos básicos para instalar. Linux Lite traz uma forma muito simples de usar o utilitário de backup, alterar data e hora, pesquisar arquivo e muito mais.\n\nA distro também traz o Cleaner Lite, um recurso fácil de usar que deixará seu sistema mais limpo, e o Lite Welcome, que aparece na primeira inicialização e dá informações úteis sobre Linux Lite, incluindo atualizações, suporte e desenvolvimento. É importante lembrar que, como a distribuição é baseada no Ubuntu LTS (Long Term Support), recebe um suporte mais longo. Isso significa que uma vez que você instalar o Linux Lite no seu computador, ele receberá atualizações por 5 anos.")
	        .setImage('https://i.imgur.com/p5ZSI7j.png')
	        .addFields(
                { name: 'Criador', value: 'Rafael Rachid', inline: true },
                { name: 'Criação', value: '26 de outubro de 2012', inline: true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'APT', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
