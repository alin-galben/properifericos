import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { TokenStorageService } from '../../../services/auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-valido',
  templateUrl: './registro-valido.component.html',
  styleUrls: ['./registro-valido.component.css']
})
export class RegistroValidoComponent implements OnInit {

  isLoggedIn = false;
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private irHacia:Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.irHacia.navigate(['/home'])
    }
  }

}
