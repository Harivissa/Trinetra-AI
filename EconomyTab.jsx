import React from 'react'
import SectionHeader from '../shared/SectionHeader'
import ScoreBar from '../shared/ScoreBar'
import InfoBlock from '../shared/InfoBlock'

export default function EconomyTab({ data, mode }) {
  const e = data.economy || {}
  const rc = data.resource_climate || {}

  return (
    <div className="fade-in" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, alignItems:'start' }}>
      <div>
        <SectionHeader title="Economic Profile">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:16 }}>
            {[
              ['GDP (Nominal)',  e.gdp_usd_trillion ? `$${e.gdp_usd_trillion}T` : null],
              ['GDP (PPP)',      e.gdp_ppp_usd_trillion ? `$${e.gdp_ppp_usd_trillion}T` : null],
              ['Growth Rate',   e.growth_rate_percent ? `${e.growth_rate_percent}%` : null],
              ['Forex Reserves',e.forex_reserves_usd_bn ? `$${e.forex_reserves_usd_bn}B` : null],
            ].map(([k,v]) => v && (
              <div key={k} style={{
                background:'var(--bg-elevated)', border:'1px solid var(--border-dim)',
                borderRadius:4, padding:'10px 14px'
              }}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'0.62rem',color:'var(--text-dim)',marginBottom:4}}>{k}</div>
                <div style={{fontFamily:'var(--font-ui)',fontWeight:700,fontSize:'1.1rem',color:'var(--saffron)'}}>{v}</div>
              </div>
            ))}
          </div>

          <ScoreBar label="Growth Score"          value={e.growth_score || 50}        color="var(--low)" />
          <ScoreBar label="Trade Dependency"       value={e.trade_dependency || 40}    color="var(--medium)" />
          <ScoreBar label="Energy Dependency"      value={e.energy_dependency || 50}   color="var(--high)" />
          <ScoreBar label="Sanction Vulnerability" value={e.sanction_vulnerability || 30} color="var(--critical)" />
        </SectionHeader>

        {e.key_sectors?.length > 0 && (
          <SectionHeader title="Key Sectors">
            <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
              {e.key_sectors.map((s,i) => (
                <span key={i} className="tag" style={{fontSize:'0.78rem',padding:'4px 10px'}}>{s}</span>
              ))}
            </div>
          </SectionHeader>
        )}
      </div>

      <div>
        {e.strengths?.length > 0 && (
          <SectionHeader title="Economic Strengths">
            {e.strengths.map((s,i) => (
              <div key={i} style={{display:'flex',gap:8,marginBottom:6,alignItems:'flex-start'}}>
                <span style={{color:'var(--low)',flexShrink:0}}>◈</span>
                <span style={{fontSize:'0.87rem',color:'var(--text-secondary)'}}>{s}</span>
              </div>
            ))}
          </SectionHeader>
        )}

        {e.vulnerabilities?.length > 0 && (
          <SectionHeader title="Economic Vulnerabilities">
            {e.vulnerabilities.map((v,i) => (
              <div key={i} style={{display:'flex',gap:8,marginBottom:6,alignItems:'flex-start'}}>
                <span style={{color:'var(--high)',flexShrink:0}}>⚠</span>
                <span style={{fontSize:'0.87rem',color:'var(--text-secondary)'}}>{v}</span>
              </div>
            ))}
          </SectionHeader>
        )}

        {e.strategic_dependencies && mode !== 'Brief' && (
          <SectionHeader title="Strategic Dependencies" collapsible defaultOpen={false}>
            {Object.entries(e.strategic_dependencies).map(([k,v]) => (
              <InfoBlock key={k} label={k.toUpperCase()} value={v} />
            ))}
          </SectionHeader>
        )}

        {mode !== 'Brief' && Object.keys(rc).length > 0 && (
          <SectionHeader title="Resource & Climate" collapsible defaultOpen={false}>
            <InfoBlock label="Water Stress"          value={rc.water_stress} />
            <InfoBlock label="Food Security Score"   value={rc.food_security_score ? `${rc.food_security_score}/100` : null} />
            <InfoBlock label="Climate Vulnerability" value={rc.climate_vulnerability_index ? `${rc.climate_vulnerability_index}/100` : null} />
            <InfoBlock label="Strategic Resources"   value={rc.strategic_resources} />
            {rc.water_rivals?.length > 0 && (
              <InfoBlock label="Water Rivals" value={rc.water_rivals.join('; ')} />
            )}
            {rc.climate_conflict_triggers?.length > 0 && (
              <div style={{marginTop:8}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'0.63rem',color:'var(--medium)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:6}}>Climate Conflict Triggers</div>
                {rc.climate_conflict_triggers.map((t,i) => (
                  <div key={i} style={{display:'flex',gap:8,marginBottom:5,alignItems:'flex-start'}}>
                    <span style={{color:'var(--medium)',flexShrink:0}}>◈</span>
                    <span style={{fontSize:'0.82rem',color:'var(--text-secondary)'}}>{t}</span>
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
