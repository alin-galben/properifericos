import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/auth/token-storage.service';
import { UserService } from '../../services/user/user.service';
import { AvatarService} from '../../services/avatar/avatar.service';
import { User } from '../../models/user/user.model';
import { Avatar } from '../../models/avatar/avatar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  user: any;
  avatar: any;
  currentUser: any;

  constructor(private tokenStorageService: TokenStorageService, private avatarService: AvatarService, private userService:UserService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }

    this.user = new User();
    this.avatar = new Avatar();
    this.currentUser = this.tokenStorageService.getUser();
    this.userService.get(this.currentUser.id).subscribe(user => 
      {
        this.user = user;
        this.avatarService.get(this.user.avatarId).subscribe(avatar =>
          {
            this.avatar = avatar;
          })
      });
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
