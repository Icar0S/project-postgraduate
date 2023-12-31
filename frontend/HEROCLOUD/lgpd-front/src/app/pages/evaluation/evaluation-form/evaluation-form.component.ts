import { Component } from '@angular/core';

//add esses imports
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { SharedService } from 'src/app/shared/shared.service';
import { EvaluationService } from '../evaluation.service';
@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.scss']
})

export class EvaluationFormComponent {
  // implementar essa classe toda aqui
  evaluation: any = {};

  form = new FormGroup({});
  model: any = {};
  //Cria os campos e atribui os valores para serem gerados pelo angular

  fields: FormlyFieldConfig[] = [
    {
      className: 'd-flex align-content-center justify-content-center',
      fieldGroupClassName: 'row',
      fieldGroup: [
        //Depois com a integração com o backend vamos buscar os nomes dos cursos e usuarios disponíveis para transformar isso num campo de eescolha
        {
          key: 'user_id',
          type: 'input',
          props: {
            label: 'Id do Usuario',
            required: true,
          },
        },
        {
          key: 'car_id',
          type: 'input',
          props: {
            label: 'Id do Curso',
            required: true,
          },
        },
        {
          key: 'valor',
          type: 'input',
          props: {
            label: 'Valor',
            placeholder: 'Valor do Carro',
            required: true,
          },
        }
      ]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private evaluationService: EvaluationService,
    private sharedService: SharedService
  ) {


    this.route.queryParams.subscribe(async (params: any) => {
      if (params.id !== undefined && params.id !== null) {
        this.evaluation = await this.evaluationService.get<any>({
          url: `http://localhost:3000/addPurchase/${params.id}`,
          params: {

          }
        });
        this.model = this.evaluation;
      } else {
        this.model = {}
      }

    });
  }

  async onSubmit(): Promise<void> {
    if (this.form.valid) {
      if (this.model?.id !== undefined && this.model?.id !== null) {
        this.evaluation = await this.evaluationService.put<any>({
          url: `http://localhost:3000/updatePurchase/${this.model?.id}`,
          params: {

          },
          data: this.model
        });

      } else {
        delete this.model?.id;
        await this.evaluationService.post<any>({
          url: `http://localhost:3000/addPurchase`,
          params: {

          },
          data: this.model
        })
      }

    }
    await this.router.navigate(['/purchases']);
  }
}
