import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class HelperService {

  constructor(private router:Router) { }
  public gotopage(link)
  {
    this.router.navigateByUrl(link);
  }
}
