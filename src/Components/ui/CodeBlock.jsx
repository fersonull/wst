import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

export default function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="-z-20">
      <div className="relative lg:text-[16px] text-sm">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 text-xs bg-gray-700 text-white px-2 py-1 rounded"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <SyntaxHighlighter language="jsx" style={oneDark} showLineNumbers>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
