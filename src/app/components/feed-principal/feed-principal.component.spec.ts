import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPrincipalComponent } from './feed-principal.component';

describe('FeedPrincipalComponent', () => {
  let component: FeedPrincipalComponent;
  let fixture: ComponentFixture<FeedPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedPrincipalComponent]
    });
    fixture = TestBed.createComponent(FeedPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
