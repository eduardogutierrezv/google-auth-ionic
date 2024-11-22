import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

//importar servicios en este modulo 
import { GoogleAuthServiceService } from '../common/service/google-auth.service';

//modulos de importacion
import { ComponentModuleModule } from '../common/component/component-module.module';
 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentModuleModule
  ],
  declarations: [HomePage],
  providers:[GoogleAuthServiceService]
})
export class HomePageModule {}
