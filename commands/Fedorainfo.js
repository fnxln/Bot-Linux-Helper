const Discord = require('discord.js')

module.exports = {
	name: 'info-fedora',
	description: 'Informações do Fedora!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
            .setColor('#352fa8')
            .setTitle('Acesse o site oficial do Fedora')
            .setURL('https://getfedora.org/pt_BR/')
            .setAuthor('O que é o Fedora?', 'https://cdn0.iconfinder.com/data/icons/flat-round-system/512/fedora-512.png')
            .setDescription('Fedora é uma distribuição Linux baseada em pacotes RPM, criada pela Red Hat. Atualmente mantida pelo Projeto Fedora (Fedora Project). Sua instalação é semelhante a versão 9 do Red Hat, em computadores com mais de 1GHz de processamento e 256 de MB de memória RAM, a instalação padrão demora cerca de 30 minutos. Depois da instalação o GNOME fica como gestor de desktop padrão, podendo ser mudado para o KDE, WindowMaker, XFCE e etc. Já vem com o browser Mozilla Firefox, com OpenOffice.org e suporte a diversos idiomas, além de uma grande diversidade de programas para servidores e desktops. Novas versões do Fedora são lançadas aproximadamente cada 6 meses.\n\nO Fedora representa um conjunto de projetos patrocinados pela Red Hat e direcionados pelo Projeto Fedora. Estes projetos são desenvolvidos por uma imensa comunidade internacional de pessoas focadas em prover e manter as melhores iniciativas através dos padrões livres do software de fonte aberto. A Distribuição GNU/Linux Fedora , projeto central do Fedora, é um sistema operacional baseado no Linux, sempre gratuito para ser usado, modificado e distribuído por qualquer pessoa.\n\nA distribuição Fedora continuou a apostar em Distros recheadas de inovações, com prestações muito sólidas e com uma abordagem sempre muito séria às questões de segurança. Terá sido esta ousadia e entusiasmo que valeram ao Fedora uma rapidíssima entrada no Top10 da DistroWatch.')
            .setImage('https://img.vivaolinux.com.br/imagens/dicas/comunidade/fedora27ss.png')
            .addFields(
                { name: 'Criador', value: 'Fedora Project ', inline: true },
                { name: 'Empresa', value: 'Red Hat', inline: true},
                { name: "Criação", value: '6 de novembro de 2003', inline:true},
                { name: '\u200B', value: '\u200B' },
                { name: 'Gerenciador de pacotes', value: 'DNF', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo dnf upgrade --refresh', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
            .setTimestamp()

        message.channel.send(embed)
    },
};