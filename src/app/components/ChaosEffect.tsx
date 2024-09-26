// src/app/components/ChaosEffect.tsx
import React from 'react';
import './chaosEffect.css'; // 引入自定义的动画效果

export default function ChaosEffect({ children }: { children: React.ReactNode }) {
    return (
        <div className="chaos-container">
            {children}
        </div>
    );
}