import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  food = [
    { name: 'dumpling', description: '' },
    { name: 'pizza', description: '' },
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
