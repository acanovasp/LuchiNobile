(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/SplashScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SplashScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const LOGO_TEXT = 'Luchi Nóbile';
const TYPING_DURATION = 1200 // 1.2s for typing
;
const HOLD_DURATION = 1500 // 2.5s hold after typing (increased by 1s)
;
const LOGO_HEAD_START = 250 // background starts fading 1s after logo starts
;
const BG_FADE_DURATION = 1200 // background fades in 1.2s
;
function SplashScreen({ onComplete, minDuration = 3500 }) {
    _s();
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLogoFading, setIsLogoFading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isBgFading, setIsBgFading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHidden, setIsHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Typing animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplashScreen.useEffect": ()=>{
            let currentIndex = 0;
            const charDelay = TYPING_DURATION / LOGO_TEXT.length;
            const typeInterval = setInterval({
                "SplashScreen.useEffect.typeInterval": ()=>{
                    currentIndex++;
                    setDisplayedText(LOGO_TEXT.slice(0, currentIndex));
                    if (currentIndex >= LOGO_TEXT.length) {
                        clearInterval(typeInterval);
                    }
                }
            }["SplashScreen.useEffect.typeInterval"], charDelay);
            return ({
                "SplashScreen.useEffect": ()=>clearInterval(typeInterval)
            })["SplashScreen.useEffect"];
        }
    }["SplashScreen.useEffect"], []);
    // Main sequence - wait for minimum duration then fade out
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplashScreen.useEffect": ()=>{
            const startTime = Date.now();
            const runSequence = {
                "SplashScreen.useEffect.runSequence": async ()=>{
                    // Wait for minimum duration (typing + hold)
                    const totalAnimationTime = TYPING_DURATION + HOLD_DURATION;
                    const waitTime = Math.max(minDuration, totalAnimationTime);
                    await new Promise({
                        "SplashScreen.useEffect.runSequence": (resolve)=>setTimeout(resolve, waitTime)
                    }["SplashScreen.useEffect.runSequence"]);
                    // Start logo fade first
                    setIsLogoFading(true);
                    // Start background fade 1 second later
                    setTimeout({
                        "SplashScreen.useEffect.runSequence": ()=>{
                            setIsBgFading(true);
                        }
                    }["SplashScreen.useEffect.runSequence"], LOGO_HEAD_START);
                    // Hide and complete after background fade finishes
                    setTimeout({
                        "SplashScreen.useEffect.runSequence": ()=>{
                            setIsHidden(true);
                            onComplete();
                        }
                    }["SplashScreen.useEffect.runSequence"], LOGO_HEAD_START + BG_FADE_DURATION);
                }
            }["SplashScreen.useEffect.runSequence"];
            runSequence();
        }
    }["SplashScreen.useEffect"], [
        minDuration,
        onComplete
    ]);
    if (isHidden) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `splash ${isBgFading ? 'splash--fading' : ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: `splash__logo ${isLogoFading ? 'splash__logo--fading' : ''}`,
            children: displayedText
        }, void 0, false, {
            fileName: "[project]/components/SplashScreen.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/SplashScreen.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(SplashScreen, "aen/3nSdu8qRCh4hm5eDQrVL9q8=");
_c = SplashScreen;
var _c;
__turbopack_context__.k.register(_c, "SplashScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ScrollContainer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollContainer,
    "useScrollContext",
    ()=>useScrollContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const ScrollContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useScrollContext() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ScrollContext);
    if (!context) {
        throw new Error('useScrollContext must be used within ScrollContainer');
    }
    return context;
}
_s(useScrollContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function ScrollContainer({ children, initialSection = 0, onSectionChange }) {
    _s1();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentSection, setCurrentSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSection);
    const [isAtTop, setIsAtTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [totalSections, setTotalSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Count sections on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollContainer.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const sections = container.querySelectorAll('.section');
            setTotalSections(sections.length);
        }
    }["ScrollContainer.useEffect"], [
        children
    ]);
    // Scroll to initial section on mount - use useLayoutEffect to prevent flash
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "ScrollContainer.useLayoutEffect": ()=>{
            const container = containerRef.current;
            if (!container || initialSection === 0) return;
            const sections = container.querySelectorAll('.section');
            if (sections[initialSection]) {
                const section = sections[initialSection];
                container.scrollTop = section.offsetTop;
            }
        }
    }["ScrollContainer.useLayoutEffect"], [
        initialSection
    ]);
    // Detect current section based on scroll position
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollContainer.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const handleScroll = {
                "ScrollContainer.useEffect.handleScroll": ()=>{
                    const sections = container.querySelectorAll('.section');
                    const scrollTop = container.scrollTop;
                    const viewportHeight = container.clientHeight;
                    // Find which section the middle of the viewport is in
                    const viewportMiddle = scrollTop + viewportHeight / 2;
                    let activeIndex = 0;
                    sections.forEach({
                        "ScrollContainer.useEffect.handleScroll": (section, index)=>{
                            const sectionElement = section;
                            const sectionTop = sectionElement.offsetTop;
                            const sectionBottom = sectionTop + sectionElement.offsetHeight;
                            if (viewportMiddle >= sectionTop && viewportMiddle < sectionBottom) {
                                activeIndex = index;
                            }
                        }
                    }["ScrollContainer.useEffect.handleScroll"]);
                    if (activeIndex !== currentSection) {
                        setCurrentSection(activeIndex);
                        onSectionChange?.(activeIndex);
                    }
                }
            }["ScrollContainer.useEffect.handleScroll"];
            container.addEventListener('scroll', handleScroll, {
                passive: true
            });
            handleScroll(); // Initial check
            return ({
                "ScrollContainer.useEffect": ()=>container.removeEventListener('scroll', handleScroll)
            })["ScrollContainer.useEffect"];
        }
    }["ScrollContainer.useEffect"], [
        children,
        onSectionChange,
        currentSection
    ]);
    // Track if at top of scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollContainer.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const handleScroll = {
                "ScrollContainer.useEffect.handleScroll": ()=>{
                    const scrollTop = container.scrollTop;
                    setIsAtTop(scrollTop < 10);
                }
            }["ScrollContainer.useEffect.handleScroll"];
            container.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "ScrollContainer.useEffect": ()=>container.removeEventListener('scroll', handleScroll)
            })["ScrollContainer.useEffect"];
        }
    }["ScrollContainer.useEffect"], []);
    const scrollToSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScrollContainer.useCallback[scrollToSection]": (index)=>{
            const container = containerRef.current;
            if (!container) return;
            const sections = container.querySelectorAll('.section');
            const section = sections[index];
            if (section) {
                container.scrollTo({
                    top: section.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    }["ScrollContainer.useCallback[scrollToSection]"], []);
    const contextValue = {
        currentSection,
        totalSections,
        scrollToSection,
        isAtTop,
        containerRef
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "scroll-container",
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ScrollContainer.tsx",
            lineNumber: 143,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ScrollContainer.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_s1(ScrollContainer, "zwbcpS7IRx2/OYor6T/7ssJBYbs=");
_c = ScrollContainer;
var _c;
__turbopack_context__.k.register(_c, "ScrollContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/LocalVideoBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocalVideoBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function LocalVideoBackground({ videoUrl, className = '' }) {
    _s();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocalVideoBackground.useEffect": ()=>{
            const video = videoRef.current;
            if (!video) return;
            // Ensure video plays
            video.play().catch({
                "LocalVideoBackground.useEffect": ()=>{
                // Autoplay might be blocked, that's okay
                }
            }["LocalVideoBackground.useEffect"]);
        }
    }["LocalVideoBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `project-section__video-container ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "project-section__local-video-wrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    ref: videoRef,
                    src: videoUrl,
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true,
                    preload: "auto",
                    className: "project-section__local-video"
                }, void 0, false, {
                    fileName: "[project]/components/LocalVideoBackground.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/LocalVideoBackground.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "project-section__overlay"
            }, void 0, false, {
                fileName: "[project]/components/LocalVideoBackground.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LocalVideoBackground.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(LocalVideoBackground, "PdMsmLAy5JKU3vCrhAlqGYQfKuA=");
_c = LocalVideoBackground;
var _c;
__turbopack_context__.k.register(_c, "LocalVideoBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProjectSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LocalVideoBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LocalVideoBackground.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function ProjectSection({ project, index }) {
    const handleClick = ()=>{
        // Store the section index to return to after closing video player
        sessionStorage.setItem('returnSection', String(index));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section project-section",
        "data-section-index": index,
        "data-project-slug": project.slug.current,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/project/${project.slug.current}`,
            onClick: handleClick,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LocalVideoBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                videoUrl: project.previewVideoUrl
            }, void 0, false, {
                fileName: "[project]/components/ProjectSection.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ProjectSection.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ProjectSection.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = ProjectSection;
var _c;
__turbopack_context__.k.register(_c, "ProjectSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AboutOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function AboutOverlay({ isVisible, aboutText, contactEmail, onClose }) {
    _s();
    // Split text into paragraphs
    const paragraphs = aboutText.split('\n\n').filter(Boolean);
    // Track wheel events for scroll-down-to-close
    const wheelAccumulator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastWheelTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const handleWheel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AboutOverlay.useCallback[handleWheel]": (e)=>{
            if (!isVisible) return;
            const now = Date.now();
            // Reset accumulator if too much time passed
            if (now - lastWheelTime.current > 300) {
                wheelAccumulator.current = 0;
            }
            lastWheelTime.current = now;
            // Close on scroll down (positive deltaY)
            if (e.deltaY > 0) {
                wheelAccumulator.current += Math.abs(e.deltaY);
                if (wheelAccumulator.current > 50) {
                    onClose();
                    wheelAccumulator.current = 0;
                }
            } else {
                wheelAccumulator.current = 0;
            }
        }
    }["AboutOverlay.useCallback[handleWheel]"], [
        isVisible,
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `about-overlay ${isVisible ? 'about-overlay--visible' : ''}`,
        onClick: onClose,
        onWheel: handleWheel,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "About",
        children: [
            contactEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: `mailto:${contactEmail}`,
                className: "about-overlay__email",
                onClick: (e)=>e.stopPropagation(),
                children: contactEmail
            }, void 0, false, {
                fileName: "[project]/components/AboutOverlay.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "about-overlay__content",
                onClick: (e)=>e.stopPropagation(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "about-overlay__text",
                    children: paragraphs.map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: paragraph
                        }, index, false, {
                            fileName: "[project]/components/AboutOverlay.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/AboutOverlay.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AboutOverlay.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AboutOverlay.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(AboutOverlay, "RTTem6nsgnEY7J0yo+6AnWsPsnc=");
_c = AboutOverlay;
var _c;
__turbopack_context__.k.register(_c, "AboutOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ScrollIndicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ScrollIndicator({ projects, currentSection, isAboutVisible, isArchiveActive, onAboutClick, onArchiveClick, onProjectClick }) {
    _s();
    // Get current project info
    const currentProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ScrollIndicator.useMemo[currentProject]": ()=>{
            if (currentSection >= 0 && currentSection < projects.length) {
                return projects[currentSection];
            }
            return null;
        }
    }["ScrollIndicator.useMemo[currentProject]"], [
        currentSection,
        projects
    ]);
    // Calculate which of the 7 positions we're at (0=about, 1-5=projects, 6=archive)
    const activePosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ScrollIndicator.useMemo[activePosition]": ()=>{
            if (isAboutVisible) return 0;
            if (isArchiveActive) return 6;
            return currentSection + 1 // 1-5 for projects
            ;
        }
    }["ScrollIndicator.useMemo[activePosition]"], [
        isAboutVisible,
        isArchiveActive,
        currentSection
    ]);
    // Show project info only for project sections (not About or Archive)
    const showProjectInfo = !isAboutVisible && !isArchiveActive && currentProject;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `indicator-left ${isArchiveActive ? 'indicator--dark' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "indicator-left__items",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `indicator-left__item ${isAboutVisible ? 'indicator-left__item--active' : ''}`,
                                onClick: onAboutClick,
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/components/ScrollIndicator.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `indicator-left__item ${currentSection === index && !isArchiveActive && !isAboutVisible ? 'indicator-left__item--active' : ''}`,
                                    onClick: ()=>onProjectClick(index),
                                    children: String(index + 1).padStart(2, '0')
                                }, project._id, false, {
                                    fileName: "[project]/components/ScrollIndicator.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `indicator-left__item ${isArchiveActive ? 'indicator-left__item--active' : ''}`,
                                onClick: onArchiveClick,
                                children: "Archive"
                            }, void 0, false, {
                                fileName: "[project]/components/ScrollIndicator.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ScrollIndicator.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    showProjectInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "indicator-left__project-info",
                        style: {
                            '--marker-position': activePosition
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "indicator-left__title",
                                children: currentProject.title
                            }, void 0, false, {
                                fileName: "[project]/components/ScrollIndicator.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "indicator-left__client",
                                children: currentProject.client
                            }, void 0, false, {
                                fileName: "[project]/components/ScrollIndicator.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ScrollIndicator.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ScrollIndicator.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `indicator-right ${isArchiveActive ? 'indicator--dark' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "indicator-right__items",
                    children: [
                        [
                            0,
                            1,
                            2,
                            3,
                            4,
                            5,
                            6
                        ].map((position)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `indicator-right__item ${activePosition === position ? 'indicator-right__item--active' : ''}`,
                                onClick: ()=>{
                                    if (position === 0) onAboutClick();
                                    else if (position === 6) onArchiveClick();
                                    else onProjectClick(position - 1);
                                },
                                children: position >= 1 && position <= 5 && String(position).padStart(2, '0')
                            }, position, false, {
                                fileName: "[project]/components/ScrollIndicator.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "indicator-right__marker",
                            style: {
                                '--marker-position': activePosition
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ScrollIndicator.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ScrollIndicator.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ScrollIndicator.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `header ${isArchiveActive ? 'indicator--dark' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "header__logo",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onProjectClick(0),
                        children: "Luchi Nóbile"
                    }, void 0, false, {
                        fileName: "[project]/components/ScrollIndicator.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ScrollIndicator.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ScrollIndicator.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ScrollIndicator, "qZstyH2sC99VA7cx8I8+rbE1mak=");
_c = ScrollIndicator;
var _c;
__turbopack_context__.k.register(_c, "ScrollIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/sanity.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "client",
    ()=>client,
    "urlFor",
    ()=>urlFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/client/dist/index.browser.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/image-url/lib/index.js [app-client] (ecmascript) <locals>");
;
;
const projectId = ("TURBOPACK compile-time value", "sxz4wjzb");
const dataset = ("TURBOPACK compile-time value", "production") || 'production';
const client = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    useCdn: true
}) : "TURBOPACK unreachable";
function urlFor(source) {
    if (!client) {
        // Return a mock builder that returns empty URL
        return {
            width: ()=>({
                    height: ()=>({
                            url: ()=>''
                        })
                }),
            height: ()=>({
                    width: ()=>({
                            url: ()=>''
                        })
                }),
            url: ()=>''
        };
    }
    const builder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(client);
    return builder.image(source);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ArchiveGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArchiveGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sanity.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ArchiveGrid({ projects }) {
    _s();
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visibleItems, setVisibleItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    // Lazy load thumbnails as they come into view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArchiveGrid.useEffect": ()=>{
            const grid = gridRef.current;
            if (!grid) return;
            const observer = new IntersectionObserver({
                "ArchiveGrid.useEffect": (entries)=>{
                    entries.forEach({
                        "ArchiveGrid.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                const id = entry.target.getAttribute('data-project-id');
                                if (id) {
                                    setVisibleItems({
                                        "ArchiveGrid.useEffect": (prev)=>{
                                            const newSet = new Set(prev);
                                            newSet.add(id);
                                            return newSet;
                                        }
                                    }["ArchiveGrid.useEffect"]);
                                }
                            }
                        }
                    }["ArchiveGrid.useEffect"]);
                }
            }["ArchiveGrid.useEffect"], {
                root: null,
                rootMargin: '200px',
                threshold: 0
            });
            const items = grid.querySelectorAll('.archive__item');
            items.forEach({
                "ArchiveGrid.useEffect": (item)=>observer.observe(item)
            }["ArchiveGrid.useEffect"]);
            return ({
                "ArchiveGrid.useEffect": ()=>observer.disconnect()
            })["ArchiveGrid.useEffect"];
        }
    }["ArchiveGrid.useEffect"], [
        projects
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section section--archive archive",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: gridRef,
            className: "archive__grid",
            children: projects.map((project, index)=>{
                const isVisible = visibleItems.has(project._id);
                const isLarge = project.archiveSize === 'large';
                const projectNumber = String(index + 1).padStart(2, '0');
                // Get thumbnail URL from Sanity
                const thumbnailUrl = project.thumbnail ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlFor"])(project.thumbnail).width(800).height(450).url() : null;
                const handleClick = ()=>{
                    // Store 'archive' to return to archive section after closing video player
                    sessionStorage.setItem('returnSection', 'archive');
                };
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: `/project/${project.slug.current}`,
                    className: `archive__item ${isLarge ? 'archive__item--large' : ''}`,
                    "data-project-id": project._id,
                    onClick: handleClick,
                    children: [
                        isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "archive__thumbnail",
                            children: isLarge && project.previewVideoUrl ? // Large items show preview video
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                src: project.previewVideoUrl,
                                autoPlay: true,
                                loop: true,
                                muted: true,
                                playsInline: true,
                                className: "archive__video"
                            }, void 0, false, {
                                fileName: "[project]/components/ArchiveGrid.tsx",
                                lineNumber: 80,
                                columnNumber: 21
                            }, this) : thumbnailUrl ? // Small items show thumbnail image
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: thumbnailUrl,
                                alt: project.title,
                                fill: true,
                                sizes: isLarge ? '66vw' : '33vw',
                                style: {
                                    objectFit: 'cover'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ArchiveGrid.tsx",
                                lineNumber: 90,
                                columnNumber: 21
                            }, this) : // Fallback placeholder
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "archive__placeholder"
                            }, void 0, false, {
                                fileName: "[project]/components/ArchiveGrid.tsx",
                                lineNumber: 99,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ArchiveGrid.tsx",
                            lineNumber: 77,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "archive__item-overlay"
                        }, void 0, false, {
                            fileName: "[project]/components/ArchiveGrid.tsx",
                            lineNumber: 103,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "archive__item-info",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "archive__item-number",
                                    children: projectNumber
                                }, void 0, false, {
                                    fileName: "[project]/components/ArchiveGrid.tsx",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "archive__item-info-container",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "archive__item-title",
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/ArchiveGrid.tsx",
                                            lineNumber: 107,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "archive__item-client",
                                            children: project.client
                                        }, void 0, false, {
                                            fileName: "[project]/components/ArchiveGrid.tsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ArchiveGrid.tsx",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ArchiveGrid.tsx",
                            lineNumber: 104,
                            columnNumber: 15
                        }, this)
                    ]
                }, project._id, true, {
                    fileName: "[project]/components/ArchiveGrid.tsx",
                    lineNumber: 69,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/ArchiveGrid.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ArchiveGrid.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(ArchiveGrid, "ocrMw6uyZ1SvVIr2e0MA+Fzb6hI=");
_c = ArchiveGrid;
var _c;
__turbopack_context__.k.register(_c, "ArchiveGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MainPageClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainPageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SplashScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SplashScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScrollContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ScrollContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProjectSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AboutOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AboutOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScrollIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ScrollIndicator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ArchiveGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ArchiveGrid.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function MainPageContent({ featuredProjects, allProjects, siteSettings, isAboutVisible, setIsAboutVisible }) {
    _s();
    const { currentSection, scrollToSection, containerRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScrollContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollContext"])();
    const wheelAccumulator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastWheelTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Handle wheel events for opening/closing About
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainPageContent.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const handleWheel = {
                "MainPageContent.useEffect.handleWheel": (e)=>{
                    // Reset accumulator if too much time passed
                    const now = Date.now();
                    if (now - lastWheelTime.current > 300) {
                        wheelAccumulator.current = 0;
                    }
                    lastWheelTime.current = now;
                    if (isAboutVisible) {
                        // Close About by scrolling down (positive deltaY)
                        if (e.deltaY > 0) {
                            wheelAccumulator.current += Math.abs(e.deltaY);
                            if (wheelAccumulator.current > 50) {
                                setIsAboutVisible(false);
                                wheelAccumulator.current = 0;
                            }
                        } else {
                            wheelAccumulator.current = 0;
                        }
                    } else {
                        // Open About by scrolling up while at project 1
                        if (currentSection !== 0 || container.scrollTop > 10) {
                            wheelAccumulator.current = 0;
                            return;
                        }
                        if (e.deltaY < 0) {
                            wheelAccumulator.current += Math.abs(e.deltaY);
                            if (wheelAccumulator.current > 100) {
                                setIsAboutVisible(true);
                                wheelAccumulator.current = 0;
                            }
                        } else {
                            wheelAccumulator.current = 0;
                        }
                    }
                }
            }["MainPageContent.useEffect.handleWheel"];
            container.addEventListener('wheel', handleWheel, {
                passive: true
            });
            return ({
                "MainPageContent.useEffect": ()=>container.removeEventListener('wheel', handleWheel)
            })["MainPageContent.useEffect"];
        }
    }["MainPageContent.useEffect"], [
        containerRef,
        currentSection,
        isAboutVisible
    ]);
    const handleAboutClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MainPageContent.useCallback[handleAboutClick]": ()=>{
            setIsAboutVisible({
                "MainPageContent.useCallback[handleAboutClick]": (prev)=>!prev
            }["MainPageContent.useCallback[handleAboutClick]"]);
        }
    }["MainPageContent.useCallback[handleAboutClick]"], []);
    const handleArchiveClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MainPageContent.useCallback[handleArchiveClick]": ()=>{
            // Scroll to archive section (last section, index = featuredProjects.length)
            scrollToSection(featuredProjects.length);
            setIsAboutVisible(false);
        }
    }["MainPageContent.useCallback[handleArchiveClick]"], [
        scrollToSection,
        featuredProjects.length
    ]);
    const handleProjectClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MainPageContent.useCallback[handleProjectClick]": (index)=>{
            scrollToSection(index);
            setIsAboutVisible(false);
        }
    }["MainPageContent.useCallback[handleProjectClick]"], [
        scrollToSection
    ]);
    const isArchiveActive = currentSection >= featuredProjects.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            featuredProjects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    project: project,
                    index: index
                }, project._id, false, {
                    fileName: "[project]/components/MainPageClient.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ArchiveGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                projects: allProjects
            }, void 0, false, {
                fileName: "[project]/components/MainPageClient.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScrollIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                projects: featuredProjects,
                currentSection: currentSection,
                isAboutVisible: isAboutVisible,
                isArchiveActive: isArchiveActive,
                onAboutClick: handleAboutClick,
                onArchiveClick: handleArchiveClick,
                onProjectClick: handleProjectClick
            }, void 0, false, {
                fileName: "[project]/components/MainPageClient.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(MainPageContent, "mmAsoqCPCiMukmuWl1Y2cGbjQXs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScrollContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollContext"]
    ];
});
_c = MainPageContent;
// Compute initial values outside component to avoid flash
function getInitialState(featuredProjectsLength) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const skipSplash = sessionStorage.getItem('skipSplash');
    const returnSection = sessionStorage.getItem('returnSection');
    if (skipSplash) {
        sessionStorage.removeItem('skipSplash');
        sessionStorage.removeItem('returnSection');
        let section = 0;
        if (returnSection === 'archive') {
            section = featuredProjectsLength;
        } else if (returnSection) {
            section = parseInt(returnSection, 10);
        }
        return {
            showSplash: false,
            initialSection: section
        };
    }
    sessionStorage.removeItem('returnSection');
    return {
        showSplash: true,
        initialSection: 0
    };
}
function MainPageClient({ featuredProjects, allProjects, siteSettings }) {
    _s1();
    // Compute initial state once on mount
    const [initialState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MainPageClient.useState": ()=>getInitialState(featuredProjects.length)
    }["MainPageClient.useState"]);
    const [showSplash, setShowSplash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState.showSplash);
    const [isAboutVisible, setIsAboutVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSplashComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MainPageClient.useCallback[handleSplashComplete]": ()=>{
            setShowSplash(false);
        }
    }["MainPageClient.useCallback[handleSplashComplete]"], []);
    const handleAboutClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MainPageClient.useCallback[handleAboutClose]": ()=>{
            setIsAboutVisible(false);
        }
    }["MainPageClient.useCallback[handleAboutClose]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScrollContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                initialSection: initialState.initialSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MainPageContent, {
                    featuredProjects: featuredProjects,
                    allProjects: allProjects,
                    siteSettings: siteSettings,
                    isAboutVisible: isAboutVisible,
                    setIsAboutVisible: setIsAboutVisible
                }, void 0, false, {
                    fileName: "[project]/components/MainPageClient.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/MainPageClient.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AboutOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isVisible: isAboutVisible,
                aboutText: siteSettings.aboutText,
                contactEmail: siteSettings.contactEmail,
                onClose: handleAboutClose
            }, void 0, false, {
                fileName: "[project]/components/MainPageClient.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            showSplash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SplashScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onComplete: handleSplashComplete,
                minDuration: 3500
            }, void 0, false, {
                fileName: "[project]/components/MainPageClient.tsx",
                lineNumber: 199,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s1(MainPageClient, "Xee0xmWCj/MTVLufg9D6KI/dP9w=");
_c1 = MainPageClient;
var _c, _c1;
__turbopack_context__.k.register(_c, "MainPageContent");
__turbopack_context__.k.register(_c1, "MainPageClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d85bb7d2._.js.map