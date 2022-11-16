import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['employee-list.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class EmployeeListComponent {

  constructor(private _http: HttpClient) {}

  data$: Observable<EmployeeModel[] | null> = this._http.get<EmployeeModel[]>( 'assets/data/employees.json');

}
