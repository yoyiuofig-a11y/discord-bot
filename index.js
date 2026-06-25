const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Đăng nhập: ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  const msg = message.content.toLowerCase();

  if (msg.includes('hello')) {
    message.reply('Yo 👋');
  }

  if (msg.includes('bot lỏ')) {
    message.reply('🗿 Ai gọi tui lỏ đó?');
  }

  if (msg.includes('roblox')) {
    message.reply('😎 Roblox là chân ái!');
  }
});

client.login(process.env.DISCORD_TOKEN);
