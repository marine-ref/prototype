"use client";

import { useState } from "react";
import { Camera, Mic, Send } from "lucide-react";
import type { ChatMessage } from "@/data/mock";
import { initialChat } from "@/data/mock";

export function AssistantChat({
  onQuery,
}: {
  onQuery?: (text: string) => void;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialChat);
  const [input, setInput] = useState("");

  function send(text: string) {
    const q = text.trim();
    if (!q) return;
    const now = new Date();
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`;
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      text: q,
      time,
    };
    const reply: ChatMessage = {
      id: `a-${Date.now()}`,
      role: "assistant",
      text: "관련 교범·유사사례·PHM 결과를 통합해 우측 요약과 디지털트윈에 반영했습니다. 우선 오일 필터 점검·교체를 권고합니다.",
      time,
    };
    setMessages((prev) => [...prev, userMsg, reply]);
    setInput("");
    onQuery?.(q);
  }

  return (
    <section className="flex h-full min-h-[28rem] flex-col rounded-xl border border-line bg-surface">
      <div className="border-b border-line px-4 py-3">
        <h2 className="text-sm font-semibold">AI 질의</h2>
        <p className="text-xs text-muted">텍스트 · 음성 · 사진</p>
      </div>
      <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[90%] rounded-lg px-3 py-2 text-sm ${
                m.role === "user"
                  ? "bg-brand text-white"
                  : "bg-bg text-ink"
              }`}
            >
              <p className="text-[10px] opacity-70">
                {m.role === "user" ? "정비사" : "AI"} · {m.time}
              </p>
              <p className="mt-0.5 leading-relaxed">{m.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-line p-3">
        <div className="mb-2 flex gap-1.5">
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-md border border-line px-2 py-1 text-xs text-muted"
            onClick={() => send("엔진 오일 압력이 낮아.")}
          >
            <Mic size={12} /> 음성
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-md border border-line px-2 py-1 text-xs text-muted"
            onClick={() => send("오일 필터 오염 사진을 첨부했습니다.")}
          >
            <Camera size={12} /> 사진
          </button>
        </div>
        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="증상을 입력하세요"
            className="min-w-0 flex-1 rounded-md border border-line bg-bg px-3 py-2 text-sm outline-none focus:border-brand"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1 rounded-md bg-brand px-3 py-2 text-sm font-medium text-white"
          >
            <Send size={14} />
          </button>
        </form>
      </div>
    </section>
  );
}
