import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private readonly portfolioService = inject(PortfolioService);

  readonly profile = this.portfolioService.profile;
  readonly currentYear = new Date().getFullYear();
}
