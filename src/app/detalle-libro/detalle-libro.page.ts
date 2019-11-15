import { Component, OnInit } from '@angular/core';
import { Libro } from '../model/Libro';
import { ActivatedRoute } from '@angular/router';
import { LibroService } from '../services/libro.service';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.page.html',
  styleUrls: ['./detalle-libro.page.scss'],
})
export class DetalleLibroPage implements OnInit {
  
  libro: Libro = {id: 0, titulo: '', cantidadpaginas: 0, fechapublicacion: new Date()} ;
  constructor(private route: ActivatedRoute, private ps: LibroService) { }
  
  ngOnInit() {
      this.getLibro();
  }

  getLibro(): void {
    if ( this.route.snapshot.paramMap.get('id') !== '0') {
      const id = +this.route.snapshot.paramMap.get('id');
      this.ps.getLibro(id)
      .subscribe((resp: any) => {
        console.log(resp.data);
        this.libro = resp.data;
      });
    }

  }
  addPersona() {
    if (this.libro.id===0){
      this.ps.postLibro(this.libro).subscribe(
        data => {
          console.log(data);
        }
      );
    } else {
      this.ps.putLibro(this.libro).subscribe(
        data => {
          console.log(data);
        }
      );
    }
    
  }

}
