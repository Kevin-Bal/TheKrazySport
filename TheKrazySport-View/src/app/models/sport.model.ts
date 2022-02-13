export class Sport {

    constructor(
      public id: string,
      public distance: string,
      public debut: Date,
      public fin: Date,
      public duree: string,
      public vitesse: number,
      public userId: string,
      public type: string,
      public urlImage: string
    ) { }
  
}