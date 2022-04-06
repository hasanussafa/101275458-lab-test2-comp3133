import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing';



describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({

      imports: [
        RouterTestingModule
      ],

      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it(`should have as title 'Lab Test 2'`, () => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;
    expect(app.title).toEqual('Lab Test 2');
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });



  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Lab Test 2 is working!');
  });
});
