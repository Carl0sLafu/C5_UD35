import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulariocontacto',
  templateUrl: './formulariocontacto.component.html',
  styleUrls: ['./formulariocontacto.component.css']
})
export class FormulariocontactoComponent implements OnInit {

  public formContact: FormGroup;
  contacto: string[];
  capcha: string;
  respuesta: number;
  randnum: number;
  error: boolean;

  constructor(private formBuilder: FormBuilder) {

    this.formContact = this.formBuilder.group({
      nombre: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      textarea: new FormControl(null, [
        Validators.required,
        Validators.minLength(10)
      ]),
      capcha: new FormControl(null, [
        Validators.required,
        Validators.minLength(1)
      ])
    });

    this.contacto = [];
    this.capcha = '';
    this.respuesta = 0;
    this.randnum = 0;
    this.error = false;

  }

  ngOnInit(): void {
    
    this.capchareload();

  }

  send(): any {

    if (this.respuesta == parseInt(this.formContact.value.capcha)) {

      this.contacto.push(this.formContact.value);
      this.error = false;
      this.formContact.reset();

    } else {

      this.error = true;

    }

    this.capchareload();

  }

  capchareload() {

    this.randnum = Math.floor(Math.random() * 5);

    switch (this.randnum) {

      case 0:
        this.capcha = "5 + 4 = ";
        this.respuesta = 9;
        break;
      case 1:
        this.capcha = "1 + 2 = ";
        this.respuesta = 3;
        break;
      case 2:
        this.capcha = "3 + 2 = ";
        this.respuesta = 5;
        break;
      case 3:
        this.capcha = "3 + 5 = ";
        this.respuesta = 8;
        break;
      case 4:
        this.capcha = "1 + 8 = ";
        this.respuesta = 9;
        break;

    }

  }

}
