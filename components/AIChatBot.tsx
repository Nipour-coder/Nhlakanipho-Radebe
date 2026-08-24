"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Loader2, Sparkles } from "lucide-react";
import type { ChatMessage } from "@/lib/types";

const INITIAL_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! I'm Nhlakanipho's AI assistant. Ask me about his skills, projects, education, or how to get in touch.",
  timestamp: 0,
};

const SUGGESTIONS: string[] = [
  "What are your top skills?",
  "Tell me about your ESP32 projects.",
  "Where did you study?",
  "How can I contact you?",
];

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed }),
      });
      if (!res.ok) throw new Error("Request failed");
      const data = (await res.json()) as { answer?: string };
      const reply =
        data.answer?.trim() ||
        "I couldn't find an answer for that. Try asking about skills, projects, experience, education, or contact details.";
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: reply,
          timestamp: Date.now(),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content:
            "Sorry, I'm having trouble responding right now. Please try again or reach out via the Contact section.",
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => send(input);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full bg-neon text-charcoal shadow-neon hover:bg-neon-soft transition-all ${
          isOpen ? "hidden" : "flex"
        } items-center justify-center`}
        aria-label="Open AI chat assistant"
      >
        <Bot size={22} />
        <span className="sr-only">Ask AI About Nhlakanipho</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="ai-chat"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 h-[600px] max-h-[80vh] flex flex-col rounded-2xl border border-neon/30 bg-charcoal/95 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-neon/20 bg-charcoal-soft/60">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-neon/10 text-neon border border-neon/30">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-mono text-sm text-ink">Ask AI About Nhlakanipho</h3>
                  <p className="font-mono text-[10px] text-emerald flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
                    online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted hover:text-neon transition-colors p-1"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap font-mono ${
                      msg.role === "user"
                        ? "bg-neon text-charcoal rounded-br-sm"
                        : "bg-charcoal-soft text-ink/90 border border-neon/20 rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-charcoal-soft border border-neon/20 px-4 py-3 rounded-2xl rounded-bl-sm">
                    <Loader2 size={16} className="animate-spin text-neon" />
                  </div>
                </div>
              )}

              {/* Suggestions */}
              {messages.length <= 1 && !isLoading && (
                <div className="pt-2 space-y-2">
                  <p className="text-xs text-muted font-mono flex items-center gap-1.5">
                    <Sparkles size={12} className="text-neon" /> Try asking:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="text-xs font-mono px-2.5 py-1.5 rounded-md border border-neon/20 text-neon bg-neon/5 hover:bg-neon/10 hover:border-neon/40 transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-neon/20 bg-charcoal-soft/40">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about skills, projects, contact..."
                  className="flex-1 bg-charcoal border border-neon/20 rounded-md px-3 py-2.5 text-sm font-mono text-ink placeholder:text-muted/70 focus:outline-none focus:border-neon transition-colors"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="p-2.5 rounded-md bg-neon text-charcoal hover:bg-neon-soft disabled:bg-charcoal-soft disabled:text-muted disabled:cursor-not-allowed transition-colors"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
