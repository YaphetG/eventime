import { Component, OnInit,NgModule } from '@angular/core';
import { SearchFilter } from "./search.filter";


@NgModule({
  declarations:[
    SearchFilter
  ]
})

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
  query : string;
  constructor() { }

  ngOnInit() { }

  search(){
    console.log("search enter");
  }

}
