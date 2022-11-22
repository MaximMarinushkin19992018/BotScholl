const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '5779264206:AAElrr-SUJmiG1s3O6BRTwRXqTlbql7DVbE';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});




bot.setMyCommands ([

  {command: "/start", description: "Начать работать с ботом" }


])

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

if (msg.text === "/start") {

  bot.sendMessage(chatId, `Выберите ваш корпус`, {
    // прикрутим клаву
    reply_markup: {
      inline_keyboard: keyboard
    }
  });


}


if (msg.text.includes("$")) {


  dataInfo["message"]= msg.text;

  bot.sendMessage(chatId, `Адрес: ${dataInfo["adress"]} Текст: ${dataInfo["message"]} `, {
        
  });



}




 
  });




  let dataInfo = {


    adress: "",

    message: "",


  }

  const keyboard = [
    
    [
      {
        text: 'Мичуринский проспект дом 40',
        callback_data: 'mich40'
      }
    ],
    [
      {
        text: 'Улица Довженко дом 8',
        callback_data: 'dov8'
      }
    ],
    [
      {
        text: 'Улица Довженко дом 10',
        callback_data: 'dov10'
      }
    ],

    [
      {
        text: 'Мичуринский проспект дом 5 корпус 2',
        callback_data: 'mich5k2'
      }
    ],

    [
      {
        text: 'Мичуринский проспект дом 5 корпус 3',
        callback_data: 'mich5k3'
      }
    ],
  ];


  bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    
  
    
  
    if (query.data === 'mich40') { 

      dataInfo["adress"]= 'Мичуринский проспект дом 40';


      bot.sendMessage(chatId, `Напишите сообщение, начав с символа ($) и отправьте`, {
        
      });



      
    }
  
    if (query.data === 'dov8') { 
      dataInfo["adress"]= 'Улица Довженко дом 8';


      bot.sendMessage(chatId, `Напишите сообщение, начав с символа ($) и отправьте`, {
        
      });
    }



    if (query.data === 'dov10') { 
      dataInfo["adress"]= 'Улица Довженко дом 10';


      bot.sendMessage(chatId, `Напишите сообщение, начав с символа ($) и отправьте`, {
        
      });
    }

    if (query.data === 'mich5k2') { 
      dataInfo["adress"]= 'Мичуринский проспект дом 5 корпус 2';


      bot.sendMessage(chatId, `Напишите сообщение, начав с символа ($) и отправьте`, {
        
      });
    }
  

    if (query.data === 'mich5k3') { 
      dataInfo["adress"]= 'Мичуринский проспект дом 5 корпус 3';


      bot.sendMessage(chatId, `Напишите сообщение, начав с символа ($) и отправьте`, {
        
      });
    }
  
  
  
    
  });


  