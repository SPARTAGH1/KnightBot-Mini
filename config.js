/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','233547998018'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBD9lY161Ri5iKgRHbFcVPCOiGJvzEMJBZZcrSpAmPDfN7C7p+dhd7b3rcgqMk+eczJ/gDTDFC1QDcY/QE5wCRlqj6zOERgDtQgCREAX+JBBMAYn5ax0zvqR36LRLdiRHA64Q9IQSx1ME8cyZ5q2x/xAvqXVC3h0QV6cY+z9JuHoRqrJLHP06qaG92ssW8J86ae8JptLWKHeItqhtL++rcLoBTzajBATnIaT/IISRGC8QPUWYvI1+PYC840p1eFGyo6e4lw82Pe9QqbcMDG2N6NE1RRRjQt45Wvw91OcOZNLSZZBlQlXfWsvCzfRvXp6x8wZ3az6qEfS1MWR9waf4jBFvumjlGFWf5l3OJVxIx78w+1uCYGyTZZkp6fBoT7jtWvpldqRO1rBN9JXeS9WHZfde52TPldd0dp2hInUECL1ErFKV3E1L6a5Jtlktst+Bb4lH16J/hfvGxot6bUurbXpyv3bbDNyOFN4lcXTwG06ThRDK1wH7j6iX4PfUJ8d/UboDeQzXCSZeg8GujjLG0KZsmjKQ2opm1jZGDvuEz5kBfkdypXppizc3Dh8eO0cPVKpzt6v55dMEHtTUc3mEz3jc/cQ9Iyt3WP2WuzTjk0G+mTaLE/NPYr2ZcA3x12oHJTeccsp6wm2Xp4dRag2fTDmH11AUIgpI5DhLH3GpFEXQL+0kUcQe9ILiquSUJ33wr3zavOnzLpMtydlRITZhNah3Utf16eRndTzevgCuiAnmYcoRb6BKctIvUKUwhBRMP7rexek6M7ehGvLiXwXBJhQ5qRFHmfQ/1D14xJ6XlakzK5TT2sPiIAx9xlGjOE0pC2PRQqJd8El0i6QUTAOYEzRzw4RQT4YM1Kgn1OrZX5L/M4QhpamnkAXJE9BsA/GQBBFqS+PRkOOH44F4U/6rWrTwjz/liIGuiCF7Wtg55AwmP7hpHHmRaAL4rffOVkc9GVekGSek9sEbfzxE3hbx0cM4piCMdBMgS8W5nSyuoWCV81myipUtFABn41+OOZNEbWPenhIxP418y0zkHw4hPNtslpixGZwhaw405P1Mr/enZd/SALGgAq78K6Gk1d3FZeqJotlvRmZ+tw29q9V4o2cRnPlWk1ncnDF4VWqSAl7RhnP7fnC3rHBsFNcTsFMDU6N5Pi3QFgphtLaqwt8VGIP/VoMH4MzqQZHcdePYndxX7ByoelxoHOhYZ+UuiqO8WxuHq+XgNu72DUjOIlwGUNlV1v9aKjJPm/Gq9gYiIbeq85B1Dlf3r38nKX4fYfhp8taCdvPAKPnSniX6j8lfQPeOo97dH/J8b5k/mVQVQsZZb9cjDrmwHA0o+MeyxneS1etn5JdcjWiOVSkqz04DQ/g8fjeBXkMWZCRpJUhOUPQBSQrWh+baZD9ppKmhKZuhVrbdgwpUz5nY48TRBlMcjDmZZnvS8NBn3t7tSVZbkB6aRnY8qdLAB5/A3LuI7RpBwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
