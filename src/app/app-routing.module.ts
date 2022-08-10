import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { ToDoModuleComponent } from './to-do-module/to-do-module.component';


const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
    {path:'', component:ToDoModuleComponent},
    {path:'form',component:ToDoFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
