import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../services/auth/token-storage.service';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';
import { AvatarService} from '../../../services/avatar/avatar.service';
import { User } from '../../../models/user/user.model';
import { Avatar } from '../../../models/avatar/avatar.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  currentUser: any;
  user: any;
  avatar: any;
  avatares?: Avatar[];
  avatarId: any;

  constructor(private router: Router, private modalService: NgbModal, private avatarService: AvatarService, private userService:UserService, private tokenStorage: TokenStorageService, private irHacia:Router) { }

  ngOnInit(): void {
    this.user = new User();
    this.avatar = new Avatar();
    this.currentUser = this.tokenStorage.getUser();

    if (!this.tokenStorage.getToken()) {
      this.irHacia.navigate(['/home'])
    }

    this.cargarUsuario();
  }

  cargarUsuario(): void{
    this.userService.get(this.currentUser.id).subscribe(user => 
      {
        this.user = user;
        this.avatarService.get(this.user.avatarId).subscribe(avatar =>
          {
            this.avatar = avatar;
          })
      });
  }

  deleteUser(id): void {
    this.userService.delete(id)
      .subscribe(
        response => {
          if (this.currentUser.id) {
            this.tokenStorage.signOut();
            window.location.reload();
          }
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  actualizarAvatar(content): void {
    this.listarAvatares();
    this.modalService.open(content, { size: 'xl', scrollable: true });
  }
 
  borrarCuentaModal(borrar): void {
    this.modalService.open(borrar, { centered: true });
  }

  listarAvatares(): void{
    this.avatarService.getAll()
    .subscribe(
      data=> {
        this.avatares = data;
      },
      err => {
        console.log("no se pueden obtener los avatares");
      }
    );
  }

  selecAvatar(id): void{
    this.avatarId = {
      "avatarId":id
    }
    console.log(this.currentUser.id);
    this.userService.update(this.currentUser.id, this.avatarId).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
    this.refresh();
    this.cargarUsuario();
    
  }

  refresh(): void {
    window.location.reload();
  }


}
