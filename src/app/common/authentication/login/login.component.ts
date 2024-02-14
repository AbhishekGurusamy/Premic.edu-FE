import { Component, OnInit, VERSION } from '@angular/core';
import {DeviceUUID} from "device-uuid"
import { EmailValidator, FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uuid = new DeviceUUID().get();
  
  loginForm = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null, Validators.required)

  })

  constructor(){
  }

  ngOnInit(): void {
    console.log(this.uuid)
  }

  login(){
    console.log(this.loginForm.value)

    const payload = {
      "email":this.loginForm.value['email'],
      "password":this.loginForm.value['password'],
      "deviceID":this.uuid
    }

    console.log("payload",payload)
  }



}
