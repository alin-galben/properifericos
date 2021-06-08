import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAvataresComponent } from './listar-avatares.component';

describe('ListarAvataresComponent', () => {
  let component: ListarAvataresComponent;
  let fixture: ComponentFixture<ListarAvataresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAvataresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAvataresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
