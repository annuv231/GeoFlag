const {
  SlashCommandBuilder,
  EmbedBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
} = require("discord.js");
const axios = require("axios").default;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("albumqoute")
    .setDescription("qoutes from album")
    .addStringOption((option) =>
      option
        .setName("album")
        .setDescription("type album name lol")
        .setRequired(true)
        .addChoices(
          { name: "Speak Now", value: "Speak Now" },
          { name: "Taylor Swift", value: "Taylor Swift" },
          { name: "Red", value: "Red" },
          { name: "1989", value: "1989" },
          { name: " Folklore", value: "Folklore" },
          { name: "Lover", value: "Lover" },
          { name: "Evermore", value: "Evermore" },
          { name: "Reputation", value: "Reputation" },
          { name: "Fearless", value: "Fearless" }
        )
    ),
  async execute(interaction) {
    const album = interaction.options.getString("album");
    console.log(album);
    const response = await axios.get(
      `https://taylorswiftapi.herokuapp.com/get?album=${album}`
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
        .setStyle(ButtonStyle.Primary)
    );

    return interaction.reply({ embeds: [embed], components: [row] });
  },
};
