import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user/user.model';
import { UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  path = '';
  users?: User[];
  currentUser: User = {};
  error= null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.obtenerUsers();
  }

  obtenerUsers(): void{
    this.userService.getAll()
    .subscribe(
      data=> {
        this.users = data;
      },
      mensaje => {
        this.error = JSON.parse(mensaje.error).mensaje;
      }
    );
  }

  refrescarLista(): void {
    this.obtenerUsers();
    this.currentUser = {};
  }
}
