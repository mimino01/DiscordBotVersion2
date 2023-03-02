const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// 클라이언트가 새로운 메시지를 수신하면 실행됩니다.
client.on('messageCreate', message => {
    // 명령어가 시작될 때 실행됩니다.
    if (message.content.startsWith('/핫산일해')) {
        // 채팅에 "Hello!"를 출력합니다.
        for (let i = 0; i < 5; i++) {
            message.channel.send('pm2 test test');
        }
    }
});

client.login('MTA4MDA3NDI5MzExMjczMzY5Nw.GdzusM.TgUv-qL_sBfJVP1kZQ5jP88wZlD46flJuILAMQ');