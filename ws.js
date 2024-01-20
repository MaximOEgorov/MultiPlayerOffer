
export const socket = new WebSocket('ws://192.168.1.5:3000');

let counter = 0;

socket.addEventListener('message', (messageFromBack) => {
    console.log(messageFromBack.data)
})


