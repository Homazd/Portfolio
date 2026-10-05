import { Injectable, NotFoundException } from '@nestjs/common';
import { en } from './data/en.js';
import { fa } from './data/fa.js';
import type { Portfolio, Project } from './portfolio.types.js';

const content = { en, fa } satisfies Record<string, Portfolio>;

export type Locale = keyof typeof content;
export const LOCALES = Object.keys(content) as Locale[];

/** Unknown or missing languages fall back to English. */
export function toLocale(value?: string): Locale {
  return LOCALES.includes(value as Locale) ? (value as Locale) : 'en';
}

@Injectable()
export class PortfolioService {
  getAll(locale: Locale): Portfolio {
    return content[locale];
  }

  getProjects(locale: Locale): Project[] {
    return content[locale].projects;
  }

  getProject(slug: string, locale: Locale): Project {
    const project = content[locale].projects.find((p) => p.slug === slug);
    if (!project) {
      throw new NotFoundException(`Project "${slug}" not found`);
    }
    return project;
  }
}
