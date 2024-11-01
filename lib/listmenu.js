const chalk = require('chalk')
const fs = require('fs')


global.animemenu = (prefix) => {
return`╭⊣「 *\`乂 ᴍᴇɴᴜ ɪɴғᴏ 乂\`* 」⊢▤
┣» *${prefix}akira*
┣» *${prefix}akiyama*
┣» *${prefix}ana*
┣» *${prefix}asuna*
┣» *${prefix}ayuzawa*
┣» *${prefix}boruto*
┣» *${prefix}chiho*
┣» *${prefix}chitoge*
┣» *${prefix}cosplayloli*
┣» *${prefix}cosplaysagiri*
┣» *${prefix}deidara*
┣» *${prefix}doraemon*
┣» *${prefix}elaina*
┣» *${prefix}emilia*
┣» *${prefix}erza*
┣» *${prefix}gremory*
┣» *${prefix}hestia*
┣» *${prefix}hinata*
┣» *${prefix}husbu*
┣» *${prefix}inori*
┣» *${prefix}isuzu*
┣» *${prefix}itachi*
┣» *${prefix}itori*
┣» *${prefix}kaga*
┣» *${prefix}kagura*
┣» *${prefix}kakasih*
┣» *${prefix}kaori*
┣» *${prefix}keneki*
┣» *${prefix}kotori*
┣» *${prefix}kurumi*
┣» *${prefix}loli*
┣» *${prefix}madara*
┣» *${prefix}megumin*
┣» *${prefix}mikasa*
┣» *${prefix}mikey*
┣» *${prefix}miku*
┣» *${prefix}minato*
┣» *${prefix}naruto*
┣» *${prefix}neko*
┣» *${prefix}neko2*
┣» *${prefix}nekonime*
┣» *${prefix}nezuko*
┣» *${prefix}onepiece*
┣» *${prefix}pokemon*
┣» *${prefix}randomnime*
┣» *${prefix}randomnime2*
┣» *${prefix}rize*
┣» *${prefix}sagiri*
┣» *${prefix}sakura*
┣» *${prefix}sasuke*
┣» *${prefix}shina*
┣» *${prefix}shinka*
┣» *${prefix}shinomiya*
┣» *${prefix}shizuka*
┣» *${prefix}shota*
┣» *${prefix}tejina*
┣» *${prefix}toukachan*
┣» *${prefix}tsunade*
┣» *${prefix}waifu*
┣» *${prefix}animewall*
┣» *${prefix}yotsuba*
┣» *${prefix}yuki*
┣» *${prefix}yulibocil*
┣» *${prefix}yumeko*
┣» *${prefix}8ball*
┣» *${prefix}tickle*
┣» *${prefix}gecg*
┣» *${prefix}feed*
┣» *${prefix}animeawoo*
┣» *${prefix}animemegumin*
┣» *${prefix}animeshinobu*
┣» *${prefix}animehandhold*
┣» *${prefix}animehighfive*
┣» *${prefix}animecringe*
┣» *${prefix}animedance*
┣» *${prefix}animehappy*
┣» *${prefix}animeglomp*
┣» *${prefix}animeblush*
┣» *${prefix}animesmug*
┣» *${prefix}animewave*
┣» *${prefix}animesmile*
┣» *${prefix}animepoke*
┣» *${prefix}animewink*
┣» *${prefix}animebonk*
┣» *${prefix}animebully*
┣» *${prefix}animeyeet*
┣» *${prefix}animebite*
┣» *${prefix}animelick*
┣» *${prefix}animekill*
┣» *${prefix}animecry*
┣» *${prefix}animewlp*
┣» *${prefix}animekiss*
┣» *${prefix}animehug*
┣» *${prefix}animeneko*
┣» *${prefix}animepat*
┣» *${prefix}animeslap*
┣» *${prefix}animecuddle*
┣» *${prefix}animewaifu*
┣» *${prefix}animenom*
┣» *${prefix}animefoxgirl*
┣» *${prefix}animegecg*
┣» *${prefix}animetickle*
┣» *${prefix}animefeed*
┣» *${prefix}animeavatar*
┣» *${prefix}genshin*
┣» *${prefix}anime*
┣» *${prefix}amv*
╰━━━━━━━━━━━━━━━━━━`}

global.ownermenu = (prefix) => {
return`〖 ${grid}ᴏ ᴡ ɴ ᴇ ʀ - ᴍ ᴇ ɴ ᴜ${grid} 〗
〢 *${prefix}onlypc*
〢 *${prefix}onlygc*
〢 *${prefix}self*
〢 *${prefix}clearchat*
〢 *${prefix}pinchat*
〢 *${prefix}unpinchat*
〢 *${prefix}gconly* 
〢 *${prefix}public* 
〢 *${prefix}setpppanjang* 
〢 *${prefix}setppgcpanjang* 
〢 *${prefix}addcase*
〢 *${prefix}join* 
〢 *${prefix}bctext* 
〢 *${prefix}poll* 
〢 *${prefix}bcimage*
〢 *${prefix}bcvideo*
〢 *${prefix}creategc*
〢 *${prefix}setexif*
〢 *${prefix}userjid*
〢 *${prefix}setbotname*
〢 *${prefix}setbotbio*
〢 *${prefix}delppbot*
〢 *${prefix}restart*
〢 *${prefix}setppbot*
〢 *${prefix}addprem*
〢 *${prefix}delprem*
〢 *${prefix}addowner*
〢 *${prefix}delowner*
〢 *${prefix}addvn*
〢 *${prefix}delvn*
〢 *${prefix}addsticker*
〢 *${prefix}delsticker*
〢 *${prefix}addimage*
〢 *${prefix}delimage*
〢 *${prefix}addvideo*
〢 *${prefix}delvideo*
〢 *${prefix}block*
〢 *${prefix}unblock del*
〢 *${prefix}leavegc*
〢 *${prefix}pushkontak*
〢 *${prefix}pushkontakv2*
〢 *${prefix}pushkontakv3*
〢 *${prefix}pushkontakv4*
〢 *${prefix}savekontakv*
〢 *${prefix}savekontakv2*
〢 *${prefix}getkontak*
〢 *${prefix}sendkontak*
〢 *${prefix}jpm*
〢 *${prefix}jpm2*
〢 *${prefix}spamsms (628xx)*
〢 *${prefix}bannedwa (628xx)*
〢 *${prefix}unbanwa (628xx)*
〢 *${prefix}unbanwav2 (628xx)*
〢 *${prefix}unbanwav3 (628xx)*
〢 *${prefix}unbanwav4 (628xx)*
〢 *${prefix}unbanwav5 (628xx)*`}

global.installpanelmenu = (prefix) => {
return `『 *\`乂 ɪ ɴ ꜱ ᴛ ᴀ ʟ ʟ - ᴘ ᴀ ɴ ᴇ ʟ 乂\`* 』
_*NOTE :*_
> rata rata install panel hanya work di VPS Ubuntu versi 20.04

〢 *${prefix}installpanel*
〢 *${prefix}uninstallpanel*
〢 *${prefix}hackbackpanel*
〢 *${prefix}startwings*
`
}

global.othermenu = (prefix) => {
return`『 *\`乂 ᴏ ᴛ ʜ ᴇ ʀ - ᴍ ᴇ ɴ ᴜ 乂\`* 』
〢 *${prefix}ping*
〢 *${prefix}readviewonce*
〢 *${prefix}cekkhodam*
〢 *${prefix}cekkontol*
〢 *${prefix}paptt*
〢 *${prefix}alkitab*
〢 *${prefix}totalfitur*
〢 *${prefix}menu*
〢 *${prefix}myip*
〢 *${prefix}reportbug*
〢 *${prefix}listpem*
〢 *${prefix}liststicker*
〢 *${prefix}listimage*
〢 *${prefix}listvideo*
〢 *${prefix}listvn*
〢 *${prefix}listbadword*
〢 *${prefix}listpc*
〢 *${prefix}listgc*
〢 *${prefix}owner*
〢 *${prefix}jadibot*
〢 *${prefix}listjadibot*
〢 *${prefix}donate*
〢 *${prefix}friend*
〢 *${prefix}obfuscate*
〢 *${prefix}styletext*
〢 *${prefix}fliptext*
〢 *${prefix}tts*
〢 *${prefix}say*
〢 *${prefix}togif*
〢 *${prefix}toqr*
〢 *${prefix}bass*
〢 *${prefix}blown*
〢 *${prefix}deep*
〢 *${prefix}earrape*
〢 *${prefix}fast*
〢 *${prefix}fat*
〢 *${prefix}nightcore*
〢 *${prefix}reverse*
〢 *${prefix}robot*
〢 *${prefix}slow*
〢 *${prefix}smooth*
〢 *${prefix}squirrel*
〢 *${prefix}tinyurl*
〢 *${prefix}tinyurl*
〢 *${prefix}tovn*
〢 *${prefix}toaudio*
〢 *${prefix}tomp3*
〢 *${prefix}tomp4*
〢 *${prefix}toimg*
〢 *${prefix}toonce*
〢 *${prefix}sticker*
〢 *${prefix}take*
〢 *${prefix}emoji*
〢 *${prefix}volume*
〢 *${prefix}ebinary*
〢 *${prefix}dbinary*
〢 *${prefix}ssweb*
〢 *${prefix}quoted*
〢 *${prefix}runtime*`}

global.rpgmenu = (prefix, hituet) => {
return`『 *\`乂 ʀ ᴘ ɢ - ᴍ ᴇ ɴ ᴜ 乂\`* 』
〢 *${prefix}kerja*
〢 *${prefix}fightnaga*
〢 *${prefix}fightkucing*
〢 *${prefix}fightphonix*
〢 *${prefix}fightgriffin*
〢 *${prefix}fightkyubi*
〢 *${prefix}fightcentaur*
〢 *${prefix}nabung*
〢 *${prefix}mining*
〢 *${prefix}bankcek*
〢 *${prefix}maling*
〢 *${prefix}banknabung*
〢 *${prefix}banktarik*
〢 *${prefix}berkebon*
〢 *${prefix}crafting*
〢 *${prefix}bet*
〢 *${prefix}bonus*
〢 *${prefix}buah*
〢 *${prefix}nebang*
〢 *${prefix}bekerja*
〢 *${prefix}bansos*
〢 *${prefix}taxy*
〢 *${prefix}mulung*
〢 *${prefix}berburu*
〢 *${prefix}polisi*
〢 *${prefix}berdagang*
〢 *${prefix}rampok*
〢 *${prefix}bunuh*
〢 *${prefix}collect*
〢 *${prefix}mancing*
〢 *${prefix}repair*
〢 *${prefix}feed*
〢 *${prefix}fight*
〢 *${prefix}gajian*
〢 *${prefix}upgrade*
〢 *${prefix}transfer*
〢 *${prefix}shop*
〢 *${prefix}selectskill*
〢 *${prefix}sampah*
〢 *${prefix}roket*
〢 *${prefix}ojek*
〢 *${prefix}nguli*
〢 *${prefix}pasar*
〢 *${prefix}rob*
〢 *${prefix}referal*
〢 *${prefix}petshop*
〢 *${prefix}kolam*
〢 *${prefix}koboy*
〢 *${prefix}leaderboard*
〢 *${prefix}casino*`}

global.gamemenu = (prefix, hituet) => {
return`『 *\`乂 ɢ ᴀ ᴍ ᴇ - ᴍᴇɴᴜ 乂\`* 』
〢 *${prefix}tebakkata*
〢 *${prefix}tebaktebakan*
〢 *${prefix}tebaklirik*
〢 *${prefix}tebakgambar*
〢 *${prefix}tebaklagu*
〢 *${prefix}tebakkimia*
〢 *${prefix}asahotak*
〢 *${prefix}siapaaku*
〢 *${prefix}susunkata*
〢 *${prefix}tekateki*
〢 *${prefix}tebakbendera*
〢 *${prefix}tebakbenderav2*
〢 *${prefix}tebakkabupaten*
〢 *${prefix}caklontong*
〢 *${prefix}family100*
〢 *${prefix}werewolf*
`}

global.downloadmenu = (prefix) => { 
return`『 *\`乂 ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ - ᴍᴇɴᴜ 乂\`* 』
〢 ${prefix}tiktok
〢 ${prefix}tiktokslide
〢 ${prefix}tiktokaudio
〢 ${prefix}ytsearch
〢 ${prefix}ttsearch
〢 ${prefix}teraboxdl
〢 ${prefix}snackvideo
〢 ${prefix}capcutdl
〢 ${prefix}play
〢 ${prefix}ytmp3
〢 ${prefix}ytmp4
〢 ${prefix}google
〢 ${prefix}imdb
〢 ${prefix}weather
〢 ${prefix}wanumber
〢 ${prefix}instagram
〢 ${prefix}facebook
〢 ${prefix}twittervid
〢 ${prefix}telestick
〢 ${prefix}spotify
〢 ${prefix}gitclone
〢 ${prefix}happymod
〢 ${prefix}gdrive
〢 ${prefix}pinterest
〢 ${prefix}ringtone
`}

global.groupmenu = (prefix) => {
return`『 *\`乂 ɢ ʀ ᴏ ᴜ ᴘ - ᴍᴇɴᴜ 乂\`* 』
〢 *${prefix}antipromosi*
〢 *${prefix}autoaigc*
〢 *${prefix}warcall*
〢 *${prefix}autosimi*
〢 *${prefix}mikupoxychat*
〢 *${prefix}mute*
〢 *${prefix}setwelcome*
〢 *${prefix}setleft*
〢 *${prefix}welcome on/off*
〢 *${prefix}antilink*
〢 *${prefix}antiwame*
〢 *${prefix}linkgc*
〢 *${prefix}invite*
〢 *${prefix}ephemeral*
〢 *${prefix}delete*
〢 *${prefix}setppgroup*
〢 *${prefix}delppgroup*
〢 *${prefix}setname*
〢 *${prefix}setdesc*
〢 *${prefix}add*
〢 *${prefix}kick*
〢 *${prefix}promote*
〢 *${prefix}demote*
〢 *${prefix}hidetag*
〢 *${prefix}totag*
〢 *${prefix}tagall*
〢 *${prefix}editinfo*
〢 *${prefix}opentime*
〢 *${prefix}closetime*
〢 *${prefix}resetlink*
〢 *${prefix}getbio*
〢 *${prefix}vote*
〢 *${prefix}upvote*
〢 *${prefix}downvote*
〢 *${prefix}checkvote*
〢 *${prefix}delvote*
〢 *${prefix}autostickergc*
〢 *${prefix}antilinkgc*
〢 *${prefix}antiwame*
〢 *${prefix}antilinkall*
〢 *${prefix}antilinktiktok*
〢 *${prefix}antilinkfb*
〢 *${prefix}antilinktwitter*
〢 *${prefix}antilinkig*
〢 *${prefix}antilinktg*
〢 *${prefix}antilinkytvid*
〢 *${prefix}antilinkytch*
〢 *${prefix}antivirus*
〢 *${prefix}antitoxic*
〢 *${prefix}nsfw*
〢 *${prefix}react*
`}

global.funmenu = (prefix) => {
return`『 *\`乂 ғ ᴜ ɴ - ᴍ ᴇ ɴ ᴜ 乂\`* 』
〢 *${prefix}smeme*
〢 *${prefix}ppcouple*
〢 *${prefix}define*
〢 *${prefix}qc*
〢 *${prefix}lyrics*
〢 *${prefix}suit*
〢 *${prefix}math*
〢 *${prefix}tictactoe*
〢 *${prefix}fact*
〢 *${prefix}truth*
〢 *${prefix}dare*
〢 *${prefix}couple*
〢 *${prefix}soulmate*
〢 *${prefix}stupidcheck*
〢 *${prefix}handsomecheck*
〢 *${prefix}uncleancheck*
〢 *${prefix}hotcheck*
〢 *${prefix}smartcheck*
〢 *${prefix}greatcheck*
〢 *${prefix}evilcheck*
〢 *${prefix}dogcheck*
〢 *${prefix}coolcheck*
〢 *${prefix}waifucheck*
〢 *${prefix}awesomecheck*
〢 *${prefix}gaycheck*
〢 *${prefix}cutecheck*
〢 *${prefix}lesbiancheck*
〢 *${prefix}hornycheck*
〢 *${prefix}prettycheck*
〢 *${prefix}lovelycheck*
〢 *${prefix}uglycheck*
〢 *${prefix}pick*
〢 *${prefix}quotes*
〢 *${prefix}can*
〢 *${prefix}is*
〢 *${prefix}when*
〢 *${prefix}where*
〢 *${prefix}what*
〢 *${prefix}how*
〢 *${prefix}rate*
〢 *${prefix}cry*
〢 *${prefix}kill*
〢 *${prefix}hug*
〢 *${prefix}pat*
〢 *${prefix}lick*
〢 *${prefix}kiss*
〢 *${prefix}bite*
〢 *${prefix}yeet*
〢 *${prefix}bully*
〢 *${prefix}bonk*
〢 *${prefix}wink*
〢 *${prefix}poke*
〢 *${prefix}nom*
〢 *${prefix}slap*
〢 *${prefix}smile*
〢 *${prefix}wave*
〢 *${prefix}awoo*
〢 *${prefix}blush*
〢 *${prefix}smug*
〢 *${prefix}glomp*
〢 *${prefix}happy*
〢 *${prefix}dance*
〢 *${prefix}cringe*
〢 *${prefix}cuddle*
〢 *${prefix}highfive*
〢 *${prefix}shinobu*
〢 *${prefix}handhold*
〢 *${prefix}spank*
〢 *${prefix}tickle*
〢 *${prefix}avatar*
〢 *${prefix}feed*
〢 *${prefix}foxgirl*
〢 *${prefix}gecg*
〢 *${prefix}checkme*
〢 *${prefix}sound1 - sound161*
`}

global.stalkermenu = (prefix) => {
  return `『 *\`乂 s ᴛ ᴀ ʟ ᴋ ᴇ ʀ 乂\`* 』
〢 *${prefix}igstalk* IG Stalker
〢 *${prefix}ttstalk* TT Stalker
〢 *${prefix}ffstalk* FF Stalker
〢 *${prefix}mlstalk* ML Stalker
〢 *${prefix}npmstalk* NPM Stalker
〢 *${prefix}ghstalk* GH Stalker
`}

global.stickermenu = (prefix) => {
return`『 *\`乂 s ᴛ ɪ ᴄ ᴋ ᴇ ʀ 乂\`* 』
〢 *${prefix}goose*
〢 *${prefix}woof*
〢 *${prefix}8ball*
〢 *${prefix}lizard*
〢 *${prefix}meow*
〢 *${prefix}gura*
〢 *${prefix}doge*
〢 *${prefix}patrick*
〢 *${prefix}lovestick*
`}

global.databasemenu = (prefix) => {
return`『 *\`乂 ᴅ ᴀ ᴛ ᴀ ʙ ᴀ s ᴇ 乂\`* 』
〢 *${prefix}setcmd*
〢 *${prefix}delcmd*
〢 *${prefix}listcmd*
〢 *${prefix}lockcmd*
〢 *${prefix}addmsg*
〢 *${prefix}delmsg*
〢 *${prefix}getmsg*
〢 *${prefix}listmsg*
`}

global.aimenu = (prefix) => {
return`『 *\`乂 ᴏ ᴘ ᴇ ɴ - ᴀɪ 乂\`* 』
〢 *${prefix}leptonai*
〢 *${prefix}openai*
〢 *${prefix}ai*
〢 *${prefix}bard*
〢 *${prefix}prodia*
〢 *${prefix}diffusion-anime*
〢 *${prefix}travel-assistant*
〢 *${prefix}ocr*
〢 *${prefix}guru-ai*
〢 *${prefix}emi-ai*
〢 *${prefix}claude-ai*
〢 *${prefix}costume-ai*
〢 *${prefix}hercai-ai*
〢 *${prefix}hercai-cartoon*
〢 *${prefix}hercai-animefy*
〢 *${prefix}hercai-lexica*
〢 *${prefix}hercai-prodia*
〢 *${prefix}hercai-simurg*
〢 *${prefix}hercai-raava*
〢 *${prefix}hercai-shonin*
〢 *${prefix}realistic*
〢 *${prefix}3dmodel*
〢 *${prefix}jadizombie*
〢 *${prefix}blackboxai*
〢 *${prefix}photoleapai*
〢 *${prefix}diffusion*
〢 *${prefix}indo-ai*
〢 *${prefix}lamaai*
〢 *${prefix}aivo*
〢 *${prefix}gemini*
〢 *${prefix}text2img*
〢 *${prefix}absolutely*
〢 *${prefix}dalle*
〢 *${prefix}bingimg*
〢 *${prefix}bingai*
〢 *${prefix}gptimg*
〢 *${prefix}gpt4*
〢 *${prefix}gpt4_2*
〢 *${prefix}anything*
〢 *${prefix}hdvid*
〢 *${prefix}cai*
〢 *${prefix}youai*
〢 *${prefix}remini*
〢 *${prefix}jadianime*
〢 *${prefix}removebg*
〢 *${prefix}nulis*
`}

global.quotesmenu = (prefix) => {
return`『 *\`乂 ᴏ̨ᴜᴏᴛᴇs-ᴍᴇɴᴜ 乂\`*  』
〢 *${prefix}quotesanime*
〢 *${prefix}quotesbacot*
〢 *${prefix}quotesbucin*
〢 *${prefix}quotesmotivasi*
〢 *${prefix}quotesgalau*
〢 *${prefix}quotesgombal*
〢 *${prefix}quoteshacker*
〢 *${prefix}quotesbijak*`}
 
global.storemenu = (prefix) => {
return`『 *\`乂 s ᴛ ᴏ ʀ ᴇ - ᴍ ᴇ ɴ ᴜ 乂\`* 』
〢 *${prefix}list*
〢 *${prefix}addlist*
〢 *${prefix}dellist*
〢 *${prefix}update*
〢 *${prefix}jeda*
〢 *${prefix}tambah*
〢 *${prefix}kurang*
〢 *${prefix}kali*
〢 *${prefix}bagi*
〢 *${prefix}delsetdone*
〢 *${prefix}changedone*
〢 *${prefix}setdone*
〢 *${prefix}delproses*
〢 *${prefix}changeproses*
〢 *${prefix}setproses*
〢 *${prefix}proses <reply chat>*
〢 *${prefix}done <reply chat>*`}

global.anonymousmenu = (prefix) => {
return`『 *\`乂 ᴀɴᴏɴʏᴍᴏᴜs-ᴍᴇɴᴜ 乂\`* 』
〢 *${prefix}anonymouschat*
〢 *${prefix}start*
〢 *${prefix}next*
〢 *${prefix}stop*
〢 *${prefix}sendprofile*
〢 *${prefix}menfess*
〢 *${prefix}confess*
〢 *${prefix}balasmenfess*
〢 *${prefix}tolakmenfess*
〢 *${prefix}stopmenfess*
`}

global.pushmenu = (prefix) => {
return`『 *\`乂 ᴘ ᴜ s ʜ - ᴍᴇɴᴜ 乂\`* 』━
〢 *${prefix}cekidgc*
〢 *${prefix}pushkontak*
〢 *${prefix}pushkontakv2*
〢 *${prefix}pushkontakv3*
〢 *${prefix}pushkontakv4*
〢 *${prefix}savekontakv*
〢 *${prefix}savekontakv2*
〢 *${prefix}getkontak*
〢 *${prefix}sendkontak*
〢 *${prefix}jpm*
〢 *${prefix}jpm2*
`}

global.cpanelmenu = (prefix) => {
return`『 *\`乂 ᴄ ᴘ ᴀ ɴ ᴇ ʟ - ᴍᴇɴᴜ 乂\`* 』
〢 *${prefix}panel*
〢 *${prefix}listusr*
〢 *${prefix}delusr*
〢 *${prefix}listsrv*
〢 *${prefix}delsrv*
〢 *${prefix}tutorial*
〢 *${prefix}ramlist*
〢 *${prefix}premlist*
〢 *${prefix}addusr*
〢 *${prefix}addsrv*
〢 *${prefix}updatesrv*
〢 *${prefix}suspend*
〢 *${prefix}unsuspend*
〢 *${prefix}createadmin*
〢 *${prefix}listadmin*


▭▬▭▬▭( *LIST RAM* ▬▭▬▭

*.1gb [username,nomor]*
*.2gb [username,nomor]*
*.3gb [username,nomor]*
*.4gb [username,nomor]*
*.5gb [username,nomor]*
*.6gb [username,nomor]*
*.7gb [username,nomor]*
*.8gb [username,nomor]*
*.unli [username,nomor]*

Contoh:
.ram username,nomor
.1gb mikupoxy,6285745522549
▬▭▬▭▬▭▬▭▬▭▬▭▬`}

global.bugmenu = (prefix) => {
return`『 *\`乂 ʙ ᴜ ɢ - ᴡ ᴀ ʀ 乂\`* 』
〢 *${prefix}dansyavip*
〢 *${prefix}dansyacrush*
〢 *${prefix}xandroid*
〢 *${prefix}xandroid2*
〢 *${prefix}systemuicrash*
〢 *${prefix}xsysui*
〢 *${prefix}xios*
〢 *${prefix}xios2*
〢 *${prefix}xgc*
〢 *${prefix}ioskill*
〢 *${prefix}iosx*
〢 *${prefix}onekill*
〢 *${prefix}oneclickall*
〢 *${prefix}xsamsung*
〢 *${prefix}xwaweb*
〢 *${prefix}doublekill*
〢 *${prefix}triplekill*
〢 *${prefix}💀*
`}

global.randomphotomenu = (prefix) => {
return`『 *\`乂 ʀ ᴀ ɴ ᴅ ᴏ ᴍ - ᴘ ʜ ᴏ ᴛ ᴏ 乂\`* 』
〢 *${prefix}aesthetic*
〢 *${prefix}coffee*
〢 *${prefix}wikimedia*
〢 *${prefix}wallpaper*
〢 *${prefix}art*
〢 *${prefix}bts*
〢 *${prefix}dogwoof*
〢 *${prefix}catmeow*
〢 *${prefix}lizardpic*
〢 *${prefix}goosebird*
〢 *${prefix}8ballpool*
〢 *${prefix}cosplay*
〢 *${prefix}hacker*
〢 *${prefix}cyber*
〢 *${prefix}gamewallpaper*
〢 *${prefix}islamic*
〢 *${prefix}jennie*
〢 *${prefix}jiso*
〢 *${prefix}satanic*
〢 *${prefix}justina*
〢 *${prefix}cartoon*
〢 *${prefix}pentol*
〢 *${prefix}cat*
〢 *${prefix}kpop*
〢 *${prefix}exo*
〢 *${prefix}lisa*
〢 *${prefix}space*
〢 *${prefix}car*
〢 *${prefix}technology*
〢 *${prefix}bike*
〢 *${prefix}shortquote*
〢 *${prefix}antiwork*
〢 *${prefix}hacking*
〢 *${prefix}boneka*
〢 *${prefix}rose*
〢 *${prefix}ryujin*
〢 *${prefix}ulzzangboy*
〢 *${prefix}ulzzanggirl*
〢 *${prefix}wallml*
〢 *${prefix}wallphone*
〢 *${prefix}mountain*
〢 *${prefix}goose*
〢 *${prefix}profilepic*
〢 *${prefix}couplepic*
〢 *${prefix}programming*
〢 *${prefix}pubg*
〢 *${prefix}blackpink*
〢 *${prefix}randomboy*
〢 *${prefix}randomgirl*
〢 *${prefix}hijab*
〢 *${prefix}chinese*
〢 *${prefix}indo*
〢 *${prefix}japanese*
〢 *${prefix}korean*
〢 *${prefix}malay*
〢 *${prefix}thai*
〢 *${prefix}vietnamese*
`}

global.randomvideomenu = (prefix) => {
return`『 *\`乂 ʀ ᴀ ɴ ᴅ ᴏ ᴍ - ᴠ ɪ ᴅ ᴇ ᴏ 乂\`* 』
〢 *${prefix}tiktokgirl*
〢 *${prefix}tiktoknukthy*
〢 *${prefix}tiktokkayes*
〢 *${prefix}tiktokpanrika*
〢 *${prefix}tiktoknotnot*
〢 *${prefix}tiktokghea*
〢 *${prefix}tiktoksantuy*
〢 *${prefix}tiktokbocil*
`}

global.primbonmenu = (prefix) => {
  return `『 *\`乂 ᴘ ʀ ɪ ᴍ ʙ ᴏ ɴ - ᴍ ᴇ ɴ ᴜ 乂\`* 』
〢 *${prefix}artimimpi*
〢 *${prefix}artinama*
〢 *${prefix}ramaljodoh*
〢 *${prefix}ramaljodohbali*
〢 *${prefix}suamiistri*
〢 *${prefix}ramalcinta*
〢 *${prefix}cocoknama*
〢 *${prefix}pasangan*
〢 *${prefix}jadiannikah*
〢 *${prefix}sifatusaha*
〢 *${prefix}rezeki*
〢 *${prefix}pekerjaan*
〢 *${prefix}nasib*
〢 *${prefix}penyakit*
〢 *${prefix}tarot*
〢 *${prefix}fengshui*
〢 *${prefix}haribaik*
〢 *${prefix}harisangar*
〢 *${prefix}harisial*
〢 *${prefix}nagahari*
〢 *${prefix}arahrezeki*
〢 *${prefix}peruntungan*
〢 *${prefix}weton*
〢 *${prefix}karakter*
〢 *${prefix}keberuntungan*
〢 *${prefix}memancing*
〢 *${prefix}masasubur*
〢 *${prefix}zodiak*
〢 *${prefix}shio*
`}

global.beritamenu = (prefix) => {
  return `『 *\`乂 ʙ ᴇ ʀ ɪ ᴛ ᴀ - ᴍ ᴇ ɴ ᴜ 乂\`* 』
〢 *${prefix}fajar*
〢 *${prefix}cnn*
〢 *${prefix}layarkaca*
〢 *${prefix}cnbc*
〢 *${prefix}tribun*
〢 *${prefix}indozone*
〢 *${prefix}kompas*
〢 *${prefix}detiknews*
〢 *${prefix}dailynews*
〢 *${prefix}inews*
〢 *${prefix}okezone*
〢 *${prefix}sindo*
〢 *${prefix}tempo*
〢 *${prefix}antara*
〢 *${prefix}kontan*
〢 *${prefix}merdeka*
〢 *${prefix}jalantikus*
`}

global.islamimenu= (prefix) => {
return`『 *\`乂 ɪ s ʟ ᴀ ᴍ ɪ - ᴍᴇɴᴜ 乂\`* 』
〢 *${prefix}kisahnabi*
〢 *${prefix}asmaulhusna*
〢 *${prefix}bacaansholat*
〢 *${prefix}audiosurah*
〢 *${prefix}ayatkursi*
〢 *${prefix}doaharian*
〢 *${prefix}niatsholat*
〢 *${prefix}quotesislami*
〢 *${prefix}doatahlil*
`}

global.ephoto360menu = (prefix) => {
return`━『 *\`乂 ᴇ ᴘ ʜ ᴏ ᴛ ᴏ - ᴍ ᴀ ᴋ ᴇ ʀ 乂\`* 』
〢 *${prefix}glitchtext*
〢 *${prefix}writetext*
〢 *${prefix}advancedglow*
〢 *${prefix}typographytext*
〢 *${prefix}pixelglitch*
〢 *${prefix}neonglitch*
〢 *${prefix}flagtext*
〢 *${prefix}flag3dtext*
〢 *${prefix}deletingtext*
〢 *${prefix}blackpinkstyle*
〢 *${prefix}glowingtext*
〢 *${prefix}underwatertext*
〢 *${prefix}logomaker*
〢 *${prefix}cartoonstyle*
〢 *${prefix}papercutstyle*
〢 *${prefix}watercolortext*
〢 *${prefix}effectclouds*
〢 *${prefix}blackpinklogo*
〢 *${prefix}gradienttext*
〢 *${prefix}summerbeach*
〢 *${prefix}luxurygold*
〢 *${prefix}multicoloredneon*
〢 *${prefix}sandsummer*
〢 *${prefix}galaxywallpaper*
〢 *${prefix}1917style*
〢 *${prefix}makingneon*
〢 *${prefix}royaltext*
〢 *${prefix}freecreate*
〢 *${prefix}galaxystyle*
〢 *${prefix}lighteffects*
`}

global.nsfwmenu = (prefix) => {
return`『 *\`乂 ᴀ ɴ ɪ ᴍ ᴇ - ɴғsᴡ 乂\`* 』
〢 *${prefix}hentai*
〢 *${prefix}gifhentai*
〢 *${prefix}gifblowjob*
〢 *${prefix}hentaivid*
〢 *${prefix}hneko*
〢 *${prefix}nwaifu*
〢 *${prefix}animespank*
〢 *${prefix}trap*
〢 *${prefix}gasm*
〢 *${prefix}ahegao*
〢 *${prefix}ass*
〢 *${prefix}bdsm*
〢 *${prefix}blowjob*
〢 *${prefix}cuckold*
〢 *${prefix}cum*
〢 *${prefix}milf*
〢 *${prefix}eba*
〢 *${prefix}ero*
〢 *${prefix}femdom*
〢 *${prefix}foot*
〢 *${prefix}gangbang*
〢 *${prefix}glasses*
〢 *${prefix}jahy*
〢 *${prefix}masturbation*
〢 *${prefix}manga*
〢 *${prefix}neko-hentai*
〢 *${prefix}neko-hentai2*
〢 *${prefix}nsfwloli*
〢 *${prefix}orgy*
〢 *${prefix}panties*
〢 *${prefix}pussy*
〢 *${prefix}tentacles*
〢 *${prefix}thighs*
〢 *${prefix}yuri*
〢 *${prefix}zettai*
〢 *${prefix}xnxxsearch*
〢 *${prefix}xnxxdl*
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
