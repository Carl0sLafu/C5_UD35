import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public form: FormGroup;
  clientes: string[];

  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      nombre: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ]),
      cif: new FormControl(null, [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9)
      ]),
      dir: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ]),
      group: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[0-9]\d*$/)
      ])
    });

    this.clientes = [];

  }

  send(): any {

      this.clientes.push(this.form.value);

      this.form.reset();

  }

}
