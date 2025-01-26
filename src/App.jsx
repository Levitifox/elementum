import React, { useState, Component } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "katex/dist/katex.min.css";
import "./App.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}

const MarkdownPreview = ({ content }) => {
    return (
        <ReactMarkdown
            children={content}
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                        <SyntaxHighlighter
                            style={materialDark}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                        >
                            {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    );
                },
                p({ children, ...props }) {
                    return <>{children}</>;
                },
            }}
        />
    );
};

const MarkdownEditor = () => {
    const [text, setText] = useState("");

    return (
        <ErrorBoundary>
            <div className="editor">
                <textarea 
                    className="editor-input" 
                    value={text} 
                    onChange={e => setText(e.target.value)} 
                    placeholder="Write your Markdown here..." 
                />
                <div className="editor-preview">
                    <MarkdownPreview content={text} />
                </div>
            </div>
        </ErrorBoundary>
    );
};

export default MarkdownEditor;
