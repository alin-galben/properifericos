import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from '../../../models/producto/producto.model';
import { ProductoService } from '../../../services/producto/producto.service';
import { Enlace } from '../../../models/enlace/enlace.model';
import { EnlaceService } from '../../../services/enlace/enlace.service';
import { Tienda } from '../../../models/tienda/tienda.model';
import { TiendaService} from '../../../services/tienda/tienda.service';


@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private productoService: ProductoService, private enlaceService: EnlaceService, private tiendaService: TiendaService) { }

  id = '';
  producto: any;
  enlaces: any;
  imagenTienda: any;
  tiendas: any;
  productosrel: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.verProducto(this.id);
    this.verTiendas();
  }

  verProducto(id): void{
    this.productoService.get(id).subscribe(producto => 
      {
        this.producto = producto;
        this.articulosRelacionados(this.producto.categoria);
        console.log(this.producto.categoria);
        this.enlaceService.getAllId(id).subscribe(enlaces =>
          {
            this.enlaces = enlaces;
          })
      });
  }

  verTiendas(): void{
    this.tiendaService.getAll().subscribe(tiendas =>
      {
        this.tiendas = tiendas;
      })
  }

  articulosRelacionados(categoria): void{
    this.productoService.getAllCategoria(categoria).subscribe(productosrel =>{
      this.productosrel = productosrel;
    })
  }
}
