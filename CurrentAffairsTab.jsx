import React from 'react'
import SectionHeader from '../shared/SectionHeader'
import InfoBlock from '../shared/InfoBlock'

export default function CurrentAffairsTab({ data, mode }) {
  const ca = data.current_affairs || {}
  return (
    <div className="fade-in">
      <SectionHeader title={`Current Affairs — ${ca.year || '2026'}`}
        subtitle="Live intelligence layer — strategic developments as of 2026">
        {ca.key_developments?.length > 0 ? (
          <div>
            {ca.key_developments.map((d,i) => (
              <div key={i} style={{
                display:'flex', gap:12, marginBottom:12,
                padding:14, background:'var(--bg-card)',
                border:'1px solid var(--border-dim)', borderRadius:4,
                borderLeft:'2px solid var(--saffron)'
              }}>
                <span style={{
                  fontFamily:'var(--font-mono)',fontSize:'0.72rem',
                  color:'var(--saffron)',flexShrink:0,paddingTop:1
                }}>◉</span>
                <p style={{fontSize:'0.88rem',color:'var(--text-secondary)',lineHeight:1.7,margin:0}}>{d}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="loading" style={{color:'var(--text-dim)',minHeight:100}}>No current affairs data.</div>
        )}
      </SectionHeader>
      {ca.strategic_trajectory && (
        <div style={{
          background:'var(--bg-elevated)', border:'1px solid var(--border-bright)',
          borderRadius:4, padding:20, marginTop:8
        }}>
          <div style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--saffron)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:8}}>
            Strategic Trajectory Assessment
          </div>
          <p style={{fontSize:'0.92rem',color:'var(--text-primary)',lineHeight:1.75}}>{ca.strategic_trajectory}</p>
        </div>
      )}
    </div>
  )
}
