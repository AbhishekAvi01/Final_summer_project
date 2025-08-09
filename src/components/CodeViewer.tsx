import React, { useState } from 'react';
import { Copy, Check, Download, Eye, Play } from 'lucide-react';

interface CodeViewerProps {
  code: string;
  language: string;
  filename: string;
  onRun?: () => void;
  showRunButton?: boolean;
}

const CodeViewer: React.FC<CodeViewerProps> = ({ 
  code, 
  language, 
  filename, 
  onRun, 
  showRunButton = false 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getLanguageColor = (lang: string) => {
    const colors: { [key: string]: string } = {
      python: 'bg-yellow-500',
      javascript: 'bg-yellow-400',
      typescript: 'bg-blue-500',
      html: 'bg-orange-500',
      css: 'bg-pink-500',
      java: 'bg-red-500',
      cpp: 'bg-blue-600',
      c: 'bg-gray-600',
      sql: 'bg-purple-500',
      bash: 'bg-green-500',
      json: 'bg-gray-500',
      yaml: 'bg-red-400',
      markdown: 'bg-gray-400'
    };
    return colors[lang.toLowerCase()] || 'bg-gray-500';
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className={`w-3 h-3 rounded-full ${getLanguageColor(language)}`}></div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {filename}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">
            {language}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          {showRunButton && onRun && (
            <button
              onClick={onRun}
              className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition-colors"
              title="Run Code"
            >
              <Play size={12} />
              <span>Run</span>
            </button>
          )}
          
          <button
            onClick={handleDownload}
            className="flex items-center space-x-1 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors"
            title="Download Code"
          >
            <Download size={12} />
            <span>Download</span>
          </button>
          
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 px-3 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 transition-colors"
            title="Copy Code"
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Code Display */}
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-sm bg-gray-50 dark:bg-gray-800">
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeViewer;

