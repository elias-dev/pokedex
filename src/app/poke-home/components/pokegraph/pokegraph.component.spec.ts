import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokegraphComponent } from './pokegraph.component';

describe('PokegraphComponent', () => {
  let component: PokegraphComponent;
  let fixture: ComponentFixture<PokegraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokegraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokegraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
