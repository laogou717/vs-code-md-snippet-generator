"use client";
import { useState } from 'react';
import Head from 'next/head';  // 引入 Head 组件
import SnippetForm from './components/SnippetForm';
import SnippetOutput from './components/SnippetOutput';
import Modal from './components/Modal';
import confetti from 'canvas-confetti';

export default function Home() {
  const [snippetOutput, setSnippetOutput] = useState('生成的代码片段将显示在这里...');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const generateSnippet = (snippetName: string, prefix: string, body: string, description: string) => {
    const bodyLines = body.split('\n');
    const snippet = {
      [snippetName]: {
        prefix: prefix,
        body: bodyLines,
        description: description,
      },
    };

    let snippetString = JSON.stringify(snippet, null, 4);
    snippetString = snippetString.slice(1, -1);
    snippetString += ",";

    setSnippetOutput(snippetString);
    setIsModalVisible(true);
  };

  const copySnippet = () => {
    navigator.clipboard.writeText(snippetOutput).then(() => {
      triggerConfetti();
    });
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 60,
      origin: { x: 0.5, y: 0.5 },
      startVelocity: 30,
      decay: 0.9,
      scalar: 1.2,
      ticks: 200,
    });
  };

  return (
    <>
      {/* 添加网站的元数据 */}
      <Head>
        <title>VsCode-MD-DIY片段生成器</title>
        <meta name="description" content="一个帮助您md文档生成常用代码片段的工具，方便快捷。" />
        <meta name="keywords" content="代码片段, 代码生成, 前端工具, 开发工具, 编程" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 pt-24">
        {/* 顶部导航栏 */}
        <nav className="w-full p-2 bg-white shadow-md fixed top-0 left-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">VsCode-MD-DIY片段生成器</h1>
            <div className="flex space-x-4">
              <a href="https://www.laogou717.com/2024/09/27/Github/vscode-md-diy" className="text-gray-500 hover:text-black">相关博文</a>
              <a href="https://github.com/laogou717/vs-code-md-snippet-generator" className="text-gray-500 hover:text-black">开源地址</a>
              <a href="https://space.bilibili.com/46377861" className="text-gray-500 hover:text-black">更多</a>
            </div>
          </div>
        </nav>

        {/* 引导内容 */}
        <section className="text-center my-12 px-4">
          <h2 className="text-3xl font-bold mb-4">欢迎使用代码片段生成器</h2>
          <p className="text-gray-600">快速生成您需要的代码片段，方便复制和使用。只针对Markdown,因为我要用这个写博客。🎉</p>
        </section>

        {/* 表单和输出区域 */}
        <div className="container max-w-xl p-8 bg-white rounded-lg shadow-md">
          <SnippetForm onGenerate={generateSnippet} />
        </div>

        {/* 弹窗 */}
        <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}>
          <SnippetOutput snippetOutput={snippetOutput} onCopy={copySnippet} />
        </Modal>

        {/* 页脚 */}
        <footer className="mt-10 py-4 bg-gray-100 text-center w-full">
          <div className="flex justify-center space-x-4">
            <a href="https://github.com" className="text-gray-500 hover:text-black">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="https://www.bilibili.com" className="text-gray-500 hover:text-black">
              <i className="fab fa-bilibili text-2xl"></i>
            </a>
          </div>
          <p className="mt-2 text-sm text-gray-500">&copy; 2024 你的公司. 保留所有权利。</p>
        </footer>
      </main>
    </>
  );
}