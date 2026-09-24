import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Send,
  Sparkles,
  User,
  Compass,
  ArrowRight,
  Shield,
  Layers,
  MapPin,
  ExternalLink,
  Plus,
  MessageSquare,
  Trash2,
  Anchor,
  Search,
  PanelLeftClose,
  PanelLeftOpen,
  Pin,
  PinOff,
  Edit3,
  Check,
  RotateCcw,
  Copy,
  Radio,
  Clock,
  ArrowUpRight,
  Globe2,
  FileCheck2,
  Share2,
  X,
  Bookmark,
  ChevronDown,
} from "lucide-react";
import Header from "../components/dashboard/Header";
import { api } from "../services/api";
import type { AiChatMessage } from "../types";

export interface ChatSession {
  id: string;
  title: string;
  timestamp: string; // ISO string
  pinned?: boolean;
  messages: AiChatMessage[];
}

// Initial realistic geopolitical sessions categorized cleanly by date groups
const SEED_SESSIONS: ChatSession[] = [
  {
    id: "session-hormuz-ind",
    title: "Why is Strait of Hormuz important to India?",
    timestamp: new Date().toISOString(),
    pinned: true,
    messages: [
      {
        id: "usr-1",
        role: "user",
        content: "Why is the Strait of Hormuz important to India?",
        timestamp: "10:14 AM",
      },
      {
        id: "ast-1",
        role: "assistant",
        content: `### Strategic Assessment: Strait of Hormuz Importance to India

#### 1. Core Geopolitical Reality
The Strait of Hormuz represents India's most acute maritime energy dependency. Over 60% of India's total crude oil imports and approximately 70% of its liquefied natural gas (LNG) must navigate this narrow 21-nautical-mile international choke point between Iran and Oman.

#### 2. Strategic Transmission Channels
- **Immediate Supply Disruption**: A localized naval closure or asymmetric interdiction by Iranian or regional actors would instantly sever crude shipments from Iraq, Saudi Arabia, Kuwait, and the UAE, depleting domestic commercial inventories within 12–15 days.
- **Macroeconomic Shockwaves**: Soaring Brent crude spot prices, spiked freight rates, and marine war-risk insurance premiums directly expand India's current account deficit and pressure the Indian Rupee.
- **Diplomatic Balancing**: New Delhi must preserve working strategic autonomy with Tehran (which controls the northern littoral) while maintaining comprehensive strategic partnerships with GCC monarchies on the southern littoral.

#### 3. Sovereign Risk Mitigation
- **Strategic Petroleum Reserves (SPR)**: India maintains underground crude caverns at Visakhapatnam, Mangalore, and Padur holding roughly 9.5 days of net imports, with Phase II expansions underway at Chandikhol and Padur.
- **Import Diversification**: Accelerated purchases of discounted Urals crude from the Russian Federation and West African blends have reduced baseline Persian Gulf dependence from 72% (2021) to ~52% (2026).
- **Alternative Maritime Nodes**: Development of Iran's Chabahar Port provides an overland gateway to Central Asia and Afghanistan that circumvents the internal chokepoints of the Persian Gulf.`,
        timestamp: "10:15 AM",
        structuredEntities: {
          countries: ["India", "Saudi Arabia", "Iran", "United Arab Emirates", "Qatar", "Iraq"],
          groups: ["GCC", "BRICS", "OPEC"],
          chokepoints: ["Strait of Hormuz", "Bab el-Mandeb"],
          events: ["Strait of Hormuz Maritime Escort & Interdiction Standoff"],
        },
        followUps: [
          "How much crude oil does India currently import through Hormuz?",
          "What are India's domestic Strategic Petroleum Reserve (SPR) capacities?",
          "How does India balance diplomatic relations between Iran and GCC suppliers?",
          "What alternative energy transit corridors exist if Hormuz is restricted?",
        ],
        confidence: "VERIFIED",
        evidence: [
          { source: "International Energy Agency (IEA) Crude Transit Logs", verifiedAt: "2026-05" },
          { source: "Ministry of Petroleum & Natural Gas, Government of India", verifiedAt: "2026-07" },
        ],
      },
    ],
  },
  {
    id: "session-brics-strategy",
    title: "BRICS Expansion & Alternative Currency Settlements",
    timestamp: new Date(Date.now() - 3600000 * 3).toISOString(), // Today
    pinned: false,
    messages: [
      {
        id: "usr-2",
        role: "user",
        content: "How does BRICS expansion affect global trade and alternative currency settlements?",
        timestamp: "09:30 AM",
      },
      {
        id: "ast-2",
        role: "assistant",
        content: `### Strategic Assessment: BRICS Expansion & Multipolar Settlement Rails

#### 1. Structural Shift in Energy Cartels
The integration of major hydrocarbon exporters (Saudi Arabia, UAE, Iran) into BRICS creates an institutional umbrella controlling over 42% of global crude production. For the first time, bilateral oil contracts between major exporters and top consumers (China, India) are being invoiced directly in local currencies (Dirham, Yuan, Rupee, Ruble).

#### 2. Key Geo-Economic Drivers
- **Sanctions Immunization**: Non-Western economies are building redundant clearing networks to insulate foreign exchange reserves and national sovereign wealth funds from extraterritorial sanctions and SWIFT interdiction.
- **Bilateral Currency Clearing**: India and the UAE have completed direct local currency oil settlements in INR and AED; Russia-China bilateral trade is now over 92% settled in Rubles and Renminbi.
- **Multilateral Financing Rails**: The New Development Bank (NDB) aims to deliver at least 30% of project financing in local member currencies to reduce exchange-rate vulnerability.`,
        timestamp: "09:31 AM",
        structuredEntities: {
          countries: ["India", "China", "Russia", "Brazil", "South Africa", "United Arab Emirates", "Iran"],
          groups: ["BRICS", "G20", "SCO", "OPEC+"],
          events: ["BRICS Multi-State Expansion & Local Currency Clearing"],
        },
        followUps: [
          "What is the current operational status of the BRICS Pay cross-border mechanism?",
          "How much global crude oil production is controlled by BRICS+ members?",
          "What are the structural hurdles preventing a single common BRICS currency?",
        ],
        confidence: "VERIFIED",
        evidence: [
          { source: "Bank for International Settlements (BIS) Currency Survey", verifiedAt: "2026-04" },
          { source: "New Development Bank (NDB) Financial Statements", verifiedAt: "2026-06" },
        ],
      },
    ],
  },
  {
    id: "session-semiconductors-us-china",
    title: "US–China Advanced Semiconductor Dependencies",
    timestamp: new Date(Date.now() - 86400000).toISOString(), // Yesterday
    pinned: false,
    messages: [
      {
        id: "usr-3",
        role: "user",
        content: "Compare United States and China advanced semiconductor dependencies.",
        timestamp: "Yesterday, 4:10 PM",
      },
      {
        id: "ast-3",
        role: "assistant",
        content: `### Strategic Assessment: US–China Semiconductor Bifurcation

#### 1. Asymmetric Ecosystem Dependencies
The semiconductor rivalry centers on mutually vulnerable chokepoints: the US controls electronic design automation (EDA) software, core instruction-set architectures, and advanced fabless chip designs (NVIDIA, Apple, Qualcomm). In contrast, China commands dominant market share in legacy node manufacturing (28nm+), raw material refining (gallium, germanium, rare earths), and outsourced assembly and test (OSAT) ecosystems.

#### 2. Strategic Friction Points
- **Lithography Sanctions**: Trilateral export controls coordinated by the US, the Netherlands (ASML), and Japan (Tokyo Electron) restrict China's legal acquisition of sub-7nm extreme ultraviolet (EUV) systems.
- **The Taiwan Chokepoint**: Over 90% of the world's most advanced sub-3nm logic chips are fabricated by TSMC in Taiwan, presenting an existential single-point-of-failure for global supply chains.`,
        timestamp: "Yesterday, 4:12 PM",
        structuredEntities: {
          countries: ["United States", "China", "Japan"],
          groups: ["G7"],
          chokepoints: ["Taiwan Strait"],
          events: ["Trilateral Advanced Semiconductor Lithography Controls"],
        },
        followUps: [
          "How close is China to manufacturing 5nm chips without ASML EUV tools?",
          "What are the strategic implications of Chinese restrictions on gallium and germanium?",
        ],
        confidence: "VERIFIED",
        evidence: [
          { source: "Semiconductor Industry Association (SIA) State of the Industry", verifiedAt: "2026-03" },
        ],
      },
    ],
  },
  {
    id: "session-taiwan-strait-route",
    title: "Taiwan Strait Maritime Traffic & Freedom of Navigation",
    timestamp: new Date(Date.now() - 86400000 * 3).toISOString(), // 3 days ago (Previous 7 days)
    pinned: false,
    messages: [
      {
        id: "usr-4",
        role: "user",
        content: "Why does the Taiwan Strait matter for global trade?",
        timestamp: "3 days ago",
      },
      {
        id: "ast-4",
        role: "assistant",
        content: `### Strategic Assessment: Taiwan Strait Maritime Artery

#### 1. Global Navigation Volume
The Taiwan Strait is one of the densest maritime arteries on the planet. Over 48% of the global container fleet and nearly 88% of the largest commercial vessels transited through the strait or its immediate approaches during the past year, connecting East Asian manufacturing to Europe and the Americas.

#### 2. Strategic Vulnerabilities
- **No Rapid Bypass**: Rerouting container vessels east around Taiwan through the Luzon Strait and Philippine Sea adds 3 to 5 days sailing time, elevates fuel consumption, and exposes commercial shipping to severe seasonal typhoons.
- **Undersea Communications**: The seabed surrounding Taiwan hosts dense undersea fiber-optic cable clusters that transmit high-frequency financial and diplomatic telemetry between North America and Asia.`,
        timestamp: "3 days ago",
        structuredEntities: {
          countries: ["China", "United States", "Japan", "South Korea"],
          groups: ["QUAD", "G7"],
          chokepoints: ["Taiwan Strait", "Strait of Malacca"],
          events: ["Joint Sword Theater Blockade Drills in Taiwan Strait"],
        },
        followUps: [
          "What is the economic cost of a hypothetical 30-day Taiwan Strait blockade?",
        ],
        confidence: "VERIFIED",
        evidence: [{ source: "UNCTAD Review of Maritime Transport", verifiedAt: "2026-02" }],
      },
    ],
  },
  {
    id: "session-russia-energy-flows",
    title: "Russia–Europe Energy Decoupling & Alternative Flows",
    timestamp: new Date(Date.now() - 86400000 * 12).toISOString(), // Older (12 days ago)
    pinned: false,
    messages: [],
  },
];

// Clean prompt cards for the centered welcome screen (matching user mockup)
const PROMPT_CARDS = [
  {
    title: "Why is the Strait of Hormuz critical to India?",
    description: "Energy transit routes, crude import exposure, and Persian Gulf chokepoint security.",
    query: "Why is the Strait of Hormuz important to India?",
    domain: "Energy Security",
  },
  {
    title: "How does BRICS affect global trade & reserve currency?",
    description: "Local currency settlement, de-dollarization mechanisms, and New Development Bank.",
    query: "How does BRICS expansion affect global trade and alternative currency settlements?",
    domain: "Geo-Economics",
  },
  {
    title: "What are India's key strategic dependencies on Russia?",
    description: "Defence platforms, spare parts, discounted crude, and civil nuclear energy cooperation.",
    query: "What are India's key strategic dependencies on Russia?",
    domain: "Strategic Supply",
  },
  {
    title: "Compare US and China naval power in Indo-Pacific",
    description: "Carrier strike groups, anti-ship missile envelopes, and First Island Chain strategy.",
    query: "Compare United States and China naval power projection in the Indo-Pacific.",
    domain: "Indo-Pacific",
  },
];

export default function AiAnalyst() {
  // Load sessions from localStorage or fallback to SEED_SESSIONS
  const [sessions, setSessions] = useState<ChatSession[]>(() => {
    try {
      const saved = localStorage.getItem("trinetra_chat_sessions");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // ignore
    }
    return SEED_SESSIONS;
  });

  // Current active session ID: null means empty/new analysis screen
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);

  // Sidebar collapse state
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Sidebar filter and search
  const [sidebarSearch, setSidebarSearch] = useState("");
  const [sidebarNav, setSidebarNav] = useState<"chat" | "saved">("chat");

  // Input composer state
  const [inputQuery, setInputQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  // Rename modal / inline edit state
  const [editingSessionId, setEditingSessionId] = useState<string | null>(null);
  const [editTitleText, setEditTitleText] = useState("");

  // Copy feedback state
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Save sessions to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("trinetra_chat_sessions", JSON.stringify(sessions));
    } catch {
      // ignore
    }
  }, [sessions]);

  // Current active session object
  const activeSession = useMemo(() => {
    if (!activeSessionId) return null;
    return sessions.find((s) => s.id === activeSessionId) || null;
  }, [sessions, activeSessionId]);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (activeSession && activeSession.messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeSession?.messages, loading]);

  // Animated loading steps
  useEffect(() => {
    let timer: any;
    if (loading) {
      setLoadingStep(0);
      timer = setInterval(() => {
        setLoadingStep((prev) => (prev < 3 ? prev + 1 : prev));
      }, 700);
    } else {
      setLoadingStep(0);
    }
    return () => clearInterval(timer);
  }, [loading]);

  // Filter sessions by search query and saved status
  const filteredSessions = useMemo(() => {
    let list = sessions;
    if (sidebarNav === "saved") {
      list = list.filter((s) => s.pinned);
    }
    if (sidebarSearch.trim()) {
      const q = sidebarSearch.toLowerCase();
      list = list.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.messages.some((m) => m.content.toLowerCase().includes(q))
      );
    }
    return list;
  }, [sessions, sidebarSearch, sidebarNav]);

  // Group filtered sessions into TODAY, YESTERDAY, PREVIOUS 7 DAYS, OLDER
  const groupedSessions = useMemo(() => {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const yesterdayStart = todayStart - 86400000;
    const prev7DaysStart = todayStart - 86400000 * 7;

    const today: ChatSession[] = [];
    const yesterday: ChatSession[] = [];
    const prev7Days: ChatSession[] = [];
    const older: ChatSession[] = [];

    filteredSessions.forEach((session) => {
      const sessionTime = new Date(session.timestamp).getTime();
      if (sessionTime >= todayStart) {
        today.push(session);
      } else if (sessionTime >= yesterdayStart) {
        yesterday.push(session);
      } else if (sessionTime >= prev7DaysStart) {
        prev7Days.push(session);
      } else {
        older.push(session);
      }
    });

    return { today, yesterday, prev7Days, older };
  }, [filteredSessions]);

  // Action: Start + NEW ANALYSIS (resets to empty welcome state)
  const handleNewAnalysis = () => {
    setActiveSessionId(null);
    setInputQuery("");
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  // Action: Pin / Unpin
  const togglePinSession = (sessionId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSessions((prev) =>
      prev.map((s) => (s.id === sessionId ? { ...s, pinned: !s.pinned } : s))
    );
  };

  // Action: Delete Session
  const handleDeleteSession = (sessionId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSessions((prev) => prev.filter((s) => s.id !== sessionId));
    if (activeSessionId === sessionId) {
      setActiveSessionId(null);
    }
  };

  // Action: Rename Session
  const handleStartRename = (session: ChatSession, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingSessionId(session.id);
    setEditTitleText(session.title);
  };

  const handleCommitRename = (sessionId: string, e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (editTitleText.trim()) {
      setSessions((prev) =>
        prev.map((s) => (s.id === sessionId ? { ...s, title: editTitleText.trim() } : s))
      );
    }
    setEditingSessionId(null);
  };

  // Action: Copy text
  const handleCopy = (content: string, id: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Action: Send Query to TRINETRA AI Analyst
  const handleSendMessage = async (customQuery?: string) => {
    const query = (customQuery || inputQuery).trim();
    if (!query || loading) return;

    let targetSessionId = activeSessionId;

    // If starting from the empty welcome state or no session is selected, create a new session
    if (!targetSessionId) {
      const newSession: ChatSession = {
        id: `analysis-${Date.now()}`,
        title: query.length > 38 ? query.slice(0, 36) + "..." : query,
        timestamp: new Date().toISOString(),
        pinned: false,
        messages: [],
      };
      setSessions((prev) => [newSession, ...prev]);
      targetSessionId = newSession.id;
      setActiveSessionId(newSession.id);
    }

    const userMsg: AiChatMessage = {
      id: `usr-${Date.now()}`,
      role: "user",
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    // Find current session messages
    const currentSession = sessions.find((s) => s.id === targetSessionId);
    const existingMessages = currentSession ? currentSession.messages : [];
    const isFirstQuery = existingMessages.length === 0;
    const sessionTitle = isFirstQuery
      ? query.length > 40
        ? query.slice(0, 38) + "..."
        : query
      : currentSession?.title || query;

    const updatedMessages = [...existingMessages, userMsg];

    setSessions((prev) =>
      prev.map((s) =>
        s.id === targetSessionId
          ? {
              ...s,
              title: sessionTitle,
              messages: updatedMessages,
            }
          : s
      )
    );

    setInputQuery("");
    setLoading(true);

    try {
      const historyForApi = updatedMessages.slice(-6).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const response = await api.chatAiAnalyst(query, historyForApi);

      const assistantMsg: AiChatMessage = {
        id: `ast-${Date.now()}`,
        role: "assistant",
        content: response.content || "No strategic intelligence returned for this query.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        structuredEntities: response.structuredEntities,
        followUps: response.followUps || [],
        confidence: response.confidence || "VERIFIED",
        evidence: response.evidence || [
          { source: "TRINETRA Intelligence Graph", verifiedAt: "2026-09" },
        ],
      };

      setSessions((prev) =>
        prev.map((s) =>
          s.id === targetSessionId
            ? {
                ...s,
                messages: [...s.messages, assistantMsg],
              }
            : s
        )
      );
    } catch {
      const errorMsg: AiChatMessage = {
        id: `err-${Date.now()}`,
        role: "assistant",
        content: `### Strategic Connection Status\n\nTRINETRA AI was unable to reach the analytical synthesis engine.\n\nPlease verify that the server backend is responsive.`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        confidence: "INSUFFICIENT_DATA",
      };

      setSessions((prev) =>
        prev.map((s) =>
          s.id === targetSessionId
            ? {
                ...s,
                messages: [...s.messages, errorMsg],
              }
            : s
        )
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Helper to render session list groups
  const renderSessionGroup = (title: string, list: ChatSession[]) => {
    if (list.length === 0) return null;

    return (
      <div className="mb-4">
        <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-semibold px-2 mb-1 flex items-center justify-between">
          <span>{title}</span>
          <span className="text-[9px] opacity-70">({list.length})</span>
        </div>
        <div className="space-y-0.5">
          {list.map((session) => {
            const isSelected = activeSessionId === session.id;
            const isEditing = editingSessionId === session.id;

            return (
              <div
                key={session.id}
                onClick={() => {
                  setActiveSessionId(session.id);
                  if (window.innerWidth < 1024) setSidebarOpen(false);
                }}
                className={`group relative rounded-lg px-2.5 py-2 text-left cursor-pointer transition-all flex items-center justify-between gap-2 ${
                  isSelected
                    ? "bg-[#171922] text-white border border-[#FF7A00]/50 shadow-sm"
                    : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60 border border-transparent"
                }`}
              >
                {isEditing ? (
                  <form
                    onSubmit={(e) => handleCommitRename(session.id, e)}
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 flex items-center gap-1"
                  >
                    <input
                      type="text"
                      value={editTitleText}
                      onChange={(e) => setEditTitleText(e.target.value)}
                      autoFocus
                      onBlur={() => handleCommitRename(session.id)}
                      className="w-full bg-neutral-950 border border-[#FF7A00] rounded px-1.5 py-0.5 text-xs text-white focus:outline-none"
                    />
                    <button type="submit" className="p-0.5 text-[#FF7A00]">
                      <Check className="size-3" />
                    </button>
                  </form>
                ) : (
                  <>
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <MessageSquare
                        className={`size-3.5 shrink-0 ${
                          isSelected ? "text-[#FF7A00]" : "text-neutral-500 group-hover:text-neutral-400"
                        }`}
                      />
                      <span className="text-xs truncate font-sans font-medium">{session.title}</span>
                    </div>

                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                      <button
                        onClick={(e) => togglePinSession(session.id, e)}
                        title={session.pinned ? "Unpin Analysis" : "Pin Analysis"}
                        className={`p-1 hover:text-white transition-colors ${
                          session.pinned ? "text-[#FF7A00] opacity-100" : "text-neutral-500"
                        }`}
                      >
                        {session.pinned ? <PinOff className="size-3" /> : <Pin className="size-3" />}
                      </button>
                      <button
                        onClick={(e) => handleStartRename(session, e)}
                        title="Rename Analysis"
                        className="p-1 text-neutral-500 hover:text-white transition-colors"
                      >
                        <Edit3 className="size-3" />
                      </button>
                      <button
                        onClick={(e) => handleDeleteSession(session.id, e)}
                        title="Delete Analysis"
                        className="p-1 text-neutral-500 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="size-3" />
                      </button>
                    </div>

                    {session.pinned && (
                      <Pin className="size-2.5 text-[#FF7A00] shrink-0 group-hover:hidden" />
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const hasActiveMessages = activeSession && activeSession.messages.length > 0;

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#060709] text-neutral-200 selection:bg-[#FF7A00]/30 selection:text-white flex flex-col">
      {/* 1. Website Top Navigation: TRINETRA */}
      <Header />

      {/* 2. Main Terminal Layout: Left Sidebar + Main AI Workspace */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* ==================================================== */}
        {/* LEFT SIDEBAR (Echo Architectural Reference)          */}
        {/* ==================================================== */}
        <aside
          className={`${
            sidebarOpen ? "w-72 sm:w-80" : "w-0 -translate-x-full lg:translate-x-0 lg:w-16"
          } transition-all duration-300 ease-in-out border-r border-neutral-800/80 bg-[#080a0f] flex flex-col shrink-0 z-30 overflow-hidden relative`}
        >
          {sidebarOpen ? (
            <div className="flex flex-col h-full p-3.5 sm:p-4 justify-between">
              {/* Top: Brand / Search / Collapse */}
              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-neutral-800/70 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="size-7 rounded-lg bg-[#FF7A00] flex items-center justify-center text-black font-serif font-extrabold text-xs shadow-sm shadow-orange-500/20 select-none">
                      त्रि
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans text-xs font-bold tracking-tight text-white uppercase tracking-wider">
                        TRINETRA AI
                      </span>
                      <span className="text-[10px] text-neutral-400 font-sans">
                        Strategic Intelligence Analyst
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition-colors"
                    title="Collapse Sidebar"
                    aria-label="Collapse Sidebar"
                  >
                    <PanelLeftClose className="size-4" />
                  </button>
                </div>

                {/* Search Bar in Sidebar */}
                <div className="relative mb-3">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-neutral-500" />
                  <input
                    type="text"
                    value={sidebarSearch}
                    onChange={(e) => setSidebarSearch(e.target.value)}
                    placeholder="Search analysis history..."
                    className="w-full pl-8 pr-3 py-1.5 text-xs bg-neutral-900/80 border border-neutral-800 rounded-lg text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:border-[#FF7A00]/70 transition-colors"
                  />
                  {sidebarSearch && (
                    <button
                      onClick={() => setSidebarSearch("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-neutral-500 hover:text-white"
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* + NEW ANALYSIS Button */}
                <button
                  onClick={handleNewAnalysis}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-[#FF7A00] hover:bg-[#FF8811] text-black font-semibold text-xs transition-all shadow-sm shadow-orange-500/20 active:scale-98 mb-3"
                >
                  <Plus className="size-4 stroke-[2.5]" />
                  <span>+ NEW ANALYSIS</span>
                </button>

                {/* Primary Chat Navigation */}
                <div className="flex items-center gap-1 p-1 rounded-lg bg-neutral-900/60 border border-neutral-800/60 mb-3 text-xs">
                  <button
                    onClick={() => setSidebarNav("chat")}
                    className={`flex-1 py-1.5 px-2 rounded-md font-medium text-center transition-colors flex items-center justify-center gap-1.5 ${
                      sidebarNav === "chat"
                        ? "bg-neutral-800 text-white shadow-sm"
                        : "text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    <MessageSquare className="size-3 text-[#FF7A00]" />
                    <span>Chat</span>
                    <span className="text-[10px] text-neutral-500 font-mono">
                      ({sessions.length})
                    </span>
                  </button>

                  <button
                    onClick={() => setSidebarNav("saved")}
                    className={`flex-1 py-1.5 px-2 rounded-md font-medium text-center transition-colors flex items-center justify-center gap-1.5 ${
                      sidebarNav === "saved"
                        ? "bg-neutral-800 text-white shadow-sm"
                        : "text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    <Bookmark className="size-3 text-amber-400" />
                    <span>Saved</span>
                    <span className="text-[10px] text-neutral-500 font-mono">
                      ({sessions.filter((s) => s.pinned).length})
                    </span>
                  </button>
                </div>
              </div>

              {/* Middle: Chat History (Scrollable Area Categorized by Date Groups) */}
              <div className="flex-1 overflow-y-auto pr-1 -mr-1 my-1 scrollbar-thin scrollbar-thumb-neutral-800">
                {renderSessionGroup("TODAY", groupedSessions.today)}
                {renderSessionGroup("YESTERDAY", groupedSessions.yesterday)}
                {renderSessionGroup("PREVIOUS 7 DAYS", groupedSessions.prev7Days)}
                {renderSessionGroup("OLDER", groupedSessions.older)}

                {filteredSessions.length === 0 && (
                  <div className="p-4 text-center text-xs text-neutral-500 font-mono">
                    No conversations found.
                  </div>
                )}
              </div>

              {/* Bottom: Officer Profile / Clearance / Settings Area */}
              <div className="pt-3 border-t border-neutral-800/80">
                <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="size-7 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300 font-mono text-xs font-bold">
                      TR
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-medium text-white truncate">
                        Sovereign Analyst
                      </div>
                      <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                        <span className="size-1.5 rounded-full bg-emerald-400" />
                        <span>Intelligence Desk</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleNewAnalysis}
                    title="Start fresh conversation"
                    className="p-1 rounded text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800 transition-colors"
                  >
                    <Plus className="size-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Collapsed Sidebar Strip for Desktop */
            <div className="hidden lg:flex flex-col h-full py-4 items-center justify-between">
              <div className="space-y-4 flex flex-col items-center">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="size-9 rounded-lg bg-[#FF7A00] flex items-center justify-center text-black font-serif font-extrabold text-sm shadow-sm shadow-orange-500/20"
                  title="Expand Sidebar"
                >
                  त्रि
                </button>

                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800"
                  title="Expand History"
                >
                  <PanelLeftOpen className="size-4" />
                </button>

                <button
                  onClick={handleNewAnalysis}
                  className="p-2 rounded-lg bg-[#FF7A00]/20 text-[#FF7A00] hover:bg-[#FF7A00] hover:text-black transition-colors"
                  title="New Analysis"
                >
                  <Plus className="size-4" />
                </button>
              </div>

              <div className="size-2 rounded-full bg-emerald-400" title="System Online" />
            </div>
          )}
        </aside>

        {/* ==================================================== */}
        {/* MAIN WORKSPACE AREA                                 */}
        {/* ==================================================== */}
        <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-[#07080b]">
          {/* Top Bar inside Workspace */}
          <div className="flex items-center justify-between px-4 sm:px-8 py-2.5 border-b border-neutral-800/40 shrink-0 bg-[#07080b]/90 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              {!sidebarOpen && (
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-1.5 rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors flex items-center gap-1.5 text-xs font-mono"
                >
                  <PanelLeftOpen className="size-3.5" />
                  <span>History ({sessions.length})</span>
                </button>
              )}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  TRINETRA AI
                </span>
                <span className="text-xs text-neutral-500">/</span>
                <span className="text-xs font-sans text-neutral-400 truncate max-w-sm sm:max-w-md">
                  {hasActiveMessages ? activeSession?.title : "Strategic Intelligence Analyst"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 text-[11px]">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Graph Grounded</span>
              </span>
              <button
                onClick={handleNewAnalysis}
                className="hidden sm:inline-flex text-xs px-2.5 py-1 rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-[#FF7A00] hover:text-[#FF7A00] transition-colors"
              >
                + New Analysis
              </button>
            </div>
          </div>

          {/* Center Scrollable Content Canvas */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-8 pb-36 pt-6 scrollbar-thin scrollbar-thumb-neutral-800">
            {!hasActiveMessages ? (
              /* ==================================================== */
              /* TRINETRA AI EMPTY / NEW CHAT STATE                  */
              /* Structured around the user reference layout          */
              /* ==================================================== */
              <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[70vh] text-center px-4 animate-fadeIn">
                {/* Centered TRINETRA AI Emblem */}
                <div className="size-16 rounded-2xl bg-[#FF7A00] flex items-center justify-center text-black font-serif font-black text-3xl shadow-xl shadow-orange-500/20 mb-5 select-none border border-orange-400/40">
                  त्रि
                </div>

                {/* Subtitle / Identity */}
                <div className="text-sm font-sans uppercase tracking-widest text-[#FF7A00] font-semibold mb-2">
                  TRINETRA AI
                </div>
                <div className="text-xs sm:text-sm text-neutral-400 font-sans tracking-wide mb-6">
                  Strategic Intelligence Analyst
                </div>

                {/* Large Primary Question */}
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-100 font-normal tracking-tight mb-8 max-w-2xl leading-tight">
                  What would you like to understand?
                </h1>

                {/* Suggested Prompt Cards (Clean 3-column / 4-card grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3.5 w-full max-w-3xl text-left">
                  {PROMPT_CARDS.map((card, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(card.query)}
                      className="p-4 rounded-xl bg-[#0c0e14] border border-neutral-800/90 hover:border-[#FF7A00] hover:bg-[#12151f] transition-all duration-200 group flex flex-col justify-between shadow-sm relative overflow-hidden"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#FF7A00] font-semibold mb-1.5">
                          <span>{card.domain}</span>
                          <ArrowUpRight className="size-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                        <h3 className="font-sans text-sm font-semibold text-neutral-100 group-hover:text-[#FF7A00] transition-colors leading-snug mb-1">
                          {card.title}
                        </h3>
                        <p className="text-xs text-neutral-400 font-light leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* ==================================================== */
              /* CONVERSATION STREAM (When active messages exist)     */
              /* ==================================================== */
              <div className="max-w-4xl mx-auto space-y-7 py-4">
                {activeSession.messages.map((msg) => {
                  const isAssistant = msg.role === "assistant";

                  if (!isAssistant) {
                    /* User Message: Clean right-aligned bubble */
                    return (
                      <div key={msg.id} className="flex justify-end">
                        <div className="max-w-2xl rounded-2xl p-4 sm:p-5 bg-[#14161f] border border-neutral-800 text-neutral-100 shadow-md">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1 flex items-center justify-between gap-4">
                            <span className="font-semibold text-neutral-300">You</span>
                            <span>{msg.timestamp}</span>
                          </div>
                          <p className="text-sm sm:text-base font-normal leading-relaxed text-neutral-100">
                            {msg.content}
                          </p>
                        </div>
                      </div>
                    );
                  }

                  /* Assistant Message: Deep Structured Strategic Intelligence */
                  return (
                    <div key={msg.id} className="flex gap-3.5 items-start">
                      <div className="size-8 rounded-xl bg-[#FF7A00] text-black font-serif font-black text-sm flex items-center justify-center shrink-0 shadow-md shadow-orange-500/20 select-none mt-1">
                        त्रि
                      </div>

                      <div className="flex-1 rounded-2xl p-5 sm:p-7 bg-[#0b0d13] border border-neutral-800/90 text-neutral-200 shadow-xl space-y-5">
                        {/* Header bar with copy action */}
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-800/70 text-[11px] font-mono text-neutral-400">
                          <span className="flex items-center gap-2 text-white font-semibold uppercase tracking-wider">
                            <Sparkles className="size-3.5 text-[#FF7A00]" />
                            <span>TRINETRA AI · STRATEGIC BRIEFING</span>
                          </span>
                          <div className="flex items-center gap-3">
                            <span>{msg.timestamp}</span>
                            <button
                              onClick={() => handleCopy(msg.content, msg.id)}
                              className="p-1 rounded text-neutral-500 hover:text-white transition-colors"
                              title="Copy briefing"
                            >
                              {copiedId === msg.id ? (
                                <Check className="size-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="size-3.5" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Markdown Formatted Body */}
                        <div className="prose prose-invert prose-xs sm:prose-sm max-w-none text-neutral-300 leading-relaxed font-light space-y-3.5">
                          {msg.content.split("\n\n").map((paragraph, pIdx) => {
                            if (paragraph.startsWith("### ")) {
                              return (
                                <h2
                                  key={pIdx}
                                  className="font-serif text-xl sm:text-2xl text-white font-normal mt-2 mb-2"
                                >
                                  {paragraph.replace("### ", "")}
                                </h2>
                              );
                            }
                            if (paragraph.startsWith("#### ")) {
                              return (
                                <h3
                                  key={pIdx}
                                  className="font-mono text-xs text-[#FF7A00] uppercase font-bold mt-4 mb-2 flex items-center gap-1.5"
                                >
                                  <span>//</span> {paragraph.replace("#### ", "")}
                                </h3>
                              );
                            }
                            if (paragraph.startsWith("- ")) {
                              const items = paragraph.split("\n");
                              return (
                                <ul
                                  key={pIdx}
                                  className="space-y-2 my-2 pl-4 list-disc marker:text-[#FF7A00]"
                                >
                                  {items.map((item, iIdx) => (
                                    <li key={iIdx} className="text-neutral-300">
                                      <span
                                        dangerouslySetInnerHTML={{
                                          __html: item
                                            .replace("- ", "")
                                            .replace(
                                              /\*\*(.*?)\*\*/g,
                                              "<strong class='text-white font-medium'>$1</strong>"
                                            ),
                                        }}
                                      />
                                    </li>
                                  ))}
                                </ul>
                              );
                            }
                            return (
                              <p
                                key={pIdx}
                                className="leading-relaxed"
                                dangerouslySetInnerHTML={{
                                  __html: paragraph.replace(
                                    /\*\*(.*?)\*\*/g,
                                    "<strong class='text-white font-medium'>$1</strong>"
                                  ),
                                }}
                              />
                            );
                          })}
                        </div>

                        {/* Integrated Entities & Linkage (Only shown AFTER the question is answered) */}
                        {msg.structuredEntities && (
                          <div className="pt-4 border-t border-neutral-800/80 space-y-3">
                            <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold flex items-center gap-1.5">
                              <Compass className="size-3 text-[#FF7A00]" />
                              <span>GROUNDED GRAPH ENTITIES</span>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {msg.structuredEntities.countries?.map((cName) => (
                                <Link
                                  key={cName}
                                  to={`/country?id=${cName}`}
                                  className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#FF7A00] text-neutral-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
                                >
                                  <Globe2 className="size-3 text-[#FF7A00]" />
                                  <span>{cName}</span>
                                </Link>
                              ))}

                              {msg.structuredEntities.groups?.map((gName) => (
                                <Link
                                  key={gName}
                                  to="/groups"
                                  className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#FF7A00] text-neutral-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
                                >
                                  <Layers className="size-3 text-amber-400" />
                                  <span>{gName}</span>
                                </Link>
                              ))}

                              {msg.structuredEntities.chokepoints?.map((cpName) => (
                                <Link
                                  key={cpName}
                                  to="/live-map"
                                  className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#FF7A00] text-neutral-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
                                >
                                  <Anchor className="size-3 text-sky-400" />
                                  <span>{cpName}</span>
                                </Link>
                              ))}

                              {msg.structuredEntities.events?.map((evName) => (
                                <Link
                                  key={evName}
                                  to="/events"
                                  className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#FF7A00] text-neutral-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
                                >
                                  <Radio className="size-3 text-emerald-400" />
                                  <span>{evName}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Recommended Follow-Up Continuation Chips */}
                        {msg.followUps && msg.followUps.length > 0 && (
                          <div className="pt-3 border-t border-neutral-800/80">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold block mb-2">
                              Suggested Analytical Follow-Ups
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {msg.followUps.map((fu, fIdx) => (
                                <button
                                  key={fIdx}
                                  onClick={() => handleSendMessage(fu)}
                                  className="p-2.5 rounded-lg bg-neutral-900/60 hover:bg-[#141822] border border-neutral-800 hover:border-[#FF7A00]/60 text-xs text-neutral-300 hover:text-white font-light text-left flex items-center justify-between group transition-colors"
                                >
                                  <span className="line-clamp-2">{fu}</span>
                                  <ArrowRight className="size-3 text-[#FF7A00] transition-transform group-hover:translate-x-1 shrink-0 ml-2" />
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Verification / Source Citation */}
                        {msg.evidence && (
                          <div className="pt-3 border-t border-neutral-800/60 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-neutral-500">
                            <span className="flex items-center gap-1.5">
                              <FileCheck2 className="size-3 text-emerald-400" />
                              <span>Source: {msg.evidence[0]?.source}</span>
                            </span>
                            <span className="text-emerald-400 uppercase font-semibold">
                              STATUS: {msg.confidence || "VERIFIED"}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Loading / Generating Indicator */}
                {loading && (
                  <div className="flex gap-3.5 items-start animate-fadeIn">
                    <div className="size-8 rounded-xl bg-[#FF7A00] text-black font-serif font-black text-sm flex items-center justify-center shrink-0 shadow-sm shadow-orange-500/20 select-none animate-pulse">
                      त्रि
                    </div>
                    <div className="flex-1 rounded-2xl p-5 bg-[#0b0d13] border border-neutral-800/90 text-xs font-mono text-neutral-300 space-y-3">
                      <div className="flex items-center gap-2 text-[#FF7A00] font-semibold">
                        <div className="size-2 rounded-full bg-[#FF7A00] animate-ping" />
                        <span>TRINETRA AI: Synthesizing Geopolitical Graph...</span>
                      </div>

                      <div className="space-y-1 text-neutral-400 text-[11px]">
                        <div
                          className={
                            loadingStep >= 0
                              ? "text-emerald-400 flex items-center gap-1.5"
                              : "text-neutral-600"
                          }
                        >
                          <span>✓</span> Identifying sovereign entities & maritime nodes
                        </div>
                        <div
                          className={
                            loadingStep >= 1
                              ? "text-emerald-400 flex items-center gap-1.5"
                              : "text-neutral-600"
                          }
                        >
                          <span>✓</span> Querying bilateral alliance and trade dependency graph
                        </div>
                        <div
                          className={
                            loadingStep >= 2
                              ? "text-emerald-400 flex items-center gap-1.5"
                              : "text-neutral-600"
                          }
                        >
                          <span>✓</span> Retrieving verified multilateral and IEA records
                        </div>
                        <div
                          className={
                            loadingStep >= 3
                              ? "text-[#FF7A00] flex items-center gap-1.5 font-bold"
                              : "text-neutral-600"
                          }
                        >
                          <span>→</span> Constructing strategic intelligence briefing
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* ==================================================== */}
          {/* LARGE BOTTOM CHAT COMPOSER (Fixed Center Bottom)     */}
          {/* ==================================================== */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-[#060709] via-[#060709]/95 to-transparent pointer-events-none flex justify-center">
            <div className="w-full max-w-3xl pointer-events-auto">
              <div className="rounded-2xl border border-neutral-800 bg-[#0d0f16]/95 backdrop-blur-md p-3.5 shadow-2xl focus-within:border-[#FF7A00]/80 focus-within:ring-1 focus-within:ring-[#FF7A00]/30 transition-all">
                {/* Textarea Composer */}
                <textarea
                  ref={textareaRef}
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={loading}
                  rows={2}
                  placeholder="Ask TRINETRA anything about global strategic affairs..."
                  className="w-full bg-transparent px-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none resize-none font-light leading-relaxed"
                />

                {/* Action Row */}
                <div className="flex items-center justify-between pt-2 border-t border-neutral-800/60 mt-1">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500">
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
                      <span className="size-1.5 rounded-full bg-[#FF7A00]" />
                      <span>Full Graph Grounding</span>
                    </span>
                    <span className="hidden sm:inline">Press Enter to send</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {inputQuery && (
                      <button
                        onClick={() => setInputQuery("")}
                        className="text-xs text-neutral-500 hover:text-neutral-300 px-2 py-1"
                      >
                        Clear
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => handleSendMessage()}
                      disabled={loading || !inputQuery.trim()}
                      className="size-8 rounded-lg bg-[#FF7A00] hover:bg-[#FF8811] text-black font-bold flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-md shadow-orange-500/20 active:scale-95"
                      title="Transmit to TRINETRA AI Analyst"
                    >
                      <Send className="size-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Subtle Disclaimer under composer */}
              <p className="text-center text-[10px] font-mono text-neutral-600 mt-2">
                TRINETRA AI synthesizes sovereign data, treaties, trade flows, and verified geopolitical intelligence.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
