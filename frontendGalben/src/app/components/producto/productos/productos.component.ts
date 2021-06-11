import { Component, OnInit, Injectable, NgModule } from '@angular/core';
import { ProductoService } from '../../../services/producto/producto.service';
import { Producto } from '../../../models/producto/producto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos?: Producto[];

  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos(): void{
    this.productoService.getAll()
    .subscribe(
      data=> {
        this.productos = data;
      }
    );
  }
}
