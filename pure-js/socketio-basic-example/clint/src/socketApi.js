import io from "socket.io-client"

let socket;

export const init = () =>{
    console.log("suncuya bağlanılıyor");
    socket = io('http://localhost:3001/',{
        transports: ["websocket"],
    });
    socket.on('connect',()=>console.log('sunucuya bağlanma başarılı'))

}

export const send = (color) => {
    socket.emit('newColor',color)
}

export const sub = (cb) =>{
    socket.on('receive',(color)=>{
        console.log(color)
        cb(color)
        
    })
}