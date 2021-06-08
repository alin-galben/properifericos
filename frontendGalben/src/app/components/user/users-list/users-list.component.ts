import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user/user.model';
import { UserService} from '../../../services/user/user.service';
import { Router } from '@angular/router'

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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerUsers();
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

  refrescarLista(): void {
    this.obtenerUsers();
    this.currentUser = {};
  }
}
