import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto/producto.model';
import { ProductoService } from '../../../services/producto/producto.service';


@Component({
  selector: 'app-insertar-producto',
  templateUrl: './insertar-producto.component.html',
  styleUrls: ['./insertar-producto.component.css']
})
export class InsertarProductoComponent implements OnInit {

 productos?: Producto[];

  constructor(private productoService: ProductoService, private router:Router) { }

  ngOnInit(): void {
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
