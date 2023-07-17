import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:'',component:StudentsComponent},
  // {path:'',redirectTo:'student',pathMatch:'full'},
  {path:'student',component:StudentsComponent},
  {path:'studentdetails',component:StudentdetailsComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
