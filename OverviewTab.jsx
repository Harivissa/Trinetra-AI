import React from 'react'
import SectionHeader from '../shared/SectionHeader'
import InfoBlock from '../shared/InfoBlock'
import ScoreBar from '../shared/ScoreBar'

export default function OverviewTab({ data, mode }) {
  const p  = data.national_profile || {}
  const m  = data.meta || {}
  const hm = data.historical_memory || {}
  const la = data.legitimacy_architecture || {}
  const ie = data.information_environment || {}
  const dp = data.diaspora_power || {}

  return (
    <div className="fade-in" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>

      {/* Left col */}
      <div>
        <SectionHeader title="National Profile">
          <InfoBlock label="Formal Name"    value={m.formal_name} />
          <InfoBlock label="Capital"        value={p.capital_detail || m.capital} />
          <InfoBlock label="Population"     value={m.population} />
          <InfoBlock label="System"         value={m.system} />
          <InfoBlock label="Head of State"  value={p.head_of_state} />
          <InfoBlock label="Head of Govt"   value={p.head_of_government} />
          <InfoBlock label="Legislature"    value={p.legislature} />
          <InfoBlock label="Judiciary"      value={p.judiciary} />
          <InfoBlock label="Election System" value={p.election_system} />
          {p.official_languages && (
            <InfoBlock label="Languages" value={Array.isArray(p.official_languages) ? p.official_languages.join(', ') : p.official_language} />
          )}
          <InfoBlock label="Religion" value={p.religion_composition} />
        </SectionHeader>

        {mode !== 'Brief' && (
          <SectionHeader title="Legitimacy Architecture" collapsible defaultOpen={mode==='Deep'}>
            <InfoBlock label="Primary Basis"     value={la.primary_basis} />
            <InfoBlock label="Secondary Basis"   value={la.secondary_basis} />
            <InfoBlock label="Current Estimate"  value={la.current_legitimacy_estimate ? `${la.current_legitimacy_estimate}/100` : null} />
            <InfoBlock label="Legitimacy Floor"  value={la.legitimacy_floor ? `${la.legitimacy_floor}/100 — below this threshold, diversionary war risk rises` : null} />
            <InfoBlock label="War Threshold"     value={la.war_legitimacy_threshold} />
            {la.legitimacy_threats?.length > 0 && (
              <div>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--text-dim)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:6}}>Legitimacy Threats</div>
                {la.legitimacy_threats.map((t,i) => (
                  <div key={i} style={{display:'flex',alignItems:'flex-start',gap:8,marginBottom:4}}>
                    <span style={{color:'var(--high)',marginTop:2}}>▸</span>
                    <span style={{fontSize:'0.88rem',color:'var(--text-secondary)'}}>{t}</span>
                  </div>
                ))}
              </div>
            )}
            {la.current_legitimacy_estimate && (
              <div style={{marginTop:12}}>
                <ScoreBar label="Legitimacy Score" value={la.current_legitimacy_estimate} color="var(--saffron)" />
              </div>
            )}
          </SectionHeader>
        )}
      </div>

      {/* Right col */}
      <div>
        <SectionHeader title="Strategic Identity">
          <InfoBlock label="Overview" value={p.overview} />
          {hm.strategic_culture_summary && (
            <div style={{marginTop:12, background:'var(--bg-elevated)', border:'1px solid var(--border-mid)', borderRadius:4, padding:14}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--saffron-dim)',letterSpacing:'0.1em',marginBottom:6}}>STRATEGIC CULTURE SUMMARY</div>
              <p style={{fontSize:'0.88rem',color:'var(--text-secondary)',fontStyle:'italic'}}>{hm.strategic_culture_summary}</p>
            </div>
          )}
        </SectionHeader>

        {mode !== 'Brief' && (
          <>
            <SectionHeader title="Information Environment" collapsible defaultOpen={false}>
              <InfoBlock label="Media Freedom Index"  value={ie.media_freedom_index ? `${ie.media_freedom_index}/100` : null} />
              <InfoBlock label="State Media Reach"    value={ie.state_media_reach} />
              <InfoBlock label="Propaganda Capacity"  value={ie.propaganda_capacity} />
              <InfoBlock label="Strategic Implication" value={ie.strategic_implication} />
              {ie.internet_shutdown_history?.length > 0 && (
                <InfoBlock label="Shutdown History" value={ie.internet_shutdown_history.join('; ')} />
              )}
            </SectionHeader>

            <SectionHeader title="Diaspora Power" collapsible defaultOpen={false}>
              <InfoBlock label="Diaspora Size"       value={dp.size_estimate} />
              <InfoBlock label="Remittance Inflow"   value={dp.remittance_inflow_usd_bn ? `$${dp.remittance_inflow_usd_bn}B annually` : null} />
              <InfoBlock label="Weaponization"       value={dp.diaspora_weaponization} />
              {dp.key_concentrations?.length > 0 && (
                <InfoBlock label="Key Concentrations" value={dp.key_concentrations.join(' · ')} />
              )}
              {dp.soft_power_assets?.length > 0 && (
                <InfoBlock label="Soft Power Assets"  value={dp.soft_power_assets.join(', ')} />
              )}
            </SectionHeader>
          </>
        )}
      </div>
    </div>
  )
}
