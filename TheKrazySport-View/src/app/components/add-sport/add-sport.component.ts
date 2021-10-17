import { Component, OnInit } from '@angular/core';
import { Cap } from '../../models/cap.model';
import { SportService } from '../../services/sport.service';
import { Velo } from '../../models/velo.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-sport',
  templateUrl: './add-sport.component.html',
  styleUrls: ['./add-sport.component.css']
})
export class AddSportComponent implements OnInit {

  sports = [
    { value: 'Running', display: 'Running' },
    { value: 'Road Ride', display: 'Road ride' }
  ];
  velo: Velo = new Velo(12,new Date(),new Date(), "", 15, "19");
  time!: string;;
  cap: Cap = new Cap(12,new Date(), new Date(), "",15,"19", 160);

  isCap = false;
  isAdded = false;

  dateDebut: Date;
  dateFin: Date;
  diffHours!: number;

  vitesseCalc!: number;
  distance!: number;

  

  sportForm!: FormGroup;
  constructor(private sportService: SportService){
    this.dateDebut = new Date();
    this.dateFin = new Date();
    this.distance = 0;

  } 
      
  ngOnInit() {
    this.sportForm = new FormGroup({
      sport: new FormControl('', Validators.required),
      distance: new FormControl('', [Validators.required]),
      debut: new FormControl('', [Validators.required]),  
      fin: new FormControl('', [Validators.required]),  
      vitesse: new FormControl(''),
      bpm: new FormControl('')
    });
  }

  onSubmit(){
    this.time = this.tranformHours(this.diffHours.toFixed(2).toString());
    if(this.isCap){
      this.cap.distance = this.sportForm.value.distance;
      this.cap.debut = this.sportForm.value.debut;
      this.cap.fin = this.sportForm.value.fin;
      this.cap.duree = this.time;
      this.cap.vitesse = this.vitesseCalc; 
      this.cap.userId = "19";
      this.cap.bpm = 160
      
    } else {
      this.velo.distance = this.sportForm.value.distance;
      this.velo.debut = this.sportForm.value.debut;
      this.velo.fin = this.sportForm.value.fin;
      this.velo.duree = this.time;
      this.velo.vitesse = this.vitesseCalc; 
      this.velo.userId = "19";
    } 
    
    this.save();
  }

  save(){
    if(this.isCap){
      this.sportService.addCap(this.cap)
                    .subscribe(cap=> {console.log(cap);
                      this.isAdded = true;
                    }, error=>console.log(error))
    } else {
      this.sportService.addVelo(this.velo)
                    .subscribe(velo=> {console.log(velo);
                      this.isAdded = true;
                    }, error=>console.log(error))
    }
   
  }

  resetSportForm(){
    this.isAdded = false;
    this.sportForm.reset();
  }

  onChangeSport(newObj: string) {
    if(newObj == 'Running'){
      this.isCap = true;
      
    } else {
      this.isCap = false;
    }
  }

  onChangeDateFin(fin: Date) {
    this.dateFin = new Date(fin);
    this.diffHours = (this.dateFin.getTime() - this.dateDebut.getTime())/ (3600 * 1000)
    this.vitesseCalc = this.distance/this.diffHours;
  }

  onChangeDateDebut(debut: Date) {
    this.dateDebut = new Date(debut);
    let diffHours = (this.dateFin.getTime() - this.dateDebut.getTime())/ (3600 * 1000)
    this.vitesseCalc = this.distance/diffHours;
  }

  onChangeDistance(dist: number) {
    this.distance = dist;
    let diffHours = (this.dateFin.getTime() - this.dateDebut.getTime())/ (3600 * 1000)
    this.vitesseCalc = this.distance/diffHours;
  }

  tranformHours(diffHours: string){
    console.log(diffHours);
    let hours = diffHours.substring(0,diffHours.indexOf('.'));
    let minutes = diffHours.substring(diffHours.indexOf('.')+1);
    let min = (parseInt(minutes)*60/100).toString();
    if(hours.length < 2){
      if(min.length < 2){
        return "0"+hours+":0"+min.toString();
      } else {
        return "0"+hours+":"+min.toString();
      }
    } else {
      if(min.length < 2){
        return hours+":0"+min.toString();
      } else {
        return hours+":"+min.toString();
      }
    }
      
  }

  


}
