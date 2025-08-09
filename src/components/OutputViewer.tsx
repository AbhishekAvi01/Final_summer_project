import React, { useState } from 'react';
import { Download, Eye, FileText, Image, BarChart3, Play, Square } from 'lucide-react';

interface OutputViewerProps {
  output: {
    type: 'text' | 'image' | 'chart' | 'json' | 'html';
    content: string;
    title?: string;
    description?: string;
  };
  onRun?: () => void;
  showRunButton?: boolean;
}

const OutputViewer: React.FC<OutputViewerProps> = ({ 
  output, 
  onRun, 
  showRunButton = false 
}) => {
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = async () => {
    if (onRun) {
      setIsRunning(true);
      try {
        await onRun();
      } finally {
        setIsRunning(false);
      }
    }
  };

  const handleDownload = () => {
    let blob: Blob;
    let filename: string;
    let mimeType: string;

    switch (output.type) {
      case 'image':
        // For images, we assume content is a data URL or URL
        if (output.content.startsWith('data:')) {
          const response = fetch(output.content);
          response.then(res => res.blob()).then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = output.title || 'output.png';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          });
        } else {
          const a = document.createElement('a');
          a.href = output.content;
          a.download = output.title || 'output.png';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
        return;
      case 'json':
        blob = new Blob([output.content], { type: 'application/json' });
        filename = output.title || 'output.json';
        break;
      case 'html':
        blob = new Blob([output.content], { type: 'text/html' });
        filename = output.title || 'output.html';
        break;
      default:
        blob = new Blob([output.content], { type: 'text/plain' });
        filename = output.title || 'output.txt';
    }

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getOutputIcon = () => {
    switch (output.type) {
      case 'image':
        return <Image size={20} className="text-blue-500" />;
      case 'chart':
        return <BarChart3 size={20} className="text-green-500" />;
      case 'json':
        return <FileText size={20} className="text-purple-500" />;
      case 'html':
        return <FileText size={20} className="text-orange-500" />;
      default:
        return <FileText size={20} className="text-gray-500" />;
    }
  };

  const renderOutput = () => {
    switch (output.type) {
      case 'image':
        return (
          <div className="flex justify-center">
            <img 
              src={output.content} 
              alt={output.title || 'Output'} 
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        );
      case 'json':
        return (
          <pre className="overflow-x-auto p-4 text-sm bg-gray-50 dark:bg-gray-800 rounded-lg">
            <code>{JSON.stringify(JSON.parse(output.content), null, 2)}</code>
          </pre>
        );
      case 'html':
        return (
          <div 
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900"
            dangerouslySetInnerHTML={{ __html: output.content }}
          />
        );
      case 'chart':
        return (
          <div className="flex justify-center items-center h-64 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-center">
              <BarChart3 size={48} className="text-green-500 mx-auto mb-2" />
              <p className="text-gray-600 dark:text-gray-400">Chart visualization would appear here</p>
            </div>
          </div>
        );
      default:
        return (
          <pre className="overflow-x-auto p-4 text-sm bg-gray-50 dark:bg-gray-800 rounded-lg">
            <code>{output.content}</code>
          </pre>
        );
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          {getOutputIcon()}
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {output.title || 'Output'}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">
            {output.type}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          {showRunButton && onRun && (
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition-colors disabled:opacity-50"
              title="Run Code"
            >
              {isRunning ? <Square size={12} /> : <Play size={12} />}
              <span>{isRunning ? 'Running...' : 'Run'}</span>
            </button>
          )}
          
          <button
            onClick={handleDownload}
            className="flex items-center space-x-1 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors"
            title="Download Output"
          >
            <Download size={12} />
            <span>Download</span>
          </button>
        </div>
      </div>

      {/* Description */}
      {output.description && (
        <div className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border-b border-gray-200 dark:border-gray-700">
          <p className="text-sm text-blue-700 dark:text-blue-300">{output.description}</p>
        </div>
      )}

      {/* Output Display */}
      <div className="p-4">
        {renderOutput()}
      </div>
    </div>
  );
};

export default OutputViewer;

