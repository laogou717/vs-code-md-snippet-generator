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
            setTimeout(() => setIsFullyVisible(true), 50);
        } else {
            setIsFullyVisible(false);
        }
    }, [isVisible]);

    // 点击弹窗外部时关闭弹窗
    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-700 ease-in-out ${isFullyVisible ? 'opacity-100' : 'opacity-0'} modal-overlay`}
            onClick={handleOutsideClick} // 绑定点击事件到遮罩层
        >
            <div
                className={`bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative transform transition-transform duration-700 ease-in-out ${isFullyVisible ? 'scale-100' : 'scale-75'}`}
                style={{ maxHeight: '80vh', overflowY: 'auto', maxWidth: '45%' }}
            >
                {/* 关闭按钮 */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    ×
                </button>

                {/* 内容区域 */}
                <div style={{ paddingTop: '40px' }}>
                    {children}
                </div>
            </div>
        </div>
    );
}
