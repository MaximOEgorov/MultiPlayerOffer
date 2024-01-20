import {_data, subscribe} from "../../../data/game.data.js";

export function Scores() {

    subscribe(() => {
        containerElement.innerHTML = '';
        update(containerElement);
    })

    const containerElement = document.createElement('div');
    update(containerElement);

    return containerElement;
}

function update(containerElement) {
    containerElement.append('player1: ' + _data.score.player1 + '; player2: ' + _data.score.player2 + '; miss: ' + _data.score.missCount);
}