const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const prompt = require('prompt-sync')();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS] });
require("dotenv").config();
const procenv = process.env,

function login() {
    client.login(procenv.TOKEN).catch(() => {
      logger(`failed to login!\nRetrying in 5 secs...`);
      setTimeout(() => {
        login();
      }, 5000);
    });
}

login();

client.on("ready", () => {
  logger(`${client.user.tag} using ${pkg.name} v${pkg.version} ready!`);
  logger(`fetching guilds...`)
  client.guilds.fetch().then((ina) => {
    if (ina.size > 5) {
      logger(
        `fetched ${ina.size} guilds!\n[${ina
          .first(5)
          .map((g) => g.name)
          .join(", ")} ...]`
      );
    } else {
      logger(
        `fetched ${ina.size} guilds!\n[${ina.map((g) => g.name).join(", ")}]`
      );
    }
  });
});


