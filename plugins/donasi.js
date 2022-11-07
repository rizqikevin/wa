let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085713964963]
│ • Tri [089677134384]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Ovo [089677134384]
│ • Gopay [089677134384]
│ • Dana [089677134384]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
