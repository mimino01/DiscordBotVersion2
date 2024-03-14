require("dotenv").config();
const {Client, GatewayIntentBits} = require('discord.js');
const token = process.env.TOKEN;
console.log(`this bot's token is ${token}`);
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

function sendReact(message, description) {
    message.channel.send(description)
        .then(sentMessage => {
            // 이모지 추가
            sentMessage.react(':de:1119823114247880745');
        })
        .catch(console.error);
}

function sendReactNE(message, description) {
    message.channel.send(description)
}

// 클라이언트가 새로운 메시지를 수신하면 실행됩니다.
client.on('messageCreate', message => {
    // 명령어가 시작될 때 실행됩니다.
    if (message.content.startsWith('/핫산일해')) {

        console.log("commend in");
        // for (let i = 0; desctiption[i]; i++) {
        //     console.log(desctiption[i]);
        // }

        sendReactNE(message, '```markdown\n' +
            '- 참여를 희망하시는 레이드에 이모티콘을 클릭하여 반응을 남겨주시면 됩니다.\n' +
            '\n' +
            '- 사전 말씀 없이 지각하실 경우 나머지 인원끼리 시작합니다. \n' +
            '\n' +
            '- 길드팟 목적은 길드원들과의 친목도모 입니다.\n' +
            '\n' +
            '- 한 레이드당 8명 초과되는 경우 인원 분배하여 진행합니다.\n' +
            '\n' +
            '- 반응 설정이 불가하신 경우 아래 경로를 통해 설정이 되어있는지 확인해주세요.\n' +
            '    → 디스코드 > 사용자설정 > 텍스트 및 사진 > 메세지에 이모티콘 반응 표시하기 on\n' +
            '\n' +
            '- 주간 길드팟에 있는 모든 레이드는 클경 이상자 대상입니다.\n' +
            '    → 주간 길드팟 목록에 없는 레이드는 파티원 모집 게시판에 따로 진행하며 트라이 및 학원팟은 길드 관리자에게 문의주시면 트라이 인원 조사하여 진행합니다.\n' +
            '\n' +
            '- 수요일에 진행되는 길드팟은 인원이 많은 레이드부터 진행합니다\n' +
            '\n' +
            '- 원하시는 날짜에 신청을 넣으시고 같이 하는 사람들끼리 시간을 정하여 이용해 주시면 됩니다.\n' +
            '\n' +
            '- 토벌전은 개인적으로 돌리실 때 곰곰반달곰을 멘션해주시면 도와드리러 가겠습니다!\n' +
            '\n' +
            '**\n' +
            '요즘 신규 인원이 다수 늘었기에 길드팟 시간 조정법을 알려드립니다. 자세한 정보는 디코활용법에 있습니다\n' +
            '1. 역할부여 채널을 들어간다\n' +
            '2. 자신이 선택한 레이드에 맞는 이모티콘을 클릭한다\n' +
            '3. 역할부여 채널 아레 있는 레이드 채널에서 시간조정을 한다****' +
            '```');
        sendReactNE(message, '위 링크는 자세한 시간 조정법을 설명하는 링크 입니다\n' +
                'https://discord.com/channels/851065308234907688/1026105024494968832/1026105240690364476/');
        sendReactNE(message, `─────주간토벌전─────`);
        sendReact(message, `수요일 오후 21:10 → 길드 토벌 <삐뽀랜드>`);
        sendReact(message, `클리어 이후 길드 토벌 <빰뿌르빰빰>`);
        sendReact(message, `클리어 이후 길드 토벌 <쿠크루삐뽀>`);
        sendReactNE(message, `─────주간길드팟─────`);
        sendReact(message, `수요일 오후 7시 레이드 털기`);
        sendReactNE(message, '```길드팟 출발전 쿠크세이튼, 아브렐슈드 등등 간단간단하게 레이드 터실분 구합니다. ```');
        sendReactNE(message, `─────쿠크세이튼─────`);
        sendReact(message, `쿠크세이튼 노말 1-3관문`);
        sendReactNE(message, '```채원님하고 노말터실분 구합니다! 보통 주말에 출발해요!```');
        sendReactNE(message, `─────아브렐슈드─────`);
        sendReact(message, `아브렐슈드 노말 1-4관문`);
        sendReact(message, `아브렐슈드 노말 5-6관문`);
        sendReact(message, `아브렐슈드 하드 1-2관문 + 노말 3-4관문`);
        sendReact(message, `아브렐슈드 하드 1-4관문`);
        sendReact(message, `아브렐슈드 하드 5-6관문`);
        sendReactNE(message, `─────일리아칸──────`);
        sendReact(message, `일리아칸 노말`);
        sendReactNE(message, `──────카양겔──────`);
        sendReact(message, `카양겔 노말`);
        sendReact(message, `카양겔 하드`);
        sendReactNE(message, `─────볼다이크──────`);
        sendReact(message, `볼다이크 노말`);
        sendReact(message, `볼다이크 하드`);


    } else if (message.content.startsWith(`/경매 `)) {
        console.log(`경매 명령어 입력받음`);
        const price = message.content.replace(`/경매 `, ``);
        message.reply(`경매 입찰가 기준 최솟값 (즉시입찰가가 손익분기점을 넘는 최솟값)\n` + `4인기준: ${price * 0.649}\n` + `8인기준: ${price * 0.757}`);
    } else if (message.content.startsWith(`/투표`)) {
        console.log(`투표 명령어 입력받음`);

    }
});

client.login(token);

