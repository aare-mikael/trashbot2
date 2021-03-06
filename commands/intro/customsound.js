const embed = require('../../utilities/CustomsoundEmbed');
const mongo = require('../../utilities/mongoutilities/mongo');
const mongoose = require('mongoose');
const discordUsers = require('../../mongoschemas/discordUsers');


module.exports = {
	name: 'customsound',
	description: "Choose a sound you want to play when you enter a voice channel.",
    category: "Intro",
	callback: async ({ message, args, text, client, prefix, instance, channel, interaction }) => {

        var url = args[1];
        
        var name = message.author.tag;

        var id = message.author.id;

        if (!args[0]) {
            message.channel.send(embed(message, args));
        }                        

        switch(args[0]){

            case 'add':

                await mongo().then(async (mongoose) => {
                    try {
                        const result = await discordUsers.findOneAndUpdate({
                        
                            id: message.author.id,
                            }, {
                                user: message.author.tag,
                                username: message.author.username,
                                introSound: url,
                            }, {
                                upsert: true,
                                new: true,
                            })
                        } finally {
                            mongoose.connection.close();
                        }
                    })   
                            
                message.reply("your sound is updated!");

                break;

            case 'delete':
                await mongo().then(async (mongoose) => {
                    try {
                        const result = await discordUsers.findOneAndUpdate({
                            id: message.author.id,
                        }, {
                            introSound: "https://www.myinstants.com/media/sounds/tf_nemesis.mp3",
                        })
                    } finally {
                        mongoose.connection.close();
                    }
                })
                            
            message.reply("your sound is deleted, and you are now using the default sound.");

        }
	},
};