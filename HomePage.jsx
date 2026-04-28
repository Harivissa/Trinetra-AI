import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCountries } from '../hooks/useCountry'
import { regionColor } from '../utils/helpers'
import './HomePage.css'

const REGIONS = ['All','East Asia','South Asia','Eurasia','Europe','Middle East','North America','Southeast Asia','South America']

const FLASHPOINTS = new Set(['india','china','pakistan','israel','iran','north_korea','ukraine','taiwan','russia','saudi_arabia'])

const MAP_COORDS = {
  united_states: {cx:155,cy:208}, china:{cx:718,cy:225}, russia:{cx:655,cy:145},
  india:{cx:648,cy:268}, japan:{cx:790,cy:218}, germany:{cx:498,cy:182},
  france:{cx:478,cy:196}, united_kingdom:{cx:462,cy:174}, pakistan:{cx:620,cy:248},
  israel:{cx:540,cy:242}, iran:{cx:578,cy:238}, saudi_arabia:{cx:558,cy:262},
  turkey:{cx:534,cy:220}, south_korea:{cx:772,cy:220}, north_korea:{cx:765,cy:208},
  ukraine:{cx:540,cy:192}, taiwan:{cx:758,cy:242}, italy:{cx:502,cy:208},
  brazil:{cx:268,cy:335}, indonesia:{cx:738,cy:316},
}

const COUNTRY_BGM = {
  india:'india',usa:'usa',china:'china',russia:'russia',japan:'japan',
  germany:'germany',france:'france',united_kingdom:'uk',pakistan:'pakistan',
  israel:'israel',iran:'iran',saudi_arabia:'saudi',turkey:'turkey',
  south_korea:'south_korea',north_korea:'north_korea',ukraine:'ukraine',
  taiwan:'taiwan',italy:'italy',brazil:'brazil',indonesia:'indonesia',
}

const FLAGS = {
  india:'🇮🇳',usa:'🇺🇸',china:'🇨🇳',russia:'🇷🇺',japan:'🇯🇵',germany:'🇩🇪',
  france:'🇫🇷',united_kingdom:'🇬🇧',pakistan:'🇵🇰',israel:'🇮🇱',iran:'🇮🇷',
  saudi_arabia:'🇸🇦',turkey:'🇹🇷',south_korea:'🇰🇷',north_korea:'🇰🇵',
  ukraine:'🇺🇦',taiwan:'🇹🇼',italy:'🇮🇹',brazil:'🇧🇷',indonesia:'🇮🇩',
}

/* localStorage helpers */
function getPref(k,fb){ try{const v=localStorage.getItem(k);return v===null?fb:v==='true'}catch{return fb} }
function setPref(k,v){ try{localStorage.setItem(k,String(v))}catch{} }

/* Cinematic overlay */
function CineOverlay({country}){
  const flag = FLAGS[country?.id] || '🌐'
  return (
    <div className="cine-overlay">
      <div className="cine-scan"/>
      <svg className="cine-ring" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="90" stroke="rgba(255,149,0,.5)" strokeWidth=".6" strokeDasharray="5 4"/>
        <circle cx="100" cy="100" r="74" stroke="rgba(255,149,0,.28)" strokeWidth=".5" strokeDasharray="2 8"/>
      </svg>
      <div className="cine-top">CLASSIFIED — NATIONAL INTELLIGENCE DOSSIER</div>
      <div className="cine-flag">{flag}</div>
      <div className="cine-name">{country?.name?.toUpperCase()}</div>
      <div className="cine-line"/>
      <div className="cine-tagline">"Ladies and gentlemen… you are not ready for this."</div>
      <div className="cine-init">Initializing {country?.name} National Intelligence Dossier</div>
    </div>
  )
}

/* SVG world map */
function WorldMap({countries}){
  const idMap = Object.fromEntries(countries.map(c=>[c.id,c]))
  const ready = countries.filter(c=>c.data_available).length
  return (
    <div className="map-section">
      <div className="map-header">
        <div className="map-header-left">
          <span className="map-icon">◉</span>
          <div>
            <div className="map-title-text">GLOBAL INTELLIGENCE COVERAGE MAP</div>
            <div className="map-sub-text">{ready}/{countries.length} NATIONS INDEXED</div>
          </div>
        </div>
        <div className="map-legend">
          <div className="legend-item"><span className="legend-dot ld-ready"/>INTEL READY</div>
          <div className="legend-item"><span className="legend-dot ld-soon"/>COMING SOON</div>
          <div className="legend-item"><span className="legend-dot ld-flash"/>FLASHPOINT</div>
        </div>
      </div>
      <div className="map-frame">
        <div className="map-corner mc-tl"/><div className="map-corner mc-tr"/>
        <div className="map-corner mc-bl"/><div className="map-corner mc-br"/>
        <div className="map-scanline"/>
        <div className="map-inner">
          <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" style={{background:'#050c16'}}>
            {/* Grid */}
            {[1,2,3,4].map(i=><line key={`h${i}`} x1="0" y1={i*100} x2="1000" y2={i*100} stroke="rgba(255,149,0,.03)" strokeWidth=".5"/>)}
            {[1,2,3,4,5,6,7,8,9].map(i=><line key={`v${i}`} x1={i*100} y1="0" x2={i*100} y2="500" stroke="rgba(255,149,0,.03)" strokeWidth=".5"/>)}
            <line x1="0" y1="250" x2="1000" y2="250" stroke="rgba(255,149,0,.08)" strokeWidth=".7" strokeDasharray="5 7"/>
            {/* Continents */}
            <path d="M55,115 L80,98 L125,93 L160,103 L180,88 L200,94 L218,118 L225,148 L220,178 L208,202 L218,222 L212,242 L196,252 L174,262 L162,272 L150,292 L133,312 L110,322 L90,312 L75,296 L65,276 L58,256 L48,232 L52,206 L58,175 L55,145 Z" fill="rgba(255,149,0,.06)" stroke="rgba(255,149,0,.13)" strokeWidth=".7"/>
            <path d="M192,308 L214,297 L238,302 L252,322 L258,348 L262,372 L256,398 L246,418 L230,432 L210,437 L194,422 L183,402 L178,376 L181,350 L188,327 Z" fill="rgba(255,149,0,.06)" stroke="rgba(255,149,0,.13)" strokeWidth=".7"/>
            <path d="M435,128 L462,118 L494,123 L514,130 L524,150 L518,167 L502,172 L490,187 L473,192 L458,187 L445,176 L437,162 Z" fill="rgba(255,149,0,.07)" stroke="rgba(255,149,0,.14)" strokeWidth=".7"/>
            <path d="M452,208 L480,203 L512,208 L533,224 L543,252 L548,282 L542,312 L531,342 L510,368 L490,382 L468,377 L453,360 L443,332 L438,302 L440,272 L446,247 L449,226 Z" fill="rgba(255,149,0,.06)" stroke="rgba(255,149,0,.13)" strokeWidth=".7"/>
            <path d="M528,208 L568,203 L598,208 L613,224 L608,246 L592,257 L566,262 L544,257 L530,242 L526,226 Z" fill="rgba(255,149,0,.06)" stroke="rgba(255,149,0,.12)" strokeWidth=".6"/>
            <path d="M498,98 L582,83 L662,78 L742,88 L793,98 L804,124 L772,140 L722,145 L662,150 L602,148 L552,145 L508,134 Z" fill="rgba(255,149,0,.06)" stroke="rgba(255,149,0,.12)" strokeWidth=".6"/>
            <path d="M598,208 L642,203 L672,213 L687,236 L682,262 L660,278 L633,274 L614,262 L604,242 Z" fill="rgba(255,149,0,.06)" stroke="rgba(255,149,0,.12)" strokeWidth=".6"/>
            <path d="M688,168 L742,158 L782,168 L797,194 L792,222 L762,232 L724,230 L698,217 L690,198 Z" fill="rgba(255,149,0,.07)" stroke="rgba(255,149,0,.13)" strokeWidth=".6"/>
            <path d="M708,292 L736,286 L762,293 L778,308 L768,324 L742,328 L714,320 L706,307 Z" fill="rgba(255,149,0,.05)" stroke="rgba(255,149,0,.1)" strokeWidth=".6"/>
            <path d="M758,352 L800,342 L842,348 L858,368 L854,394 L840,410 L812,416 L782,409 L762,391 L757,370 Z" fill="rgba(255,149,0,.05)" stroke="rgba(255,149,0,.1)" strokeWidth=".6"/>
            {/* Markers */}
            {countries.map(c=>{
              const coord=MAP_COORDS[c.id]; if(!coord) return null
              const isFP=FLASHPOINTS.has(c.id)
              const isReady=c.data_available
              const col=isReady?'#34c759':isFP?'#ff3b30':'#4a5568'
              const r=isReady?5.5:isFP?4.5:3.5
              const dur=isFP?'1.8s':'3.5s'
              return (
                <g key={c.id}>
                  {(isReady||isFP)&&(
                    <circle cx={coord.cx} cy={coord.cy} r={r+4} fill="none" stroke={col} strokeWidth=".7" opacity="0">
                      <animate attributeName="r" values={`${r+2};${r+12};${r+2}`} dur={dur} repeatCount="indefinite"/>
                      <animate attributeName="opacity" values=".5;0;.5" dur={dur} repeatCount="indefinite"/>
                    </circle>
                  )}
                  <circle cx={coord.cx} cy={coord.cy} r={r} fill={col} opacity={isReady?.95:isFP?.82:.4}/>
                  <text x={coord.cx} y={coord.cy-r-4} textAnchor="middle" fontSize="5.2"
                    fill={isReady||isFP?col:'#4a5568'} opacity={isReady?.82:isFP?.68:.35}
                    fontFamily="Share Tech Mono,monospace" letterSpacing=".3">
                    {c.name.split(' ')[0].toUpperCase().substring(0,6)}
                  </text>
                </g>
              )
            })}
            <text x="500" y="492" textAnchor="middle" fontSize="6" fill="rgba(255,149,0,.09)" fontFamily="Cinzel,serif" letterSpacing="3">
              TRINETRA AI · GEOPOLITICAL INTELLIGENCE PLATFORM
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}

/* Pref toggle button */
function PrefToggle({label,active,onToggle}){
  return(
    <button className={`pref-toggle ${active?'active':''}`} onClick={onToggle}>
      <span className="pref-dot"/>
      {label}
    </button>
  )
}

/* ══════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════ */
export default function HomePage(){
  const {countries,loading} = useCountries()
  const [filter,setFilter]  = useState('All')
  const [search,setSearch]  = useState('')
  const navigate = useNavigate()

  /* Preferences */
  const [introOn, setIntroOn] = useState(()=>getPref('tr_intro',true))
  const [musicOn, setMusicOn] = useState(()=>getPref('tr_music',true))
  const [cineOn,  setCineOn]  = useState(()=>getPref('tr_cine', true))

  /* Cinematic state */
  const [cineCountry, setCineCountry] = useState(null)
  const cineTimer = useRef(null)

  /* Audio refs */
  const introRef   = useRef(null)
  const bgmRef     = useRef(null)
  const introDone  = useRef(false)

  useEffect(()=>setPref('tr_intro',introOn),[introOn])
  useEffect(()=>setPref('tr_music',musicOn),[musicOn])
  useEffect(()=>setPref('tr_cine', cineOn), [cineOn])

  /* Stop BGM when music toggled off */
  useEffect(()=>{
    if(!musicOn && bgmRef.current){bgmRef.current.pause();bgmRef.current.src='';bgmRef.current=null}
  },[musicOn])

  /* Card click — wraps existing navigate() logic */
  const handleCardClick = useCallback((country)=>{
    /* Intro audio — once per session */
    if(introOn && !introDone.current){
      introDone.current=true
      const a=new Audio('/songs/intro.mp3')
      a.volume=.75
      a.play().catch(()=>{})
      introRef.current=a
    }

    /* Country BGM */
    if(musicOn){
      if(bgmRef.current){bgmRef.current.pause();bgmRef.current.src='';bgmRef.current=null}
      const file=COUNTRY_BGM[country.id]
      if(file){
        const a=new Audio(`/songs/${file}.mp3`)
        a.volume=.5; a.loop=true
        a.play().catch(()=>{})
        bgmRef.current=a
      }
    }

    /* Cinematic overlay → then navigate */
    if(cineOn){
      setCineCountry(country)
      clearTimeout(cineTimer.current)
      cineTimer.current=setTimeout(()=>{
        setCineCountry(null)
        navigate(`/country/${country.id}`)   /* ← original navigation preserved */
      },1900)
    } else {
      navigate(`/country/${country.id}`)     /* ← original navigation preserved */
    }
  },[introOn,musicOn,cineOn,navigate])

  useEffect(()=>()=>clearTimeout(cineTimer.current),[])

  const filtered=countries.filter(c=>{
    const rOk=filter==='All'||c.region===filter
    const sOk=c.name.toLowerCase().includes(search.toLowerCase())
    return rOk&&sOk
  })

  return(
    <div className="home fade-in">

      {/* Cinematic overlay */}
      {cineCountry&&<CineOverlay country={cineCountry}/>}

      {/* Background glows (defined in global.css as .bg-glow-tl/.bg-glow-br) */}
      <div className="bg-glow-tl" aria-hidden="true"/>
      <div className="bg-glow-br" aria-hidden="true"/>

      {/* Hero — structure unchanged */}
      <div className="hero">
        <span className="hero-glyph">◉</span>
        <h1 className="hero-title">TRINETRA AI</h1>
        <p className="hero-subtitle mono">Country Intelligence Platform — 20 Nations — Phase I</p>
        <p className="hero-desc">
          Intelligence-grade strategic analysis. Not "who is stronger?" —
          but how nations think, evolve, and behave.
        </p>
      </div>

      {/* Controls */}
      <div className="controls">
        <div className="controls-top">
          <input
            className="search-input"
            type="text"
            placeholder="Search nations..."
            value={search}
            onChange={e=>setSearch(e.target.value)}
          />
          <div className="pref-toggles">
            <PrefToggle label="INTRO"     active={introOn} onToggle={()=>setIntroOn(v=>!v)}/>
            <PrefToggle label="CINEMATIC" active={cineOn}  onToggle={()=>setCineOn(v=>!v)}/>
            <PrefToggle label="BGM"       active={musicOn} onToggle={()=>setMusicOn(v=>!v)}/>
          </div>
        </div>
        <div className="region-filters">
          {REGIONS.map(r=>(
            <button key={r} className={`btn region-btn ${filter===r?'btn-primary':''}`} onClick={()=>setFilter(r)}>{r}</button>
          ))}
        </div>
      </div>

      {/* Country Grid — logic unchanged, onClick wrapped with cinematic */}
      {loading?(
        <div className="loading">LOADING INTELLIGENCE DATABASE</div>
      ):(
        <div className="country-grid">
          {filtered.map((c,i)=>(
            <CountryCard
              key={c.id}
              country={c}
              index={i}
              onClick={()=>handleCardClick(c)}
            />
          ))}
        </div>
      )}

      {/* World map */}
      {!loading&&countries.length>0&&<WorldMap countries={countries}/>}

      {/* Phase 2 banner — unchanged */}
      <div className="phase2-banner">
        <span className="mono dim">PHASE 2 —</span>
        <span> Country Comparison &amp; Scenario Analysis </span>
        <button className="btn btn-primary" onClick={()=>navigate('/compare')}>
          Enter Comparison Engine →
        </button>
      </div>
    </div>
  )
}

/* CountryCard — visual enhancement only, onClick unchanged */
function CountryCard({country,index,onClick}){
  const isReady=country.data_available
  return(
    <div
      className={`country-card ${isReady?'intel-ready':'unavailable'}`}
      style={{animationDelay:`${index*28}ms`}}
      onClick={isReady?onClick:undefined}
    >
      <div className="card-top">
        <div className="card-flag">{country.flag}</div>
        <div className="card-status">
          {isReady
            ?<span className="tag tag-low">INTEL READY</span>
            :<span className="tag">COMING SOON</span>
          }
        </div>
      </div>
      <div className="card-body">
        <div className="card-name">{country.name}</div>
        <div className="card-region" style={{color:regionColor(country.region)}}>{country.region}</div>
        {isReady&&<div className="card-action">Open Dossier →</div>}
      </div>
    </div>
  )
}
