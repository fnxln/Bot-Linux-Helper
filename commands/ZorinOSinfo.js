const Discord = require("discord.js")

module.exports = {
	name: 'info-zorinos',
	description: 'Informações do ZorinOS!',
	execute(message) {
        const embed = new Discord.MessageEmbed()
            .setColor('#3492eb')
	        .setTitle('Acesse o site oficial do ZorinOS')
	        .setURL('https://zorinos.com')
	        .setAuthor('O que é o ZorinOS?', 'https://pbs.twimg.com/profile_images/1136305764069388288/nAS4jEO3_400x400.jpg')
	        .setDescription('Zorin OS é uma distribuição do sistema operacional Linux baseada no Ubuntu. Está principalmente orientada a usuários novatos em Linux, porém familiarizados com sistemas operacionais Windows. Utiliza ambientes de desktop GNOME na maior parte de suas versões e Xfce em sua versão Lite, que é voltada a computadores antigos ou limitados\n\nEsta distribuição tenta fornecer ao usuário, desde o primeiro momento, uma interface gráfica similar aos sistemas Windows, junto com um determinado grau de compatibilidade com tais sistemas através da utilização do WINE. Adicionalmente oferece uma série de pequenas ferramentas próprias as quais simplificam algumas configurações relacionadas, como por exemplo, com a interface gráfica e/ou seleção do software.\n\nEssa distribuição possui variadas verões para diferentes visões, primeiro temos o ZorinOS Core que é a versão gratuita e principal, depois o Zorin OS Lite que é a versão gratuita destinada a computadores mais antigos ou com especificações técnicas mais limitadas, também o Zorin OS Education que é uma versão gratuita focada em estudantes e professores, Zorin OS Business que é focada no ambiente corporativo(empresas e área governamental), é uma versão paga e para finalizar temos o Zorin OS Ultimate que é a versão completa com jogos, aplicativos para negócios e produção e consumo de multimídia, é uma versão paga.')
	        .setImage('https://i1.wp.com/sempreupdate.com.br/wp-content/uploads/2020/03/zorin.png')
	        .addFields(
                { name: "Criação", value: '1 de julho de 2009', inline:true},
                { name: "Criador", value: 'Artyom Zorin', inline: true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'apt', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
	},
};
