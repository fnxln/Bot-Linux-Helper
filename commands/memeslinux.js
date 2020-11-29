const Discord = require("discord.js")

module.exports = {
	name: 'memeslinux',
	aliases: ['linuxmemes', 'gnumemes'],
	description: 'Gerar logos de linux.',
	execute(message) {

		var redditImageFetcher = require('reddit-image-fetcher')
 
		redditImageFetcher.fetch({type: 'custom', subreddit: ['linuxmemes']})
		.then(result => {
			const embed = new Discord.MessageEmbed()
			.setTitle('Acesse o Post Original')
			.setAuthor("Post feito por: " + result[0].id)
	        .setURL(result[0].postLink)
	        .setImage(result[0].image)
			.setTimestamp()
			message.channel.send(embed)
			});
    }
}
