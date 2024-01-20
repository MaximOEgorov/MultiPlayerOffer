import { GridSizeSelect } from "./selectors/gridsize/gridsize.component.js";
import { PointsToWinSelect } from "./selectors/pointstowin/pointstowin.component.js";
import {PlayerSelect} from "./selectors/player/player.component.js";

export function Settings() {
    const container = document.createElement("div");
    const pointstowinSelector = PointsToWinSelect();
    const gridsizeSelector = GridSizeSelect();
    const playerSelector = PlayerSelect();
    container.append(pointstowinSelector);
    container.append(gridsizeSelector);
    container.append(playerSelector);
    return container;
}
