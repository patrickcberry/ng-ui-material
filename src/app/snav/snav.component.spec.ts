
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnavComponent } from './snav.component';

describe('SnavComponent', () => {
  let component: SnavComponent;
  let fixture: ComponentFixture<SnavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
