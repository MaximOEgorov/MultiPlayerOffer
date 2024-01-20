import { _data, moveOfferToPosition, movePlayer1Down, movePlayer1Left, movePlayer1Right, movePlayer1Up, getRole } from "../../../data/game.data.js";
import { socket } from "../../../ws.js";
import { Cell } from "./cell/cell.component.js";
export function Grid() {
    const containerElement = document.createElement('table');
   
    for (let y = 0; y < _data.settings.rowsCount; y++) {
        const row = document.createElement('tr');
        
        for (let x = 0; x < _data.settings.columnsCount; x++) {
            const cell = Cell(x, y);
            row.append(cell);
        }

        containerElement.append(row);
    }
   

    socket.addEventListener("message", (event) => {
      console.log('event.data: '+event.data)
      const command = JSON.parse(event.data);
      switch (command.type) {
        case "movePlayer1Up":
          movePlayer1Up(command.payload.role);
          break;
        case "movePlayer1Down":
          movePlayer1Down(command.payload.role);
          break;
        case "movePlayer1Right":
          movePlayer1Right(command.payload.role);
          break;
        case "movePlayer1Left":
          movePlayer1Left(command.payload.role);
          break;
          case "missOffer":
            _data.score = command.payload.score;
          case "catchOffer":
            _data.score = command.payload.score;
            moveOfferToPosition(command.payload.x, command.payload.y);
            break;
      }
    })

    window.addEventListener('keydown', (e) => {
        console.log(e.code);
        switch (e.code) {
          case "ArrowUp":
            socket.send(JSON.stringify({type:"movePlayer1Up",payload:{role:getRole()}}));
            //movePlayer1Up();
            break;
          case "ArrowDown":
            socket.send(JSON.stringify({type:"movePlayer1Down",payload:{role:getRole()}}));
            //movePlayer1Down();
            break;
          case "ArrowRight":
            socket.send(JSON.stringify({type:"movePlayer1Right",payload:{role:getRole()}}));
            //movePlayer1Right();
            break;
          case "ArrowLeft":
            socket.send(JSON.stringify({type:"movePlayer1Left",payload:{role:getRole()}}));
            //movePlayer1Left();
            break;
        }
    });

    return containerElement;
}

