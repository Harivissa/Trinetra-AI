import React, { useState } from 'react'
import SectionHeader from '../shared/SectionHeader'

const SENSITIVITY_COLOR = {
  very_high: 'var(--critical)', extremely_high: 'var(--critical)',
  high: 'var(--high)', medium: 'var(--medium)', low: 'var(--low)'
}
const TYPE_LABELS = {
  civilizational_rupture: 'CIVILIZATIONAL RUPTURE',
  military_defeat: 'MILITARY DEFEAT',
  democratic_rupture: 'DEMOCRATIC RUPTURE',
  state_violence: 'STATE VIOLENCE',
  state_violence_against_citizens: 'STATE VIOLENCE',
  foreign_atrocity: 'FOREIGN ATROCITY',
  state_caused_famine: 'STATE-CAUSED FAMINE',
  strategic_shock: 'STRATEGIC SHOCK',
  ongoing_ethnic_repression: 'ONGOING REPRESSION',
}

export default function CrisesTab({ data, mode }) {
  const crises = data.crises_tragedies || []
  const [active, setActive] = useState(null)

  if (!crises.length) return (
    <div className="loading" style={{color:'var(--text-dim)'}}>No crises data available for this nation.</div>
  )

  return (
    <div className="fade-in">
      <SectionHeader title="Crises, Tragedies & Strategic Shocks"
        subtitle="Historical wounds that remain analytically live">
        <div style={{fontFamily:'var(--font-mono)',fontSize:'0.7rem',color:'var(--text-dim)',marginBottom:20}}>
          These events are modeled as "wounds" — rated by live relevance to 2026 policy decisions.
          Click any event to expand full analysis.
        </div>

        {crises.map((c, i) => {
          const col = SENSITIVITY_COLOR[c.sensitivity_flag] || 'var(--neutral)'
          const isOpen = active === i
          return (
            <div
              key={c.id || i}
              onClick={() => setActive(isOpen ? null : i)}
              style={{
                border: `1px solid ${isOpen ? col : 'var(--border-dim)'}`,
                borderLeft: `3px solid ${col}`,
                borderRadius: 4,
                background: isOpen ? 'var(--bg-elevated)' : 'var(--bg-card)',
                padding: 16,
                marginBottom: 10,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {/* Header row */}
              <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:12 }}>
                <div style={{ flex:1 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:10, flexWrap:'wrap', marginBottom:4 }}>
                    <span style={{
                      fontFamily:'var(--font-mono)', fontSize:'0.68rem',
                      color: col, letterSpacing:'0.08em'
                    }}>{c.year}</span>
                    <span style={{
                      fontFamily:'var(--font-mono)', fontSize:'0.62rem',
                      color:'var(--text-dim)', background:'var(--bg-deep)',
                      padding:'1px 6px', borderRadius:2, border:'1px solid var(--border-dim)'
                    }}>{TYPE_LABELS[c.type] || c.type?.toUpperCase()}</span>
                    {c.sensitivity_flag?.includes('high') && (
                      <span style={{fontFamily:'var(--font-mono)',fontSize:'0.62rem',color:col}}>
                        ⚠ SENSITIVE
                      </span>
                    )}
                  </div>
                  <div style={{ fontWeight:600, fontSize:'0.95rem', color:'var(--text-primary)' }}>
                    {c.name}
                  </div>
                  {!isOpen && (
                    <div style={{ fontSize:'0.82rem', color:'var(--text-secondary)', marginTop:4, lineHeight:1.5 }}>
                      {c.immediate_consequences?.substring(0, 100)}...
                    </div>
                  )}
                </div>
                <span style={{ color:'var(--text-dim)', fontSize:'0.8rem', fontFamily:'var(--font-mono)', flexShrink:0 }}>
                  {isOpen ? '▲' : '▼'}
                </span>
              </div>

              {/* Expanded content */}
              {isOpen && (
                <div style={{ marginTop:16 }}>
                  {[
                    ['Background',            c.background],
                    ['Cause',                 c.cause],
                    ['Immediate Consequences', c.immediate_consequences],
                    ['Long-term Impact',       c.long_term_impact],
                  ].map(([label, val]) => val && (
                    <div key={label} style={{ marginBottom:14 }}>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.63rem', color:'var(--text-dim)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:4 }}>{label}</div>
                      <p style={{ fontSize:'0.87rem', color:'var(--text-secondary)', lineHeight:1.7 }}>{val}</p>
                    </div>
                  ))}

                  {/* Live relevance — the wound model */}
                  {c.live_relevance_2026 && (
                    <div style={{
                      background:'var(--bg-void)', border:`1px solid ${col}`,
                      borderRadius:4, padding:12, marginTop:8
                    }}>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.63rem', color: col, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:6 }}>
                        ◉ LIVE RELEVANCE — 2026
                      </div>
                      <p style={{ fontSize:'0.87rem', color:'var(--text-primary)', lineHeight:1.65 }}>
                        {c.live_relevance_2026}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </SectionHeader>
    </div>
  )
}
