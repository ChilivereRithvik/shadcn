import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Paperclip, Send, Search, ImagePlus, FilePlus } from "lucide-react";

export default function Chat() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const scrollArea = document.getElementById("chat-scroll-area");
    if (scrollArea) scrollArea.scrollTop = scrollArea.scrollHeight;
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput || fileName) {
      const content = fileName ? `${trimmedInput} [File: ${fileName}]` : trimmedInput;
      setMessages([...messages, { role: "user", content }]);
      setInput("");
      setFileName(null);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
    else setFileName(null);
  };

  const handleUploadFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleWebSearchClick = () => {
    // Add web search functionality here
    console.log("Web search clicked");
  };

  const handleImageGenerationClick = () => {
    // Add image generation functionality here
    console.log("Image generation clicked");
  };

  return (
    <div className="flex flex-col h-full">
      {/* Welcome Message */}
      {!messages.length && (
        <h2 className="text-center mt-20 text-5xl">Welcome to Shadcn</h2>
      )}

      {/* Message Display */}
      <ScrollArea id="chat-scroll-area" className={`flex-1 p-4 ${messages.length > 0 ? 'mb-auto' : ''}`}>
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
            <div className={`inline-block p-2 rounded-lg ${message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
              {message.content}
            </div>
          </div>
        ))}
      </ScrollArea>

      {/* Input and Actions Container */}
      <form onSubmit={handleSubmit} className={`p-4 ${messages.length > 0 ? 'mt-auto border-gray-900 p-2' : 'flex-1 justify-center items-center mb-30 border-gray-900 p-2'}`}>
        <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={fileName || "Type your message..."}
            className="flex-1 outline-none border-none "
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
        {/* Additional Actions Below Input */}
        <div className="mt-4 flex space-x-4">
          <Button variant="outline" onClick={handleUploadFileClick} className="flex items-center space-x-2 min-w-[150px]">
            <FilePlus className="h-6 w-6" />
            <span>Upload File</span>
            <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" />
          </Button>
          <Button variant="outline" onClick={handleWebSearchClick} className="flex items-center space-x-2 min-w-[150px]">
            <Search className="h-6 w-6" />
            <span>Web Search</span>
          </Button>
          <Button variant="outline" onClick={handleImageGenerationClick} className="flex items-center space-x-2 min-w-[150px]">
            <ImagePlus className="h-6 w-6" />
            <span>Generate Image</span>
          </Button>
        </div>
      </form>
    </div>
  );
}