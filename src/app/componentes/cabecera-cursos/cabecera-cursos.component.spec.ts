import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraCursosComponent } from './cabecera-cursos.component';

describe('CabeceraCursosComponent', () => {
  let component: CabeceraCursosComponent;
  let fixture: ComponentFixture<CabeceraCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceraCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
