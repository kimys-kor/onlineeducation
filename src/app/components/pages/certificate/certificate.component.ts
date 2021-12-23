import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from "html2canvas"


@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      

  }

  // GeneratePDF () {
  //   html2canvas(document.querySelector("#capture")).then(canvas => {
  //     document.body.appendChild(canvas)
  // });
  // }
  
}
