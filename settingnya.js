const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	danzz: 'https://danzzapi.xyz',
}

global.APIKeys = {
	'https://danzzapi.xyz': 'danzz',
}

// Setting
global.apikey = ['danzz'] // Get in: https://danzzapi.xyz
global.apikeyprem = ['danzzprem'] // Get in: https://danzzapi.xyz
global.apikeyvip = ['92u1a7pr8s'] // Get in: https://danzzapi.xyz
global.namabot = ['𝒟𝓇𝒾𝓍𝓍𝐵𝑜𝓉𝓏-ᴍᴅ']
global.namaowner = ['DɾιxxBσƚȥ']
global.owner = ['6281256532615', '6285332039348']
global.premium = ['6281256532615']
global.packname = '© Powered By'
global.author = 'DɾιxxBσƚȥ'
global.sessionName = 'drixx'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.prefix = ['']
global.symbol1 = '•'
global.symbol2 = '>'
global.wm = '© 𝒟𝓇𝒾𝓍𝓍𝐵𝑜𝓉𝓏-ᴍᴅ'
global.mess = {
    success: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Khusus Group Chat',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus Nomor Bot',
    wait: 'Waittt...',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}

global.sgc = 'https://chat.whatsapp.com/Bx0UQqceIH80CM5Q461xCd'

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ OTHER ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.keyai = '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' //kalau openai nya error minta apikey nya ke wa.me/6281256532615
global.limitawal = {
	free: "100",
        premium: "unlimited"
}
global.uangawal = {
       free: "5000",
          premium: "999999999",
}
global.thumb = fs.readFileSync('./media/img/1.jpg')
global.qris = fs.readFileSync('./media/img/qr.jpg')
global.pic = { url: 'https://telegra.ph/file/edb7387b1fc7a36bb60e6.jpg' }
global.pic2 = { url: 'https://telegra.ph/file/357dbb2cfe0bc7d7c45d1.jpg' }
global.wibu = [
       "https://www.thiswaifudoesnotexist.net/example-6970.jpg",
        "https://www.thiswaifudoesnotexist.net/example-6271.jpg",
        "https://www.thiswaifudoesnotexist.net/example-6514.jpg",
        "https://www.thiswaifudoesnotexist.net/example-3313.jpg",
        "https://www.thiswaifudoesnotexist.net/example-2870.jpg",
        "https://www.thiswaifudoesnotexist.net/example-5613.jpg",
        "http://www.thiswaifudoesnotexist.net/example-1576.jpg"
]

global.fsizedoc = '99999999999999'
global.fpagedoc = '999'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
