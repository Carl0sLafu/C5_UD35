import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule,  FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { FormulariocontactoComponent } from './formulariocontacto/formulariocontacto.component';
import { RespuestacontactoComponent } from './respuestacontacto/respuestacontacto.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormulariocontactoComponent,
    RespuestacontactoComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
