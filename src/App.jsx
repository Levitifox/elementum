import React, { useState, useEffect, Component, useCallback } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "katex/dist/katex.min.css";
import "./App.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const { ipcRenderer } = window.require ? window.require("electron") : { ipcRenderer: null };

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
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
    const placeholderPhrases = [
        "Every great idea starts with a blank page.",
        "Write your way into history.",
        "Dream it. Note it. Build it.",
        "Big things have small beginnings.",
        "Thoughts become plans, plans become actions.",
        "Scribble, doodle, conquer!",
        "The page is yours. Go wild.",
        "What secrets will you spill here?",
        "Your imagination called—it needs more space.",
        "This is your brain's playground.",
        "You could write anything here. No pressure.",
        "This blank space is judging your indecision.",
        "One day, this might be a best-seller.",
        "Markdown your mark on the world!",
        "A masterpiece in progress (hopefully).",
        "There’s 10 types of people in the world: those who write notes, and those who don’t.",
        "Insert genius idea here.",
        "Ctrl+Z is your safety net. Use it wisely.",
        "The matrix of your ideas starts here.",
        "Stay calm and Markdown on.",
        "Let your thoughts flow freely.",
        "Your next big idea starts here.",
        "Turn your brainwaves into pagewaves.",
        "Every word matters. Start now.",
        "Write something amazing today."
    ];

    const [tabs, setTabs] = useState([]);
    const [activeTabId, setActiveTabId] = useState(null);

    useEffect(() => {
        ipcRenderer.invoke("load-notes").then((loadedNotes) => {
            if (loadedNotes.length > 0) {
                setTabs(loadedNotes);
                setActiveTabId(loadedNotes[0].id);
            } else {
                addTab();
            }
        });
    }, []);

    const getRandomPlaceholder = () =>
        placeholderPhrases[Math.floor(Math.random() * placeholderPhrases.length)];

    const addTab = () => {
        const newTab = { id: Date.now().toString(), text: "" };
        setTabs((prevTabs) => [...prevTabs, newTab]);
        setActiveTabId(newTab.id);
        ipcRenderer.send("save-note", newTab);
    };

    const removeTab = (id) => {
        ipcRenderer.send("delete-note", id);
        setTabs((prevTabs) => {
            const updatedTabs = prevTabs.filter((tab) => tab.id !== id);
            if (updatedTabs.length === 0) {
                addTab();
                return [];
            }
            if (activeTabId === id) {
                setActiveTabId(updatedTabs[0].id);
            }
            return updatedTabs;
        });
    };

    const debounce = (fn, delay = 500) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    };

    const saveNote = useCallback(
        debounce((id, text) => {
            ipcRenderer.send("save-note", { id, text });
        }),
        []
    );

    const updateText = (id, newText) => {
        setTabs((prevTabs) =>
            prevTabs.map((tab) => (tab.id === id ? { ...tab, text: newText } : tab))
        );
        saveNote(id, newText);
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
                            {tab.text.trim().substring(0, 10) || "Untitled"}
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
                            placeholder={getRandomPlaceholder()}
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
