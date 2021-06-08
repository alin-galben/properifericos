import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {
  content?: string;
  path = '';

  constructor(private userService: UserService, private router: Router, private location: Location) {
      this.router.events.subscribe((val) => {
      this.path = this.location.path();
      });
  }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.router.navigate(['/home'])
      }
    );
  }
}
