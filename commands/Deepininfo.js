const Discord = require("discord.js")

module.exports = {
	name: 'Deepininfo',
	description: 'Informações do Deepin!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
	        .setColor('#34ebde')
	        .setTitle('Acesse o site oficial da Deepin')
	        .setURL('https://garudalinux.org')
	        .setAuthor('O que é o Deepin?', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Deepin_logo.svg/1200px-Deepin_logo.svg.png')
	        .setDescription("O deepin é uma distribuição Linux baseada no Debian Stable. Apresenta uma interface própria, chamada Deepin Desktop Environment; além de, uma acervo de aplicações próprias. É desenvolvida pela Wuhan Deepin Technology Company Limited, localizada em Wuhan, China.\n\nA interface do Deepin é muito charmosa e proporciona uma experiência incrível, diferente de algumas distribuições que são menos “polidas”. A verdade é que o Deepin é quase um Linux “Nutella” perto dos Linux considerados “Raiz”.\n\nOutro ponto é a configuração dos cantos da tela. Ao clicar com o botão direito na área de trabalho e clicar nas configurações de canto, é possível escolher uma função para cada canto da tela (mostrar desktop, todas as janelas, centro de controle, etc.). Ela será executada ao clicar naquele canto. As configurações são mostradas no lado esquerdo da tela quando você clica no ícone da engrenagem. Como você pode ver, não tem muito segredo e é tudo bem intuitivo. Para quem possui tela sensível ao toque, a versão 15.9 trouxe vários suportes.\n\nNa loja do Deepin é possível encontrar uma boa quantidade de programas que nem sempre estão presentes nas lojas de outros Linux. Por exemplo: Spotify e Chrome (o Chrome mesmo, mas o Chromium também está disponível).\n\nOutra vantagem do Deepin é a facilidade na instalação. É simples, direta e rápida. E, além disso, vem com vários programas básicos instalados. Sabe aquelas atualizações infinitas do Windows (aquelas que demoram uma vida para ligar/desligar o computador)? Você também pode ficar livre delas.")
	        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Deepin_logo.svg/1200px-Deepin_logo.svg.png')
	        .addFields(
                { name: 'Empresa', value:'Wuhan Deepin Technology Company Limited', inline: true},
				{ name: "Criação", value: '28 de fevereiro de 2004', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'APT', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
