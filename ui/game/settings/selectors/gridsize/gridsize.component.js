import { _data as data } from "../../../../../data/game.data.js";
import { renderSelect } from "../../common/ui/select.js";

export function GridSizeSelect() {
  const dataSelect = [
    { data: { x: 3, y: 3 }, name: "grid 3x3" },
    { data: { x: 4, y: 3 }, name: "grid 4x3" },
    { data: { x: 4, y: 4 }, name: "grid 4x4" },
    { data: { x: 3, y: 4 }, name: "grid 3x4" },
    { data: { x: 4, y: 5 }, name: "grid 4x5" },
  ];
  const defaultValue = dataSelect.find((el) => {
    return (
      el.data.x === data.settings.columnsCount &&
      el.data.y === data.settings.rowsCount
    );
  });
  const select = renderSelect(dataSelect, defaultValue);

  select.addEventListener("change", () => {
    const objValue = JSON.parse(select.value);
    data.settings.columnsCount = objValue.x;
    data.settings.rowsCount = objValue.y;
    select.blur();
  });
  return select;
}
