import { Component } from '@angular/core';
import { GoogleAuthServiceService } from '../common/service/google-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  user:any;
  titleHeader:string = 'inicio';
  
  constructor(private readonly _gooleAuthService:GoogleAuthServiceService) {
    
  }


  async signInWithGoogle(){
    this.user = await this._gooleAuthService.signInWithGoogle();
  }

  async signOut(){
    this.user = await this._gooleAuthService.signOut();
  }

 
}