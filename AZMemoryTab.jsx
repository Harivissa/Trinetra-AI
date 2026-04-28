import React, { useState } from 'react'
import SectionHeader from '../shared/SectionHeader'

export default function AZMemoryTab({ data, mode }) {
  const az = data.az_memory || {}
  const [search, setSearch] = useState('')
  const letters = Object.keys(az).sort()
  const filtered = letters.filter(l =>
    search === '' ||
    l.toLowerCase().includes(search.toLowerCase()) ||
    az[l]?.toLowerCase().includes(search.toLowerCase())
  )

  if (!letters.length) return (
    <div className="loading" style={{color:'var(--text-dim)'}}>A–Z Memory not yet available.</div>
  )

  return (
    <div className="fade-in">
      <SectionHeader title="A–Z Nation Memory Grid"
        subtitle="26-dimension strategic intelligence framework — each letter is a lens, not a category">
        <input
          style={{
            width:'100%', maxWidth:340,
            background:'var(--bg-card)', border:'1px solid var(--border-mid)',
            color:'var(--text-primary)', fontFamily:'var(--font-ui)', fontSize:'0.88rem',
            padding:'8px 14px', borderRadius:2, outline:'none', marginBottom:20
          }}
          placeholder="Search memory..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:8 }}>
          {filtered.map(letter => (
            <div key={letter} style={{
              background:'var(--bg-card)', border:'1px solid var(--border-dim)',
              borderRadius:4, padding:12,
              display:'flex', gap:12, alignItems:'flex-start',
              transition:'border-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor='var(--border-mid)'}
            onMouseLeave={e => e.currentTarget.style.borderColor='var(--border-dim)'}
            >
              <div style={{
                fontFamily:'var(--font-display)', fontSize:'1.4rem',
                color:'var(--saffron)', flexShrink:0, lineHeight:1, width:24, textAlign:'center'
              }}>{letter}</div>
              <p style={{
                fontSize:'0.82rem', color:'var(--text-secondary)',
                lineHeight:1.65, margin:0
              }}>{az[letter]}</p>
            </div>
          ))}
        </div>
      </SectionHeader>
    </div>
  )
}
