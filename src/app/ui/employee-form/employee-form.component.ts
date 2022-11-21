import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../services/employee.service';
import {CreateEmployeeModel} from '../../model/create-employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
      email: new FormControl(null, Validators.required),
      age: new FormControl(null, [Validators.min(1)]),
      salary: new FormControl(null, [Validators.min(1)])
    }
  );

  constructor(private _employeeService: EmployeeService) {
  }

  onFormSubmitted(form: CreateEmployeeModel) {
    this._employeeService.create(form).subscribe(() => {
      alert(`User was successfully added to the data base. Email:  ${this.employeeForm.value.email},
      age: ${this.employeeForm.value.age}, salary: ${this.employeeForm.value.salary}`);
    })
  }
}
