import { Injectable, NotFoundException } from '@nestjs/common';
import { portfolioData } from './portfolio.data.js';
import type { Portfolio, Project } from './portfolio.types.js';

@Injectable()
export class PortfolioService {
  getAll(): Portfolio {
    return portfolioData;
  }

  getProjects(): Project[] {
    return portfolioData.projects;
  }

  getProject(slug: string): Project {
    const project = portfolioData.projects.find((p) => p.slug === slug);
    if (!project) {
      throw new NotFoundException(`Project "${slug}" not found`);
    }
    return project;
  }
}
