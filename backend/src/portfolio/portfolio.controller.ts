import { Controller, Get, Param } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';
import { PortfolioService } from './portfolio.service.js';

@SkipThrottle()
@Controller()
export class PortfolioController {
  constructor(private readonly portfolio: PortfolioService) {}

  @Get('portfolio')
  getPortfolio() {
    return this.portfolio.getAll();
  }

  @Get('projects')
  getProjects() {
    return this.portfolio.getProjects();
  }

  @Get('projects/:slug')
  getProject(@Param('slug') slug: string) {
    return this.portfolio.getProject(slug);
  }
}
