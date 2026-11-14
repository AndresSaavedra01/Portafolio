import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent {
  private readonly portfolioService = inject(PortfolioService);

  readonly projects = this.portfolioService.projects;
  readonly totalProjects = this.portfolioService.totalProjects;
}
