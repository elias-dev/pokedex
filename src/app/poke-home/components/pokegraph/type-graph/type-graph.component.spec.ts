import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeGraphComponent } from './type-graph.component';

describe('TypeGraphComponent', () => {
  let component: TypeGraphComponent;
  let fixture: ComponentFixture<TypeGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
