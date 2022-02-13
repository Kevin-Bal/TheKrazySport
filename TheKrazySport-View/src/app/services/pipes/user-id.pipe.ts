import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { UserService } from '../user.service';

@Pipe({
  name: 'getUserId'
})
export class UserIdPipe implements PipeTransform {

  userSport!: User;

  constructor(private userService: UserService) {
  }

  transform(value: string, ...args: unknown[]): any {
    return this.userService.getUserById(value).pipe(
      map(res => {
         return res.firstname;
      })
    );
  }

}
