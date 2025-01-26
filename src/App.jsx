import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "katex/dist/katex.min.css";
import "./App.css";

const MarkdownPreview = ({ text }) => {
    return (
        <ReactMarkdown
            children={text}
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                        <SyntaxHighlighter style={materialDark} language={match[1]} PreTag="div" {...props}>
                            {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    );
                },
            }}
        />
    );
};

const MarkdownEditor = () => {
    const [text, setText] = useState("");

    return (
        <div className="editor">
            <textarea className="editor-input" value={text} onChange={e => setText(e.target.value)} placeholder="Write your Markdown here..." />
            <div className="editor-preview">
                <MarkdownPreview text={text} />
            </div>
        </div>
    );
};

export default MarkdownEditor;
