import { useState } from 'react';

interface SnippetOutputProps {
    snippetOutput: string;
    onCopy: () => void;
}

export default function SnippetOutput({ snippetOutput, onCopy }: SnippetOutputProps) {
    const [copySuccess, setCopySuccess] = useState(false);

    const handleCopy = () => {
        onCopy();
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // 2秒后恢复原始状态
    };

    const isSnippetGenerated = snippetOutput !== '生成的代码片段将显示在这里...';

    return (
        <div className="mt-4 mb-4">
            <h2 className="text-lg font-medium text-gray-900">生成的代码片段：</h2>
            {/* 设置 max-height 和 overflow 来控制 <pre> 的滚动 */}
            <pre className="mt-2 p-4 bg-gray-100 rounded-md overflow-auto" style={{ maxHeight: '300px' }}>
                {snippetOutput}
            </pre>
            <div className="flex justify-center">
                <button
                    onClick={handleCopy}
                    className={`w-32 py-2 mt-4 rounded-md transition ${isSnippetGenerated ? (copySuccess ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gray-800') : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    disabled={!isSnippetGenerated}
                >
                    {copySuccess ? '✔ 已复制' : '复制'}
                </button>
            </div>
        </div>
    );
}