import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {

  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit() {
  }
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

}

