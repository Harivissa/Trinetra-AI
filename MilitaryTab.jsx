import React from 'react'
import SectionHeader from '../shared/SectionHeader'
import ScoreBar from '../shared/ScoreBar'
import InfoBlock from '../shared/InfoBlock'

export default function MilitaryTab({ data, mode }) {
  const ms = data.military_security || {}
  const ns = ms.nuclear_status || {}
  const per = ms.personnel || {}

  return (
    <div className="fade-in" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, alignItems:'start' }}>
      <div>
        <SectionHeader title="Military Overview">
          <InfoBlock label="Overview" value={ms.overview} />

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, margin:'12px 0 16px' }}>
            {[
              ['Active Personnel',    per.active?.toLocaleString()],
              ['Reserve',            per.reserve?.toLocaleString()],
              ['Paramilitary',       per.paramilitary?.toLocaleString()],
            ].map(([k,v]) => v && (
              <div key={k} style={{
                background:'var(--bg-elevated)', border:'1px solid var(--border-dim)',
                borderRadius:4, padding:'10px 14px'
              }}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'0.62rem',color:'var(--text-dim)',marginBottom:3}}>{k}</div>
                <div style={{fontWeight:700,fontSize:'1rem',color:'var(--text-primary)'}}>{v}</div>
              </div>
            ))}
          </div>

          <ScoreBar label="Power Projection"   value={ms.power_projection || 50}   color="var(--saffron)" />
          <ScoreBar label="Combat Experience"  value={ms.combat_experience || 50}  color="var(--medium)" />
          <ScoreBar label="Logistics Depth"    value={ms.logistics_depth || 50}    color="var(--low)" />
        </SectionHeader>

        {ms.key_capabilities?.length > 0 && (
          <SectionHeader title="Key Capabilities">
            {ms.key_capabilities.map((c,i) => (
              <div key={i} style={{display:'flex',gap:8,marginBottom:6,alignItems:'flex-start'}}>
                <span style={{color:'var(--saffron)',flexShrink:0}}>◆</span>
                <span style={{fontSize:'0.85rem',color:'var(--text-secondary)'}}>{c}</span>
              </div>
            ))}
          </SectionHeader>
        )}
      </div>

      <div>
        {/* Nuclear status — prominent */}
        <div style={{
          background: ns.is_nuclear ? 'rgba(255,59,48,0.06)' : 'var(--bg-card)',
          border: `1px solid ${ns.is_nuclear ? 'rgba(255,59,48,0.3)' : 'var(--border-dim)'}`,
          borderRadius:4, padding:16, marginBottom:20
        }}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:12}}>
            <span style={{fontSize:'1.4rem'}}>{ns.is_nuclear ? '☢' : '○'}</span>
            <div>
              <div style={{fontFamily:'var(--font-display)',fontSize:'0.95rem',color: ns.is_nuclear ? 'var(--critical)' : 'var(--text-dim)'}}>
                {ns.is_nuclear ? 'NUCLEAR ARMED' : 'NON-NUCLEAR'}
              </div>
              {ns.declared_since && (
                <div style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--text-dim)'}}>
                  Declared: {ns.declared_since}
                </div>
              )}
            </div>
          </div>
          {ns.is_nuclear && (
            <>
              <InfoBlock label="Doctrine"           value={ns.doctrine} />
              <InfoBlock label="Est. Warheads"      value={ns.estimated_warheads ? String(ns.estimated_warheads) : null} />
              <InfoBlock label="Trajectory"         value={ns.trajectory} />
              <InfoBlock label="Active Debate"      value={ns.debate} />
              {ns.delivery?.length > 0 && (
                <div style={{marginTop:8}}>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:'0.63rem',color:'var(--text-dim)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:5}}>Delivery Systems</div>
                  {ns.delivery.map((d,i) => (
                    <div key={i} style={{fontFamily:'var(--font-mono)',fontSize:'0.75rem',color:'var(--text-code)',marginBottom:3}}>◈ {d}</div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        <SectionHeader title="Doctrine & Procurement">
          <InfoBlock label="Military Doctrine"    value={ms.doctrine} />
          <InfoBlock label="Procurement History"  value={ms.procurement_evolution} />
        </SectionHeader>
      </div>
    </div>
  )
}
