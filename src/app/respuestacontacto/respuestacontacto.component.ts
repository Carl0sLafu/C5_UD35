import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-respuestacontacto',
  templateUrl: './respuestacontacto.component.html',
  styleUrls: ['./respuestacontacto.component.css']
})
export class RespuestacontactoComponent {

  @Input() listacontacto: any[] = [];

  constructor() {}

}
