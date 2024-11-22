import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GoogleAuthServiceService } from './common/service/google-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private _googleService:GoogleAuthServiceService,
              private _menuController: MenuController
  ) {}


  async closeMenu() {
    await this._menuController.close();
  }

  async signOut(){
    this.closeMenu();
    await this._googleService.signOut();
    
  }
}
