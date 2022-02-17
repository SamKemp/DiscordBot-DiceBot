const { SlashCommandBuilder } = require('@discordjs/builders');
const { DiceRoller } = require('rpg-dice-roller');
const roller = new DiceRoller();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Rolls based on the given notation!')
		.addStringOption(option =>
			option.setName('notation')
			.setDescription('Dice notation to roll')
			.setRequired(true)),
	async execute(interaction) {
		if (!interaction.inGuild()) return;

		let notation = interaction.options.getString('notation', true);

		if (notation.toLowerCase() == '$droll') notation = '1d20';
		else if (notation.toLowerCase() == '$dadv') notation = '2d20kh1';
		else if (notation.toLowerCase() == '$ddis') notation = '2d20kl1';
		else if (notation.toLowerCase() == '$croll') notation = '1d100';
		else if (notation.toLowerCase() == '$cadv') notation = '(2d10kl1)*10 + 1d10';
		else if (notation.toLowerCase() == '$cdis') notation = '(2d10kh1)*10 + 1d10'';

		try {
			await interaction.reply(roller.roll(notation).output);
		}
		catch (error) {
			await interaction.reply('Given notation `' + notation + '` not recognized');
		}
	},
};