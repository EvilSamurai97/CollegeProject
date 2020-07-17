import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  array:any; //array=[];
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

  this.view();
  }
  view() {
    this.http.get('http://localhost:1234/viewPost?user='+sessionStorage.getItem('user'))
      .subscribe(x => {
        console.log('view result: ', x);
        if(x['status']=='ok'){
          this.array=x['data'];
        }
      });
  }

deletePost(post){
  this.http.get('http://localhost:1234/deletePost?user=' + sessionStorage.getItem('user') + '&post=' +post)
  .subscribe(x=> {
    console.log('delete result:',x);
    if(x['status']=='ok'){
      this.view();
      console.log(post+'deleted successfully!!!');
    }
    else{
      console.log(post+ 'can not delete !!!')
    }
  });
}

}
