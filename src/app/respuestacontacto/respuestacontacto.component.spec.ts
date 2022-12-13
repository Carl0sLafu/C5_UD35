import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestacontactoComponent } from './respuestacontacto.component';

describe('RespuestacontactoComponent', () => {
  let component: RespuestacontactoComponent;
  let fixture: ComponentFixture<RespuestacontactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestacontactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestacontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
