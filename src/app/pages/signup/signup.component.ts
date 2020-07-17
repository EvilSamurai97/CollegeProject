import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username;
  pass;
  conpass;
  bday;
  name;
  mail;
  phone;
  flag:boolean=false;
  msg:string="";
  constructor(private router:Router, private http:HttpClient){}
  ngOnInit() {
}
  goto()
  {
    this.router.navigateByUrl('login');
  }
  reset(){
    if(this.pass!=this.conpass)
    this.name='';
    this.bday='';
    this.mail='';
    this.phone='';
    this.username='';
    this.pass='';
    this.conpass='';
    this.flag=false;
    this.msg='';
  }
  calculateDiff(bday){
    let currentDate = new Date();
    bday = new Date(bday);

    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(bday.getFullYear(), bday.getMonth(), bday.getDate()) ) /(1000 * 60 * 60 * 24));
}
  signup() {
    if(this.name !='' && this.bday !='' && this.mail !='' && this.phone !='' && this.username != '' && this.pass == this.conpass) {
    this.http.get('http://localhost:1234/signup?username=' + this.username + '&password=' + this.pass)
      .subscribe(x => {
        console.log('signup result: ', x);
        if(x['status']=='ok'){
          this.name='';
          this.bday='';
          this.mail='';
          this.phone=''; 
          this.username='';
          this.pass='';
          this.conpass='';
          this.bday='';
          this.flag = true;
          this.msg = "Signup Successful !!"
        }
        else{
          this.flag = true;
          this.msg = "Signup Unsuccessful !!"
        }
      });
  }
  else {
    this.flag = true;
    this.msg = "Passwords do not match !!!";
  }
 }
}