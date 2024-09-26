// src/app/components/Modal.tsx
import { ReactNode, useEffect, useState } from 'react';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({ isVisible, onClose, children }: ModalProps) {
    const [isFullyVisible, setIsFullyVisible] = useState(false);

    useEffect(() => {
        if (isVisible) {
            // 让弹窗在显示时先缩放再放大
            setTimeout(() => setIsFullyVisible(true), 50); // 稍作延迟以触发弹出动画
        } else {
            setIsFullyVisible(false);
        }
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-700 ease-in-out ${isFullyVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative transform transition-transform duration-700 ease-in-out ${isFullyVisible ? 'scale-100' : 'scale-75'}`}>
                {children}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    ×
                </button>
            </div>
        </div>
    );
}