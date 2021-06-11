import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto/producto.service';
import { TiendaService } from '../../../services/tienda/tienda.service';
import { EnlaceService } from '../../../services/enlace/enlace.service';
import { Producto } from '../../../models/producto/producto.model';
import { Tienda } from '../../../models/tienda/tienda.model';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  productos?: Producto[];
  tiendas?: Tienda[];
  productoId: any;

  form: any = {nombre: null, descripcion:null, categoria:null, imagen:null}
  formenlace: any = {enlace: null, precio:null, tiendaId:null}

  constructor(private enlaceService:EnlaceService, private productoService:ProductoService, private modalService: NgbModal, private router:Router, private tiendaService:TiendaService) { }

  ngOnInit(): void {
    this.listarProductos();
    this.permisos();
  }

  insertarProducto(): void{
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

  listarProductos(): void{
    this.productoService.getAll()
    .subscribe(
      data=> {
        this.productos = data;
      },
      err => {
        this.router.navigate(['/home'])
      }
    );
  }

  listarTiendas(): void{
    this.tiendaService.getAll()
    .subscribe(
      data=> {
        this.tiendas = data;
      },
      err => {
        console.log(err)
      }
    );
  }


  insertarEnlace(enlace, idProd): void {
    this.modalService.open(enlace, { size: 'lg'});
    this.listarTiendas();
    this.productoId = idProd;
  }

  subirEnlaceBBDD(): void{
    const { enlace, precio, tiendaId} = this.formenlace;
    console.log(this.formenlace)
    this.enlaceService.create(enlace, precio, tiendaId, this.productoId).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['admin/productos']);
      },
      err => {
        console.log(err)}
    )
  }

  deleteProducto(id): void {
    this.productoService.delete(id)
      .subscribe(
        response => {
          this.listarProductos();
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
