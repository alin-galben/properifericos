import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user/user.model';
import { UserService} from '../../../services/user/user.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../../services/auth/token-storage.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  path = '';
  users?: User[];
  error= null;
  currentUser: any;
  usuarioId: any;
  borrado= false;

  constructor(private userService: UserService, private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.obtenerUsers();
    this.currentUser = this.tokenStorage.getUser();
  }

  obtenerUsers(): void{
    this.userService.getAll()
    .subscribe(
      data=> {
        this.users = data;
      },
      err => {
        this.router.navigate(['/home'])
      }
    );
  }

  deleteUser(id): void {
    this.userService.delete(id)
      .subscribe(
        response => {
          if (this.currentUser.id == id) {
            this.tokenStorage.signOut();
            this.router.navigate(['/home']);
          }
          this.borrado = true;
          this.notificacion();
          this.obtenerUsers();
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  notificacion(): void {
    setTimeout(function() {
        this.borrado = false;
        console.log(this.borrado);
    }.bind(this), 1000);
  }
}
