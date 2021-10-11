import { Component, OnInit } from '@angular/core';
import { Sport } from '../sport.model';
import { SportService } from '../sport.service';

@Component({
  selector: 'app-view-sport',
  templateUrl: './view-sport.component.html',
  styleUrls: ['./view-sport.component.css']
})
export class ViewSportComponent implements OnInit {

  sports: Sport[] | undefined;

  constructor(private sportService: SportService) {
  }

  ngOnInit() {
    this.sportService.allSports().subscribe((data: any) => {
      this.sports = data;
    });
  }

}
