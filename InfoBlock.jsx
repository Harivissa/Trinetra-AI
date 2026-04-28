import React from 'react'

export default function InfoBlock({ label, value, mono = false }) {
  if (!value) return null
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.65rem', color:'var(--text-dim)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:3 }}>{label}</div>
      <div style={{ fontFamily: mono ? 'var(--font-mono)' : 'var(--font-ui)', fontSize: mono ? '0.82rem' : '0.92rem', color:'var(--text-primary)', lineHeight:1.6 }}>{value}</div>
    </div>
  )
}
