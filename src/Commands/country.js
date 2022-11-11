const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");
const axios = require("axios");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("country")
    .setDescription("details of a country"),
  async execute(interaction) {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("nextCountry")
        .setLabel("random")
        .setStyle(ButtonStyle.Success)
        .setEmoji("1009443195723186258")
    );
    await interaction.deferReply();
    const randomIndex = Math.floor(Math.random() * 250);
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const datas = await response.data;
      console.log(datas[randomIndex].name.common);
      return await interaction.editReply({
        content: `${datas[randomIndex].flags.png}`,
        components: [row],
      });
    } catch (err) {
      console.log(err);
    }
  },
};
