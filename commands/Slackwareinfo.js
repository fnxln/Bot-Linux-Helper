const Discord = require("discord.js")

module.exports = {
	name: 'Slackwareinfo',
	description: 'Informações do Slackware!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
            .setColor('#4287f5')
            .setTitle('Acesse o site oficial do Slackware')
            .setURL('http://www.slackware.com/')
            .setAuthor('O que é o Slackware?', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Slackware_logo.svg/1024px-Slackware_logo.svg.png')
            .setDescription('Slackware é a mais antiga e conhecida distribuição GNU/Linux mantida ainda em evidência. Seu criador e responsável pela manutenção, Patrick Volkerding, estabelece uma meta de produção da distribuição baseada em simplicidade e estabilidade, alcançando o padrão de distribuição mais Unix-like ao manter seus usuários nas camadas de configuração em console de modo texto para uma total personalização do ambiente. Além de seu uso profissional, é considerado também como uma distribuição de nível acadêmico, mantendo uma vasta documentação atualizada em sua raiz, para os usuários que necessitem de maior conhecimento para dominá-lo.\n\nO Slackware é distribuído com a última versão dos aplicativos mais populares para o Linux, ao mesmo tempo em que mantém funções que o tornam estável, flexível e com uma alta performance. Ele pode ser adaptado tanto para ambientes desktop de dispositivos antigos quanto para servidores de alta performance e apresenta uma boa usabilidade em ambos os casos.\n\nDesde o seu primeiro release, em abril de 1994, o Slackware Linux Project tem como filosofia a criação e o desenvolvimento do sistema que fosse o mais compatível com a ideia de SO’s “UNIX-like”. Em outras palavras, essa distribuição é conhecida entre as que melhor seguem os princípios do Linux. Do sistema de arquivos ou kernel, tudo é desenvolvido e adaptado para que o usuário tenha um ambiente desktop estável, simples e confiável.')
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Slackware_logo.svg/1024px-Slackware_logo.svg.png')
            .addFields(
                { name: 'Criador', value: 'Patrick Volkerding', inline: true },
                { name: "Criação", value: '16 de julho de 1993', inline:true},
                { name: '\u200B', value: '\u200B' },
                { name: 'Gerenciador de pacotes', value: 'slackpkg', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'slackpkg update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
            .setTimestamp()

        message.channel.send(embed)
    },
};