import React from 'react'
import SectionHeader from '../shared/SectionHeader'
import InfoBlock from '../shared/InfoBlock'

export default function PoliticalTab({ data, mode }) {
  const pi = data.political_intelligence || {}
  const co = pi.constitution || {}
  const parties = pi.party_evolution || []
  const lm = pi.leadership_memory || {}
  const curr = lm.current_leader || {}
  const hist = lm.historical_leaders || []

  return (
    <div className="fade-in" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, alignItems:'start' }}>

      {/* Left */}
      <div>
        <SectionHeader title="Constitution">
          {co.adopted && <InfoBlock label="Adopted" value={String(co.adopted)} />}
          <InfoBlock label="Character" value={co.character} />
          {co.key_features?.length > 0 && (
            <div style={{marginTop:8}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--text-dim)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:6}}>Key Features</div>
              {co.key_features.map((f,i) => (
                <div key={i} style={{display:'flex',gap:8,marginBottom:5,alignItems:'flex-start'}}>
                  <span style={{color:'var(--saffron)',flexShrink:0,marginTop:1}}>◈</span>
                  <span style={{fontSize:'0.85rem',color:'var(--text-secondary)'}}>{f}</span>
                </div>
              ))}
            </div>
          )}
          {co.fault_lines?.length > 0 && (
            <div style={{marginTop:12}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--high)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:6}}>Constitutional Fault Lines</div>
              {co.fault_lines.map((f,i) => (
                <div key={i} style={{display:'flex',gap:8,marginBottom:5,alignItems:'flex-start'}}>
                  <span style={{color:'var(--high)',flexShrink:0}}>⚡</span>
                  <span style={{fontSize:'0.82rem',color:'var(--text-secondary)'}}>{f}</span>
                </div>
              ))}
            </div>
          )}
        </SectionHeader>

        {parties.length > 0 && (
          <SectionHeader title="Party Evolution">
            {parties.map((p, i) => (
              <div key={i} style={{
                border:'1px solid var(--border-dim)', borderRadius:4,
                padding:14, marginBottom:10,
                borderLeft:'2px solid var(--saffron)'
              }}>
                <div style={{fontWeight:700, fontSize:'0.92rem', color:'var(--text-accent)', marginBottom:4}}>{p.party}</div>
                {p.founded && <div style={{fontFamily:'var(--font-mono)',fontSize:'0.68rem',color:'var(--text-dim)',marginBottom:6}}>Founded: {p.founded}</div>}
                <InfoBlock label="Current Ideology" value={p.ideology_now} />
                <InfoBlock label="Trajectory"       value={p.trajectory} />
                <InfoBlock label="Current Status"   value={p.current_status} />
              </div>
            ))}
          </SectionHeader>
        )}
      </div>

      {/* Right: Leadership */}
      <div>
        {curr.name && (
          <SectionHeader title="Current Leadership">
            <div style={{
              background:'var(--bg-elevated)', border:'1px solid var(--border-mid)',
              borderRadius:4, padding:16, marginBottom:16
            }}>
              <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',marginBottom:12}}>
                <div>
                  <div style={{fontFamily:'var(--font-display)',fontSize:'1.2rem',color:'var(--text-accent)'}}>{curr.name}</div>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:'0.7rem',color:'var(--text-dim)',marginTop:2}}>{curr.title} · In power since {curr.in_power_since}</div>
                </div>
                {curr.archetype && (
                  <span style={{
                    fontFamily:'var(--font-mono)',fontSize:'0.63rem',
                    color:'var(--saffron)',background:'var(--saffron-glow)',
                    border:'1px solid var(--border-bright)',padding:'3px 8px',borderRadius:2,
                    textTransform:'uppercase',letterSpacing:'0.08em',flexShrink:0
                  }}>{curr.archetype.replace(/_/g,' ')}</span>
                )}
              </div>

              {curr.formative_experiences?.length > 0 && (
                <div style={{marginBottom:12}}>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:'0.63rem',color:'var(--text-dim)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:6}}>Formative Experiences</div>
                  {curr.formative_experiences.map((e,i) => (
                    <div key={i} style={{display:'flex',gap:8,marginBottom:6,alignItems:'flex-start'}}>
                      <span style={{color:'var(--saffron-dim)',flexShrink:0,marginTop:2}}>▸</span>
                      <span style={{fontSize:'0.82rem',color:'var(--text-secondary)',lineHeight:1.6}}>{e}</span>
                    </div>
                  ))}
                </div>
              )}

              {curr.decision_patterns && (
                <div style={{marginBottom:12}}>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:'0.63rem',color:'var(--text-dim)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:6}}>Decision Patterns</div>
                  {Object.entries(curr.decision_patterns).map(([k,v]) => (
                    <div key={k} style={{marginBottom:6}}>
                      <span style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--text-dim)',textTransform:'uppercase'}}>{k.replace(/_/g,' ')}: </span>
                      <span style={{fontSize:'0.82rem',color:'var(--text-secondary)'}}>{v}</span>
                    </div>
                  ))}
                </div>
              )}

              {curr.red_lines?.length > 0 && (
                <div>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:'0.63rem',color:'var(--critical)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:6}}>Red Lines</div>
                  {curr.red_lines.map((r,i) => (
                    <div key={i} style={{display:'flex',gap:8,marginBottom:4,alignItems:'flex-start'}}>
                      <span style={{color:'var(--critical)',flexShrink:0}}>✕</span>
                      <span style={{fontSize:'0.82rem',color:'var(--text-secondary)'}}>{r}</span>
                    </div>
                  ))}
                </div>
              )}

              {curr.historical_analog && (
                <div style={{marginTop:12,background:'var(--bg-card)',borderRadius:4,padding:10}}>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:'0.63rem',color:'var(--text-dim)',letterSpacing:'0.1em',marginBottom:4}}>HISTORICAL ANALOG</div>
                  <span style={{fontSize:'0.85rem',color:'var(--text-primary)',fontWeight:600}}>
                    {typeof curr.historical_analog === 'object' ? curr.historical_analog.figure : curr.historical_analog}
                  </span>
                  {typeof curr.historical_analog === 'object' && curr.historical_analog.similarity && (
                    <p style={{fontSize:'0.8rem',color:'var(--text-secondary)',marginTop:4}}>{curr.historical_analog.similarity}</p>
                  )}
                </div>
              )}
            </div>
          </SectionHeader>
        )}

        {hist.length > 0 && mode !== 'Brief' && (
          <SectionHeader title="Historical Leaders" collapsible defaultOpen={mode==='Deep'}>
            {hist.map((l,i) => (
              <div key={i} style={{marginBottom:14,paddingBottom:14,borderBottom:'1px solid var(--border-dim)'}}>
                <div style={{fontWeight:600,fontSize:'0.9rem',color:'var(--text-primary)',marginBottom:2}}>{l.name}</div>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'0.68rem',color:'var(--text-dim)',marginBottom:6}}>{l.period}</div>
                <InfoBlock label="Doctrine Legacy"   value={l.doctrine_legacy} />
                <InfoBlock label="Strategic Failure" value={l.strategic_failure} />
                <InfoBlock label="Live Relevance"    value={l.live_relevance} />
              </div>
            ))}
          </SectionHeader>
        )}
      </div>
    </div>
  )
}
