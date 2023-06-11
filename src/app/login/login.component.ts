import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  hide : boolean = true;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  Submit(login : any){
    console.log('submited', login);
  }

  onLogin()
  {
    if(this.email === "test@test.com" && this.password === "test!")
    {
      this.route.navigateByUrl('home');
    }
    else{
      alert("Wrong password");
    }
  }
}

export class FormFieldPrefixSuffixExample {
  hide = true;
}
