"use client"

import { useState } from "react"

export default function Page() {
  const [input, setInput] = useState("")

  const handleClick = (value: string) => {
    if (value === "C") {
      setInput("")
    } else if (value === "=") {
      try {
        setInput(Function(`"use strict"; return (${input})`)().toString())
      } catch {
        setInput("Error")
      }
    } else {
      setInput((prev) => prev + value)
    }
  }

  const buttons = [
    ["C", "/", "*", "-"],
    ["7", "8", "9", "+"],
    ["4", "5", "6", "="],
    ["1", "2", "3", "0"],
  ]

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6 border border-slate-200">
      
        <img src="https://i.postimg.cc/vT3WY9ZC/512-x-512-px.png" alt="Business Calculator Logo" className="size-8 object-contain" />
 <h1 className="text-xl font-bold text-center mb-4 text-slate-800">Business Calculator</h1>
        <div className="w-full h-16 bg-slate-100 rounded-lg mb-4 flex items-center justify-end px-4 text-2xl font-mono text-slate-800 overflow-x-auto border border-slate-300">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.flat().map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className={`h-12 text-lg font-semibold rounded-lg transition-colors ${
                btn === "C"
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : btn === "=" || btn === "+" || btn === "-" || btn === "*" || btn === "/"
                  ? "bg-amber-500 text-white hover:bg-amber-600"
                  : "bg-slate-200 text-slate-800 hover:bg-slate-300"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
      <footer className="mt-8 text-center text-xs text-slate-500 space-y-2">
        <p>Results are estimates for planning purposes only.</p>
        <p>This site uses Google AdSense to serve ads.</p>
        <div className="flex justify-center space-x-4 pt-1">
          <a href="/privacy" className="underline hover:text-slate-800">Privacy Policy</a>
          <span>•</span>
          <a href="/terms" className="underline hover:text-slate-800">Terms of Service</a>
        </div>
      </footer>
    </main>
  )
}
