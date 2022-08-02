import { SlashCommandBuilder, Routes } from "discord.js";
import { REST } from "@discordjs/rest";
// const { clientId, guildId, token } = require("./config.json");
import "dotenv/config";
const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
  new SlashCommandBuilder()
    .setName("server")
    .setDescription("Replies with server info!"),
  new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with user info!"),
  new SlashCommandBuilder()
    .setName("boomer")
    .setDescription("Replies with Ok Boomer"),
  new SlashCommandBuilder().setName("dadjoke").setDescription("Get A dad Joke"),
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

rest
  .put(
    Routes.applicationGuildCommands(process.env.CLIENTID, process.env.GUILDID),
    { body: commands }
  )
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
