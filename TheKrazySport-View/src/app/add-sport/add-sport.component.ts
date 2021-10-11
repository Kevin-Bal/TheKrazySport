import { Component, OnInit } from '@angular/core';
import { Cap } from '../cap.model';
import { SportService } from '../sport.service';
import { Velo } from '../velo.model';
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
  velo: Velo = new Velo( 12,new Date(),new Date(),15,"19");
  time = '09:15';
  cap: Cap = new Cap( 12,new Date(), new Date(),15,"19", 160);

  isCap = false;
  isAdded = false;

  dateDebut: Date;
  dateFin: Date;

  

  sportForm!: FormGroup;
  constructor(private sportService: SportService){
    this.dateDebut = new Date();
    this.dateFin = new Date();

  } 
      
  ngOnInit() {
    this.sportForm = new FormGroup({
      sport: new FormControl('', Validators.required),
      distance: new FormControl('', [Validators.required]),
      debut: new FormControl('', [Validators.required]),  
      fin: new FormControl('', [Validators.required]),  
      vitesse: new FormControl('', Validators.required),
      bpm: new FormControl('')
    });
  }

  onSubmit(){
    
    if(this.isCap){
      this.cap.distance = this.sportForm.value.distance;
      this.cap.debut = this.sportForm.value.debut;
      this.cap.fin = this.sportForm.value.fin;
      this.cap.vitesse = this.sportForm.value.vitesse; 
      this.cap.userId = "19";
      this.cap.bpm = 160
      
    } else {
      this.velo.distance = this.sportForm.value.distance;
      this.velo.debut = this.sportForm.value.debut;
      this.velo.fin = this.sportForm.value.fin;
      this.velo.vitesse = this.sportForm.value.vitesse; 
      this.velo.userId = "19";
      const diffInMs = this.dateFin.getDate() - this.dateDebut.getDate();
      const diffInHours = diffInMs / 1000 / 60 / 60;
      console.log(diffInHours);
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
  


}
