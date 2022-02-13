import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
    
  user: User = new User( '19', 'k', 'b', 'k', 'b');
  isAdded = false;
  userForm!: FormGroup;
  constructor(private userService: UserService){} 
      
  ngOnInit() {
    this.userForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),  
      email: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }


  onSubmit(){
    this.user.firstname = this.userForm.value.firstname;
    this.user.lastname = this.userForm.value.lastname;
    this.user.email = this.userForm.value.email; 
    this.user.password = this.userForm.value.password;
    this.save();
  }

  save(){
    this.userService.addUser(this.user)
                    .subscribe(user=> {console.log(user);
                      this.isAdded = true;
                    }, error=>console.log(error))
  }
  resetUserForm(){
    this.isAdded = false;
    this.userForm.reset();
  }


}
