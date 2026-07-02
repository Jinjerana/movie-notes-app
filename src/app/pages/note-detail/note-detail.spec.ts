import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDetail } from './note-detail';

describe('NoteDetail', () => {
  let component: NoteDetail;
  let fixture: ComponentFixture<NoteDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(NoteDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
