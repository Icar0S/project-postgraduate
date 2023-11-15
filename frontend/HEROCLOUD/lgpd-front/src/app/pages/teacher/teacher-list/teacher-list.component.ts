//Add esses imports
import { Component, OnInit } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from 'src/app/shared/shared.service';
import { TeacherService } from '../teacher.service';
@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
  faPencil = faPencil;
  faTrash = faTrash;

  carLabel: Array<{ value: string, label: string }> = [];
  sellers: any[] = [];

  constructor(private teacherService: TeacherService, private sharedService: SharedService) { }

  async ngOnInit(): Promise<void> {
    await this.listTeachers();
    this.sharedService.getCourses().subscribe(cars => this.carLabel = cars);

  }

  async listTeachers(): Promise<void> {
    this.sellers = await this.teacherService.get<any[]>({
      url: "http://localhost:3000/getAllSellers",
      params: {

      }
    });
  }

  async delete(id: number): Promise<void> {
    if (confirm("Deseja deletar este professor?")) {
      await this.teacherService.delete<any>({
        url: `http://localhost:3000/deleteSeller/${id}`,
        params: {

        }
      });
      await this.listTeachers();
    }
  }


  onConfirm(value: any) {
    alert("Value:" + value);
  }
}
