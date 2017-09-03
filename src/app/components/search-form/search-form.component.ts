import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  options = [
    'opt1',
    'opt2',
    'opt3',
  ];
  constructor() { }

  ngOnInit() { }


}
