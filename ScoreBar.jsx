import React from 'react'

export default function ScoreBar({ label, value, max = 100, color }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  const c = color || (pct >= 70 ? 'var(--low)' : pct >= 40 ? 'var(--medium)' : 'var(--critical)')
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:4 }}>
        <span style={{ fontFamily:'var(--font-ui)', fontSize:'0.8rem', color:'var(--text-secondary)', letterSpacing:'0.06em' }}>{label}</span>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.78rem', color: c }}>{value}</span>
      </div>
      <div style={{ height:3, background:'var(--bg-elevated)', borderRadius:2, overflow:'hidden' }}>
        <div style={{ width:`${pct}%`, height:'100%', background: c, transition:'width 0.6s ease', borderRadius:2 }} />
      </div>
    </div>
  )
}
