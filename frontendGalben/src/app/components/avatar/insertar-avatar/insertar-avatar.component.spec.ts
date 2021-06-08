import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarAvatarComponent } from './insertar-avatar.component';

describe('InsertarAvatarComponent', () => {
  let component: InsertarAvatarComponent;
  let fixture: ComponentFixture<InsertarAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
