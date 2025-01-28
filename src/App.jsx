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
    const [tabs, setTabs] = useState([{ id: 1, text: "" }]);
    const [activeTabId, setActiveTabId] = useState(1);

    const addTab = () => {
        const newTabId = tabs.length + 1;
        setTabs([...tabs, { id: newTabId, text: "" }]);
        setActiveTabId(newTabId);
    };

    const removeTab = (id) => {
        const updatedTabs = tabs.filter((tab) => tab.id !== id);
        setTabs(updatedTabs);
        if (activeTabId === id && updatedTabs.length > 0) {
            setActiveTabId(updatedTabs[0].id);
        } else if (updatedTabs.length === 0) {
            setActiveTabId(null);
        }
    };

    const updateText = (id, newText) => {
        setTabs(
            tabs.map((tab) =>
                tab.id === id ? { ...tab, text: newText } : tab
            )
        );
    };

    const activeTab = tabs.find((tab) => tab.id === activeTabId);

    return (
        <ErrorBoundary>
            <div className="editor-container">
                <div className="tab-headers">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`tab-header ${
                                tab.id === activeTabId ? "active" : ""
                            }`}
                            onClick={() => setActiveTabId(tab.id)}
                        >
                            {tab.text.trim().substring(0, 10) || "Untitled   "}
                            {tab.text.length > 10 && "…"}
                            <button
                                className="close-tab-button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeTab(tab.id);
                                }}
                            >
                                ×
                            </button>
                        </div>
                    ))}
                    <button className="add-tab-button" onClick={addTab}>
                        +
                    </button>
                </div>

                {activeTab && (
                    <div className="tab-content">
                        <textarea
                            className="editor-input"
                            value={activeTab.text}
                            onChange={(e) =>
                                updateText(activeTab.id, e.target.value)
                            }
                            placeholder="Write your Markdown here..."
                        />
                        <div className="editor-preview">
                            <MarkdownPreview content={activeTab.text} />
                        </div>
                    </div>
                )}
            </div>
        </ErrorBoundary>
    );
};

export default MarkdownEditor;
