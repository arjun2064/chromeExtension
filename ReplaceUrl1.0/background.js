console.log("hii i am in background")

chrome.browserAction.onClicked.addListener(buttonClicked);
console.log(chrome.browserAction)
console.log(chrome.browserAction.onClicked)
console.log(chrome.browserAction.onClicked.addListener)

function buttonClicked(){
    // let msg ={
    //     txt:"hello"
    // }
    console.log("helo")
    // chrome.tabs.sendMessage(tab.id,msg);    
}