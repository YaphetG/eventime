import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  selectedValue: string;

  catagory = [
    { value: 'sport-0', viewValue: 'Sport' },
    { value: 'music-1', viewValue: 'Music' },
    { value: 'birthday-2', viewValue: 'Birthday' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
