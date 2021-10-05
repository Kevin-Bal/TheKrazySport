import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SportService } from '../sport.service';
import { Velo } from '../velo.model';

@Component({
  selector: 'app-add-sport',
  templateUrl: './add-sport.component.html',
  styleUrls: ['./add-sport.component.css']
})
export class AddSportComponent implements OnInit {

  velo: Velo = new Velo( 12,25,15,"19");
  isAdded = false;
  sportForm!: FormGroup;
  constructor(private veloService: SportService){} 
      
  ngOnInit() {
    this.sportForm = new FormGroup({
      distance: new FormControl('', [Validators.required]),
      duree: new FormControl('', [Validators.required]),  
      vitesse: new FormControl(''),
    });
  }

  onSubmit(){
    this.velo.distance = this.sportForm.value.distance;
    this.velo.duree = this.sportForm.value.duree;
    this.velo.vitesse = this.sportForm.value.vitesse; 
    this.velo.userId = "19";
    this.save();
  }

  save(){
    this.veloService.addVelo(this.velo)
                    .subscribe(velo=> {console.log(velo);
                      this.isAdded = true;
                    }, error=>console.log(error))
  }
  resetSportForm(){
    this.isAdded = false;
    this.sportForm.reset();
  }


}
