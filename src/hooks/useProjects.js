import { useI18n } from './useI18n.js';
import { PROJECTS } from '../models/projects.js';

export function useProjects() {
  const { t } = useI18n();
  return PROJECTS.map(p => ({
    ...p,
    cat: t.projects[p.categoryKey],
    desc: t.projects[p.descKey],
  }));
}
