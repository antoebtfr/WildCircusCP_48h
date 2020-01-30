import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  constructor( private fb: FormBuilder) { }

  public signUpForm = this.fb.group({
    nickname: [''],
    email: [''],
    password: ['']
  });

  ngOnInit() {
  }

  public onSumbit() {
    console.log(this.signUpForm.value);
  }

}
