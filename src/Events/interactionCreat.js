module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      console.log(interaction.commandName);
      const command = client.commands.get(interaction.commandName);

      if (!command) return;

      try {
        await command.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      }
    } else if (interaction.isButton) {
      // console.log(interaction);

      if (interaction.customId === "quote") {
        const quoteCmd = client.commands.get("taylorquote");
        try {
          await quoteCmd.execute(interaction);
        } catch (error) {
          console.error(error);
          await interaction.reply({
            content: "There was an error while executing this command!",
            ephemeral: true,
          });
        }
      } else if (interaction.customId === "nextCountry") {
        const command = client.commands.get("country");
        try {
          await command.execute(interaction);
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      return;
    }
  },
};
