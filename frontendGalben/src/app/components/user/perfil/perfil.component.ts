import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../services/auth/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  currentUser: any;

  constructor(private tokenStorage: TokenStorageService, private irHacia:Router) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorage.getUser();
    if (!this.tokenStorage.getToken()) {
      this.irHacia.navigate(['/login'])
    }
  }
}
