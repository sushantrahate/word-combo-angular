import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordComboComponent } from './word-combo.component';

describe('WordComboComponent', () => {
  let component: WordComboComponent;
  let fixture: ComponentFixture<WordComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordComboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
