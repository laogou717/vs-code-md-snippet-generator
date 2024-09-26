// src/app/components/PlaceholderPage.tsx
import React from 'react';

export default function PlaceholderPage({ onReset }: { onReset: () => void }) {
    return (
        <div className="placeholder-page">
            <h1>这是自定义内容区域</h1>
            <button onClick={onReset} className="mt-4 p-3 bg-blue-500 text-white rounded-lg">
                返回主页
            </button>
        </div>
    );
}