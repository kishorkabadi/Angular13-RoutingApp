import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyProject';
  showStudent=false;
  constructor(private router:Router)
  {}
  GetStudentDetails(show:boolean)
  { 
    this.showStudent=show;
    if(show==true)
    this.router.navigate(['/studentdetails']);
    else
    this.router.navigate(['/student']);
  }
}
