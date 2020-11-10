const Discord = require("discord.js")

module.exports = {
    name: 'ubuntu-minimal',
    aliases: ['ubuntum', 'minimalubuntu', 'minimal-ubuntu', 'ubuntuminimal'],
	description: 'Informações do Ubuntu Minimal!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
            .setColor('#ff5100')
            .setTitle('Acesse o site oficial da Ubuntu')
            .setURL('https://ubuntu.com/')
            .setAuthor('O que é o Ubuntu Minimal?', 'https://cdn0.iconfinder.com/data/icons/flat-round-system/512/ubuntu-512.png')
            .setDescription("Se você realizar o comando '%Ubuntuinfo' pode obter todas as informações gerais sobre o Ubuntu em si, mas esse comando é pra falar mais sobre o Ubuntu Minimal. Uma iso bem minimalista do Ubuntu mas que a canonical não fala muito sobre ela.\n\nEssa iso é baseado nas versões do Ubuntu, ela tem como função ser uma distribuição minima onde o usuário pode 'criar' seu sistema operacional baseado no Ubuntu. Ele pode fazer com que o mesmo seja tanto um Desktop pessoal quanto um servidor SSH para seus usos.\n\nQuando iniciar o instalador ele te apresentara uma tela minima onde você pode configurar ele ao seu gosto escolhendo e instalando os pacotes e Interfaces que bem desejar.\n\nA instalação é simples, é como se fosse instalar qualquer outra distribuição, mas quando o sistema for baixado ele ira abrir um menu onde te dara opções para você poder instalar sendo Interfaces ou até serviços para o sistema, desse jeito a instalação é feita com os componentes e é preciso apenas reiniciar o computador para que as alterações sejam aplicadas.")
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