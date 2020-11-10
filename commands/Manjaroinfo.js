const Discord = require('discord.js')

module.exports={
    name:"manjaro",
    description:"Informações sobre o Manjaro",
    execute(message) {
        const embed = new Discord.MessageEmbed()
            .setColor('#03fc9d')
            .setTitle("Acesse o site oficial do Manjaro")
            .setURL('https://manjaro.org/')
            .setDescription('Manjaro Linux, ou apenas Manjaro (pronunciado como Kilimanjaro), é uma distribuição Linux, como ambiente gráfico padrão Xfce, porem é possivel usar com outras interfaces como KDE, gnome e etc. Um sistema operacional de software livre, principalmente para computadores pessoais destinadas a facilidade de uso. Como sua base, Arch Linux, Manjaro usa um modelo rolling release.\n\nManjaro Linux é baseada no Arch Linux, tendo o seu próprio conjunto de repositórios. A distribuição tem como objetivo ser uma nova “distro” amigável ao usuário (user friendly), mantendo a poderosa base Arch, mais notavelmente o gerenciador de pacotes Pacman e compatibilidade com o AUR (Repositório dos Usuários do Arch) junto com snap e flatpack. Manjaro usa 3 (três) conjuntos de repositórios de software: os repositórios instáveis ​​contêm a maioria dos pacotes Arch mais novos, possivelmente um ou dois dias em atraso, os repositórios de teste contêm pacotes dos repositórios instáveis ​​sincronizados a cada semana, o que proporciona uma triagem inicial, e os repositórios estáveis, que ​​contêm apenas os pacotes que são considerados estáveis ​​pela equipe de desenvolvimento.\n\nPara quem é iniciante ou ja usuário avançado e quer ter total liberdade sobre controle de pacotes, aprender um pouco do Arch Linux, ter grande suporte e ainda sim uma distribuição leve o Manjaro é perfeito. Considerado por muitos uma distribuição perfeita justamente pelo que ele entrega, leveza, simplicadade, elegancia e um porte enorme com os programas. Então se liga no que você precisa pra usar o Manjaro: Pelo menos uma CPU de 1Ghz, 1GB de RAM, 30GB de espaço e só.')
            .setAuthor('O que é o Manjaro?', 'https://www.pngkey.com/png/full/443-4432771_maiacircleoil-icon-menu-turquoise-transparent.png')
	        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Manjaro-logo.svg/1024px-Manjaro-logo.svg.png')
	        .addFields(
                { name: 'Criadores', value: 'Roland Singer, Guillaume Benoit, Philip Müller', inline: true },
				{ name: "Criação", value: '10 de julho de 2011 ', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'Pacman', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo pacman -Syu', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()
        message.channel.send(embed)    
    }
}