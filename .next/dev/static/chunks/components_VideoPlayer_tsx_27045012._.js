(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/VideoPlayer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoPlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vimeo$2f$player$2f$dist$2f$player$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vimeo/player/dist/player.es.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function VideoPlayer({ project }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const playerContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [controlsVisible, setControlsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Initialize Vimeo player
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoPlayer.useEffect": ()=>{
            const container = playerContainerRef.current;
            if (!container) return;
            isMountedRef.current = true;
            let rafId;
            let player = null;
            const initPlayer = {
                "VideoPlayer.useEffect.initPlayer": async ()=>{
                    try {
                        player = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vimeo$2f$player$2f$dist$2f$player$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](container, {
                            id: parseInt(project.fullVimeoId, 10),
                            width: window.innerWidth,
                            height: window.innerHeight,
                            autoplay: true,
                            muted: false,
                            loop: false,
                            controls: false,
                            responsive: true
                        });
                        // Wait for player to be ready
                        await player.ready();
                        if (!isMountedRef.current) {
                            player.destroy().catch({
                                "VideoPlayer.useEffect.initPlayer": ()=>{}
                            }["VideoPlayer.useEffect.initPlayer"]);
                            return;
                        }
                        playerRef.current = player;
                        player.on('play', {
                            "VideoPlayer.useEffect.initPlayer": ()=>{
                                if (isMountedRef.current) setIsPlaying(true);
                            }
                        }["VideoPlayer.useEffect.initPlayer"]);
                        player.on('pause', {
                            "VideoPlayer.useEffect.initPlayer": ()=>{
                                if (isMountedRef.current) setIsPlaying(false);
                            }
                        }["VideoPlayer.useEffect.initPlayer"]);
                        player.on('ended', {
                            "VideoPlayer.useEffect.initPlayer": ()=>{
                                if (isMountedRef.current) setIsPlaying(false);
                            }
                        }["VideoPlayer.useEffect.initPlayer"]);
                        player.on('volumechange', {
                            "VideoPlayer.useEffect.initPlayer": (data)=>{
                                if (isMountedRef.current) setIsMuted(data.volume === 0);
                            }
                        }["VideoPlayer.useEffect.initPlayer"]);
                        const dur = await player.getDuration();
                        if (isMountedRef.current) setDuration(dur);
                        const muted = await player.getMuted();
                        if (isMountedRef.current) setIsMuted(muted);
                        // Smooth progress updates using requestAnimationFrame
                        const updateProgress = {
                            "VideoPlayer.useEffect.initPlayer.updateProgress": async ()=>{
                                if (!isMountedRef.current || !playerRef.current) return;
                                try {
                                    const currentTime = await playerRef.current.getCurrentTime();
                                    const currentDur = await playerRef.current.getDuration();
                                    if (isMountedRef.current && currentDur > 0) {
                                        setProgress(currentTime / currentDur * 100);
                                    }
                                } catch  {
                                    // Player was destroyed, stop the loop
                                    return;
                                }
                                if (isMountedRef.current) {
                                    rafId = requestAnimationFrame(updateProgress);
                                }
                            }
                        }["VideoPlayer.useEffect.initPlayer.updateProgress"];
                        rafId = requestAnimationFrame(updateProgress);
                    } catch  {
                    // Player initialization failed (component unmounted during init)
                    }
                }
            }["VideoPlayer.useEffect.initPlayer"];
            initPlayer();
            return ({
                "VideoPlayer.useEffect": ()=>{
                    isMountedRef.current = false;
                    cancelAnimationFrame(rafId);
                    if (playerRef.current) {
                        playerRef.current.destroy().catch({
                            "VideoPlayer.useEffect": ()=>{}
                        }["VideoPlayer.useEffect"]);
                        playerRef.current = null;
                    } else if (player) {
                        player.destroy().catch({
                            "VideoPlayer.useEffect": ()=>{}
                        }["VideoPlayer.useEffect"]);
                    }
                }
            })["VideoPlayer.useEffect"];
        }
    }["VideoPlayer.useEffect"], [
        project.fullVimeoId
    ]);
    // Hide controls after inactivity
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoPlayer.useEffect": ()=>{
            let timeout;
            const showControls = {
                "VideoPlayer.useEffect.showControls": ()=>{
                    setControlsVisible(true);
                    clearTimeout(timeout);
                    timeout = setTimeout({
                        "VideoPlayer.useEffect.showControls": ()=>setControlsVisible(false)
                    }["VideoPlayer.useEffect.showControls"], 3000);
                }
            }["VideoPlayer.useEffect.showControls"];
            const handleMouseMove = {
                "VideoPlayer.useEffect.handleMouseMove": ()=>showControls()
            }["VideoPlayer.useEffect.handleMouseMove"];
            const handleClick = {
                "VideoPlayer.useEffect.handleClick": ()=>showControls()
            }["VideoPlayer.useEffect.handleClick"];
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('click', handleClick);
            showControls();
            return ({
                "VideoPlayer.useEffect": ()=>{
                    clearTimeout(timeout);
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('click', handleClick);
                }
            })["VideoPlayer.useEffect"];
        }
    }["VideoPlayer.useEffect"], []);
    const handlePlayPause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoPlayer.useCallback[handlePlayPause]": async ()=>{
            const player = playerRef.current;
            if (!player || !isMountedRef.current) return;
            try {
                const paused = await player.getPaused();
                if (!isMountedRef.current) return;
                if (paused) {
                    await player.play();
                    if (isMountedRef.current) setIsPlaying(true);
                } else {
                    await player.pause();
                    if (isMountedRef.current) setIsPlaying(false);
                }
            } catch  {
            // Player was destroyed, ignore
            }
        }
    }["VideoPlayer.useCallback[handlePlayPause]"], []);
    const handleMuteToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoPlayer.useCallback[handleMuteToggle]": async ()=>{
            const player = playerRef.current;
            if (!player || !isMountedRef.current) return;
            try {
                const muted = await player.getMuted();
                if (!isMountedRef.current) return;
                await player.setMuted(!muted);
                if (isMountedRef.current) setIsMuted(!muted);
            } catch  {
            // Player was destroyed, ignore
            }
        }
    }["VideoPlayer.useCallback[handleMuteToggle]"], []);
    const handleProgressClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoPlayer.useCallback[handleProgressClick]": (e)=>{
            const player = playerRef.current;
            if (!player || !duration || !isMountedRef.current) return;
            const rect = e.currentTarget.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            const time = percent * duration;
            player.setCurrentTime(time).catch({
                "VideoPlayer.useCallback[handleProgressClick]": ()=>{}
            }["VideoPlayer.useCallback[handleProgressClick]"]);
        }
    }["VideoPlayer.useCallback[handleProgressClick]"], [
        duration
    ]);
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoPlayer.useCallback[handleClose]": ()=>{
            // Set flag to skip splash screen when returning to homepage
            sessionStorage.setItem('skipSplash', 'true');
            router.push('/');
        }
    }["VideoPlayer.useCallback[handleClose]"], [
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "video-player-page",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `video-player ${controlsVisible ? 'video-player--controls-visible' : ''}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: playerContainerRef,
                    className: "video-player__container"
                }, void 0, false, {
                    fileName: "[project]/components/VideoPlayer.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "video-player__click-area",
                    onClick: handlePlayPause,
                    "aria-label": isPlaying ? 'Pause video' : 'Play video'
                }, void 0, false, {
                    fileName: "[project]/components/VideoPlayer.tsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "video-player__controls",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "video-player__controls-inner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "video-player__controls-inner-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "video-player__info",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "video-player__number",
                                                children: String(project.order || 1).padStart(2, '0')
                                            }, void 0, false, {
                                                fileName: "[project]/components/VideoPlayer.tsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "video-player__info-project",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "video-player__title",
                                                        children: project.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VideoPlayer.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "video-player__client",
                                                        children: project.client
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VideoPlayer.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VideoPlayer.tsx",
                                                lineNumber: 220,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VideoPlayer.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "video-player__buttons",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "video-player__button",
                                                onClick: handlePlayPause,
                                                children: isPlaying ? 'Pause' : 'Play'
                                            }, void 0, false, {
                                                fileName: "[project]/components/VideoPlayer.tsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "video-player__button",
                                                onClick: handleMuteToggle,
                                                children: isMuted ? 'Unmute' : 'Mute'
                                            }, void 0, false, {
                                                fileName: "[project]/components/VideoPlayer.tsx",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VideoPlayer.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VideoPlayer.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "video-player__close",
                                onClick: handleClose,
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/VideoPlayer.tsx",
                                lineNumber: 243,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VideoPlayer.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VideoPlayer.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "video-player__progress",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "video-player__progress-bar",
                        onClick: handleProgressClick,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "video-player__progress-fill",
                            style: {
                                width: `${progress}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/VideoPlayer.tsx",
                            lineNumber: 255,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/VideoPlayer.tsx",
                        lineNumber: 251,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VideoPlayer.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VideoPlayer.tsx",
            lineNumber: 197,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VideoPlayer.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
_s(VideoPlayer, "wb5YMvK4tx6NXYcYH7KfrPS4C20=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = VideoPlayer;
var _c;
__turbopack_context__.k.register(_c, "VideoPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_VideoPlayer_tsx_27045012._.js.map