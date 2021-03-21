module.exports = {
	name: 'playing',
	description: 'Check what music is playing!',
	category: 'Voice',
	callback: async ({ message, args, text, client, prefix, instance, channel, interaction }) => {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		return message.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
	}
};