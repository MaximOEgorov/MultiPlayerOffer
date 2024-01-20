import {renderSelect} from "../../common/ui/select.js";
import {_data as data} from "../../../../../data/game.data.js";

export function PlayerSelect() {
    const dataSelect = [
        {data: 'player1', name: 'player1'},
        {data: 'player2', name: 'player2'},
    ];

    const select = renderSelect(dataSelect);
    /*  select.onchange = () => {
      console.log("hello");
      console.log(select.value);
    }; */
    select.addEventListener("change", () => {
        const objValue = JSON.parse(select.value);
        data.settings.role = objValue;
        select.blur();
    });
    return select;
}


