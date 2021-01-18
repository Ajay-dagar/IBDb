import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavelistComponent } from './savelist.component';

describe('SavelistComponent', () => {
  let component: SavelistComponent;
  let fixture: ComponentFixture<SavelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
