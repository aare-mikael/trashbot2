module.exports = {
    name: 'at',
    minArgs: 1,
    expectedArgs: "<Target user's @>",
    description: "@ personen du skriver etter -at, så mange ganger som du skriver bakerst.",
    category: "Text",
	callback: async ({ message, args, text, client, prefix, instance, channel, interaction }) => {

        var trashID = '227520275132973056';

        var antall = 5;

        if(isNaN(args[args.length - 1])) {
            antall = 5;
        } else {
            antall = args[args.length-1];
            // Pops the last argument, which in this command is the amount of times the user want's to tag the person;
            args.pop();
        }


        if (antall > 20) {
            message.channel.send("Sorry bud, but I'm not gonna spam this user more than 20 times at a time!");
        } else if (!antall) {
            var i = 0;
            var j = 5;
            for (i = 0; i < j; i++) {
                message.channel.send(args.join(' '));
            }
        } else {
            var i = 0;
            for (i = 0; i < antall; i++) {
                message.channel.send(args.join(' '));
            }
        }
    },
};