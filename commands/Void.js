const Discord = require('discord.js')

module.exports = {
    name:"info-void",
    description:"Oferecer informações do Void Linux!",
    execute(message) {
        const embed = new Discord.MessageEmbed()
            .setColor('#4f9e6f')
            .setTitle('Acesse o site oficial do Void Linux')
            .setURL('https://linuxmint.com/')
            .setAuthor('O que é o Void?', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Void_Linux_logo.svg/1242px-Void_Linux_logo.svg.png')
            .setDescription('VOID é uma Distro Rolling Release, ela recebe atualizações constantes, porém não é Bleeding Edge, ou seja, existe um certo atraso na entrega de atualizações em comparação a outras Distros Rolling Release, como o OpenSUSE Tumbleweed e o Arch Linux, mas nada muito grave, então aqueles que são amantes de programas sempre atualizados podem ficar tranquilos, o VOID dá conta do recado.\n\nAdemais, o VOID é uma Distro que segue a filosofia KISS (“keep it simple, stupid” ou “mantenha simples, idiota”), fazendo com que ela seja uma Distro minimalista, leve e direcionada aos usuários intermediários/avançados por obrigar o mesmo a utilizar o terminal e não segurar a mão ou ajudar o usuário, logo você precisará ler/assistir e executar para aprender, então aqueles que estão acostumados com o Arch podem muito bem se sentir confortáveis utilizando o VOID, mas isso não é uma regra, então caso desejem utilizar o VOID, preparem-se e sejam receptíveis a algo diferente.\n\nO VOID oferece por padrão ISOs com o Cinnamon, LXDE, LXQT, MATE e XFCE, além de oferecer uma ISO mínima que instala apenas a base do sistema, possibilitando que o usuário monte o sistema do jeito que ele desejar, então caso você queira utilizar o KDE Plasma, instale você mesmo. O VOID não utiliza o Systemd como sistema de inicialização, ele usa o Runit, um sistema de inicialização para sistemas Unix-like e um dos impactos disso é o tempo de Boot, este que é bem rápido.\n\nO gerenciador de pacotes do VOID é o XBPS, atualmente exclusivo do VOID, e é um sistema de gerenciamento híbrido, uma vez que permite aos usuários instalar, atualizar e remover software rapidamente, ou compilar programas a partir das fontes através de um processo bem simples que utiliza o xbps-src, podendo ser comparado rudemente com o AUR da “família” Arch, porém este é mantido oficialmente e recomendado pela equipe de desenvolvimento, diferentemente do AUR.')
            .setImage("https://i1.wp.com/itsfoss.com/wp-content/uploads/2019/04/Void-Linux-Neofetch.png")
            .addFields(
                { name: 'Criador', value: 'Juan Romero Pardines', inline: true },
				{ name: "Criação", value: '9 de Novembro 2019', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'xbps', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo xbps-install -u', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
    }
}