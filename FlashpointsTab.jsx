import React, { useState } from 'react'
import { pressureColor, pressureLabel } from '../../utils/helpers'
import SectionHeader from '../shared/SectionHeader'
import InfoBlock from '../shared/InfoBlock'

const STATUS_LABEL = {
  escalating: 'ESCALATING', active_low: 'ACTIVE — LOW INTENSITY',
  frozen: 'FROZEN', defusing: 'DEFUSING'
}
const MOMENTUM_COLOR = {
  accelerating: 'var(--critical)', steady: 'var(--medium)', decelerating: 'var(--low)'
}

export default function FlashpointsTab({ data, mode }) {
  const fps = data.flashpoints || []
  const [active, setActive] = useState(0)

  if (!fps.length) return (
    <div className="loading" style={{color:'var(--text-dim)'}}>No active flashpoints on record.</div>
  )

  return (
    <div className="fade-in">
      <SectionHeader title="Flashpoint Pressure Gauges"
        subtitle="Active and latent conflict zones — click to drill in">

        {/* Gauge overview */}
        <div style={{ marginBottom:24 }}>
          {fps.map((fp, i) => {
            const col = pressureColor(fp.pressure_score)
            const pct = Math.min(100, fp.pressure_score)
            return (
              <div
                key={fp.id}
                onClick={() => setActive(i)}
                style={{
                  marginBottom:10, cursor:'pointer',
                  background: active===i ? 'var(--bg-elevated)' : 'var(--bg-card)',
                  border:`1px solid ${active===i ? col : 'var(--border-dim)'}`,
                  borderRadius:4, padding:'12px 16px',
                  transition:'all 0.2s'
                }}
              >
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:8,flexWrap:'wrap',gap:8}}>
                  <div style={{display:'flex',alignItems:'center',gap:10}}>
                    <span style={{fontWeight:600,fontSize:'0.92rem',color:'var(--text-primary)'}}>{fp.name}</span>
                    <span style={{
                      fontFamily:'var(--font-mono)',fontSize:'0.62rem',
                      color: fp.status?.includes('escalat') ? 'var(--critical)' : 'var(--text-dim)',
                      background:'var(--bg-deep)', padding:'1px 6px',
                      border:'1px solid var(--border-dim)', borderRadius:2
                    }}>{STATUS_LABEL[fp.status] || fp.status?.toUpperCase()}</span>
                  </div>
                  <div style={{display:'flex',alignItems:'center',gap:12}}>
                    {fp.momentum_direction && (
                      <span style={{
                        fontFamily:'var(--font-mono)',fontSize:'0.65rem',
                        color: MOMENTUM_COLOR[fp.momentum_direction]
                      }}>
                        {fp.momentum_direction === 'accelerating' ? '↑↑' : fp.momentum_direction === 'decelerating' ? '↓' : '→'} {fp.momentum_direction}
                      </span>
                    )}
                    <span style={{fontFamily:'var(--font-mono)',fontSize:'0.85rem',fontWeight:700,color:col}}>
                      {fp.pressure_score}/100
                    </span>
                    <span style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:col}}>
                      {pressureLabel(fp.pressure_score)}
                    </span>
                  </div>
                </div>
                {/* Pressure bar */}
                <div style={{height:4,background:'var(--bg-elevated)',borderRadius:2,overflow:'hidden'}}>
                  <div style={{
                    width:`${pct}%`, height:'100%',
                    background: col,
                    borderRadius:2,
                    transition:'width 0.6s ease',
                    boxShadow: `0 0 8px ${col}60`
                  }}/>
                </div>
              </div>
            )
          })}
        </div>

        {/* Detail panel */}
        {fps[active] && (() => {
          const fp = fps[active]
          const col = pressureColor(fp.pressure_score)
          return (
            <div style={{
              background:'var(--bg-elevated)', border:`1px solid ${col}`,
              borderRadius:4, padding:20
            }}>
              <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',marginBottom:16}}>
                <h3 style={{color:'var(--text-accent)'}}>{fp.name}</h3>
                <span style={{
                  fontFamily:'var(--font-mono)',fontSize:'1.2rem',
                  fontWeight:700,color:col
                }}>{fp.pressure_score}</span>
              </div>
              <InfoBlock label="Parties Involved" value={fp.parties?.join(' · ')} />
              <InfoBlock label="Last Escalation"  value={fp.last_escalation} />
              <InfoBlock label="Description"      value={fp.description} />
              {fp.trigger_risk?.length > 0 && (
                <div style={{marginTop:12}}>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:'0.63rem',color:'var(--high)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:6}}>
                    Trigger Risk Scenarios
                  </div>
                  {fp.trigger_risk.map((t,i) => (
                    <div key={i} style={{display:'flex',gap:8,marginBottom:5,alignItems:'flex-start'}}>
                      <span style={{color:'var(--high)',flexShrink:0}}>⚡</span>
                      <span style={{fontSize:'0.85rem',color:'var(--text-secondary)'}}>{t}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })()}
      </SectionHeader>
    </div>
  )
}
