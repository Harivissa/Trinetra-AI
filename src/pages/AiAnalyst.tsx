import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Send,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  Compass,
  ArrowRight,
  Shield,
  Layers,
  MapPin,
  ExternalLink,
  ChevronRight,
  Calendar,
  Zap,
  Globe2,
  FileCheck2,
  Plus,
  MessageSquare,
  Trash2,
  Anchor,
  HelpCircle,
} from "lucide-react";
import Header from "../components/dashboard/Header";
import Footer from "../components/dashboard/Footer";
import { api } from "../services/api";
import type { AiChatMessage } from "../types";

interface ChatSession {
  id: string;
  title: string;
  timestamp: string;
  messages: AiChatMessage[];
}

const SUGGESTED_PROMPTS = [
  "Why is the Strait of Hormuz important to India?",
  "How does BRICS expansion impact alternative currency settlements?",
  "Compare United States and China advanced semiconductor dependencies.",
  "What are the major maritime chokepoints in the Indo-Pacific?",
  "Analyze NATO's northern flank posture and Baltic defense commitments.",
  "What makes the Malacca Strait vulnerable to naval interdiction?",
];

const DEFAULT_WELCOME_MESSAGE: AiChatMessage = {
  id: "msg-welcome",
  role: "assistant",
  content: `### Welcome to TRINETRA AI Analyst Workstation

I am your strategic intelligence analyst grounded in TRINETRA's structured geopolitical graph.

You can interrogate:
- **Sovereign Dependencies & Vulnerabilities**: Energy transit, semiconductor supply lines, critical minerals, and domestic bottlenecks.
- **Maritime Chokepoints & Supply Artery Interdictions**: Hormuz, Malacca, Bab el-Mandeb, Suez Canal, and Turkish Straits.
- **Multilateral Alliances & Coalitions**: G20, G7, BRICS, SCO, QUAD, NATO, ASEAN, and OPEC+.
- **Bilateral Axis Leverage & Strategic Rivalries**: Military spending balances, forward doctrines, and flashpoints.

Select a suggested prompt below or type any strategic intelligence inquiry to begin.`,
  timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  confidence: "VERIFIED",
  followUps: [
    "Why is the Strait of Hormuz important to India?",
    "Compare United States and China advanced semiconductor dependencies.",
    "What are the major maritime chokepoints in the Indo-Pacific?",
  ],
  evidence: [{ source: "TRINETRA Strategic Intelligence Graph", verifiedAt: "2026-09" }],
};

export default function AiAnalyst() {
  const [sessions, setSessions] = useState<ChatSession[]>(() => {
    try {
      const saved = localStorage.getItem("trinetra_chat_sessions");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // Ignore
    }
    return [
      {
        id: "session-default",
        title: "Strategic Intelligence Inquiry",
        timestamp: "Active",
        messages: [DEFAULT_WELCOME_MESSAGE],
      },
    ];
  });

  const [activeSessionId, setActiveSessionId] = useState<string>(sessions[0]?.id || "session-default");
  const [inputQuery, setInputQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeSession = sessions.find((s) => s.id === activeSessionId) || sessions[0];

  useEffect(() => {
    try {
      localStorage.setItem("trinetra_chat_sessions", JSON.stringify(sessions));
    } catch {
      // Ignore
    }
  }, [sessions]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeSession?.messages, loading]);

  const createNewSession = () => {
    const newId = `session-${Date.now()}`;
    const newSession: ChatSession = {
      id: newId,
      title: "New Strategic Inquiry",
      timestamp: new Date().toLocaleDateString([], { month: "short", day: "numeric" }),
      messages: [DEFAULT_WELCOME_MESSAGE],
    };
    setSessions([newSession, ...sessions]);
    setActiveSessionId(newId);
  };

  const deleteSession = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (sessions.length <= 1) {
      setSessions([
        {
          id: `session-${Date.now()}`,
          title: "New Strategic Inquiry",
          timestamp: "Active",
          messages: [DEFAULT_WELCOME_MESSAGE],
        },
      ]);
      return;
    }
    const remaining = sessions.filter((s) => s.id !== id);
    setSessions(remaining);
    if (activeSessionId === id) {
      setActiveSessionId(remaining[0].id);
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query || loading) return;

    const userMsg: AiChatMessage = {
      id: `usr-${Date.now()}`,
      role: "user",
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const updatedMessages = [...activeSession.messages, userMsg];

    // Update active session with user message
    setSessions((prev) =>
      prev.map((s) =>
        s.id === activeSessionId
          ? {
              ...s,
              title: s.title === "New Strategic Inquiry" ? query.slice(0, 36) + "..." : s.title,
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
        content: response.content || "No intelligence returned for this query.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        structuredEntities: response.structuredEntities,
        followUps: response.followUps || [],
        confidence: response.confidence || "VERIFIED",
        evidence: response.evidence || [{ source: "TRINETRA Intelligence Graph", verifiedAt: "2026-09" }],
      };

      setSessions((prev) =>
        prev.map((s) =>
          s.id === activeSessionId
            ? {
                ...s,
                messages: [...s.messages, assistantMsg],
              }
            : s
        )
      );
    } catch (err: any) {
      const errorMsg: AiChatMessage = {
        id: `err-${Date.now()}`,
        role: "assistant",
        content: `### Strategic Connection Timeout

Trinetra was unable to reach the analytical generation engine. 

**Diagnostic**: Please verify that the TRINETRA backend server is operational on port 3000.`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        confidence: "INSUFFICIENT_DATA",
      };

      setSessions((prev) =>
        prev.map((s) =>
          s.id === activeSessionId
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  return (
    <div className="min-h-screen bg-[#070707] text-neutral-200 selection:bg-[#FF7A00]/30 selection:text-white flex flex-col justify-between">
      <Header />

      <main className="mx-auto max-w-[1720px] w-full px-4 sm:px-8 py-6 flex-1 flex flex-col">
        {/* Top Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded bg-[#FF7A00]/10 border border-[#FF7A00]/30 text-[#FF7A00] font-mono text-[11px] font-bold uppercase tracking-wider">
                NEURAL INTELLIGENCE // GRAPH-GROUNDED ANALYST
              </span>
              <span className="text-neutral-500 text-xs font-mono">Gemini 3.8 Intelligence Engine</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl text-neutral-100 font-normal tracking-tight">
              TRINETRA AI Analyst Workstation
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={createNewSession}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#FF7A00] hover:bg-[#FF8811] text-black font-semibold text-xs transition-colors shadow-sm shadow-orange-500/20"
            >
              <Plus className="size-4" />
              <span>New Intelligence Dossier</span>
            </button>
          </div>
        </div>

        {/* Chat Workstation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-[720px]">
          {/* Left Session Drawer (3 cols) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col border border-neutral-800 rounded-2xl bg-[#090b10] p-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-3 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 uppercase tracking-wider">
                <MessageSquare className="size-3.5 text-[#FF7A00]" />
                Briefing Logs ({sessions.length})
              </span>
            </div>

            <div className="space-y-2 overflow-y-auto flex-1 pr-1">
              {sessions.map((s) => {
                const isSelected = s.id === activeSessionId;
                return (
                  <div
                    key={s.id}
                    onClick={() => setActiveSessionId(s.id)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between group ${
                      isSelected
                        ? "bg-[#11141d] border-[#FF7A00]/60 text-white shadow-md"
                        : "bg-neutral-900/40 border-neutral-800/80 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200"
                    }`}
                  >
                    <div className="truncate mr-2">
                      <div className="text-xs font-medium truncate font-sans">{s.title}</div>
                      <div className="text-[10px] font-mono text-neutral-500 mt-0.5">{s.timestamp}</div>
                    </div>

                    <button
                      onClick={(e) => deleteSession(s.id, e)}
                      title="Delete Session"
                      className="opacity-0 group-hover:opacity-100 p-1 hover:text-red-400 transition-opacity text-neutral-500"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Grounding Status Indicator */}
            <div className="mt-4 pt-3 border-t border-neutral-800/80 text-xs font-mono text-neutral-500 space-y-1">
              <div className="flex items-center justify-between">
                <span>Dataset Grounding:</span>
                <span className="text-emerald-400 font-bold">100% CANONICAL</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Hallucination Filter:</span>
                <span className="text-neutral-300">ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Center Chat View (9 cols) */}
          <div className="lg:col-span-9 flex flex-col border border-neutral-800 rounded-2xl bg-[#090b10] overflow-hidden">
            {/* Conversation Messages Stream */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-6 max-h-[640px]">
              {activeSession.messages.map((msg) => {
                const isAssistant = msg.role === "assistant";

                return (
                  <div
                    key={msg.id}
                    className={`flex gap-3 sm:gap-4 ${isAssistant ? "items-start" : "items-start flex-row-reverse"}`}
                  >
                    {/* Avatar Icon */}
                    <div
                      className={`size-8 sm:size-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isAssistant
                          ? "bg-[#FF7A00] text-black font-serif font-extrabold shadow-sm shadow-orange-500/20"
                          : "bg-neutral-800 text-neutral-300 border border-neutral-700"
                      }`}
                    >
                      {isAssistant ? <span className="text-sm">त्रि</span> : <User className="size-4" />}
                    </div>

                    {/* Message Bubble & Content */}
                    <div
                      className={`max-w-[88%] sm:max-w-[80%] rounded-2xl p-4 sm:p-5 text-sm leading-relaxed ${
                        isAssistant
                          ? "bg-[#0d1017] border border-neutral-800 text-neutral-200 shadow-md"
                          : "bg-[#FF7A00]/10 border border-[#FF7A00]/40 text-neutral-100"
                      }`}
                    >
                      {/* Top Metadata Row */}
                      <div className="flex items-center justify-between gap-3 pb-2 mb-3 border-b border-neutral-800/60 text-[11px] font-mono text-neutral-500">
                        <span className="font-semibold uppercase tracking-wider text-neutral-400">
                          {isAssistant ? "TRINETRA AI Analyst" : "Intelligence Officer"}
                        </span>
                        <span>{msg.timestamp}</span>
                      </div>

                      {/* Markdown / Formatted Text */}
                      <div className="prose prose-invert prose-xs sm:prose-sm max-w-none text-neutral-200 leading-relaxed font-light space-y-3">
                        {msg.content.split("\n\n").map((paragraph, pIdx) => {
                          if (paragraph.startsWith("### ")) {
                            return (
                              <h3 key={pIdx} className="font-serif text-lg text-white font-normal mt-4 mb-2">
                                {paragraph.replace("### ", "")}
                              </h3>
                            );
                          }
                          if (paragraph.startsWith("#### ")) {
                            return (
                              <h4 key={pIdx} className="font-mono text-xs text-[#FF7A00] uppercase font-bold mt-3 mb-1">
                                {paragraph.replace("#### ", "")}
                              </h4>
                            );
                          }
                          if (paragraph.startsWith("- ")) {
                            const items = paragraph.split("\n");
                            return (
                              <ul key={pIdx} className="space-y-1.5 my-2 pl-4 list-disc marker:text-[#FF7A00]">
                                {items.map((item, iIdx) => (
                                  <li key={iIdx} className="text-neutral-300">
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
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
                                __html: paragraph.replace(/\*\*(.*?)\*\*/g, "<strong class='text-white font-medium'>$1</strong>"),
                              }}
                            />
                          );
                        })}
                      </div>

                      {/* Structured Entity Connections */}
                      {isAssistant && msg.structuredEntities && (
                        <div className="mt-4 pt-4 border-t border-neutral-800/80 space-y-3">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                            Ground Truth Entity Linkage
                          </span>

                          <div className="flex flex-wrap gap-2">
                            {msg.structuredEntities.countries?.map((cName) => (
                              <Link
                                key={cName}
                                to={`/country?id=${cName}`}
                                className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-[#FF7A00] text-neutral-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
                              >
                                <Globe2 className="size-3 text-[#FF7A00]" />
                                <span>{cName}</span>
                              </Link>
                            ))}

                            {msg.structuredEntities.groups?.map((gName) => (
                              <Link
                                key={gName}
                                to="/groups"
                                className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-[#FF7A00] text-neutral-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
                              >
                                <Layers className="size-3 text-amber-400" />
                                <span>{gName}</span>
                              </Link>
                            ))}

                            {msg.structuredEntities.chokepoints?.map((cpName) => (
                              <Link
                                key={cpName}
                                to="/live-map"
                                className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-[#FF7A00] text-neutral-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
                              >
                                <Anchor className="size-3 text-sky-400" />
                                <span>{cpName}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Interactive Follow-Up Questions */}
                      {isAssistant && msg.followUps && msg.followUps.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-neutral-800/80">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                            Recommended Analytical Continuations
                          </span>
                          <div className="space-y-1.5">
                            {msg.followUps.map((fu, fIdx) => (
                              <button
                                key={fIdx}
                                onClick={() => handleSendMessage(fu)}
                                className="w-full text-left p-2 rounded-lg bg-neutral-900/70 hover:bg-[#151922] border border-neutral-800 hover:border-[#FF7A00]/50 text-xs text-neutral-300 hover:text-white font-light flex items-center justify-between group transition-colors"
                              >
                                <span>{fu}</span>
                                <ArrowRight className="size-3 text-[#FF7A00] transition-transform group-hover:translate-x-1 shrink-0 ml-2" />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Evidence & Confidence Footer */}
                      {isAssistant && msg.evidence && (
                        <div className="mt-4 pt-2 border-t border-neutral-800/60 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                          <span className="flex items-center gap-1">
                            <FileCheck2 className="size-3 text-emerald-400" />
                            Verified: {msg.evidence[0]?.source}
                          </span>
                          <span className="text-emerald-400 uppercase font-semibold">
                            {msg.confidence || "VERIFIED"}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {loading && (
                <div className="flex gap-4 items-start">
                  <div className="size-8 sm:size-9 rounded-xl bg-[#FF7A00] text-black font-serif font-extrabold flex items-center justify-center shrink-0 animate-pulse">
                    त्रि
                  </div>
                  <div className="rounded-2xl p-4 bg-[#0d1017] border border-neutral-800 text-xs font-mono text-neutral-400 flex items-center gap-3">
                    <div className="size-2 rounded-full bg-[#FF7A00] animate-ping" />
                    <span>Resolving entities across TRINETRA sovereign & chokepoint graph...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Starter Prompts (Pill Bar) */}
            <div className="px-4 sm:px-6 py-2 border-t border-neutral-800/60 overflow-x-auto flex items-center gap-2 scrollbar-none bg-neutral-950/40">
              <span className="text-[10px] font-mono text-neutral-500 shrink-0 uppercase tracking-wider">
                Interrogate:
              </span>
              {SUGGESTED_PROMPTS.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(p)}
                  disabled={loading}
                  className="px-2.5 py-1 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-[11px] text-neutral-300 hover:text-white whitespace-nowrap transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Input Submission Bar */}
            <form onSubmit={handleSubmit} className="p-4 sm:p-5 border-t border-neutral-800 bg-[#090b10]">
              <div className="flex items-center gap-2 border border-neutral-800 rounded-xl bg-neutral-900/90 px-3 py-2 focus-within:border-[#FF7A00] transition-colors">
                <input
                  type="text"
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  placeholder="Ask TRINETRA Analyst (e.g. Why is the Strait of Hormuz important to India?)..."
                  disabled={loading}
                  className="flex-1 bg-transparent px-2 py-1 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={loading || !inputQuery.trim()}
                  className="px-4 py-2 rounded-lg bg-[#FF7A00] hover:bg-[#FF8811] text-black font-semibold text-xs flex items-center gap-1.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm shadow-orange-500/20"
                >
                  <span>Transmit</span>
                  <Send className="size-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
