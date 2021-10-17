import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';
import { Sport } from 'src/app/models/sport.model';
import { User } from 'src/app/models/user.model';
import { UserService } from '../user.service';

@Pipe({
  name: 'userId',
  pure: true
})
export class UserIdPipe implements PipeTransform {

  userSport!: User;

  constructor(private userService: UserService) {
  }

  transform(value: Sport, ...args: unknown[]): Promise<string> {
    return this.userID(value);
  }

  async userID(sport: Sport): Promise<string>{
    
    this.userService.getUserById(sport.userId).subscribe(async (user: any) => {
      this.userSport = user;
      console.log(this.userSport.firstname)
    });

    return this.userSport.firstname;
  }

}
