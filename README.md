# 🌟 VS Code 自定义代码片段生成器
> **一款针对 VS Code 的自定义代码片段功能的快捷配置工具**，专注于 Markdown 片段配置。文档由AI生成

## 📋 目录

- [🌟 VS Code 自定义代码片段生成器](#-vs-code-自定义代码片段生成器)
  - [📋 目录](#-目录)
  - [✨ 功能介绍](#-功能介绍)
    - [🎯 主要特点](#-主要特点)
  - [🌐 使用方式](#-使用方式)
    - [在线使用 🌎](#在线使用-)
    - [本地运行 ⚙️](#本地运行-️)
  - [⚙️ 在 VS Code 中配置自定义片段](#️-在-vs-code-中配置自定义片段)
  - [⚡ 配置说明](#-配置说明)
  - [🚀 适用场景](#-适用场景)
  - [📝 注意事项](#-注意事项)

## ✨ 功能介绍

每次写 Markdown 博客时，是否常常忘记一些特定标签的格式？这个工具旨在帮助你快速生成自定义代码片段，针对 VS Code 中的 `markdown.json` 文件配置，帮助你更轻松地管理 Markdown 文档。

### 🎯 主要特点

- **快速调用**：通过输入自定义的片段前缀，快速生成 Markdown 标签。
- **多语言支持**：不仅适用于 `markdown.json`，还支持其他语言配置文件，如 `css.json`、`javascript.json`、`yaml.json` 等。
- **YAML 元数据支持**：通过在 `yaml.json` 中配置，实现对 Markdown 文档中 `---` 分割线区域（Front Matter）的快速插入。

> **特别说明**：在 Markdown 文件头部常见的 `---` 分割线区域（Front Matter）中定义的元数据，请在 `yaml.json` 文件中进行配置，以确保符合语法要求。

## 🌐 使用方式

### 在线使用 🌎

这款工具可以直接在线使用，无需本地运行。由于其架构非常简单，所以没必要自己在本地弄,除非你想自己改着玩✅
 - [点击在线体验](https://mdcode.laogou717.com)

### 本地运行 ⚙️

尽管在线使用已经足够便利，你也可以将项目下载到本地进行运行。项目使用了 **Next.js** 构建，虽然有些“大材小用”，但它可以帮助你更好地进行本地调试和开发。运行方式如下：

1. 克隆或下载项目到本地。
2. 在根目录下执行以下命令启动开发环境：

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

3. 打开浏览器并访问 `http://localhost:3000` 即可看到项目运行。

## ⚙️ 在 VS Code 中配置自定义片段

要在 VS Code 中配置自定义代码片段，请按照以下步骤操作：

1. **打开代码片段配置**：
   - 按下快捷键 `Ctrl + Shift + P`（Windows/Linux）或 `Cmd + Shift + P`（Mac），呼出命令面板。
   - 输入 `Preferences: Configure User Snippets` 并按下 `Enter`。

2. **选择文件类型**：
   - 在弹出的文件类型列表中，选择 `markdown.json` 来为 Markdown 文件配置片段。如果你要配置其他语言，如 YAML，则选择 `yaml.json`。

3. **编写自定义片段**：
   - 打开 `markdown.json` 文件后，你将看到一个模板结构。你可以按照以下格式添加自定义片段：

    ```json
    {
      中间一堆配置规则 
    }

    ```
我们不必理会直接把在网页中生成的内容粘贴这里,就像下面这样👇

    ```json
    {
    "封面设置": {
        "prefix": "cover",
        "body": [
            "cover: ${1:${CLIPBOARD/(http)(:\\/\\/[^\\s)]+)/https$2/}}"
        ],
        "description": "文章封面，自动识别剪贴板链接"
    }
}

    ```

    

    - **`prefix`**: 触发片段的关键词，比如输入 `cover` 然后按 `Tab` 或 `Ctrl + Space` 触发。
    - **`body`**: 代码片段的主体，可以包含占位符（如 `$1`、`${1:default}`）和变量（如 `$CLIPBOARD`）。
    - **`description`**: 对片段的描述，方便在片段列表中识别。

1. **保存配置**：在 `markdown.json` 或其他语言的配置文件中编写好片段后，保存文件。VS Code 会自动加载这些配置。

2. **使用自定义片段**：
   - 在 Markdown 文件中，输入片段的前缀（如 `cover`），然后按下 `Tab` 键或 `Ctrl + Space`，即会自动插入配置的代码片段。

## ⚡ 配置说明

| 配置文件          | 描述                                             | 是否推荐使用 |
| ----------------- | ------------------------------------------------ | ------------ |
| `markdown.json`   | 主要用于 Markdown 文件片段的自定义配置。         | ✅            |
| `yaml.json`       | 用于配置 Markdown 文件头部（Front Matter）元数据 | ✅            |
| `css.json`        | 用于自定义 CSS 片段。                            | 可选         |
| `javascript.json` | 用于 JavaScript 片段的快速插入。                 | 可选         |

## 🚀 适用场景

- **📖 博客写作**：方便插入常用的 Markdown 标签，如文章封面、标签、关键词等，不再担心忘记格式。
- **🗂️ 日常记录**：无论是工作笔记、学习笔记，还是简单的代码记录，都可以用自定义片段提升效率。
- **💻 代码片段管理**：不仅限于 Markdown，还可将片段配置扩展到 CSS、JavaScript 等多种语言，让你的开发更加高效。

## 📝 注意事项

- **元数据配置**：Markdown 文件头部的元数据一般使用 YAML 格式，因此建议在 `yaml.json` 中配置对应的代码片段，以实现快捷插入。⚠️
- **通用性**：尽管此工具主要针对 Markdown，但它的配置规则在 VS Code 的大多数文件类型中都通用，放心使用。✅
- **快速提示**：为确保片段可以正确触发，请在 VS Code 中使用快捷键 `Ctrl + Space`（或 `Cmd + Space`）呼出片段提示。

---

**💡 小贴士**：如果你在使用过程中遇到任何问题或有新的想法，欢迎通过 GitHub 提交 Issue 或 PR，期待你的贡献！


