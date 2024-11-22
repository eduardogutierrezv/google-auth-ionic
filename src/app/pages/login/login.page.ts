import { Component, OnInit } from '@angular/core';
import { GoogleAuthServiceService } from '../../common/service/google-auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  

  constructor(private _googleService:GoogleAuthServiceService) { }

  ngOnInit() {
  }

  async signInWithGoogle(){
    await this._googleService.signInWithGoogle();
  }

}
