const Discord = require('discord.js')

module.exports = {
    name: 'guix',
	description: 'Informações do Guix!',
	execute(message) {
		const embed = new Discord.MessageEmbed()
            .setColor('BLACK')
            .setTitle('Acesse o site oficial do Guix')
            .setURL('https://guix.gnu.org/')
            .setAuthor('O que é o Guix?')
            .setDescription('Guix System Distribution é uma distribuição Linux construída em torno do gerenciador de pacotes GNU Guix. Ele permite uma configuração declarativa do sistema operacional e permite atualizações de sistema confiáveis que podem ser facilmente revertidas\n\nO GuixSD é baseado no GNU Guix, um gerenciador de pacotes e de configuração do sistema puramente funcional derivado do Nix, usando a implementação da linguagem de programação Scheme do GNU Guile. Todas as receitas de pacotes, assim como toda a configuração do sistema, são escritas em linguagens de domínio específico incorporadas declarativas no Scheme do Guile.')
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Guix_System_Distribution_logo.svg/1200px-Guix_System_Distribution_logo.svg.png')
            .addFields(
                { name: "Criação", value: '19 de maio de 2019', inline:true},
                { name: '\u200B', value: '\u200B' },
                { name: "Disponivel para sistemas: ", value: '32 e 64 bits' , inline: true}
            )
            .setTimestamp()

        message.channel.send(embed)
    },
};