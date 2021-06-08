import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroValidoComponent } from './registro-valido.component';

describe('RegistroValidoComponent', () => {
  let component: RegistroValidoComponent;
  let fixture: ComponentFixture<RegistroValidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroValidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroValidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
