import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto/producto.model';
import { ProductoService } from '../../../services/producto/producto.service';
import { Tienda } from '../../../models/tienda/tienda.model';

@Component({
  selector: 'app-insertar-producto',
  templateUrl: './insertar-producto.component.html',
  styleUrls: ['./insertar-producto.component.css']
})
export class InsertarProductoComponent implements OnInit {

 productos?: Producto[];
 tiendas?: Tienda[];

  constructor(private productoService: ProductoService, private router:Router) { }

  form: any = {nombre: null, descripcion:null, categoria:null, imagen:null}

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

  onSubmit(): void{
    const { nombre, descripcion, categoria, imagen } = this.form;
    this.productoService.create(nombre, categoria, descripcion, imagen).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['admin/productos']);
      },
      err => {
        console.log(err)}
    )
  }





}
