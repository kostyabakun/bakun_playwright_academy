import { EntryHall } from "./entry_hall.ts";

export class Bathroom {
  private readonly visitorName: string;

  constructor(visitorName: string) {
    this.visitorName = visitorName;
    console.log(`Návštěvník ${this.visitorName} vstoupil na toalety.`);
  }

  returnToEntryHall(): EntryHall {
    console.log(
      `Návštěvník ${this.visitorName} se vrací z toalet do vstupní haly.`,
    );
    return new EntryHall(this.visitorName);
  }

  washHands() {
    console.log(`Návštěvník ${this.visitorName} si umyl/a ruce.`);
    return this;
  }
}
