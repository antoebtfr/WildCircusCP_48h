import { UserService } from './../../shared/serv/user.service';
import { User } from './../../shared/class/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  constructor( private fb: FormBuilder, private userService: UserService) { }

  public signUpForm = this.fb.group({
    name: [''],
    email: [''],
    password: ['']
  });

  newUser: User;
  ngOnInit() {
  }

  private createNewUser() {
    this.newUser = this.signUpForm.value;
  }

  private clearForm() {
    this.signUpForm.reset();
    this.signUpForm.clearAsyncValidators();
  }

  private sendNewUserToBdd(user: User) {
    this.userService.inscription(user.name, user.email, user.password).subscribe();
  }
  public onSubmit() {
    console.log(this.signUpForm.value);
    this.createNewUser();
    console.log(this.newUser);
    this.sendNewUserToBdd(this.newUser);
    this.clearForm();
    console.log('Le formulaire a bien été réinitialisé');
  }

}
