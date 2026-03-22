import { useI18n } from './useI18n.js';
import { EXPERIENCE } from '../models/experience.js';

export function useExperience() {
  const { t } = useI18n();
  const exp = t.experience;
  return {
    ...EXPERIENCE,
    role: exp[EXPERIENCE.roleKey],
    present: exp[EXPERIENCE.presentKey],
    stackLabel: exp[EXPERIENCE.stackLabelKey],
    bullets: EXPERIENCE.bulletKeys.map(k => exp[k]),
  };
}
