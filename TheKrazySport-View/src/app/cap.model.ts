import { Time } from "@angular/common";

export class Cap {

    constructor(
      public distance: number,
      public debut: Date,
      public fin: Date,
      public vitesse: number,
      public userId: string,
      public bpm: number
    ) {  }
  
}