import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  private readonly portfolioService = inject(PortfolioService);

  readonly profile = this.portfolioService.profile;
  readonly skillCategories = this.portfolioService.skillCategories;
}
