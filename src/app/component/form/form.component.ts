import { Component} from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  {

    food = [
    { name: 'dumpling', description: '' },
    { name: 'pizzaq', description: '' },
  ];

  selected: string = 'dumpling';

  title = 'form-data';
  name2 = 'Angular';
  number_form: FormGroup;
  holder_form: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) {}
  ngOnInit() {
    this.number_form = this.fb.group({
      number: '',
      cvv: ''
    })
    this.holder_form= this.fb.group({
      holder_name: ' '
    })


  }
}
