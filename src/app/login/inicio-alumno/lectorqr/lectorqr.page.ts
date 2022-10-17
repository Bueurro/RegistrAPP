import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-lectorqr',
  templateUrl: './lectorqr.page.html',
  styleUrls: ['./lectorqr.page.scss'],
})
export class LectorqrPage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner) { }

  datocodificado: any;
  datoscaneado: {};
  
  ngOnInit() {
  }

  LeerCode() {
    this.barcodeScanner.scan().then(barcodeData => {
        this.datoscaneado = barcodeData;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
 
  CodificarTexto() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.datocodificado).then(
        encodedData => {
          this.datocodificado = encodedData;
        },
        err => {
          console.log("Un error ha ocurrido: " + err);
        }
      );
  }
}
