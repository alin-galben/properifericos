import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Avatar } from '../../../models/avatar/avatar.model';
import { AvatarService} from '../../../services/avatar/avatar.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../../services/auth/token-storage.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-listar-avatares',
  templateUrl: './listar-avatares.component.html',
  styleUrls: ['./listar-avatares.component.css']
})
export class ListarAvataresComponent implements OnInit {

  closeResult = '';
  avatares?: Avatar[];
  borrado= false;
  selectedFile: File;
  

  constructor(private avatarService: AvatarService, private router: Router, private tokenStorage: TokenStorageService, private modalService: NgbModal) { }

  
  subirAvatar(content): void {
    this.modalService.open(content, { centered: true });
  }

  onFileChanged(event) {
  }

  subir():void {
 
  }
  
  ngOnInit(): void {
    this.listarAvatares();
  }

  listarAvatares(): void{
    this.avatarService.getAll()
    .subscribe(
      data=> {
        this.avatares = data;
      },
      err => {
        this.router.navigate(['/home'])
      }
    );
  }
}
