const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"aMSlutzToWk2Y2MMEOVLXSJuRpdD8l0eivzEJUOR01g="},"public":{"type":"Buffer","data":"jguP+Qaq9BgpSIocNvPyie8idWAvZnVu8Xn48djM8C0="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"SKcA03E7EnZ+cfWpwRysuXcGGlAGhD2/pqod/rqr71U="},"public":{"type":"Buffer","data":"Bg1QM7GcPX5d18+//wqhqX0rXgKwx7814HWsYZjeblI="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"OJHPhCAUl+wkhpWusBQElTlW6LKFGbPl9acNYRu74UQ="},"public":{"type":"Buffer","data":"9SNmakO/5wYciDxrlDIb2bkKpocEsmdFaeLDADS4nU4="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"CMUnBkSvh4f9h9lE7WUhxn25I0V205YL789Q2vU8+l0="},"public":{"type":"Buffer","data":"cEsvylkFs+Biz2BBDLWlVUMSW1XW6cTimVZ1ZrEq6y4="}},"signature":{"type":"Buffer","data":"yWJZ5dFVyd039ODSIH5pFznlyO7JWBcYUEF/Q8CEwCi5qeyjxM8LWl0umwCs7dwig9hqiLGTaUklZNXKQtPWig=="},"keyId":1},"registrationId":210,"advSecretKey":"ZEQNFs/NAqG6fx3bnI1Vp/+AdPPUnmobVtZ8ExLcrrI=","processedHistoryMessages":[{"key":{"remoteJid":"255672562733@s.whatsapp.net","fromMe":true,"id":"764C8CA8DB0D2DD963C1793DD9CF6E2C"},"messageTimestamp":1753422711}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"3EZA7NMA","me":{"id":"255672562733:71@s.whatsapp.net","name":"iamdan_James","lid":"69557498703956:71@lid"},"account":{"details":"CJaJ17oHEO+2jMQGGAcgACgA","accountSignatureKey":"Wagj3gkP2WwInMEveMDLrp4ud1QTDeVKDkn6N3U2biM=","accountSignature":"PfmbpsEkQJXzZEnSnwlt8exy5svbEXX44Vhzcs67VJafjORgJuStA/UrmeQn+h/Nk3dhOFCSiZgDxqqKgjlbBg==","deviceSignature":"hfz2x3egbTywm0GUChkvnH7SxABByzonYBJh+LvrwqU9Be+syrvNYX49kYTUKiRM06xpwMgmFUNCUxwhY3b6hQ=="},"signalIdentities":[{"identifier":{"name":"255672562733:71@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BVmoI94JD9lsCJzBL3jAy66eLndUEw3lSg5J+jd1Nm4j"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CAsIBQ=="},"lastAccountSyncTimestamp":1753422708,"lastPropHash":"nm3Bb","myAppStateKeyId":"AAAAAA++"}",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY iamdan_james 🤍*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/vn037q.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Viral",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Viral",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "255672562733",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Viral",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "Viral",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/vn037q.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Official account by Viral",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "2349079055953",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
