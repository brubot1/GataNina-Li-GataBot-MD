//Creditos https://github.com/BrunoSobrino

import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsAvisoAG']()}ššš š¾ššš¼ššæšš +18 šššš¼š šæššš¼š¾šššš¼šæšš ššš #š¤š£ š¢š¤šš¤šš¤š§š£š® šš¼šš¼ š¼š¾šššš¼š\n\n+18 š¾šššš¼ššæš š¼šš šæššš¼š½šššæ ššš #š¤š£ š¢š¤šš¤šš¤š§š£š® šš ššš¼š½šš`
if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}ššš šš šššš¼š¾š šæš ššššæššš\nššššššš\n*${usedPrefix + command} https://www.xvideos.com/video70389849/sexo_en_casa*\n\nššš š¼š ššššæššš šššš\nššš¼šššš\n*${usedPrefix + command} https://www.xvideos.com/video70389849/sex`
try {
await conn.reply(m.chat, `ā¤ šššššš ššš šš¼ššš š¼ ššš šš ššššš šš šššæšš\n\nā¤ šššš¼šš šš¼šš ššš ššš šššæšš šš š½š šššš`, m)

let res = await fetch(`https://zenzapis.xyz/downloader/xvideos?apikey=${keysxxx}&url=`+args[0])
let json = await res.json()

conn.sendMessage(m.chat, { document: { url: json.result.files.high }, mimetype: 'video/mp4', fileName: json.result.title }, { quoted: m })

} catch (e) {
m.reply(`${lenguajeGB['smsAvisoFG']()}šš šššš¾šššš, ššš šš šššš¼š¾š šæš ššššæššš, šššššš¼ š¼ ššššššš¼š\n\nšæššæš'š šššš, ššš š¼š ššššæššš šššš, ššš š¼šš¼šš`)
console.log(e)
}}
handler.command = /^(xvideosdl|xvideos)$/i
handler.level = 5
handler.limit = 3
export default handler
