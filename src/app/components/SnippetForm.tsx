// src/app/components/SnippetForm.tsx
import { useState } from 'react';

interface SnippetFormProps {
    onGenerate: (snippetName: string, prefix: string, body: string, description: string) => void;
}

export default function SnippetForm({ onGenerate }: SnippetFormProps) {
    const [snippetName, setSnippetName] = useState('');
    const [prefix, setPrefix] = useState('');
    const [body, setBody] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({ snippetName: '', prefix: '', body: '', description: '' });

    const isFormComplete = snippetName && prefix && body && description;

    // 验证输入框内容
    const validateField = (field: string, value: string) => {
        let error = '';
        if (!value) {
            switch (field) {
                case 'snippetName':
                    error = '片段名称不能为空';
                    break;
                case 'prefix':
                    error = '触发前缀不能为空';
                    break;
                case 'body':
                    error = '代码内容不能为空';
                    break;
                case 'description':
                    error = '描述不能为空';
                    break;
                default:
                    break;
            }
        } else {
            // 额外的正则表达式检查（例如前缀不能包含特殊字符）
            if (field === 'prefix' && /[^a-zA-Z0-9_-]/.test(value)) {
                error = '触发前缀只能包含字母、数字、下划线和连字符';
            }
        }
        return error;
    };

    // 处理输入框的失去焦点事件
    const handleBlur = (field: string, value: string) => {
        const newErrors = { ...errors };
        newErrors[field] = validateField(field, value);
        setErrors(newErrors);
    };

    // 表单提交时的处理逻辑
    const handleGenerate = () => {
        const newErrors = {
            snippetName: validateField('snippetName', snippetName),
            prefix: validateField('prefix', prefix),
            body: validateField('body', body),
            description: validateField('description', description),
        };
        setErrors(newErrors);

        // 检查是否存在任何错误
        if (Object.values(newErrors).some(error => error)) return;

        // 调用父组件的生成函数
        onGenerate(snippetName, prefix, body, description);
    };

    return (
        <div className="space-y-4">
            <div>
                <label htmlFor="snippetName" className="block text-sm font-medium text-gray-700">片段名称</label>
                <input
                    type="text"
                    id="snippetName"
                    value={snippetName}
                    onChange={(e) => setSnippetName(e.target.value)}
                    onBlur={(e) => handleBlur('snippetName', e.target.value)}
                    className={`mt-1 block w-full p-2 border ${errors.snippetName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 shadow-sm`}
                    placeholder="请输入代码片段名称"
                />
                {errors.snippetName && <p className="text-red-500 text-sm mt-1">{errors.snippetName}</p>}
            </div>
            <div>
                <label htmlFor="prefix" className="block text-sm font-medium text-gray-700">触发前缀</label>
                <input
                    type="text"
                    id="prefix"
                    value={prefix}
                    onChange={(e) => setPrefix(e.target.value)}
                    onBlur={(e) => handleBlur('prefix', e.target.value)}
                    className={`mt-1 block w-full p-2 border ${errors.prefix ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 shadow-sm`}
                    placeholder="请输入前缀"
                />
                {errors.prefix && <p className="text-red-500 text-sm mt-1">{errors.prefix}</p>}
            </div>
            <div>
                <label htmlFor="body" className="block text-sm font-medium text-gray-700">代码内容</label>
                <textarea
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    onBlur={(e) => handleBlur('body', e.target.value)}
                    className={`mt-1 block w-full p-2 border ${errors.body ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 shadow-sm`}
                    placeholder="在此输入您的代码片段..."
                    rows={4}
                />
                {errors.body && <p className="text-red-500 text-sm mt-1">{errors.body}</p>}
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">描述</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    onBlur={(e) => handleBlur('description', e.target.value)}
                    className={`mt-1 block w-full p-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 shadow-sm`}
                    placeholder="请输入描述信息"
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>
            <div className="flex justify-center">
                <button
                    onClick={handleGenerate}
                    className={`w-32 py-2 mt-4 rounded-md transition-all duration-300 ease-in-out shadow-md hover:shadow-lg ${isFormComplete ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    disabled={!isFormComplete}
                >
                    生成
                </button>
            </div>
        </div>
    );
}