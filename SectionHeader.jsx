import React, { useState } from 'react'

export default function SectionHeader({ title, subtitle, collapsible = false, defaultOpen = true, children }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div style={{ marginBottom: 24 }}>
      <div
        style={{
          display:'flex', alignItems:'center', justifyContent:'space-between',
          borderBottom: '1px solid var(--border-dim)', paddingBottom: 8, marginBottom: 16,
          cursor: collapsible ? 'pointer' : 'default'
        }}
        onClick={collapsible ? () => setOpen(o => !o) : undefined}
      >
        <div>
          <h3 style={{ marginBottom: subtitle ? 2 : 0 }}>{title}</h3>
          {subtitle && <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', color:'var(--text-dim)' }}>{subtitle}</div>}
        </div>
        {collapsible && (
          <span style={{ color:'var(--text-dim)', fontSize:'0.8rem', fontFamily:'var(--font-mono)' }}>
            {open ? '▲' : '▼'}
          </span>
        )}
      </div>
      {(!collapsible || open) && children}
    </div>
  )
}
