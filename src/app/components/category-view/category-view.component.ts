import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, PLATFORM_ID, Inject, Renderer2, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="category-container">
      <nav class="category-nav" #categoryNav>
        <div class="category-indicator" #categoryIndicator></div>
        @for (category of categories(); track category) {
          <div 
            class="category-item" 
            [class.active]="selectedCategory() === category"
            (click)="onCategoryClick(category)"
            [id]="'nav-' + category"
          >
            {{ category }}
          </div>
        }
      </nav>

      <div class="data-container" #dataContainer>
        @for (item of data(); track item.name) {
          <div 
            class="category-section" 
            [id]="'category-' + item.name"
            #categorySection
          >
            <h2>{{ item.name }}</h2>
            <div class="providers-grid">
              @for (provider of item.providers; track provider.name) {
                <div class="provider-card" [style.background-image]="'url(' + provider.image + ')'">
                  <div class="card-overlay"></div>
                  <div class="provider-name">{{ provider.name }}</div>
                </div>
              }
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    :host {
      font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
      background: #f7f9fb;
      color: #222;
    }
    .category-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
      background: #f7f9fb;
    }
    .category-nav {
      position: sticky;
      top: 0;
      background: #fff;
      padding: 0.75rem 1.5rem;
      display: flex;
      overflow-x: auto;
      gap: 1rem;
      z-index: 100;
      box-shadow: 0 4px 16px 0 rgba(60,72,88,0.07);
      border-radius: 0 0 18px 18px;
      border-bottom: 1.5px solid #e3e8ee;
      margin-bottom: 2rem;
      scrollbar-width: none;
      -ms-overflow-style: none;
      position: relative;
    }
    .category-nav::-webkit-scrollbar {
      display: none;
    }
    .category-item {
      padding: 0.5rem 1.5rem;
      border-radius: 999px;
      cursor: pointer;
      white-space: nowrap;
      background: #f0f2f5;
      color: #222;
      font-weight: 500;
      font-size: 1.1rem;
      letter-spacing: 0.01em;
      transition: background 0.3s, color 0.3s, box-shadow 0.3s, transform 0.2s;
      box-shadow: 0 1px 2px rgba(60,72,88,0.04);
      border: 1.5px solid transparent;
      user-select: none;
    }
    .category-item:hover {
      background: linear-gradient(90deg, #e0e7ff 0%, #f0f2f5 100%);
      color: #3b82f6;
      transform: translateY(-2px) scale(1.04);
      box-shadow: 0 4px 12px 0 rgba(60,72,88,0.10);
    }
    .category-item.active {
      background: linear-gradient(90deg, #6366f1 0%, #3b82f6 100%);
      color: #fff;
      font-weight: 700;
      box-shadow: 0 6px 20px 0 rgba(59,130,246,0.18);
      border: 1.5px solid #3b82f6;
      transform: scale(1.08);
    }
    .data-container {
      flex: 1;
      overflow-y: auto;
      padding: 2rem 2vw 2rem 2vw;
      background: #f7f9fb;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    .data-container::-webkit-scrollbar {
      display: none;
    }
    .category-section {
      margin-bottom: 3.5rem;
    }
    .category-section h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: #22223b;
      letter-spacing: 0.01em;
    }
    .providers-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 2rem;
      margin-top: 0.5rem;
    }
    .provider-card {
      position: relative;
      width: 100%;
      min-height: 320px;
      background-size: cover;
      background-position: center;
      border-radius: 22px;
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
      overflow: hidden;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      margin: 0;
      transition: box-shadow 0.3s, transform 0.2s;
    }
    .provider-card:hover {
      box-shadow: 0 16px 40px 0 rgba(59,130,246,0.22);
      transform: scale(1.03);
    }
    .card-overlay {
      position: absolute;
      left: 0; top: 0; right: 0; bottom: 0;
      background: linear-gradient(180deg,rgba(0,0,0,0.10) 40%,rgba(59,130,246,0.25) 100%);
      z-index: 1;
    }
    .provider-name {
      position: relative;
      z-index: 2;
      margin-bottom: 2rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      letter-spacing: 0.01em;
      background: rgba(59,130,246,0.85);
      padding: 0.6rem 2.2rem;
      border-radius: 999px;
      box-shadow: 0 2px 8px 0 rgba(59,130,246,0.10);
      display: inline-block;
      text-align: center;
    }
    @media (max-width: 700px) {
      .provider-card {
        min-height: 180px;
      }
      .provider-name {
        font-size: 1rem;
        padding: 0.3rem 1rem;
        margin-bottom: 1rem;
      }
    }
    .category-indicator {
      position: absolute;
      bottom: 6px;
      height: 4px;
      background: linear-gradient(90deg, #6366f1 0%, #3b82f6 100%);
      border-radius: 2px;
      transition: left 0.35s cubic-bezier(.4,0,.2,1), width 0.35s cubic-bezier(.4,0,.2,1), opacity 0.2s;
      z-index: 10;
      left: 0;
      width: 0;
      opacity: 0;
      pointer-events: none;
    }
  `]
})
export class CategoryViewComponent implements OnInit, AfterViewInit {
  @ViewChild('dataContainer') dataContainer!: ElementRef;
  @ViewChild('categoryNav') categoryNav!: ElementRef;
  @ViewChild('categoryIndicator') categoryIndicator!: ElementRef;

  categories;
  data;
  selectedCategory;
  private observer: IntersectionObserver | null = null;
  private isScrolling = false;

  constructor(
    private categoryService: CategoryService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private ngZone: NgZone
  ) {
    this.categories = this.categoryService.getCategories();
    this.data = this.categoryService.getData();
    this.selectedCategory = this.categoryService.getSelectedCategory();

    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(
        (entries) => {
          if (this.isScrolling) return;

          // Find the entry whose top is closest to the top of the scroll container and is intersecting
          const visibleEntries = entries.filter(entry => entry.isIntersecting);
          if (visibleEntries.length > 0) {
            // Find the entry closest to the top (or center)
            const containerTop = this.dataContainer?.nativeElement.getBoundingClientRect().top ?? 0;
            let closestEntry = visibleEntries[0];
            let minDistance = Math.abs(closestEntry.boundingClientRect.top - containerTop);
            visibleEntries.forEach(entry => {
              const distance = Math.abs(entry.boundingClientRect.top - containerTop);
              if (distance < minDistance) {
                closestEntry = entry;
                minDistance = distance;
              }
            });
            const categoryName = closestEntry.target.id.replace('category-', '');
            this.categoryService.setSelectedCategory(categoryName);
            this.categoryService.scrollCategoryIntoView(categoryName);
          }
        },
        {
          threshold: 0.5,
          rootMargin: '-100px 0px'
        }
      );
    }
  }

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.observer && this.dataContainer) {
      const sections = this.dataContainer.nativeElement.querySelectorAll('.category-section');
      sections.forEach((section: Element) => {
        this.observer?.observe(section);
      });
    }
    this.updateIndicator();
  }

  ngAfterViewChecked() {
    this.updateIndicator();
  }

  updateIndicator() {
    this.ngZone.runOutsideAngular(() => {
      if (!this.categoryNav || !this.categoryIndicator) return;
      const selected = this.categoryNav.nativeElement.querySelector('.category-item.active');
      const indicator = this.categoryIndicator.nativeElement;
      if (selected) {
        const navRect = this.categoryNav.nativeElement.getBoundingClientRect();
        const selRect = selected.getBoundingClientRect();
        const left = selRect.left - navRect.left + this.categoryNav.nativeElement.scrollLeft;
        const width = selRect.width;
        this.renderer.setStyle(indicator, 'left', `${left}px`);
        this.renderer.setStyle(indicator, 'width', `${width}px`);
        this.renderer.setStyle(indicator, 'opacity', '1');
      } else {
        this.renderer.setStyle(indicator, 'opacity', '0');
      }
    });
  }

  onCategoryClick(category: string) {
    this.isScrolling = true;
    this.categoryService.setSelectedCategory(category);
    this.updateIndicator();
    this.categoryService.scrollToCategory(category);
    setTimeout(() => {
      this.isScrolling = false;
      this.updateIndicator();
    }, 1000);
  }

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = 'https://via.placeholder.com/300x200?text=No+Image';
  }
} 