import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Add esses imports
import { CourseFormComponent } from "./course-form/course-form.component";
import { CourseListComponent } from "./course-list/course-list.component";


//Alterar routes para adicionar as rotas /courses e /addCourse
const routes: Routes = [
  {
    path: 'cars',
    component: CourseListComponent
  },
  {
    path: 'addCar',
    component: CourseFormComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
