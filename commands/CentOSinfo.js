const Discord = require('discord.js')

module.exports = {
    name: 'centoos',
    aliases: ['cent-os'],
	description: 'Informações do CentOS!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
            .setColor('#68fc7b')
            .setTitle('Acesse o site oficial do CentOS')
            .setURL('https://www.centos.org')
            .setAuthor('O que é o CentOS?', 'https://seeklogo.com/images/C/centos-logo-494F57D973-seeklogo.com.png')
            .setDescription('O CentOS, abreviação de Community ENTerprise Operating System, é uma distribuição Linux de classe corporativa derivada de códigos fonte gratuitamente distribuídos pela Red Hat Enterprise Linux e mantida pelo CentOS Project. A numeração das versões é baseada na numeração do Red Hat Enterprise Linux. Por exemplo, o CentOS 4 é baseado no Red Hat Enterprise Linux 4. A diferença básica entre um e outro é o fornecimento de suporte pago na aquisição de um Red Hat Enterprise Linux. Em termos de funcionalidade, podem ser considerados sistemas clones.\n\nEmbora o CentOS seja bem visado para seu uso em servidores devido a sua estabilidade e robustez, o CentOS não é um sistema exclusivo de servidores. Tem essa fama devido seu foco em recursos estáveis (semelhante ao que o Debian GNU/Linux faz) e as aplicações focados em estações de trabalho e redes por padrão. Ele pode ser usado como uso comum, porém, é necessário a adição de repositórios adicionais que não vem ativos por padrão. Os mais comuns são: RPMFusion e o EPEL.\n\nNo dia 7 de janeiro de 2014 a Red Hat anunciou a incorporação do projeto e comunidade CentOS aos seus portfólios. Segundo anúncio essa incorporação trará benefícios para a comunidade de usuários de ambas as distribuições, gerando maiores inovações nos projetos livres adotados e para toda a arquitetura corporativa.')
            .setThumbnail('https://seeklogo.com/images/C/centos-logo-494F57D973-seeklogo.com.png')
            .addFields(
                { name: 'Criadores', value: '	The CentOS Project (projeto CentOS) Afiliado a Red Hat.', inline: true },
                { name: "Criação", value: '14 de maio de 2004', inline:true},
                { name: '\u200B', value: '\u200B' },
                { name: 'Gerenciador de pacotes', value: 'DNF', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo dnf upgrade --refresh', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
            .setTimestamp()

        message.channel.send(embed)
    },
};