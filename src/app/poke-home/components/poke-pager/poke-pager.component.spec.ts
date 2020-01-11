import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokePagerComponent } from './poke-pager.component';

describe('PokePagerComponent', () => {
  let component: PokePagerComponent;
  let fixture: ComponentFixture<PokePagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokePagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokePagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
