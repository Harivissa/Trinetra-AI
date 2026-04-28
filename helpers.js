// Shared helpers

export function pressureColor(score) {
  if (score >= 80) return 'var(--critical)'
  if (score >= 60) return 'var(--high)'
  if (score >= 40) return 'var(--medium)'
  return 'var(--low)'
}

export function pressureLabel(score) {
  if (score >= 80) return 'CRITICAL'
  if (score >= 60) return 'HIGH'
  if (score >= 40) return 'ELEVATED'
  return 'LOW'
}

export function probabilityColor(p) {
  if (p >= 60) return 'var(--critical)'
  if (p >= 35) return 'var(--high)'
  if (p >= 20) return 'var(--medium)'
  return 'var(--low)'
}

export function doctrineImpactColor(impact) {
  const map = { critical: 'var(--critical)', high: 'var(--high)', medium: 'var(--medium)', low: 'var(--low)' }
  return map[impact] || 'var(--neutral)'
}

export function regionColor(region) {
  const map = {
    'South Asia': '#ff9500',
    'East Asia': '#ff6b35',
    'Eurasia': '#cc6699',
    'Europe': '#5588ff',
    'North America': '#34c759',
    'Middle East': '#ffcc00',
    'Southeast Asia': '#5ac8fa',
    'South America': '#30d158',
  }
  return map[region] || 'var(--text-dim)'
}

export function scalarBar(value, max = 100, color = 'var(--saffron)') {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  return { pct, color }
}
