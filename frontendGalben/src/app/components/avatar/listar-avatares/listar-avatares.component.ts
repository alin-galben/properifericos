import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Avatar } from '../../../models/avatar/avatar.model';
import { AvatarService} from '../../../services/avatar/avatar.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../../services/auth/token-storage.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-listar-avatares',
  templateUrl: './listar-avatares.component.html',
  styleUrls: ['./listar-avatares.component.css']
})
export class ListarAvataresComponent implements OnInit {

  closeResult = '';
  avatares?: Avatar[];
  borrado= false;
  subido= false;
  
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;

  constructor(private http: HttpClient, private avatarService: AvatarService, private router: Router, private tokenStorage: TokenStorageService, private modalService: NgbModal) { }

  
  subirAvatar(content): void {
    this.modalService.open(content, { centered: true });
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  subir(): void {
    this.progress = 0;
  
    this.currentFile = this.selectedFiles.item(0);
    this.avatarService.create(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
        }
      },
      err => {
        this.progress = 0;
        this.message = 'No se ha podido subir el archivo!';
        this.currentFile = undefined;
      });
    this.selectedFiles = undefined;
    this.subido = true;
    this.notificacionSubido();
    this.listarAvatares();
  }
  
  ngOnInit(): void {
    this.listarAvatares();
  }

  deleteAvatar(id): void {
    this.avatarService.delete(id)
      .subscribe(
        response => {
          this.borrado = true;
          this.notificacion();
          this.listarAvatares();
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  listarAvatares(): void{
    this.avatarService.getAllAdmin()
    .subscribe(
      data=> {
        this.avatares = data;
      },
      err => {
        this.router.navigate(['/home'])
      }
    );
  }

  notificacion(): void {
    setTimeout(function() {
        this.borrado = false;
        console.log(this.borrado);
    }.bind(this), 1000);
  }

  notificacionSubido(): void {
    setTimeout(function() {
        this.subido = false;
        console.log(this.subido);
    }.bind(this), 3000);
  }
}


