const Discord = require('discord.js')

module.exports={
    name:"FreeBSDinfo",
    description:"Informações sobre o Free BSD",
    execute(message) {
        const embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("Acesse o site oficial do FreeBSD")
            .setURL('https://www.freebsd.org')
            .setAuthor('O que é o FreeBSD?', 'https://seeklogo.com/images/F/freebsd-logo-542DF4765A-seeklogo.com.png')
            .setDescription('O FreeBSD é um sistema operativo livre do tipo Unix-like que provém do Research Unix via a Berkeley Software Distribution. Porém, por motivos legais o FreeBSD não pode usar a marca registrada Unix, que é um descendente do BSD, o qual foi historicamente chamado "BSD Unix" ou "Berkeley Unix".\n\nO sistema oferece rede avançada, performance, segurança e recursos de compatibilidade que hoje ainda estão faltando em outros sistemas operacionais, até mesmo nas melhores opções comerciais.\n\nO FreeBSD traz recursos avançados de rede de sistema operacional para aparelhos e plataformas embarcadas, de sofisticados aparelhos baseados em Intel a ARM, PowerPC e plataformas de hardware MIPS. Além disso, de aplicações web e e-mail a roteadores, servidores de tempo e access points sem fio, fornecedores do mundo inteiro confiam nos ambientes de plataforma integrada e multi-plataforma do FreeBSD como a fundação para seus produtos embarcados. E a licença open source Berkeley permite que eles decidam quantas das mudanças locais eles querem relatar de volta à equipe de desenvolvedores.\n\nCom mais de 24.000 bibliotecas e aplicações portadas, o FreeBSD suporta aplicações para desktop, servidor, dispositivos e ambientes embarcados. O sistema pode ser instalado de uma variedade de mídias, incluindo CD-ROM, DVD ou diretamente através da rede usando FTP ou NFS. Tudo que você precisa está nessas instruções. Enquanto você talvez espere que um sistema operacional com esses recursos seja vendido por um alto preço, o FreeBSD está disponível sem qualquer custo e vem com o código fonte.')
            .setThumbnail('https://seeklogo.com/images/F/freebsd-logo-D2E9B59F6A-seeklogo.com.png')
	        .addFields(
                { name: 'Criadores', value: 'Jordan Hubbard, Nate Williams e Rod Grimes', inline: true },
				{ name: "Criação", value: '1 de novembro de 1993', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'pkg', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'portsnap fetch update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()
        message.channel.send(embed)    
    }
}