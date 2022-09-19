/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler = async (m, { conn, command }) => {
	let etiqueta = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let name = await conn.getName(m.sender)
	let mcarga = m.reply(MultiNK.Proces(name))
	await mcarga
try {
    let encUrl = encodeURIComponent(await conn.profilePictureUrl(etiqueta, 'image').catch(_ => 'https://i.ibb.co/jhQ7gL0/Sin-Perfil-F.jpg'))
    let img = 'https://some-random-api.ml/canvas/'+command+'?avatar='+encUrl
    conn.sendMessage(m.chat, { image: {url: img}, caption: `*┏━> Efecto de perfil* : _${command}_
*┗> Solicitud* : _@${etiqueta.replace(/@.+/, '')}_`, mentions: [etiqueta] }, { quoted: m })
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['lolice', 'gay', 'triggered']
handler.tags = ['fabricar']

handler.command = /^(lolice)|(gay)|(triggered)$/i
handler.limit = true

export default handler
