function chatLogger(input){
    let command = input.shift().split(" ");
    let chatHistory = [];
    while(command !== "end"){
       let part = command.shift();
       
       switch(part){
        case "Chat":
            let message = command[0];
            chatHistory.push(message)
            break;
            case "Delete":
                let message1 = command[0];
                if(chatHistory.includes(message1)){
                    chatHistory.splice(chatHistory.indexOf(message1),1);
                }else{
                    command = input.shift().split(" ");
                    continue;
                }
                break;
                case "Edit":
                    let message2 = command[0];
                    let editiedVersion = command[1];
                    if(chatHistory.includes(message2)){
                        chatHistory.splice(chatHistory.indexOf(message2), 1, editiedVersion)
                    }else{
                        command = input.shift().split(" ");
                        continue;
                    }
                    break;
                    case "Pin":
                        let message3 = command[0];
                        if(chatHistory.includes(message3)){
                            let el = chatHistory.splice(chatHistory.indexOf(message3),1);
                            chatHistory.push(el);
                        }else{
                            command = input.shift().split(" ");
                            continue;
                        }
                        break;
                        case "Spam":
                            for(let el of command){
                                chatHistory.push(el)
                            }
                            break;
       }
       command = input.shift().split(" ");
       if(command.length === 1){
        break;
       }
    }
    console.log(chatHistory.join("\n"));
}
chatLogger((["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"])

)
