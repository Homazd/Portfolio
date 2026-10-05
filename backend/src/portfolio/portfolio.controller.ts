import { Controller, Get, Param, Query } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';
import { PortfolioService, toLocale } from './portfolio.service.js';

@SkipThrottle()
@Controller()
export class PortfolioController {
  constructor(private readonly portfolio: PortfolioService) {}

  @Get('portfolio')
  getPortfolio(@Query('lang') lang?: string) {
    return this.portfolio.getAll(toLocale(lang));
  }

  @Get('projects')
  getProjects(@Query('lang') lang?: string) {
    return this.portfolio.getProjects(toLocale(lang));
  }

  @Get('projects/:slug')
  getProject(@Param('slug') slug: string, @Query('lang') lang?: string) {
    return this.portfolio.getProject(slug, toLocale(lang));
  }
}
