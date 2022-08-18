const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("beep")
    .setDescription("replies with beep beep"),
  async execute(interaction) {
    return interaction.reply("Beep Beep");
  },
};
