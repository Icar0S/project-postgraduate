import { Component } from '@angular/core';

//add esses imports
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute, Router } from "@angular/router";
import { SharedService } from 'src/app/shared/shared.service';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  // implementar essa classe toda aqui
  car: any = {};
  form = new FormGroup({});
  model: any = {};
  //Cria os campos e atribui os valores para serem gerados pelo angular

  fields: FormlyFieldConfig[] = [
    {
      className: 'd-flex align-content-center justify-content-center',
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          props: {
            label: 'Nome do Carro',
            placeholder: 'Nome do Carro',
            required: true,
          },
        },
        {
          key: 'ano',
          type: 'number',
          props: {
            label: 'Ano do Carro',
            placeholder: 'Ano do Carro',
            required: true,
          },
        }
      ]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private sharedService: SharedService
  ) {


    this.route.queryParams.subscribe(async (params: any) => {
      if (params.id !== undefined && params.id !== null) {
        this.car = await this.courseService.get<any>({
          url: `http://localhost:3000/car/${params.id}`,
          params: {

          }
        });
        this.model = this.car;
      } else {
        this.model = {}
      }

    });
  }

  async onSubmit(): Promise<void> {
    if (this.form.valid) {
      if (this.model?.id !== undefined && this.model?.id !== null) {
        this.car = await this.courseService.put<any>({
          url: `http://localhost:3000/updateCar/${this.model?.id}`,
          params: {

          },
          data: this.model
        });

      } else {
        delete this.model?.id;
        await this.courseService.post<any>({
          url: `http://localhost:3000/addCar`,
          params: {

          },
          data: this.model
        })
      }

    }
    await this.router.navigate(['/cars']);
  }
}

