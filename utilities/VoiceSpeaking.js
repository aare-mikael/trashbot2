module.exports = function VoiceSpeaking(message, args){

    // Returnerer tidlig om meldingen er sendt av en bot;
    if (message.author.bot) return;

    // Må få tak i guild id for å sjekke dispatcher;
    const discordServer = message.guild;

//     // Sjekker om bot'en har en aktiv dispatcher i den gjeldende serveren;
//    const connection = discordServer.voice;

//    console.log(connection);

//    if (connection) {
//        console.log("Dispatcher is already connected")
//    }

//    const connected = Boolean(connection);

//    return connected;

    const voiceChannel = message.member.voice.channel.members;
    console.log(voiceChannel);

};