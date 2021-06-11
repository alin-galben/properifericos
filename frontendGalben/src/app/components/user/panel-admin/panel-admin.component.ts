import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductoService} from '../../../services/producto/producto.service';
import { Producto } from 'src/app/models/producto/producto.model';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {

  productos?: Producto[];

  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {
    this.permisos();
  }

  permisos(): void{
    this.productoService.getAllAdmin()
    .subscribe(
      data=> {
        this.productos = data;
      },
      err => {
        this.router.navigate(['/home'])
      }
    );
  }
}
