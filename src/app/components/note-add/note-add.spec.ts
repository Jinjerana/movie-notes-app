import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteAdd } from './note-add';

describe('NoteAdd', () => {
  let component: NoteAdd;
  let fixture: ComponentFixture<NoteAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(NoteAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
