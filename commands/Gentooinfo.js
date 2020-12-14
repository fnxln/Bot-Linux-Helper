const Discord = require('discord.js')

module.exports = {
    name: 'info-gentoo',
	description: 'Informações do Gentoo!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
            .setColor('#ddadff')
            .setTitle('Acesse o site oficial do Gentoo')
            .setURL('https://www.gentoo.org/')
            .setAuthor('O que é o Gentoo?', 'https://img2.gratispng.com/20180610/jvg/kisspng-gentoo-linux-kde-plasma-4-clip-art-hardened-gentoo-5b1cbb17f1ca68.5864536715286095599904.jpg')
            .setDescription('Gentoo é uma distribuição do Linux ideal para quem quer ter total controle sobre o que é instalado e executado no computador. Ela permite criar tanto desktops quanto servidores muito eficientes, porém é preciso bastante tempo e conhecimento para realizar uma configuração correta do sistema.\n\nO grande diferencial do Gentoo é encorajar os usuários a montar um kernel do Linux modelado especificamente para o seu hardware. Dessa forma é possível ter total controle sobre tudo que está instalado e sendo executado. Como ela permite desativar vários recursos desnecessários da kernel, o uso de memória também acaba sendo bastante reduzido.\n\nEssa distro teve o seu nome baseado no pinguim Gentoo que é conhecido por ser um nadador veloz, o pinguim mais rápido do mundo. O nome foi escolhido para representar as grandes melhorias na velocidade de otimização específica para a máquina, um dos seus maiores diferenciais.\n\nO seu pacote de gerenciamento foi criado para ser modular, portátil, flexível e de fácil manutenção. O Gentoo Linux pode ser descrito como uma meta-distribuição graças a sua adaptabilidade. A maior parte dos seus usuários tem configurações e programas instalados de forma única de acordo com a sua máquina.')
           .setImage('https://www.edivaldobrito.com.br/wp-content/uploads/2018/06/conheca-melhor-o-gentoo-e-alguns-dos-seus-derivados.jpg')
            .addFields(
                { name: 'Criador', value: 'Daniel Robbins', inline: true },
                { name: "Criação", value: '26 de julho de 2000', inline:true},
                { name: '\u200B', value: '\u200B' },
                { name: 'Gerenciador de pacotes', value: 'Portage', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'emerge -auDN @world', inline: true },
                { name: "Disponivel para sistemas: ", value: 'Multiplataforma' , inline: true}
            )
            .setTimestamp()

        message.channel.send(embed)
    },
};