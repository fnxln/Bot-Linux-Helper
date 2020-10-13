const Discord = require('discord.js')

module.exports = {
    name:"Kaliinfo",
    description:"Oferecer informações do Kali!",
    execute(message) {
        const embed = new Discord.MessageEmbed()
            .setColor('#020940')
            .setTitle('Acesse o site oficial do kali Linux')
            .setURL('https://www.kali.org/')
            .setAuthor('O que é Kali Linux?', 'https://drt.sh/img/surface-pro-refind/os_kali.png')
            .setDescription("O Kali Linux mais conhecido como 'A distro dos hackers' é uma distribuição linux baseada no Debian considerado o sucessor do Back Track. O projeto apresenta várias melhorias, além de mais aplicativos. É voltado principalmente para auditoria e segurança de computadores em geral. É desenvolvido e mantido pela Offensive Security Ltd.\n\nNa base desta Distribuição está a Offensive Security, uma empresa de renome e atuação mundial que se dedica ao desenvolvimento de soluções de segurança em software e sistemas de informação. O Kali ele poder ser tanto carregado em um pen drive para a execução dos programas e testes de vulnerabilidades quanto pode ser feito a instalação no computador.\n\nO kali não é feito para usos diarios e aplicações normais, é recomendado que seja utilizado para apenas profissionais de TI e experts nessa área de segurança.")
            .setThumbnail('https://www.pinclipart.com/picdir/big/107-1077742_kali-linux-kali-linux-logo-png-clipart.png')
            .addFields(
                { name: 'Empresa', value: 'Offensive Security', inline: true},
				{ name: "Criação", value: '13 de março de 2013', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'apt', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt-get update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
    }
}