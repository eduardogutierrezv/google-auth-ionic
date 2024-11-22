import { Injectable } from '@angular/core';
import { GoogleAuth, User } from '@codetrix-studio/capacitor-google-auth';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthServiceService {

  user:any;

  constructor() { 
    GoogleAuth.initialize();
  }


  async signInWithGoogle() {
    try {
      const user = await GoogleAuth.signIn();
      this.user = user;
      
     // console.log('Usuario:', user);
      this.saveSignIn(user);
      return this.user;

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  }

  async signOut() {
    
    await GoogleAuth.signOut();
    this.user = null;
    this.deleteSignOut();
    return this.user;
  }

  private saveSignIn(user:User){
    localStorage.setItem('user', JSON.stringify(user));
  }

  private deleteSignOut(){
    localStorage.removeItem('user');
  }
}
