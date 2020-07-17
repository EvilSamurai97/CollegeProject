import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
array=[];
test;

  constructor(private router:Router, private http:HttpClient) { }

  Home(){
    this.router.navigateByUrl('home');
  }
  Create(){
    this.router.navigateByUrl('create');
  }
  View(){
    this.router.navigateByUrl('view');
  }
  Friend(){
    this.router.navigateByUrl('friend');
  }
  About(){
    this.router.navigateByUrl('about');
  }
  Profile(){
    this.router.navigateByUrl('profile');
  }
  Contact(){
    this.router.navigateByUrl('contact');
  }
  Logout(){
    this.router.navigateByUrl('login');
  }
  ngOnInit() {
    if(!sessionStorage.getItem('user'))
  {
    this.router.navigateByUrl('login');
  }
  }
  post() {
    this.http.get('http://localhost:1234/createPost?post=' + this.test + '&user=' +sessionStorage.getItem('user'))
      .subscribe(x => {
        console.log('add result: ', x);
        if(x['status']=='ok'){ 
          this.test='';
        }
      }
      );
  }
}


