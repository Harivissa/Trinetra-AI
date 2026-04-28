import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { api } from '../../utils/api'
import './Layout.css'

function getPref(k,fb){ try{const v=localStorage.getItem(k);return v===null?fb:v==='true'}catch{return fb} }
function getNumPref(k,fb){ try{const v=localStorage.getItem(k);return v===null?fb:parseFloat(v)}catch{return fb} }
function setPref(k,v){ try{localStorage.setItem(k,String(v))}catch{} }

export default function Layout({ children }) {
  const location = useLocation()
  const [songs, setSongs]             = useState([])
  const [currentSong, setCurrentSong] = useState(null)
  const [playing, setPlaying]         = useState(false)
  const [musicOn, setMusicOn]         = useState(()=>getPref('tr_layout_music',true))
  const [volume,  setVolume]          = useState(()=>getNumPref('tr_vol',0.6))
  const [showVol, setShowVol]         = useState(false)
  const audioRef = useRef(null)

  useEffect(()=>{ api.getSongs().then(d=>setSongs(d.songs||[])).catch(()=>{}) },[])

  useEffect(()=>{ if(audioRef.current) audioRef.current.volume=volume; setPref('tr_vol',volume) },[volume])

  useEffect(()=>{
    setPref('tr_layout_music',musicOn)
    if(!musicOn&&audioRef.current){audioRef.current.pause();setPlaying(false)}
  },[musicOn])

  const togglePlay=()=>{
    if(!audioRef.current||!musicOn) return
    if(playing){audioRef.current.pause();setPlaying(false)}
    else{audioRef.current.play().catch(()=>{});setPlaying(true)}
  }

  const playSong=(song)=>{
    if(!song||!musicOn) return
    setCurrentSong(song); setPlaying(true)
    setTimeout(()=>{if(audioRef.current){audioRef.current.volume=volume;audioRef.current.play().catch(()=>{})}},60)
  }

  /* Live clock */
  const [time,setTime]=useState('')
  useEffect(()=>{
    const tick=()=>setTime(new Date().toUTCString().replace(' GMT',' UTC'))
    tick(); const id=setInterval(tick,1000); return()=>clearInterval(id)
  },[])

  return (
    <div className="layout">
      <div className="bg-glow-tl" aria-hidden="true"/>
      <div className="bg-glow-br" aria-hidden="true"/>

      <nav className="topnav">
        <div className="topnav-left">
          <Link to="/" className="brand">
            <span className="brand-eye">◉</span>
            <span className="brand-name">TRINETRA</span>
            <span className="brand-sub">AI</span>
          </Link>
          <span className="nav-sep">|</span>
          <span className="nav-tagline mono">Country Intelligence Platform</span>
        </div>

        <div className="topnav-right">
          <Link to="/"       className={`nav-link ${location.pathname==='/'?'active':''}`}>Atlas</Link>
          <Link to="/compare" className={`nav-link ${location.pathname.startsWith('/compare')?'active':''}`}>Compare</Link>

          {/* Music toggle */}
          <button
            className={`btn music-onoff ${musicOn?'music-on':''}`}
            onClick={()=>setMusicOn(v=>!v)}
            title={musicOn?'Music ON':'Music OFF'}
          >
            <span className="music-dot"/>
            {musicOn?'♪ ON':'♪ OFF'}
          </button>

          {/* Player — only when music enabled and songs exist */}
          {musicOn&&songs.length>0&&(
            <div className="music-ctrl">
              <button className={`btn music-btn ${playing?'playing':''}`} onClick={togglePlay}>
                {playing?'⏸':'▶'}{currentSong&&<span className="track-name">{currentSong.replace('.mp3','')}</span>}
              </button>
              {songs.length>1&&(
                <select className="song-select" onChange={e=>playSong(e.target.value)} value={currentSong||''}>
                  <option value="">— track —</option>
                  {songs.map(s=><option key={s} value={s}>{s.replace('.mp3','')}</option>)}
                </select>
              )}
              <button className="btn vol-btn" onClick={()=>setShowVol(v=>!v)} title="Volume">
                {volume===0?'🔇':volume<0.4?'🔉':'🔊'}
              </button>
              {showVol&&(
                <div className="vol-pop">
                  <span className="vol-val mono">{Math.round(volume*100)}%</span>
                  <input type="range" className="vol-slider" min={0} max={1} step={0.05}
                    value={volume} onChange={e=>setVolume(parseFloat(e.target.value))}/>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {currentSong&&(
        <audio key={currentSong} ref={audioRef} src={`/api/music/${currentSong}`} loop
          onEnded={()=>setPlaying(false)}/>
      )}

      <div className="statusbar">
        <span className="mono">SYS:OPERATIONAL</span>
        <span className="mono">INTEL-GRADE: PHASE-1</span>
        <span className="mono">NATIONS: 20</span>
        <span className="mono">{time}</span>
      </div>

      <main className="main-content">{children}</main>
    </div>
  )
}
