import React from 'react'
import SectionHeader from '../shared/SectionHeader'
import InfoBlock from '../shared/InfoBlock'

export default function ForeignPolicyTab({ data, mode }) {
  const fp = data.foreign_policy || {}
  const al = fp.alliances || {}
  const kb = fp.key_bilateral || {}
  const pm = data.perception_model || {}

  return (
    <div className="fade-in" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, alignItems:'start' }}>
      <div>
        <SectionHeader title="Foreign Policy Doctrine">
          <InfoBlock label="Core Doctrine" value={fp.doctrine} />
          {fp.doctrine_timeline?.length > 0 && (
            <div style={{marginTop:12}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--text-dim)',letterSpacing:'0.1em',marginBottom:8}}>DOCTRINE EVOLUTION</div>
              {fp.doctrine_timeline.map((d,i) => (
                <div key={i} style={{display:'flex',gap:12,marginBottom:12,paddingBottom:12,borderBottom:'1px solid var(--border-dim)'}}>
                  <div style={{flexShrink:0,width:80,fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--saffron)',paddingTop:2}}>{d.era}</div>
                  <div>
                    <div style={{fontWeight:600,fontSize:'0.85rem',color:'var(--text-primary)',marginBottom:2}}>{d.label}</div>
                    <div style={{fontSize:'0.8rem',color:'var(--text-secondary)',lineHeight:1.6}}>{d.description}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </SectionHeader>

        <SectionHeader title="Alliance Architecture">
          {al.formal_allies?.length > 0 && (
            <div style={{marginBottom:12}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'0.63rem',color:'var(--low)',letterSpacing:'0.1em',marginBottom:5}}>FORMAL ALLIES</div>
              <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                {al.formal_allies.map((a,i) => <span key={i} className="tag tag-low">{a}</span>)}
              </div>
            </div>
          )}
          {al.formal_allies?.length === 0 && (
            <div style={{fontFamily:'var(--font-mono)',fontSize:'0.75rem',color:'var(--text-dim)',marginBottom:12}}>No formal treaty allies — strategic autonomy preserved.</div>
          )}
          {al.strategic_partners?.length > 0 && (
            <div style={{marginBottom:12}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'0.63rem',color:'var(--medium)',letterSpacing:'0.1em',marginBottom:5}}>STRATEGIC PARTNERS</div>
              <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                {al.strategic_partners.map((a,i) => <span key={i} className="tag tag-medium">{a}</span>)}
              </div>
            </div>
          )}
          {al.rivals?.length > 0 && (
            <div style={{marginBottom:12}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'0.63rem',color:'var(--critical)',letterSpacing:'0.1em',marginBottom:5}}>RIVALS</div>
              <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                {al.rivals.map((a,i) => <span key={i} className="tag tag-critical">{a}</span>)}
              </div>
            </div>
          )}
          {al.multilateral?.length > 0 && (
            <div>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'0.63rem',color:'var(--text-dim)',letterSpacing:'0.1em',marginBottom:5}}>MULTILATERAL</div>
              <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                {al.multilateral.map((a,i) => <span key={i} className="tag">{a}</span>)}
              </div>
            </div>
          )}
        </SectionHeader>
      </div>

      <div>
        {Object.keys(kb).length > 0 && (
          <SectionHeader title="Key Bilateral Relations">
            {Object.entries(kb).map(([country, analysis]) => (
              <div key={country} style={{marginBottom:12,paddingBottom:12,borderBottom:'1px solid var(--border-dim)'}}>
                <div style={{fontWeight:600,fontSize:'0.9rem',color:'var(--text-accent)',marginBottom:4}}>{country}</div>
                <p style={{fontSize:'0.83rem',color:'var(--text-secondary)',lineHeight:1.65}}>{analysis}</p>
              </div>
            ))}
          </SectionHeader>
        )}

        {mode !== 'Brief' && pm.rival_perceptions && (
          <SectionHeader title="Perception / Misperception Layer" collapsible defaultOpen={mode==='Deep'}>
            <InfoBlock label="Self-Image" value={pm.self_image} />
            {Object.entries(pm.rival_perceptions).map(([rival, rp]) => (
              <div key={rival} style={{
                background:'var(--bg-card)', border:'1px solid var(--border-dim)',
                borderRadius:4, padding:12, marginBottom:10
              }}>
                <div style={{fontWeight:600,fontSize:'0.88rem',color:'var(--saffron)',marginBottom:8}}>{rival}</div>
                <div style={{marginBottom:6}}>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:'0.62rem',color:'var(--text-dim)',marginBottom:2}}>HOW THIS NATION SEES {rival.toUpperCase()}</div>
                  <p style={{fontSize:'0.82rem',color:'var(--text-secondary)'}}>{Object.values(rp)[0]}</p>
                </div>
                {rp.asymmetry_risk && (
                  <div style={{display:'flex',gap:6,alignItems:'center',marginTop:8}}>
                    <span style={{fontFamily:'var(--font-mono)',fontSize:'0.62rem',color:'var(--text-dim)'}}>ASYMMETRY RISK:</span>
                    <span className={`tag tag-${rp.asymmetry_risk === 'high' ? 'critical' : rp.asymmetry_risk === 'medium' ? 'medium' : 'low'}`}>
                      {rp.asymmetry_risk?.toUpperCase()}
                    </span>
                  </div>
                )}
                {rp.misperception_type && (
                  <InfoBlock label="Misperception Type" value={rp.misperception_type} />
                )}
              </div>
            ))}
          </SectionHeader>
        )}
      </div>
    </div>
  )
}
