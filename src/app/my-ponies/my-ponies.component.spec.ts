import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPoniesComponent } from './my-ponies.component';

describe('MyPoniesComponent', () => {
  let component: MyPoniesComponent;
  let fixture: ComponentFixture<MyPoniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPoniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
