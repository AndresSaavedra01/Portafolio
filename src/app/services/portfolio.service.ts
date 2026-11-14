import { Injectable, signal, computed } from '@angular/core';
import { Project, SkillCategory } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  // Información personal del desarrollador
  readonly profile = signal({
    name: 'Andres Felipe Saavedra',
    role: 'Desarrollador Full Stack & Estudiante de Ingeniería en Sistemas',
    bio: 'Apasionado por la arquitectura de software, el desarrollo de aplicaciones web de alto rendimiento y el diseño de experiencias de usuario intuitivas. Con sólida base en desarrollo frontend con Angular y ecosistemas modernos, integración de servicios backend, metodologías ágiles y flujos de integración continua (CI/CD).',
    location: 'Colombia',
    status: 'Disponible para proyectos y nuevos retos',
    email: 'andres.saavedra@example.com',
    github: 'https://github.com/AndresSaavedra01',
    linkedin: 'https://linkedin.com/in/andressaavedra',
  });

  // Habilidades y tecnologías organizadas por categorías
  readonly skillCategories = signal<SkillCategory[]>([
    {
      title: 'Frontend & Frameworks',
      iconName: 'code',
      skills: [
        { name: 'Angular' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'Astro' },
        { name: 'HTML5' },
        { name: 'CSS / Flexbox / Grid' },
      ],
    },
    {
      title: 'Backend & Arquitectura',
      iconName: 'server',
      skills: [
        { name: 'Node.js' },
        { name: 'Java' },
        { name: 'SpringBoot' },
        { name: 'System Design Patterns' },
        { name: 'Arquitectura Limpia' },
      ],
    },
    {
      title: 'Bases de Datos',
      iconName: 'database',
      skills: [
        { name: 'PostgreSQL' },
        { name: 'MySQL' },
      ],
    },
    {
      title: 'DevOps & Herramientas',
      iconName: 'terminal',
      skills: [
        { name: 'Git & GitHub' },
        { name: 'GitHub Actions / CI/CD' },
        { name: 'Docker' },
        { name: 'Linux CLI' },
        { name: 'GitHub Pages Deployment' },
      ],
    },
  ]);

  // Lista exacta de los 5 proyectos requeridos
  private readonly _projects = signal<Project[]>([
    {
      id: 1,
      title: 'Portafolio Digital',
      tagline: 'SPA Centralizada & Catálogo de Proyectos',
      description:
        'Aplicación web moderna construida con Angular de última generación. Funciona como catálogo interactivo y centralizado para exhibir proyectos de software, competencias tecnológicas y buenas prácticas de ingeniería frontend.',
      technologies: [
        'Angular',
        'TypeScript',
        'Standalone Components',
      ],
      features: [
        'Arquitectura modular basada en componentes Standalone y Reactividad con Signals.',
        'Catálogo desacoplado y dinámico con renderizado estructurado mediante @for.',
        'Diseño responsive moderno con paleta oscura elegante y micro-interacciones.',
        'Espacio dedicado para gestión de repositorios de código y despliegues en vivo.',
      ],
      githubUrl: 'https://github.com/AndresSaavedra01/Portafolio',
      demoUrl: 'https://andressaavedra01.github.io/Portafolio/',
      featured: true,
      category: 'SPA / Portafolio',
      badge: 'Proyecto Principal',
    },
    {
      id: 2,
      title: 'Taller Angular 2',
      tagline: 'Desarrollo Modular & Flujo Reactivo de Datos',
      description:
        'Aplicación interactiva desarrollada en Angular enfocada en el diseño de interfaces componentes reutilizables, directivas estructurales y manejo fluido de estados y eventos.',
      technologies: ['Angular', 'TypeScript', 'CSS3', 'RxJS', 'HTML5'],
      features: [
        'Implementación rigurosa de enlace de datos bidireccional y unidireccional.',
        'Encapsulamiento de estilos y desacoplamiento de componentes de presentación.',
        'Manejo reactivo de interacciones del usuario en tiempo real.',
        'Estructura limpia siguiendo las guías de estilo oficiales de Angular.',
      ],
      githubUrl: 'https://github.com/AndresSaavedra01/Taller-Angular-2/',
      demoUrl: 'https://andressaavedra01.github.io/Taller-Angular-2/',
      featured: false,
      category: 'Frontend / Angular',
    },
    {
      id: 3,
      title: 'Taller 3 System Design',
      tagline: 'Principios de Diseño de Sistemas & Escalabilidad',
      description:
        'Solución práctica centrada en la concepción arquitectónica de sistemas web, evaluando patrones de diseño, escalabilidad, mantenibilidad y modularidad en aplicaciones modernas.',
      technologies: [
        'Angular',
        'TypeScript',
        'System Design',
        'Software Architecture',
        'CSS Layouts',
      ],
      features: [
        'Aplicación de principios SOLID y separación estricta de responsabilidades.',
        'Estructuración escalable de módulos y servicios de datos.',
        'Análisis de carga, rendimiento y optimización de recursos frontend.',
        'Patrones arquitectónicos aplicados a interfaces de usuario de alta fidelidad.',
      ],
      githubUrl: 'https://github.com/AndresSaavedra01/Taller-3-System-Design/',
      demoUrl: 'https://andressaavedra01.github.io/Taller-3-System-Design/',
      featured: false,
      category: 'Arquitectura & Diseño',
    },
    {
      id: 4,
      title: 'Taller 4 Astro Angular SSG SPA',
      tagline: 'Arquitectura Híbrida: SSG + SPA',
      description:
        'Proyecto de investigación y desarrollo que explora la sinergia entre Static Site Generation (SSG) con Astro y Single Page Applications (SPA) con Angular para maximizar rendimiento y SEO.',
      technologies: [
        'Astro',
        'Angular',
        'SSG',
        'SPA',
        'TypeScript',
        'Performance',
      ],
      features: [
        'Comparación empírica de estrategias de renderizado del lado del cliente vs generación estática.',
        'Optimización de tiempos de carga (FCP y LCP) e hidratación selectiva.',
        'Integración de componentes interactivos dentro de páginas pre-renderizadas.',
        'Arquitectura de islas (Islands Architecture) para reducción del bundle JS.',
      ],
      githubUrl:
        'https://github.com/AndresSaavedra01/taller-4-astro-angular-ssg-spa/',
      demoUrl:
        'https://andressaavedra01.github.io/taller-4-astro-angular-ssg-spa/',
      featured: true,
      category: 'SSG & SPA Híbrido',
      badge: 'Arquitectura Avanzada',
    },
    {
      id: 5,
      title: 'Pipelines Hash Strategy',
      tagline: 'Automatización CI/CD & Estrategia de Enrutamiento Hash',
      description:
        'Implementación de pipelines automatizados de Integración y Despliegue Continuo (CI/CD) combinados con Hash Location Strategy para publicación resiliente en GitHub Pages.',
      technologies: [
        'Angular Routing',
        'HashLocationStrategy',
        'GitHub Actions',
        'CI/CD Pipelines',
        'DevOps',
      ],
      features: [
        'Configuración de HashLocationStrategy evitando errores 404 en refrescos de ruta en hosts estáticos.',
        'Automatización integral de compilación, empaquetado y release a GitHub Pages.',
        'Pipeline de validación previa al merge con chequeo de pruebas unitarias.',
        'Estrategia de versionamiento y cache-busting optimizada para producción.',
      ],
      githubUrl:
        'https://github.com/AndresSaavedra01/pipelines-hash-strategy/',
      demoUrl:
        'https://andressaavedra01.github.io/pipelines-hash-strategy/',
      featured: false,
      category: 'CI/CD & Enrutamiento',
    },
  ]);

  // Señal pública de proyectos
  readonly projects = this._projects.asReadonly();

  // Conteo de proyectos
  readonly totalProjects = computed(() => this.projects().length);
}
