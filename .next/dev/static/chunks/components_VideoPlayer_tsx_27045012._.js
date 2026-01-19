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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function VideoPlayer({ project }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const playerContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
            const player = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vimeo$2f$player$2f$dist$2f$player$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](container, {
                id: parseInt(project.fullVimeoId, 10),
                width: window.innerWidth,
                height: window.innerHeight,
                autoplay: true,
                muted: false,
                loop: false,
                controls: false,
                responsive: true
            });
            playerRef.current = player;
            player.on('play', {
                "VideoPlayer.useEffect": ()=>setIsPlaying(true)
            }["VideoPlayer.useEffect"]);
            player.on('pause', {
                "VideoPlayer.useEffect": ()=>setIsPlaying(false)
            }["VideoPlayer.useEffect"]);
            player.on('ended', {
                "VideoPlayer.useEffect": ()=>setIsPlaying(false)
            }["VideoPlayer.useEffect"]);
            player.on('volumechange', {
                "VideoPlayer.useEffect": (data)=>setIsMuted(data.volume === 0)
            }["VideoPlayer.useEffect"]);
            player.getDuration().then(setDuration);
            player.getMuted().then(setIsMuted);
            // Smooth progress updates using requestAnimationFrame
            let rafId;
            const updateProgress = {
                "VideoPlayer.useEffect.updateProgress": ()=>{
                    player.getCurrentTime().then({
                        "VideoPlayer.useEffect.updateProgress": (currentTime)=>{
                            player.getDuration().then({
                                "VideoPlayer.useEffect.updateProgress": (dur)=>{
                                    if (dur > 0) {
                                        setProgress(currentTime / dur * 100);
                                    }
                                }
                            }["VideoPlayer.useEffect.updateProgress"]);
                        }
                    }["VideoPlayer.useEffect.updateProgress"]);
                    rafId = requestAnimationFrame(updateProgress);
                }
            }["VideoPlayer.useEffect.updateProgress"];
            rafId = requestAnimationFrame(updateProgress);
            return ({
                "VideoPlayer.useEffect": ()=>{
                    cancelAnimationFrame(rafId);
                    player.destroy();
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
            if (!player) return;
            try {
                const paused = await player.getPaused();
                if (paused) {
                    await player.play();
                    setIsPlaying(true); // Explicitly update state
                } else {
                    await player.pause();
                    setIsPlaying(false); // Explicitly update state
                }
            } catch (error) {
                console.error('Play/pause error:', error);
            }
        }
    }["VideoPlayer.useCallback[handlePlayPause]"], []);
    const handleMuteToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoPlayer.useCallback[handleMuteToggle]": async ()=>{
            const player = playerRef.current;
            if (!player) return;
            try {
                const muted = await player.getMuted();
                await player.setMuted(!muted);
                setIsMuted(!muted);
            } catch (error) {
                console.error('Mute toggle error:', error);
            }
        }
    }["VideoPlayer.useCallback[handleMuteToggle]"], []);
    const handleProgressClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoPlayer.useCallback[handleProgressClick]": (e)=>{
            const player = playerRef.current;
            if (!player || !duration) return;
            const rect = e.currentTarget.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            const time = percent * duration;
            player.setCurrentTime(time);
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
                    lineNumber: 153,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "video-player__click-area",
                    onClick: handlePlayPause,
                    "aria-label": isPlaying ? 'Pause video' : 'Play video'
                }, void 0, false, {
                    fileName: "[project]/components/VideoPlayer.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "video-player__header",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "video-player__logo",
                        onClick: ()=>sessionStorage.setItem('skipSplash', 'true'),
                        children: "Luchi Nóbile"
                    }, void 0, false, {
                        fileName: "[project]/components/VideoPlayer.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VideoPlayer.tsx",
                    lineNumber: 163,
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
                                                lineNumber: 180,
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
                                                        lineNumber: 184,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "video-player__client",
                                                        children: project.client
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VideoPlayer.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VideoPlayer.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VideoPlayer.tsx",
                                        lineNumber: 178,
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
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "video-player__button",
                                                onClick: handleMuteToggle,
                                                children: isMuted ? 'Unmute' : 'Mute'
                                            }, void 0, false, {
                                                fileName: "[project]/components/VideoPlayer.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VideoPlayer.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VideoPlayer.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "video-player__close",
                                onClick: handleClose,
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/VideoPlayer.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VideoPlayer.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VideoPlayer.tsx",
                    lineNumber: 174,
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
                            lineNumber: 218,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/VideoPlayer.tsx",
                        lineNumber: 214,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VideoPlayer.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VideoPlayer.tsx",
            lineNumber: 149,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VideoPlayer.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_s(VideoPlayer, "h/Yb4vzlJ/0W46dAoy6qtrVtlyw=", false, function() {
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