const { SlashCommandBuilder } = require("discord.js");
const axios = require("axios");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("country")
    .setDescription("details of a country"),
  async execute(interaction) {
    await interaction.deferReply();
    const randomIndex = Math.floor(Math.random() * 250);
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const datas = await response.data;
      console.log(datas[randomIndex].name.common);
      return await interaction.editReply(`${datas[randomIndex].flags.png}`);
    } catch (err) {
      console.log(err);
    }
  },
};
