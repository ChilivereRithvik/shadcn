import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }])
      setInput("")
      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "assistant", content: "This is a simulated AI response." }])
      }, 1000)
    }
  }

  return (
    <div className="flex flex-0 flex-col h-full bg-green-500 mt-10">
      <ScrollArea className="flex-1 pr-1">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 p-4 rounded-lg m-5 ${
              message.role === "user" ? "bg-primary text-primary-foreground ml-auto rounded-bg-2 bg-pink-600 z-1" : "bg-muted"
            } max-w-[80%]`}
          >
            {message.content}
          </div>
        ))}
      </ScrollArea>
      <div className="flex justify-center items-center bg-violet-600 mb-10 m-7 gap-2 ">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          className="p-3 rounded-s-md outline-none bg-slate-100 text-slate-900 w-full border-none  buttom-0"
        />
        <Button onClick={handleSend} size="icon">
          <Send className="h-4 w-4 rounded-lg" />
        </Button>
      </div>
    </div>
  )
}

