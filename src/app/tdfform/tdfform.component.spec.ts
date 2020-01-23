import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfformComponent } from './tdfform.component';

describe('TdfformComponent', () => {
  let component: TdfformComponent;
  let fixture: ComponentFixture<TdfformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdfformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
