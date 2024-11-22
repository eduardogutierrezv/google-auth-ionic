import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaederMenuComponent } from './heaeder-menu/heaeder-menu.component';


@NgModule({
  declarations: [HeaederMenuComponent],
  exports:[HeaederMenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ComponentModuleModule { }
