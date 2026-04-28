import React, { useState } from 'react'
import SectionHeader from '../shared/SectionHeader'
import InfoBlock from '../shared/InfoBlock'

export default function StrategicCultureTab({ data, mode }) {
  const scr = data.strategic_culture_rules || []
  const dbc = data.doctrine_break_conditions || {}
  const inst = data.institutional_vs_personality || {}
  const [open, setOpen] = useState(0)

  return (
    <div className="fade-in" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, alignItems:'start' }}>

      {/* SCR rules */}
      <div>
        <SectionHeader title="Strategic Culture Rules"
          subtitle="Consistent behavioral patterns — ML-ready predictive rules">
          {scr.length === 0 && (
            <div style={{color:'var(--text-dim)',fontFamily:'var(--font-mono)',fontSize:'0.78rem'}}>No SCR data available.</div>
          )}
          {scr.map((rule, i) => {
            const isOpen = open === i
            return (
              <div
                key={rule.id || i}
                onClick={() => setOpen(isOpen ? -1 : i)}
                style={{
                  border:`1px solid ${isOpen ? 'var(--saffron)' : 'var(--border-dim)'}`,
                  borderLeft:`3px solid ${isOpen ? 'var(--saffron)' : 'var(--border-mid)'}`,
                  borderRadius:4, padding:14, marginBottom:10,
                  cursor:'pointer', background: isOpen ? 'var(--bg-elevated)' : 'var(--bg-card)',
                  transition:'all 0.2s'
                }}
              >
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:8}}>
                  <div style={{flex:1}}>
                    {rule.id && <div style={{fontFamily:'var(--font-mono)',fontSize:'0.62rem',color:'var(--saffron-dim)',marginBottom:4}}>{rule.id}</div>}
                    <div style={{fontWeight:600,fontSize:'0.9rem',color:'var(--text-primary)',lineHeight:1.5}}>{rule.rule}</div>
                    <div style={{display:'flex',gap:8,marginTop:6,flexWrap:'wrap'}}>
                      {rule.domain && (
                        <span className="tag" style={{fontSize:'0.65rem'}}>
                          {rule.domain.replace(/_/g,' ').toUpperCase()}
                        </span>
                      )}
                      {rule.consistency && (
                        <span style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--low)'}}>
                          {rule.consistency}% consistent
                        </span>
                      )}
                      {rule.predictive_weight && (
                        <span style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--medium)'}}>
                          weight: {rule.predictive_weight}
                        </span>
                      )}
                    </div>
                  </div>
                  <span style={{color:'var(--text-dim)',fontSize:'0.8rem'}}>{isOpen ? '▲' : '▼'}</span>
                </div>

                {isOpen && (
                  <div style={{marginTop:14}}>
                    {rule.ml_features && (
                      <div style={{
                        background:'var(--bg-card)', border:'1px solid var(--border-dim)',
                        borderRadius:4, padding:12, marginBottom:10
                      }}>
                        <div style={{fontFamily:'var(--font-mono)',fontSize:'0.62rem',color:'var(--text-code)',letterSpacing:'0.1em',marginBottom:8}}>ML FEATURES</div>
                        <div style={{marginBottom:5}}>
                          <span style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--text-dim)'}}>TRIGGERS: </span>
                          <span style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--text-code)'}}>{rule.ml_features.triggers?.join(', ')}</span>
                        </div>
                        <div style={{marginBottom:5}}>
                          <span style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--text-dim)'}}>PREDICTED RESPONSE: </span>
                          <span style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--saffron)'}}>{rule.ml_features.predicted_response}</span>
                        </div>
                        <div>
                          <span style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--text-dim)'}}>CONFIDENCE: </span>
                          <span style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--low)'}}>{((rule.ml_features.confidence || 0)*100).toFixed(0)}%</span>
                        </div>
                      </div>
                    )}
                    {rule.exceptions?.length > 0 && (
                      <InfoBlock label="Historical Exceptions" value={rule.exceptions.join('; ')} />
                    )}
                    {rule.exception_conditions?.length > 0 && (
                      <InfoBlock label="Break Conditions" value={rule.exception_conditions.join(', ')} />
                    )}
                    {rule.scenario_relevance?.length > 0 && (
                      <div style={{marginTop:6}}>
                        <div style={{fontFamily:'var(--font-mono)',fontSize:'0.62rem',color:'var(--text-dim)',marginBottom:4}}>SCENARIO RELEVANCE</div>
                        <div style={{display:'flex',flexWrap:'wrap',gap:5}}>
                          {rule.scenario_relevance.map((s,j) => (
                            <span key={j} className="tag" style={{fontSize:'0.65rem'}}>{s.replace(/_/g,' ')}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </SectionHeader>
      </div>

      {/* Doctrine break conditions + Inst/Personality */}
      <div>
        {Object.keys(dbc).length > 0 && (
          <SectionHeader title="Doctrine Break Conditions"
            subtitle="When and why this state abandons its core behavioral rules">
            {Object.entries(dbc).map(([doctrine, cond]) => (
              <div key={doctrine} style={{
                background:'var(--bg-card)', border:'1px solid var(--border-dim)',
                borderRadius:4, padding:14, marginBottom:12,
                borderLeft:`2px solid ${cond.has_broken_before ? 'var(--high)' : 'var(--border-mid)'}`
              }}>
                <div style={{fontWeight:600,fontSize:'0.88rem',color:'var(--text-primary)',marginBottom:8,textTransform:'capitalize'}}>
                  {doctrine.replace(/_/g,' ')}
                </div>
                <div style={{display:'flex',gap:8,alignItems:'center',marginBottom:8}}>
                  <span style={{
                    fontFamily:'var(--font-mono)',fontSize:'0.65rem',
                    color: cond.has_broken_before ? 'var(--high)' : 'var(--low)'
                  }}>
                    {cond.has_broken_before ? '⚠ HAS BROKEN BEFORE' : '✓ NEVER BROKEN'}
                  </span>
                </div>
                {cond.break_instance && <InfoBlock label="Break Instance" value={cond.break_instance} />}
                {cond.current_break_threshold && <InfoBlock label="Current Threshold" value={cond.current_break_threshold} />}
                {cond.most_likely_break_trigger && <InfoBlock label="Most Likely Trigger" value={cond.most_likely_break_trigger} />}
                {cond.debate_status && <InfoBlock label="Active Debate" value={cond.debate_status} />}
                {cond.break_conditions?.length > 0 && (
                  <div style={{marginTop:6}}>
                    <div style={{fontFamily:'var(--font-mono)',fontSize:'0.62rem',color:'var(--text-dim)',marginBottom:4}}>BREAK CONDITIONS</div>
                    {cond.break_conditions.map((c,i) => (
                      <div key={i} style={{display:'flex',gap:6,marginBottom:3}}>
                        <span style={{color:'var(--high)',flexShrink:0}}>▸</span>
                        <span style={{fontSize:'0.8rem',color:'var(--text-secondary)'}}>{c.replace(/_/g,' ')}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </SectionHeader>
        )}

        {Object.keys(inst).length > 0 && (
          <SectionHeader title="Institutional vs. Personality" collapsible defaultOpen={false}>
            <div style={{
              background:'var(--bg-elevated)', borderRadius:4,
              padding:16, marginBottom:12
            }}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
                <span style={{fontFamily:'var(--font-ui)',fontSize:'0.85rem',color:'var(--text-secondary)'}}>Institutional → Personality</span>
                <span style={{fontFamily:'var(--font-mono)',fontWeight:700,color:'var(--saffron)'}}>{inst.score}/100</span>
              </div>
              <div style={{height:6,background:'var(--bg-deep)',borderRadius:3,overflow:'hidden',marginBottom:8}}>
                <div style={{
                  width:`${inst.score || 50}%`, height:'100%',
                  background:`linear-gradient(90deg, var(--low), var(--saffron), var(--critical))`,
                  borderRadius:3
                }}/>
              </div>
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <span style={{fontFamily:'var(--font-mono)',fontSize:'0.62rem',color:'var(--low)'}}>Predictable</span>
                <span style={{fontFamily:'var(--font-mono)',fontSize:'0.62rem',color:'var(--critical)'}}>Unpredictable</span>
              </div>
            </div>
            <InfoBlock label="Override Tendency"       value={inst.current_leader_override_tendency} />
            <InfoBlock label="Succession Risk"         value={inst.succession_discontinuity_risk} />
            {inst.examples?.length > 0 && (
              <div>
                {inst.examples.map((e,i) => (
                  <div key={i} style={{display:'flex',gap:8,marginBottom:5}}>
                    <span style={{color:'var(--text-dim)',flexShrink:0}}>▸</span>
                    <span style={{fontSize:'0.82rem',color:'var(--text-secondary)'}}>{e}</span>
                  </div>
                ))}
              </div>
            )}
          </SectionHeader>
        )}
      </div>
    </div>
  )
}
