import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { useCountries, useComparison } from '../hooks/useCountry'
import { pressureColor, probabilityColor } from '../utils/helpers'
import './ComparisonPage.css'

export default function ComparisonPage() {
  const { a: paramA, b: paramB } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { countries } = useCountries()
  const [selA, setSelA] = useState(paramA || searchParams.get('a') || '')
  const [selB, setSelB] = useState(paramB || '')
  const [submitted, setSubmitted] = useState(!!(paramA && paramB))
  const { data, loading, error } = useComparison(submitted ? selA : null, submitted ? selB : null)

  const available = countries.filter(c => c.data_available)

  const handleCompare = () => {
    if (!selA || !selB || selA === selB) return
    setSubmitted(true)
    navigate(`/compare/${selA}/${selB}`)
  }

  return (
    <div className="comparison-page fade-in">
      <div className="comp-header">
        <h1>Comparison Engine</h1>
        <p style={{color:'var(--text-secondary)',fontSize:'0.9rem',marginTop:4}}>
          Phase 2 — Asymmetry analysis, war probability, scenario simulation. No winner prediction.
        </p>
      </div>

      {/* Selector */}
      <div className="selector-row">
        <div className="selector-block">
          <label className="selector-label">Country A</label>
          <select className="country-select" value={selA} onChange={e => { setSelA(e.target.value); setSubmitted(false) }}>
            <option value="">— Select —</option>
            {available.map(c => <option key={c.id} value={c.id}>{c.flag} {c.name}</option>)}
          </select>
        </div>
        <div className="vs-divider">VS</div>
        <div className="selector-block">
          <label className="selector-label">Country B</label>
          <select className="country-select" value={selB} onChange={e => { setSelB(e.target.value); setSubmitted(false) }}>
            <option value="">— Select —</option>
            {available.filter(c => c.id !== selA).map(c => <option key={c.id} value={c.id}>{c.flag} {c.name}</option>)}
          </select>
        </div>
        <button
          className="btn btn-primary analyze-btn"
          onClick={handleCompare}
          disabled={!selA || !selB || selA === selB}
        >Analyze →</button>
      </div>

      {loading && <div className="loading">RUNNING GEOPOLITICAL ANALYSIS ENGINE</div>}
      {error && <div className="loading" style={{color:'var(--critical)'}}>Analysis error: {error.message}</div>}

      {data && !loading && <ComparisonResult data={data} />}
    </div>
  )
}

function ComparisonResult({ data }) {
  const a = data.country_a || {}
  const b = data.country_b || {}
  const asym = data.asymmetry_matrix || {}
  const war = data.war_probability || {}
  const scenarios = data.scenarios || []
  const probs = war.probabilities || {}
  const drivers = war.drivers || {}
  const reality = war.reality_check || {}

  return (
    <div className="result fade-in">
      {/* Header */}
      <div className="result-header">
        <div className="country-pill">
          <span className="pill-flag">{a.flag}</span>
          <span className="pill-name">{a.name}</span>
        </div>
        <div className="rel-class">{asym.relationship_classification || 'Bilateral Analysis'}</div>
        <div className="country-pill">
          <span className="pill-flag">{b.flag}</span>
          <span className="pill-name">{b.name}</span>
        </div>
      </div>

      {/* Reality check banner */}
      <div className="reality-banner" style={{borderColor: pressureColor(100 - (reality.score || 50))}}>
        <div style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--text-dim)',letterSpacing:'0.1em',marginBottom:4}}>WAR RATIONALITY ASSESSMENT</div>
        <div style={{display:'flex',alignItems:'center',gap:16}}>
          <span style={{
            fontFamily:'var(--font-display)',fontSize:'1.6rem',
            color: pressureColor(100-(reality.score||50))
          }}>{reality.score}/100</span>
          <span style={{
            fontFamily:'var(--font-ui)',fontWeight:600,fontSize:'1rem',
            color: pressureColor(100-(reality.score||50))
          }}>{reality.label}</span>
        </div>
      </div>

      <div className="result-grid">

        {/* War probability panel */}
        <div className="result-card">
          <h3>Conflict Probability</h3>
          <div className="prob-legend mono" style={{fontSize:'0.65rem',color:'var(--text-dim)',marginBottom:14}}>
            Probabilities are independent — scenarios can overlap or sequence.
          </div>
          {[
            ['Direct War',            probs.direct_war,         'var(--critical)'],
            ['Proxy Conflict',        probs.proxy_conflict,     'var(--high)'],
            ['Economic Coercion',     probs.economic_coercion,  'var(--medium)'],
            ['Diplomatic Resolution', probs.diplomatic_resolution,'var(--low)'],
          ].map(([label, val, color]) => (
            <div key={label} style={{marginBottom:12}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:4}}>
                <span style={{fontSize:'0.82rem',color:'var(--text-secondary)'}}>{label}</span>
                <span style={{fontFamily:'var(--font-mono)',fontSize:'0.82rem',fontWeight:700,color}}>{val}%</span>
              </div>
              <div style={{height:6,background:'var(--bg-elevated)',borderRadius:3,overflow:'hidden'}}>
                <div style={{
                  width:`${val||0}%`,height:'100%',background:color,
                  borderRadius:3,transition:'width 0.8s ease',
                  boxShadow:`0 0 6px ${color}50`
                }}/>
              </div>
            </div>
          ))}

          <div style={{marginTop:20,borderTop:'1px solid var(--border-dim)',paddingTop:16}}>
            <div style={{fontFamily:'var(--font-mono)',fontSize:'0.63rem',color:'var(--text-dim)',marginBottom:8}}>ANALYTICAL RATIONALE</div>
            {war.rationale?.map((r,i) => (
              <div key={i} style={{display:'flex',gap:8,marginBottom:6}}>
                <span style={{color:'var(--saffron)',flexShrink:0,marginTop:1}}>▸</span>
                <span style={{fontSize:'0.82rem',color:'var(--text-secondary)',lineHeight:1.6}}>{r}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Asymmetry matrix */}
        <div className="result-card">
          <h3>Asymmetry Matrix</h3>
          {asym.leverage_a_over_b?.length > 0 && (
            <div style={{marginBottom:16}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--saffron)',letterSpacing:'0.08em',marginBottom:8}}>
                {a.flag} {a.name?.toUpperCase()} LEVERAGE OVER {b.name?.toUpperCase()}
              </div>
              {asym.leverage_a_over_b.map((lev,i) => (
                <LeverageCard key={i} lev={lev} />
              ))}
            </div>
          )}
          {asym.leverage_b_over_a?.length > 0 && (
            <div style={{marginBottom:16}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--medium)',letterSpacing:'0.08em',marginBottom:8}}>
                {b.flag} {b.name?.toUpperCase()} LEVERAGE OVER {a.name?.toUpperCase()}
              </div>
              {asym.leverage_b_over_a.map((lev,i) => (
                <LeverageCard key={i} lev={lev} />
              ))}
            </div>
          )}
          {asym.structural_constraints?.length > 0 && (
            <div>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--text-dim)',letterSpacing:'0.08em',marginBottom:8}}>STRUCTURAL CONSTRAINTS</div>
              {asym.structural_constraints.map((sc,i) => (
                <div key={i} style={{
                  background:'var(--bg-card)',border:'1px solid var(--border-dim)',
                  borderLeft:'2px solid var(--low)',borderRadius:4,padding:10,marginBottom:8
                }}>
                  <div style={{fontWeight:600,fontSize:'0.8rem',color:'var(--low)',marginBottom:4,textTransform:'capitalize'}}>
                    {sc.type?.replace(/_/g,' ')}
                  </div>
                  <p style={{fontSize:'0.8rem',color:'var(--text-secondary)',lineHeight:1.6}}>{sc.description}</p>
                </div>
              ))}
            </div>
          )}
          {asym.scr_collisions?.length > 0 && (
            <div style={{marginTop:12}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--high)',letterSpacing:'0.08em',marginBottom:8}}>
                SCR COLLISIONS — {asym.scr_collisions.length} DETECTED
              </div>
              {asym.scr_collisions.map((col,i) => (
                <div key={i} style={{
                  background:'rgba(255,107,53,0.05)',border:'1px solid rgba(255,107,53,0.2)',
                  borderRadius:4,padding:10,marginBottom:6
                }}>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--high)',marginBottom:4}}>{col.domain?.replace(/_/g,' ')?.toUpperCase()}</div>
                  <p style={{fontSize:'0.78rem',color:'var(--text-secondary)'}}>{col.collision}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scenarios — full width */}
      <div style={{marginTop:20}}>
        <h3 style={{marginBottom:16}}>Scenario Simulation</h3>
        <div className="scenario-grid">
          {scenarios.map(sc => (
            <ScenarioCard key={sc.id} sc={sc} />
          ))}
        </div>
      </div>

      {/* Trigger events */}
      {war.trigger_events?.length > 0 && (
        <div style={{marginTop:20,background:'var(--bg-card)',border:'1px solid var(--border-mid)',borderRadius:4,padding:20}}>
          <h3 style={{marginBottom:12,color:'var(--high)'}}>Identified Trigger Events</h3>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:8}}>
            {war.trigger_events.map((t,i) => (
              <div key={i} style={{
                background:'var(--bg-elevated)',borderRadius:4,padding:10,
                border:'1px solid var(--border-dim)'
              }}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--saffron)',marginBottom:3}}>{t.flashpoint}</div>
                <div style={{fontSize:'0.82rem',color:'var(--text-secondary)'}}>{t.trigger}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function LeverageCard({ lev }) {
  const sev = { critical:'var(--critical)', high:'var(--high)', medium:'var(--medium)', low:'var(--low)' }
  const col = sev[lev.severity] || 'var(--text-dim)'
  return (
    <div style={{
      display:'flex',gap:10,marginBottom:8,
      background:'var(--bg-elevated)',borderRadius:4,padding:10,
      borderLeft:`2px solid ${col}`
    }}>
      <div style={{flex:1}}>
        <div style={{display:'flex',gap:8,alignItems:'center',marginBottom:3}}>
          <span style={{fontFamily:'var(--font-mono)',fontSize:'0.62rem',color:col,textTransform:'uppercase'}}>{lev.severity}</span>
          <span style={{fontFamily:'var(--font-mono)',fontSize:'0.62rem',color:'var(--text-dim)',textTransform:'uppercase'}}>{lev.domain}</span>
        </div>
        <div style={{fontWeight:600,fontSize:'0.82rem',color:'var(--text-primary)',marginBottom:2}}>{lev.lever}</div>
        <div style={{fontSize:'0.78rem',color:'var(--text-secondary)'}}>{lev.impact}</div>
      </div>
    </div>
  )
}

function ScenarioCard({ sc }) {
  const [open, setOpen] = useState(false)
  const col = probabilityColor(sc.probability)
  return (
    <div
      onClick={() => setOpen(o => !o)}
      style={{
        background:'var(--bg-card)', border:`1px solid ${open ? col : 'var(--border-dim)'}`,
        borderTop:`3px solid ${col}`, borderRadius:4,
        padding:16, cursor:'pointer', transition:'all 0.2s'
      }}
    >
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:8}}>
        <div style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--text-dim)'}}>SCENARIO {sc.id}</div>
        <div style={{fontFamily:'var(--font-mono)',fontSize:'1rem',fontWeight:700,color:col}}>{sc.probability}%</div>
      </div>
      <div style={{fontWeight:700,fontSize:'0.92rem',color:'var(--text-primary)',marginBottom:6}}>{sc.name}</div>
      <p style={{fontSize:'0.8rem',color:'var(--text-secondary)',lineHeight:1.6}}>
        {open ? sc.description : sc.description?.substring(0,90)+'...'}
      </p>
      {open && (
        <div style={{marginTop:12}}>
          {sc.conditions?.length > 0 && (
            <div style={{marginBottom:10}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'0.63rem',color:'var(--text-dim)',marginBottom:5}}>CONDITIONS</div>
              {sc.conditions.map((c,i) => <div key={i} style={{fontSize:'0.78rem',color:'var(--text-secondary)',marginBottom:3}}>◈ {c}</div>)}
            </div>
          )}
          <div style={{marginBottom:6}}>
            <span style={{fontFamily:'var(--font-mono)',fontSize:'0.63rem',color:'var(--text-dim)'}}>GLOBAL CONSEQUENCE: </span>
            <span style={{fontSize:'0.8rem',color:'var(--text-secondary)'}}>{sc.global_consequence}</span>
          </div>
          <div style={{marginBottom:6}}>
            <span style={{fontFamily:'var(--font-mono)',fontSize:'0.63rem',color:'var(--saffron)'}}>KEY VARIABLE: </span>
            <span style={{fontSize:'0.8rem',color:'var(--text-primary)',fontWeight:600}}>{sc.key_variable}</span>
          </div>
          <div>
            <span style={{fontFamily:'var(--font-mono)',fontSize:'0.63rem',color:'var(--text-dim)'}}>TIMELINE: </span>
            <span style={{fontSize:'0.78rem',color:'var(--text-secondary)'}}>{sc.timeline}</span>
          </div>
        </div>
      )}
    </div>
  )
}
