const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_52_09_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc3LFxuICAgICAgICAyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDkzLFxuICAgICAgICA3NixcbiAgICAgICAgMjE0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MixcbiAgICAgICAgNjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjksXG4gICAgICAgIDQ1LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMyxcbiAgICAgICAgMTM0LFxuICAgICAgICA5OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU3LFxuICAgICAgICA5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxODksXG4gICAgICAgIDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNixcbiAgICAgICAgMTA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxODQsXG4gICAgICAgIDU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDkzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MixcbiAgICAgICAgMTgwLFxuICAgICAgICA5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgODksXG4gICAgICAgIDc3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjksXG4gICAgICAgIDcxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDkwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkR3ZhTG5BUUMyTG9rTGMrMVNaRDN2Z3BmUllBVEdyVXRRSE4vN3ppcVh3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyRzNaT2FfOFNiQ29oNzZFYUhTeTBRXCIsXG4gIFwicGhvbmVJZFwiOiBcImVlYzA5NGIxLTM3N2YtNDA2Ny1hMzI1LTgzMzIyMjQ0ZDU3ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTUsXG4gICAgICAxODcsXG4gICAgICA0OCxcbiAgICAgIDU1LFxuICAgICAgOTYsXG4gICAgICAxNjcsXG4gICAgICAyMTMsXG4gICAgICAxNDksXG4gICAgICAyMTgsXG4gICAgICAxNjEsXG4gICAgICAxOTAsXG4gICAgICAyMyxcbiAgICAgIDgzLFxuICAgICAgOTksXG4gICAgICAxOTUsXG4gICAgICAxNSxcbiAgICAgIDU5LFxuICAgICAgMTM2LFxuICAgICAgMjQ3LFxuICAgICAgMTg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NCxcbiAgICAgIDMyLFxuICAgICAgNjMsXG4gICAgICAxOTksXG4gICAgICAyMSxcbiAgICAgIDYzLFxuICAgICAgMTg5LFxuICAgICAgNzIsXG4gICAgICAxMDQsXG4gICAgICAxMTgsXG4gICAgICAyMzQsXG4gICAgICAxNyxcbiAgICAgIDI0NCxcbiAgICAgIDIsXG4gICAgICAzNyxcbiAgICAgIDQ1LFxuICAgICAgMTIxLFxuICAgICAgMTMyLFxuICAgICAgMTk2LFxuICAgICAgMTM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZWNUhXUjNEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNDM5ODE1NjQxMzg6OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCR8J2QjvCdkIPwnZCR8J2QiPCdkIbwnZCOIChMKVwiLFxuICAgIFwibGlkXCI6IFwiMTQ0NzgzODM0MDkxNTc1Ojk0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01LdzUrd01FTGJ1K3JZR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ2JqMHlJTmsxWWpwVFRUTlBXZ3BNR1d0bkNnMlFZZUxiQnJLR0c4MDRtYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoZ2VzVG8yTlpXbTg5Tk9Ma3JPcXBveEhNWkpOTEtKbmpuRVBWUk5tQitPeFpBRkJEWUg1S3hvZDd1TUpITWZldzdsR3hHZGwrU0IyV21FaTNNc1JEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0cTJNWU5zWFpoS0hoeDkvRWJXaUVSdVkyVk84dWo4ZktjSGtOek42MFJtOUErZ3RRK2NhQWgyWFc4THpKR3ZXYkhFOFdtUTVablVBeWdyMXAvaTFBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNDM5ODE1NjQxMzg6OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTg3MTkzMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUMzMFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQzMwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiL2dSa3dnU0F3aEg1aWd6WkplUEFXNlRPdzFQaFdTSGZkeHBCdUUvQm9mdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNDQ5NDExNjUwLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbNSwxLDYsMF19LFwidGltZXN0YW1wXCI6XCIxNzI1NDYzOTI3ODMwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "?",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "RODRIGO",
  packname: process.env.PACK_NAME || "L",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "L",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
