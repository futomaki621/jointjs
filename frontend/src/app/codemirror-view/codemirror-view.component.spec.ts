import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodemirrorViewComponent } from './codemirror-view.component';

describe('CodemirrorViewComponent', () => {
  let component: CodemirrorViewComponent;
  let fixture: ComponentFixture<CodemirrorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodemirrorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodemirrorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
