import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryViewComponent } from './components/category-view/category-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CategoryViewComponent],
  template: `
    <app-category-view></app-category-view>
  `,
  styles: [`
    :host {
      display: block;
      height: 100vh;
    }
  `]
})
export class AppComponent {
  title = 'category-scroll';
}
