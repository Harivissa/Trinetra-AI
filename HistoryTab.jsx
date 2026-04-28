import React, { useState } from 'react'
import { doctrineImpactColor } from '../../utils/helpers'
import SectionHeader from '../shared/SectionHeader'
import InfoBlock from '../shared/InfoBlock'

export default function HistoryTab({ data, mode }) {
  const hm = data.historical_memory || {}
  const ns = hm.narrative_spine || {}
  const tp = hm.turning_points || []
  const dt = data.foreign_policy?.doctrine_timeline || []
  const [expanded, setExpanded] = useState(null)

  return (
    <div className="fade-in" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, alignItems:'start' }}>

      {/* Left: Narrative Spine */}
      <div>
        <SectionHeader title="Narrative Spine" subtitle="The story that shapes all decisions">
          {[
            ['Founding Trauma',          ns.founding_trauma],
            ['Civilizational Claim',     hm.civilizational_claim],
            ['Identity Claim',           ns.identity_claim],
            ['First External Test',      ns.first_test],
            ['First Internal Rupture',   ns.first_internal_rupture],
            ['Doctrine Crystallization', ns.doctrine_crystallization],
            ['Present Posture',          ns.present_posture],
          ].map(([label, val]) => val && (
            <div key={label} style={{marginBottom:16, paddingBottom:16, borderBottom:'1px solid var(--border-dim)'}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--saffron-dim)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:4}}>{label}</div>
              <p style={{fontSize:'0.88rem',color:'var(--text-secondary)',lineHeight:1.7}}>{val}</p>
            </div>
          ))}
        </SectionHeader>

        {mode !== 'Brief' && dt.length > 0 && (
          <SectionHeader title="Doctrine Timeline" subtitle="Foreign policy evolution by era">
            {dt.map((era, i) => (
              <div key={i} style={{
                display:'flex', gap:12, marginBottom:14,
                paddingBottom:14, borderBottom:'1px solid var(--border-dim)'
              }}>
                <div style={{
                  flexShrink:0, width:90,
                  fontFamily:'var(--font-mono)', fontSize:'0.68rem',
                  color:'var(--saffron)', letterSpacing:'0.05em', paddingTop:2
                }}>{era.era}</div>
                <div>
                  <div style={{fontWeight:600, fontSize:'0.85rem', color:'var(--text-primary)', marginBottom:3}}>{era.label}</div>
                  <div style={{fontSize:'0.82rem', color:'var(--text-secondary)', lineHeight:1.6}}>{era.description}</div>
                </div>
              </div>
            ))}
          </SectionHeader>
        )}
      </div>

      {/* Right: Turning Points Timeline */}
      <div>
        <SectionHeader title="Historical Turning Points" subtitle="Events that changed the doctrine">
          <div style={{ position:'relative' }}>
            {/* Vertical line */}
            <div style={{
              position:'absolute', left:38, top:0, bottom:0,
              width:1, background:'var(--border-mid)'
            }} />
            {tp.map((event, i) => (
              <div
                key={i}
                style={{ display:'flex', gap:16, marginBottom:2, cursor:'pointer' }}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                {/* Year bubble */}
                <div style={{
                  flexShrink:0, width:77,
                  display:'flex', flexDirection:'column', alignItems:'center', gap:0
                }}>
                  <div style={{
                    background: doctrineImpactColor(event.doctrine_impact),
                    color:'#000', fontFamily:'var(--font-mono)', fontSize:'0.7rem',
                    fontWeight:700, padding:'3px 6px', borderRadius:2, zIndex:1,
                    position:'relative'
                  }}>{event.year}</div>
                </div>
                {/* Content */}
                <div style={{
                  flex:1, background:'var(--bg-card)', border:'1px solid var(--border-dim)',
                  borderRadius:4, padding:12, marginBottom:8,
                  borderLeft: `2px solid ${doctrineImpactColor(event.doctrine_impact)}`,
                  transition:'all var(--transition)'
                }}>
                  <div style={{fontWeight:600, fontSize:'0.85rem', color:'var(--text-primary)', marginBottom: expanded===i ? 6 : 0}}>
                    {event.event}
                  </div>
                  {expanded === i && (
                    <div style={{fontSize:'0.82rem', color:'var(--text-secondary)', lineHeight:1.65, marginTop:6}}>
                      {event.strategic_consequence}
                      <div style={{marginTop:6}}>
                        <span style={{
                          fontFamily:'var(--font-mono)', fontSize:'0.65rem',
                          color: doctrineImpactColor(event.doctrine_impact),
                          textTransform:'uppercase', letterSpacing:'0.08em'
                        }}>Doctrine Impact: {event.doctrine_impact}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--text-dim)',marginTop:4}}>
            Click events to expand · Color = doctrine impact severity
          </div>
        </SectionHeader>
      </div>
    </div>
  )
}
