import { useI18n } from '../i18n.jsx';

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer>
      <p>&copy; 2026 &mdash; {t.footer}</p>
    </footer>
  );
}