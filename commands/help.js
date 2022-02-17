const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('A help command, obvs!'),
	async execute(interaction) {
		if (!interaction.inGuild()) return;

		let helpText = 'I am a simple music bot!';
		helpText += '\nMy commands are as follows';
		helpText += '\n/help - shows this help command';
		helpText += '\n/roll {notation} - Rolls based on the given notation!';
		helpText += '\n**__Defined notation__**';
		helpText += '\n$DROLL - Rolls 1d20';
		helpText += '\n$DADV` - Rolls 2d20\'s and keeps the highest';
		helpText += '\n$DDIS` - Rolls 2d20\'s and keeps the lowest';
		helpText += '\n$CROLL - Rolls 1d100';
		helpText += '\n$CADV` - Rolls 2d100\'s and keeps the lowest';
		helpText += '\n$CDIS` - Rolls 2d100\'s and keeps the highest';
		helpText += '\n<https://greenimp.github.io/rpg-dice-roller/guide/notation/>';

		await interaction.reply(helpText);
	},
};