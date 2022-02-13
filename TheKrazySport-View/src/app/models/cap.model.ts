import { Time } from "@angular/common";

export class Cap {

    constructor(
      public distance: number,
      public debut: Date,
      public fin: Date,
      public duree: string,
      public vitesse: number,
      public userId: string,
      public urlImage: string,
      public bpm: number
    ) {  }
  
}