import { Component, Input, OnInit, inject } from '@angular/core';
import DashFormData from '../../models/dataModels/dashFormData.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dash-form',
  templateUrl: './dash-form.component.html',
  styleUrl: './dash-form.component.scss',
})
export class DashFormComponent implements OnInit {
  @Input('data') data!: DashFormData;

  form: FormGroup | null = null;

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    const formObj = this.data.inputs.reduce((total, curr) => {
      return { ...total, [curr.id]: '' };
    }, {});

    this.form = this.fb.group(formObj);
  }
}
