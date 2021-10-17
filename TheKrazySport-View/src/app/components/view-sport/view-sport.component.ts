import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { Sport } from '../../models/sport.model';
import { SportService } from '../../services/sport.service';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { concatMap } from 'rxjs/operators'

@Component({
  selector: 'app-view-sport',
  templateUrl: './view-sport.component.html',
  styleUrls: ['./view-sport.component.css']
})
export class ViewSportComponent implements OnInit {

  sports!: Sport[];
  userSport!: User;
  sportsAndUsers: Array<{ sport: Sport, user: Promise<string>}> = [];
  

  constructor(private sportService: SportService, private userService: UserService) {
  }

  ngOnInit() {
    of(this.getAllSport());
  }

  async getAllSport(): Promise<any>{
    this.sportService.allSports().subscribe(async (data: any) => {
      this.sports = data;
    });
  }

  async userID(sport: Sport): string{
    this.userService.getUserById(sport.userId).pipe(concatMap((value: any) => {
      console.log(`${value}: first pipe operator (before promise)`);                
      // return a promise that resolves with the specified value after 2 seconds
      return new Promise(resolve => setTimeout(() => resolve(value), 2000));
  }))
  .pipe(concatMap(value => {
      console.log(`${value}: second pipe operator (after promise resolved)`);
      return of(value);
  })).subscribe((user: any) => {
      this.userSport = user;
    });
    return this.userSport.firstname;
  }
}
function concatMap(arg0: (value: any) => import("rxjs").Observable<any>): import("rxjs").OperatorFunction<unknown, unknown> {
  throw new Error('Function not implemented.');
}

