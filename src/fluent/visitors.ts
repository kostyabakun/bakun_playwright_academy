// src/fluent/bathroom.ts
// src/fluent/entry_hall.ts
// src/fluent/visitor.ts

import { EntryHall } from "./entry_hall.ts";

new EntryHall("Jan Novák")
  .entryBathroom()
  .returnToEntryHall()
  .askReceptionistQuestion("Ahoj, jak je?")
  .entryBathroom()
  .washHands()
  .washHands()
  .returnToEntryHall();

async function main() {
  const marie = new EntryHall("Marie Dlouhá");
  await marie
    .takeElevatorToSecondFloor()
    .then((secondFloor) => secondFloor.lookAround(3))
    .then((secondFloor) => secondFloor.returnToEntryHallByElevator())
    .then((entryHall) => entryHall.takeElevatorToSecondFloor());
}
main();
