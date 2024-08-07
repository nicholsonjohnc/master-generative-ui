import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
// import { PaperAirplaneIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { FC } from "react";
// import { PaperAirplaneIcon } from "@heroicons/react/solid";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Home: FC = () => {
  const messages: Message[] = [
    { role: "user", content: "Hello! How can I help you today?" },
    { role: "assistant", content: "I need some information about your services." },
    { role: "user", content: "Hello! How can I help you today?" },
    { role: "assistant", content: "I need some information about your services." },
    { role: "user", content: "Hello! How can I help you today?" },
    { role: "assistant", content: "I need some information about your services." },
    { role: "user", content: "Hello! How can I help you today?" },
    { role: "assistant", content: "I need some information about your services." },
    { role: "user", content: "Hello! How can I help you today?" },
    { role: "assistant", content: "I need some information about your services." },
    { role: "user", content: "Hello! How can I help you today?" },
    { role: "assistant", content: "I need some information about your services." },
  ];

  return (
    <main className="bg-gray-100 h-screen flex flex-col">
      {/* Chat Messages Area */}
      <div className="flex-grow p-4 overflow-auto">
        <div className="flex flex-col space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-4 rounded shadow-md ${
                message.role === "user" ? "bg-white self-start text-gray-800" : "bg-blue-500 self-end text-white"
              }`}
            >
              <p>{message.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Message Taskbar */}
      <div className="bg-white p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <input type="text" className="flex-grow border rounded p-2" placeholder="Type your message here..." />
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center">
            <PaperAirplaneIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;