"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircleIcon, SendIcon } from "@animateicons/react/lucide";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Message = { id: number; role: "user" | "bot"; content: string };

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "bot",
      content:
        "Hi there! 👋🏻 Thanks for visiting my website. Feel free to ask me anything about programming, web development, or the tools I use. Let me know how can I help!",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      content: text,
    };

    setMessages((m) => [...m, userMsg]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text }],
            },
          ],
        }),
      });

      const data = await res.json();

      // 🔥 LOG RESPONSE FIRST
      console.log("Gemini response:", data);
      const reply = data.text; // ✅ THIS is correct

      setMessages((m) => [
        ...m,
        {
          id: Date.now() + 1,
          role: "bot",
          content: reply,
        },
      ]);
    } catch (err) {
      console.error("Chat error:", err);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-88 max-w-[calc(100vw-3rem)] h-120 max-h-[calc(100vh-6rem)] flex flex-col rounded-2xl border bg-card text-card-foreground shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between px-4 py-3 border-b bg-primary text-primary-foreground">
            <div className="flex items-center gap-2">
              <div className="relative">
                <img
                  src="/images/jomar.png"
                  alt="Jomar"
                  className="h-10 w-10 rounded-full object-cover border border-primary-foreground/20"
                />

                {/* online status */}
                <span className="absolute bottom-0 right-0 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 border-2 border-primary" />
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold leading-none">
                  Chat with Jomar
                </p>
                <p className="text-xs opacity-80 mt-1">Online</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-md p-1 hover:bg-primary-foreground/10 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/30"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  "flex",
                  m.role === "user" ? "justify-end" : "justify-start",
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed",
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-card border rounded-bl-sm",
                  )}
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-center gap-2 p-3 border-t bg-card"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1"
            />
            <Button
              type="submit"
              size="icon"
              className="cursor-pointer"
              disabled={!input.trim()}
            >
              <SendIcon size={64} duration={1} color="#ffffff" />
            </Button>
          </form>
        </div>
      )}

      <Button
        onClick={() => setOpen((o) => !o)}
        className="py-6 cursor-pointer rounded-full px-5 shadow-md hover:scale-105 transition-transform flex items-center gap-2"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        <MessageCircleIcon size={64} duration={1} color="#ffffff" />
        <span className="font-medium">Chat with Jomar</span>
      </Button>
    </div>
  );
}
