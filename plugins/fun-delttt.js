import MessageType from '@adiwajshing/baileys'
let handler = async (m, { conn, usedPrefix, command }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}  

let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return conn.sendButton(m.chat, `${lenguajeGB['smsAvisoFG']()}ππ ππππΌπ ππ πππππππΌ ππΌππππΏπΌ ππ ππ πππππ ππππ ππ ππΌππΌ\n\nπππ πΌππ πππ ππ πΌππ ππΌππ π ππΌππ πππππ ππ πππππππ`, wm, null, [['π« ππππΎππΌπ ππΌππππΏπΌ | πππΌππ ππΌππ', `${usedPrefix}ttt sala nueva`]], fkontak, m)
delete conn.game[room.id]

await conn.sendButton(m.chat, `${lenguajeGB['smsAvisoEG']()}ππΌ ππΌππΌ ππππ ππ ππΌππΌ πππ πππππππΌπΏπΌ\n\nπππ πππππ ππ πΌ πππ ππππ ππΌπ πππππππΌπππΏ`, wm, null, [['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu'] ], fkontak, m)}  
handler.command = /^(delttt|deltt|delxo|deltictactoe)$/i
handler.fail = null
export default handler
