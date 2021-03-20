const mongoose = require('mongoose');
const discordUsers = require('../../mongoschemas/discordUsers');
const mongoPath = process.env.mongoPath;
const mongo = require('./mongo');

module.exports = async (message) => {
    await mongo().then((mongoose) => {
        try {
            console.log('Ready to insert user to the database');

            const user = {
                id: message.author.id,
                username: message.author.username,
            }

            await new discordUsers(user).save()

            console.log('Successfully inserted ' + message.author.username + ' to the database!');
        } finally {
            mongoose.connection.close();
        }
    })
}