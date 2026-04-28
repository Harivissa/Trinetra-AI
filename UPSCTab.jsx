import React, { useState } from 'react'
import SectionHeader from '../shared/SectionHeader'

export default function UPSCTab({ data, mode }) {
  const u = data.upsc_layer || {}
  const [drillIdx, setDrillIdx] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [drillMode, setDrillMode] = useState(false)
  const drill = u.quick_drill || []

  if (!Object.keys(u).length) return (
    <div className="loading" style={{color:'var(--text-dim)'}}>UPSC layer not yet available.</div>
  )

  return (
    <div className="fade-in">
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, alignItems:'start' }}>

        {/* Left */}
        <div>
          {u.mains_themes?.length > 0 && (
            <SectionHeader title="Mains Themes" subtitle="GS-II / GS-III / Essay Paper">
              {u.mains_themes.map((t,i) => (
                <div key={i} style={{display:'flex',gap:8,marginBottom:8,alignItems:'flex-start'}}>
                  <span style={{color:'var(--saffron)',flexShrink:0,fontFamily:'var(--font-mono)',fontSize:'0.75rem',marginTop:1}}>{String(i+1).padStart(2,'0')}</span>
                  <span style={{fontSize:'0.87rem',color:'var(--text-primary)',lineHeight:1.65}}>{t}</span>
                </div>
              ))}
            </SectionHeader>
          )}

          {u.keywords?.length > 0 && (
            <SectionHeader title="Keywords" subtitle="Must-use in answers">
              <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                {u.keywords.map((k,i) => (
                  <span key={i} style={{
                    fontFamily:'var(--font-mono)',fontSize:'0.72rem',
                    background:'var(--bg-elevated)', border:'1px solid var(--border-mid)',
                    color:'var(--text-code)', padding:'3px 8px', borderRadius:2
                  }}>{k}</span>
                ))}
              </div>
            </SectionHeader>
          )}

          {u.essay_theses?.length > 0 && (
            <SectionHeader title="Essay Thesis Bank" collapsible defaultOpen={false}>
              {u.essay_theses.map((t,i) => (
                <div key={i} style={{
                  background:'var(--bg-card)', border:'1px solid var(--border-mid)',
                  borderLeft:'2px solid var(--saffron)',
                  borderRadius:4, padding:12, marginBottom:8,
                  fontStyle:'italic', fontSize:'0.87rem',
                  color:'var(--text-secondary)', lineHeight:1.7
                }}>"{t}"</div>
              ))}
            </SectionHeader>
          )}
        </div>

        {/* Right */}
        <div>
          {u.interview_themes?.length > 0 && (
            <SectionHeader title="Interview Themes" subtitle="Board-level questions">
              {u.interview_themes.map((t,i) => (
                <div key={i} style={{
                  display:'flex', gap:10, marginBottom:8,
                  padding:'8px 12px', background:'var(--bg-card)',
                  border:'1px solid var(--border-dim)', borderRadius:4
                }}>
                  <span style={{color:'var(--saffron)',flexShrink:0}}>?</span>
                  <span style={{fontSize:'0.87rem',color:'var(--text-secondary)'}}>{t}</span>
                </div>
              ))}
            </SectionHeader>
          )}

          {u.previous_year_questions?.length > 0 && (
            <SectionHeader title="Previous Year Questions" collapsible defaultOpen={false}>
              {u.previous_year_questions.map((q,i) => (
                <div key={i} style={{
                  display:'flex',gap:8,marginBottom:8,
                  padding:'8px 12px', background:'var(--bg-elevated)',
                  border:'1px solid var(--border-dim)', borderRadius:4
                }}>
                  <span style={{color:'var(--medium)',flexShrink:0,fontFamily:'var(--font-mono)',fontSize:'0.7rem',marginTop:1}}>PYQ</span>
                  <span style={{fontSize:'0.85rem',color:'var(--text-secondary)'}}>{q}</span>
                </div>
              ))}
            </SectionHeader>
          )}
        </div>
      </div>

      {/* Quick Drill — full width */}
      {drill.length > 0 && (
        <div style={{marginTop:8}}>
          <SectionHeader title="Quick Drill Mode" subtitle="Tap to test yourself on core concepts">
            {!drillMode ? (
              <button className="btn btn-primary" onClick={() => { setDrillMode(true); setDrillIdx(0); setRevealed(false) }}>
                Start Drill ({drill.length} questions)
              </button>
            ) : (
              <div>
                {/* Progress */}
                <div style={{display:'flex',justifyContent:'space-between',marginBottom:12}}>
                  <span style={{fontFamily:'var(--font-mono)',fontSize:'0.7rem',color:'var(--text-dim)'}}>
                    Q {drillIdx + 1} of {drill.length}
                  </span>
                  <button className="btn" onClick={() => setDrillMode(false)} style={{padding:'2px 10px',fontSize:'0.7rem'}}>Exit</button>
                </div>
                <div style={{height:3,background:'var(--bg-elevated)',borderRadius:2,marginBottom:16,overflow:'hidden'}}>
                  <div style={{width:`${((drillIdx+1)/drill.length)*100}%`,height:'100%',background:'var(--saffron)',borderRadius:2}}/>
                </div>

                {/* Question card */}
                <div style={{
                  background:'var(--bg-elevated)', border:'1px solid var(--border-bright)',
                  borderRadius:6, padding:24, marginBottom:12, minHeight:120
                }}>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--saffron)',letterSpacing:'0.1em',marginBottom:12}}>QUESTION</div>
                  <p style={{fontSize:'1rem',color:'var(--text-primary)',lineHeight:1.6,fontWeight:600}}>
                    {drill[drillIdx]?.q}
                  </p>
                </div>

                {!revealed ? (
                  <button className="btn btn-primary" onClick={() => setRevealed(true)} style={{width:'100%',padding:'10px'}}>
                    Reveal Answer
                  </button>
                ) : (
                  <>
                    <div style={{
                      background:'rgba(52,199,89,0.06)', border:'1px solid rgba(52,199,89,0.25)',
                      borderRadius:6, padding:20, marginBottom:12
                    }}>
                      <div style={{fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'var(--low)',letterSpacing:'0.1em',marginBottom:8}}>ANSWER</div>
                      <p style={{fontSize:'0.9rem',color:'var(--text-primary)',lineHeight:1.7}}>{drill[drillIdx]?.a}</p>
                    </div>
                    <div style={{display:'flex',gap:8}}>
                      {drillIdx < drill.length - 1 ? (
                        <button className="btn btn-primary" style={{flex:1}} onClick={() => { setDrillIdx(i=>i+1); setRevealed(false) }}>
                          Next Question →
                        </button>
                      ) : (
                        <button className="btn" style={{flex:1}} onClick={() => { setDrillIdx(0); setRevealed(false) }}>
                          Restart Drill
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
            )}
          </SectionHeader>
        </div>
      )}
    </div>
  )
}
