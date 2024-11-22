import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heaeder-menu',
  templateUrl: './heaeder-menu.component.html',
  styleUrls: ['./heaeder-menu.component.scss'],
})
export class HeaederMenuComponent  implements OnInit {

  @Input() TitleHeader: string = '';

  constructor() { }

  ngOnInit() {}

}