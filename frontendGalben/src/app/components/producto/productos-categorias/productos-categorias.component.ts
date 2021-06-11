import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto/producto.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productos-categorias',
  templateUrl: './productos-categorias.component.html',
  styleUrls: ['./productos-categorias.component.css']
})
export class ProductosCategoriasComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private productoService: ProductoService) { }

  categoria = '';
  productos: any;
  enlaces: any;
  imagenTienda: any;
  tiendas: any;
  productosrel: any;
  campocategoria: any;

  ngOnInit(): void {
    this.categoria = this.route.snapshot.paramMap.get('categoria');
    this.verProductosCategoria(this.categoria)
  }

  verProductosCategoria(categoria): void{
    this.productoService.getAllCategoria(categoria).subscribe(productos => 
      {
        this.productos = productos;
        this.campocategoria = categoria;
        console.log(this.campocategoria);
      });
  }

}
