const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
const axios = require("axios").default;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("taylorquote")
    .setDescription("get random qoutes")
    .setDMPermission(true),
  async execute(interaction) {
    try {
      const response = await axios.get(
        "https://taylorswiftapi.herokuapp.com/get"
      );
      const quotes = response.data;
      const embed = new EmbedBuilder()
        .setColor("Random")
        .setTitle(`${quotes.song}`)

        .setDescription(`${quotes.quote}`);
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("quote")
          .setLabel("Quote")
          .setStyle(ButtonStyle.Success)
          .setEmoji("1009443195723186258")
      );

      return interaction.reply({ embeds: [embed], components: [row] });
    } catch (error) {
      return interaction.reply("there was error while executing commands");
    }
  },
};
