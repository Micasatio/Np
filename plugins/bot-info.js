/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import e from"../lib/connection.js";import{plugins as t}from"../lib/plugins.js";import{cpus as a,totalmem as i,freemem as s,platform as o,type as n,arch as r,hostname as m}from"os";import{performance as l}from"perf_hooks";import{sizeFormatter as d}from"human-readable";import p from"performance-now";let{generateWAMessageFromContent:c}=(await import("@adiwajshing/baileys")).default,format=d({std:"JEDEC",decimalPlaces:2,keepTrailingZeroes:!1,render:(e,t)=>`${e} ${t}B`}),handler=async(d,{conn:u})=>{let h=Object.entries(e.store.chats).filter(([e,t])=>e&&t.isChats),g=h.filter(([e])=>e.endsWith("@g.us")),f=process.memoryUsage(),$=a().map(e=>(e.total=Object.keys(e.times).reduce((t,a)=>t+e.times[a],0),e)),y=$.reduce((e,t,a,{length:i})=>(e.total+=t.total,e.speed+=t.speed/i,e.times.user+=t.times.user,e.times.nice+=t.times.nice,e.times.sys+=t.times.sys,e.times.idle+=t.times.idle,e.times.irq+=t.times.irq,e),{speed:0,total:0,times:{user:0,nice:0,sys:0,idle:0,irq:0}}),w=d.reply("_Obteniendo informaci\xf3n..._");await w;let b=l.now(),j=l.now()-b,C=p(),k=p()-C;process.uptime();let _=timeString(process.uptime()),P="‎".repeat(850);try{let v=await fetch("https://pastebin.com/raw/Bu8esjPA"),A=await u.profilePictureUrl(u.user.jid,"image").catch(e=>"./multimedia/imagenes/avatar_contact.png");var U,x=(await v.json()).nk_media||A}catch(M){var x=await u.profilePictureUrl(u.user.jid,"image").catch(e=>"./multimedia/imagenes/avatar_contact.png")}let B=`
*~》INFORMACI\xd3N《~*
${P}
┏─━─━━──━━─━─┓
➪ *Bot* : _(activo)_
➪ *Due\xf1o actual* : _${Propietario}_
➪ *Tiempo de ejecucion* : _${_}._
➪ *Apodo en Whatsapp* : _${u.user.name}._
➪ *Grupos con mayor actividad* : _${g.length}_
➪ *Grupos nuevos* : _${g.length}_
➪ *Grupos abandonados* : _${g.length-g.length}_
➪ *Chats personales* : _${h.length-g.length}_
➪ *Total de chats* : _${h.length}_
➪ *Hits en los últimos minutos* : _${global.hit_cmd.length}_
➪ *Version del bot* : _${BotVersion}_
➪ *Wa-web Api* : _https://github.com/adiwajshing/Baileys_
➪ *Sc - Github* : _https://github.com/Micasatio/Np_
➪ *Total de plugins* : _${Object.keys(t).length}_
➪ *Velocidad de procesamiento* : _${j} s..._
➪ *Velocidad de conexion* : _${k.toFixed(4)}ms..._
➪ *RAM:* _${format(i()-s())} Restantes De ${format(i())}_
➪ *Plataforma* : _${o()}_
➪ *Base OS* : _${n()}_
➪ *Arquitectura* : _${r()}_
➪ *Host* : _${m()}_

➫ _Consum\xf3 de memoria :_
${"```"+Object.keys(f).map((e,t,a)=>`${e.padEnd(Math.max(...a.map(e=>e.length))," ")}: ${format(f[e])}`).join("\n")+"```"}
➫ ${$[0]?`_Uso total de CPU_
${$[0].model.trim()} (${y.speed} MHZ)
${Object.keys(y.times).map(e=>`- *${(e+"*").padEnd(6)}: ${(100*y.times[e]/y.total).toFixed(2)}%`).join("\n")}
_CPU Core(s) Usado (${$.length} Core CPU)_
${$.map((e,t)=>`${t+1}. ${e.model.trim()} (${e.speed} MHZ)
${Object.keys(e.times).map(t=>`- *${(t+"*").padEnd(6)}: ${(100*e.times[t]/e.total).toFixed(2)}%`).join("\n")}`).join("\n\n")}`:""}
┗─━─「 ✵ 」━─━─┛`.trim(),E=c(d.chat,{orderMessage:{orderId:"5352482274766633",thumbnail:await getBuffer(x),itemCount:-369,status:1,surface:1,message:B,orderTitle:NombreDelBot+` 🔥`,sellerJid:"51995386439@s.whatsapp.net",token:"1655878716",priceAmount:"666000",totalAmount1000:"9999999999",totalCurrencyCode:"PEN",contextInfo:null}},{quoted:d});await u.relayMessage(d.chat,E.message,{messageId:E.key.id}),reacMoji(d.chat,u,"\uD83E\uDD16",d)};handler.help=["informacion"],handler.tags=["casual"],handler.command=/^(informacion|infobot|ping|speed|info|alive|perfil)$/i;export default handler;
