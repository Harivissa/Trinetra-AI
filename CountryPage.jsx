import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCountry } from '../hooks/useCountry'
import OverviewTab from '../components/country/OverviewTab'
import HistoryTab from '../components/country/HistoryTab'
import CrisesTab from '../components/country/CrisesTab'
import PoliticalTab from '../components/country/PoliticalTab'
import EconomyTab from '../components/country/EconomyTab'
import MilitaryTab from '../components/country/MilitaryTab'
import ForeignPolicyTab from '../components/country/ForeignPolicyTab'
import CurrentAffairsTab from '../components/country/CurrentAffairsTab'
import UPSCTab from '../components/country/UPSCTab'
import AZMemoryTab from '../components/country/AZMemoryTab'
import FlashpointsTab from '../components/country/FlashpointsTab'
import StrategicCultureTab from '../components/country/StrategicCultureTab'
import './CountryPage.css'

const TABS = [
  { id: 'overview',    label: 'Overview',         icon: '◎' },
  { id: 'history',     label: 'History',           icon: '⟳' },
  { id: 'crises',      label: 'Crises',            icon: '⚡' },
  { id: 'political',   label: 'Political',         icon: '⚖' },
  { id: 'economy',     label: 'Economy',           icon: '◈' },
  { id: 'military',    label: 'Military',          icon: '◆' },
  { id: 'foreign',     label: 'Foreign Policy',    icon: '⊕' },
  { id: 'current',     label: 'Current Affairs',   icon: '◉' },
  { id: 'upsc',        label: 'UPSC',              icon: '✦' },
  { id: 'az',          label: 'A–Z Memory',        icon: '▤' },
  { id: 'flashpoints', label: 'Flashpoints',       icon: '▲' },
  { id: 'strategic',   label: 'Strategic Culture', icon: '◬' },
]

const MODES = ['Brief', 'Full', 'Deep']

export default function CountryPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, loading, error } = useCountry(id)
  const [activeTab, setActiveTab] = useState('overview')
  const [mode, setMode] = useState('Full')

  if (loading) return <div className="loading">RETRIEVING INTELLIGENCE DOSSIER</div>
  if (error)   return <div className="loading" style={{color:'var(--critical)'}}>DOSSIER UNAVAILABLE — {error.message}</div>
  if (!data)   return null

  const meta = data.meta || {}

  return (
    <div className="country-page fade-in">
      {/* Header */}
      <div className="dossier-header">
        <button className="btn back-btn" onClick={() => navigate('/')}>← Atlas</button>
        <div className="dossier-identity">
          <span className="dossier-flag">{meta.flag}</span>
          <div>
            <h1 className="dossier-name">{meta.name?.toUpperCase()}</h1>
            <div className="dossier-meta mono">
              {meta.formal_name} · {meta.capital} · {meta.system}
            </div>
          </div>
        </div>
        <div className="mode-switcher">
          {MODES.map(m => (
            <button
              key={m}
              className={`btn mode-btn ${mode === m ? 'btn-primary' : ''}`}
              onClick={() => setMode(m)}
            >{m}</button>
          ))}
          <button
            className="btn compare-btn"
            onClick={() => navigate(`/compare?a=${id}`)}
          >Compare →</button>
        </div>
      </div>

      {/* Quick stats strip */}
      <div className="stats-strip">
        {[
          ['Population', meta.population],
          ['GDP', `$${meta.gdp_usd_trillion}T`],
          ['Region', meta.region],
          ['System', meta.system?.split(' ').slice(0,2).join(' ')],
        ].map(([k,v]) => v && (
          <div key={k} className="stat-item">
            <div className="stat-label">{k}</div>
            <div className="stat-value">{v}</div>
          </div>
        ))}
      </div>

      {/* Tab bar */}
      <div className="tab-bar">
        {TABS.map(t => (
          <button
            key={t.id}
            className={`tab-btn ${activeTab === t.id ? 'active' : ''}`}
            onClick={() => setActiveTab(t.id)}
          >
            <span className="tab-icon">{t.icon}</span>
            <span className="tab-label">{t.label}</span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="tab-content">
        {activeTab === 'overview'    && <OverviewTab data={data} mode={mode} />}
        {activeTab === 'history'     && <HistoryTab data={data} mode={mode} />}
        {activeTab === 'crises'      && <CrisesTab data={data} mode={mode} />}
        {activeTab === 'political'   && <PoliticalTab data={data} mode={mode} />}
        {activeTab === 'economy'     && <EconomyTab data={data} mode={mode} />}
        {activeTab === 'military'    && <MilitaryTab data={data} mode={mode} />}
        {activeTab === 'foreign'     && <ForeignPolicyTab data={data} mode={mode} />}
        {activeTab === 'current'     && <CurrentAffairsTab data={data} mode={mode} />}
        {activeTab === 'upsc'        && <UPSCTab data={data} mode={mode} />}
        {activeTab === 'az'          && <AZMemoryTab data={data} mode={mode} />}
        {activeTab === 'flashpoints' && <FlashpointsTab data={data} mode={mode} />}
        {activeTab === 'strategic'   && <StrategicCultureTab data={data} mode={mode} />}
      </div>
    </div>
  )
}
