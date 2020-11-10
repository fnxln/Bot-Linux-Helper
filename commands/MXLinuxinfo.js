const Discord = require('discord.js')

module.exports={
    name:"mxlinux",
    aliases: ['mx-linux', 'linux-mx'],
    description:"Informações sobre o MXLinux",
    execute(message) {
        const embed = new Discord.MessageEmbed()
            .setColor('#e8e8e8')
            .setTitle("Acesse o site oficial do MXLinux")
            .setURL('https://mxlinux.org/')
            .setDescription('Procurando uma distribuição leve para PC’s antigos? MX Linux pode ser o que você busca. Conheça mais um pouco sobre ela e descubra onde baixar a distro. O MX Linux é um empreendimento cooperativo entre as comunidades antiX e ex-MEPIS, utilizando as melhores ferramentas e talentos de cada distro.\n\nSegundo sua própria comunidade, o objetivo desse sistema é “combinar um elegante e eficiente desktop com configuração simples, de alta estabilidade, desempenho sólido e ter ‘peso’ médio”.É um sistema operacional muito leve e fácil de instalar, projetado para combinar um desktop elegante e eficiente com configuração simples, alta estabilidade e desempenho sólido.\n\nEle foi construído sobre a base confiável e estável do Debian Jessie com aprimoramentos extras do sistema antiX live, que permite experimentar o sistema sem instalar (e muito mais). Basicamente, o sistema é um Debian Stable atualizado pelo backports. Ele possui um excelente reconhecimento de hardware, ambiente Xfce atualizado, sistema core antiX, ativação automática da maioria dos drivers Broadcom e um instalador UEFI (64 bits). O que precisa para executar: Uma CPU de 1Ghz, 2 de RAM e 20GB de espaço.')
            .setAuthor('O que é o MXLinux?', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/MX_Linux_logo.svg/1130px-MX_Linux_logo.svg.png')
	        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/MX_Linux_logo.svg/1130px-MX_Linux_logo.svg.png')
	        .addFields(
                { name: 'Criadores', value: 'Código aberto', inline: true },
				{ name: "Criação", value: '24 de março de 2014', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'APT', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt-get update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()
        message.channel.send(embed)    
    }
}