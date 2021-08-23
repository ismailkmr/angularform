import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  date = [
    { year: '2021', month: '01'},
    { year: '2022', month: '02'},
    { year: '2023', month: '03'},
    { year: '2024', month: '04'},
    { year: '2025', month: '05'},
  ];

  selected: string = 'dumpling';
  expY: string = 'YY';
  expM: string = 'MM';
  holder_name: string = '';

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
