const Discord = require('discord.js')

module.exports = {
    name:"info-mint",
    description:"Oferecer informações do Mint!",
    execute(message) {
        const embed = new Discord.MessageEmbed()
            .setColor('#61eb34')
            .setTitle('Acesse o site oficial do Linux Mint')
            .setURL('https://linuxmint.com/')
            .setAuthor('O que é Linux Mint?', 'https://plus.diolinux.com.br/uploads/default/original/2X/f/f6769f36a7352964d560598ac9d537ddfb526cd3.png')
            .setDescription('Linux Mint é uma distribuição Linux irlandesa. Possui duas versões: uma baseada em Ubuntu e outra versão baseada em Debian. Suporta muitos idiomas, incluindo a língua portuguesa, e utiliza o Cinnamon como seu principal ambiente de desktop, porém ele possui outras alternativas de interface como o XFCE e o MATE.\n\nMas o que o Linux Mint entrega de diferente em relação às demais distribuições? Ressalto: o consumo de memória abaixo da média e a interface gráfica são elementos que despertam atenção no sistema, mesclando o bom aproveitamento de hardware com um visual sofisticado e intuitivo.\n\nAtualmente, o Linux Mint está entre as distribuições mais utilizadas no mundo junto ao Manjaro e o Ubuntu. Muito dessa popularidade se dá pelo fato de que sua interface amigável e recursos são atrativos para usuários que estão migrando do Windows para o Linux.\n\nO mint ele é muito recomendado para quem quer entrar no mundo Linux, com ele você pode aprender tanto Ubuntu quanto Debian. Você também tera uma ampla comunidade que gosta do mint, podera aprimorar estudos tanto de conhecimento sobre sua distribuição quanto se acostumar com o terminal em si.')
            .setImage('https://upload.wikimedia.org/wikipedia/commons/2/25/Linux_Mint_20_Cinnamon.png')
            .addFields(
                { name: 'Criador', value: 'Clément Lefèbvre', inline: true },
                { name: 'Time', value: 'Linux Mint Team', inline: true},
				{ name: "Criação", value: '27 de agosto de 2006', inline:true},
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Gerenciador de pacotes', value: 'apt', inline: true },
                { name: 'Atualizar pacotes e sistema', value: 'sudo apt-get update', inline: true },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
	        .setTimestamp()

        message.channel.send(embed)
    }
}