import type { ProjectCategory } from '../../data/projects'

/** Badge treatment per category: client work is solid gold, internship is gold outline. */
export const CATEGORY_BADGE_CLASS: Record<ProjectCategory, string> = {
  freelance: 'bg-gold text-ink',
  internship: 'border border-gold/60 bg-ink/70 text-gold backdrop-blur-sm',
  academic: 'border border-line bg-ink/70 text-fog backdrop-blur-sm',
}
