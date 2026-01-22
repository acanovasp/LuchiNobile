module.exports = [
"[project]/components/VideoPlayer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoPlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vimeo$2f$player$2f$dist$2f$player$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vimeo/player/dist/player.es.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
// Helper to check if device is mobile
const isMobileDevice = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
};
// Helper to apply cover sizing for desktop
const applyCoverSizing = (iframe, videoAspect, container)=>{
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const viewportAspect = viewportWidth / viewportHeight;
    if (videoAspect > viewportAspect) {
        // Video is wider than viewport - fit height, overflow width
        iframe.style.height = '100vh';
        iframe.style.width = `${videoAspect / viewportAspect * 100}vh`;
    } else {
        // Video is taller than viewport - fit width, overflow height
        iframe.style.width = '100vw';
        iframe.style.height = `${viewportAspect / videoAspect * 100}vw`;
    }
    // Set CSS variable for mobile aspect ratio
    container.style.setProperty('--video-aspect-ratio', String(videoAspect));
};
function VideoPlayer({ project }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const playerContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const videoAspectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(16 / 9) // Default to 16:9
    ;
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [controlsVisible, setControlsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isVideoReady, setIsVideoReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [thumbnailUrl, setThumbnailUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch Vimeo thumbnail immediately on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!project.fullVimeoId) return;
        fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${project.fullVimeoId}&width=1920`).then((res)=>res.json()).then((data)=>{
            if (isMountedRef.current && data.thumbnail_url) {
                // Get higher resolution thumbnail by modifying the URL
                const highResThumbnail = data.thumbnail_url.replace(/_\d+x\d+/, '_1920x1080').replace(/\?.*$/, '') // Remove query params for cleaner URL
                ;
                setThumbnailUrl(highResThumbnail);
            }
        }).catch(()=>{
        // Failed to fetch thumbnail, video will show when ready
        });
    }, [
        project.fullVimeoId
    ]);
    // Initialize Vimeo player
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const container = playerContainerRef.current;
        if (!container) return;
        isMountedRef.current = true;
        let rafId;
        let player = null;
        const initPlayer = async ()=>{
            try {
                player = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vimeo$2f$player$2f$dist$2f$player$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](container, {
                    id: parseInt(project.fullVimeoId, 10),
                    autoplay: true,
                    muted: false,
                    loop: false,
                    controls: false,
                    responsive: false
                });
                // Wait for player to be ready
                await player.ready();
                if (!isMountedRef.current) {
                    player.destroy().catch(()=>{});
                    return;
                }
                playerRef.current = player;
                // Get video dimensions and apply sizing
                const [videoWidth, videoHeight] = await Promise.all([
                    player.getVideoWidth(),
                    player.getVideoHeight()
                ]);
                if (!isMountedRef.current) return;
                const videoAspect = videoWidth / videoHeight;
                videoAspectRef.current = videoAspect;
                // Apply sizing based on device type
                const iframe = container.querySelector('iframe');
                if (iframe) {
                    if (!isMobileDevice()) {
                        // Desktop: Apply cover sizing
                        applyCoverSizing(iframe, videoAspect, container);
                    } else {
                        // Mobile: Set aspect ratio CSS variable for contained view
                        container.style.setProperty('--video-aspect-ratio', String(videoAspect));
                    }
                }
                // Mark video as ready when it starts playing (hide thumbnail)
                player.on('playing', ()=>{
                    if (isMountedRef.current) {
                        setIsVideoReady(true);
                        setIsPlaying(true);
                    }
                });
                player.on('play', ()=>{
                    if (isMountedRef.current) setIsPlaying(true);
                });
                player.on('pause', ()=>{
                    if (isMountedRef.current) setIsPlaying(false);
                });
                player.on('ended', ()=>{
                    if (isMountedRef.current && playerRef.current) {
                        setIsPlaying(false);
                        // Fallback: seek back to beginning if preemptive check missed
                        playerRef.current.setCurrentTime(0).catch(()=>{});
                    }
                });
                player.on('volumechange', (data)=>{
                    if (isMountedRef.current) setIsMuted(data.volume === 0);
                });
                const dur = await player.getDuration();
                if (isMountedRef.current) setDuration(dur);
                const muted = await player.getMuted();
                if (isMountedRef.current) setIsMuted(muted);
                // Smooth progress updates using requestAnimationFrame
                let hasReachedEnd = false // Prevent multiple triggers
                ;
                const updateProgress = async ()=>{
                    if (!isMountedRef.current || !playerRef.current) return;
                    try {
                        const currentTime = await playerRef.current.getCurrentTime();
                        const currentDur = await playerRef.current.getDuration();
                        if (isMountedRef.current && currentDur > 0) {
                            setProgress(currentTime / currentDur * 100);
                            // Preemptively jump to beginning when very close to end
                            // This prevents Vimeo's end screen from ever appearing
                            const timeRemaining = currentDur - currentTime;
                            if (timeRemaining < 0.5 && timeRemaining > 0 && !hasReachedEnd) {
                                hasReachedEnd = true;
                                await playerRef.current.pause();
                                await playerRef.current.setCurrentTime(0);
                                if (isMountedRef.current) {
                                    setIsPlaying(false);
                                    setProgress(0);
                                }
                                // Reset flag after a short delay to allow replaying
                                setTimeout(()=>{
                                    hasReachedEnd = false;
                                }, 1000);
                            }
                        }
                    } catch  {
                        // Player was destroyed, stop the loop
                        return;
                    }
                    if (isMountedRef.current) {
                        rafId = requestAnimationFrame(updateProgress);
                    }
                };
                rafId = requestAnimationFrame(updateProgress);
            } catch  {
            // Player initialization failed (component unmounted during init)
            }
        };
        initPlayer();
        return ()=>{
            isMountedRef.current = false;
            cancelAnimationFrame(rafId);
            if (playerRef.current) {
                playerRef.current.destroy().catch(()=>{});
                playerRef.current = null;
            } else if (player) {
                player.destroy().catch(()=>{});
            }
        };
    }, [
        project.fullVimeoId
    ]);
    // Handle resize events to recalculate video dimensions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            const container = playerContainerRef.current;
            if (!isMountedRef.current || !container) return;
            const iframe = container.querySelector('iframe');
            if (!iframe) return;
            if (!isMobileDevice()) {
                // Desktop: Recalculate cover sizing
                applyCoverSizing(iframe, videoAspectRef.current, container);
            }
        };
        window.addEventListener('resize', handleResize);
        return ()=>window.removeEventListener('resize', handleResize);
    }, []);
    // Handle orientation change for mobile auto-fullscreen
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleOrientationChange = ()=>{
            if (!isMountedRef.current) return;
            const isLandscape = window.matchMedia('(orientation: landscape)').matches;
            const isMobile = isMobileDevice();
            if (isLandscape && isMobile) {
                // Request fullscreen on the iframe when rotating to landscape
                const iframe = playerContainerRef.current?.querySelector('iframe');
                if (iframe) {
                    // Try different fullscreen methods for cross-browser support
                    const requestFS = iframe.requestFullscreen || iframe.webkitRequestFullscreen || iframe.mozRequestFullScreen || iframe.msRequestFullscreen;
                    if (requestFS) {
                        requestFS.call(iframe).catch(()=>{
                        // Fullscreen request failed, possibly user gesture required
                        });
                    }
                }
            }
        };
        // Listen for orientation changes
        window.addEventListener('orientationchange', handleOrientationChange);
        // Also use Screen Orientation API if available
        if (screen.orientation) {
            screen.orientation.addEventListener('change', handleOrientationChange);
        }
        return ()=>{
            window.removeEventListener('orientationchange', handleOrientationChange);
            if (screen.orientation) {
                screen.orientation.removeEventListener('change', handleOrientationChange);
            }
        };
    }, []);
    // Hide controls after inactivity
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let timeout;
        const showControls = ()=>{
            setControlsVisible(true);
            clearTimeout(timeout);
            timeout = setTimeout(()=>setControlsVisible(false), 3000);
        };
        const handleMouseMove = ()=>showControls();
        const handleClick = ()=>showControls();
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('click', handleClick);
        showControls();
        return ()=>{
            clearTimeout(timeout);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('click', handleClick);
        };
    }, []);
    const handlePlayPause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
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
    }, []);
    const handleMuteToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
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
    }, []);
    const handleProgressClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const player = playerRef.current;
        if (!player || !duration || !isMountedRef.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        const time = percent * duration;
        player.setCurrentTime(time).catch(()=>{});
    }, [
        duration
    ]);
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Set flag to skip splash screen when returning to homepage
        sessionStorage.setItem('skipSplash', 'true');
        // Add fade-out class to transition overlay
        const overlay = document.querySelector('.page-transition');
        if (overlay) {
            overlay.classList.add('page-transition--visible');
            // Navigate after fade-out completes (800ms)
            setTimeout(()=>{
                router.push('/');
            }, 800);
        } else {
            router.push('/');
        }
    }, [
        router
    ]);
    const handleFullscreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const container = document.querySelector('.video-player-page');
        if (!container) return;
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(()=>{});
        } else {
            container.requestFullscreen().catch(()=>{});
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "video-player-page",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `video-player ${controlsVisible ? 'video-player--controls-visible' : ''}`,
            children: [
                thumbnailUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `video-player__poster ${isVideoReady ? 'video-player__poster--hidden' : ''}`,
                    style: {
                        backgroundImage: `url(${thumbnailUrl})`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/VideoPlayer.tsx",
                    lineNumber: 388,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: playerContainerRef,
                    className: "video-player__container"
                }, void 0, false, {
                    fileName: "[project]/components/VideoPlayer.tsx",
                    lineNumber: 395,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "video-player__click-area",
                    onClick: handlePlayPause,
                    "aria-label": isPlaying ? 'Pause video' : 'Play video'
                }, void 0, false, {
                    fileName: "[project]/components/VideoPlayer.tsx",
                    lineNumber: 398,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "video-player__controls",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "video-player__controls-inner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "video-player__controls-inner-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "video-player__info",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "video-player__number",
                                                children: String(project.order || 1).padStart(2, '0')
                                            }, void 0, false, {
                                                fileName: "[project]/components/VideoPlayer.tsx",
                                                lineNumber: 411,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "video-player__info-project",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "video-player__title",
                                                        children: project.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VideoPlayer.tsx",
                                                        lineNumber: 415,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "video-player__client",
                                                        children: project.client
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VideoPlayer.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VideoPlayer.tsx",
                                                lineNumber: 414,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VideoPlayer.tsx",
                                        lineNumber: 409,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "video-player__buttons",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "video-player__button play",
                                                onClick: handlePlayPause,
                                                children: isPlaying ? 'Pause' : 'Play'
                                            }, void 0, false, {
                                                fileName: "[project]/components/VideoPlayer.tsx",
                                                lineNumber: 422,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "video-player__button",
                                                onClick: handleMuteToggle,
                                                children: isMuted ? 'Unmute' : 'Mute'
                                            }, void 0, false, {
                                                fileName: "[project]/components/VideoPlayer.tsx",
                                                lineNumber: 428,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "video-player__button video-player__button--fullscreen",
                                                onClick: handleFullscreen,
                                                children: "FS"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VideoPlayer.tsx",
                                                lineNumber: 434,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VideoPlayer.tsx",
                                        lineNumber: 421,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VideoPlayer.tsx",
                                lineNumber: 407,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "video-player__close",
                                onClick: handleClose,
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/VideoPlayer.tsx",
                                lineNumber: 443,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VideoPlayer.tsx",
                        lineNumber: 406,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VideoPlayer.tsx",
                    lineNumber: 405,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "video-player__progress",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "video-player__progress-bar",
                        onClick: handleProgressClick,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "video-player__progress-fill",
                            style: {
                                width: `${progress}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/VideoPlayer.tsx",
                            lineNumber: 455,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/VideoPlayer.tsx",
                        lineNumber: 451,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VideoPlayer.tsx",
                    lineNumber: 450,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VideoPlayer.tsx",
            lineNumber: 383,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VideoPlayer.tsx",
        lineNumber: 382,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/@vimeo/player/dist/player.es.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/*! @vimeo/player v2.30.1 | (c) 2025 Vimeo | MIT License | https://github.com/vimeo/player.js */ function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
        var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
        try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
                if (Object(_i) !== _i) return;
                _n = !1;
            } else for(; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
        } catch (err) {
            _d = !0, _e = err;
        } finally{
            try {
                if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _regeneratorRuntime() {
    _regeneratorRuntime = function() {
        return exports;
    };
    var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        return Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), obj[key];
    }
    try {
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self1, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
        return defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self1, context)
        }), generator;
    }
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if ("throw" !== record.type) {
                var result = record.arg, value = result.value;
                return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                }) : PromiseImpl.resolve(value).then(function(unwrapped) {
                    result.value = unwrapped, resolve(result);
                }, function(error) {
                    return invoke("throw", error, resolve, reject);
                });
            }
            reject(record.arg);
        }
        var previousPromise;
        defineProperty(this, "_invoke", {
            value: function(method, arg) {
                function callInvokeWithMethodAndArg() {
                    return new PromiseImpl(function(resolve, reject) {
                        invoke(method, arg, resolve, reject);
                    });
                }
                return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    function makeInvokeMethod(innerFn, self1, context) {
        var state = "suspendedStart";
        return function(method, arg) {
            if ("executing" === state) throw new Error("Generator is already running");
            if ("completed" === state) {
                if ("throw" === method) throw arg;
                return doneResult();
            }
            for(context.method = method, context.arg = arg;;){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if ("next" === context.method) context.sent = context._sent = context.arg;
                else if ("throw" === context.method) {
                    if ("suspendedStart" === state) throw state = "completed", context.arg;
                    context.dispatchException(context.arg);
                } else "return" === context.method && context.abrupt("return", context.arg);
                state = "executing";
                var record = tryCatch(innerFn, self1, context);
                if ("normal" === record.type) {
                    if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                }
                "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
            }
        };
    }
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method, method = delegate.iterator[methodName];
        if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
        var record = tryCatch(method, delegate.iterator, context.arg);
        if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
        var info = record.arg;
        return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if ("function" == typeof iterable.next) return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    for(; ++i < iterable.length;)if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
                    return next.value = undefined, next.done = !0, next;
                };
                return next.next = next;
            }
        }
        return {
            next: doneResult
        };
    }
    function doneResult() {
        return {
            value: undefined,
            done: !0
        };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function(genFun) {
        var ctor = "function" == typeof genFun && genFun.constructor;
        return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function(genFun) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function(arg) {
        return {
            __await: arg
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self1, tryLocsList, PromiseImpl) {
        void 0 === PromiseImpl && (PromiseImpl = Promise);
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self1, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
        return this;
    }), define(Gp, "toString", function() {
        return "[object Generator]";
    }), exports.keys = function(val) {
        var object = Object(val), keys = [];
        for(var key in object)keys.push(key);
        return keys.reverse(), function next() {
            for(; keys.length;){
                var key = keys.pop();
                if (key in object) return next.value = key, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, exports.values = values, Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for(var name in this)"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
        },
        stop: function() {
            this.done = !0;
            var rootRecord = this.tryEntries[0].completion;
            if ("throw" === rootRecord.type) throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i], record = entry.completion;
                if ("root" === entry.tryLoc) return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                    } else {
                        if (!hasFinally) throw new Error("try statement without catch or finally");
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    }
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
            var record = finallyEntry ? finallyEntry.completion : {};
            return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
        },
        complete: function(record, afterLoc) {
            if ("throw" === record.type) throw record.arg;
            return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
            }
        },
        catch: function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if ("throw" === record.type) {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            return this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
        }
    }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct.bind();
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _assertThisInitialized(self1) {
    if (self1 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self1;
}
function _possibleConstructorReturn(self1, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
    } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self1);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
/**
 * @module lib/functions
 */ /**
 * Check to see this is a Node environment.
 * @type {boolean}
 */ /* global global */ var isNode = ("TURBOPACK compile-time value", "object") !== 'undefined' && ({}).toString.call(/*TURBOPACK member replacement*/ __turbopack_context__.g) === '[object global]';
/**
 * Check to see if this is a Bun environment.
 * @see https://bun.sh/guides/util/detect-bun
 * @type {boolean}
 */ var isBun = typeof Bun !== 'undefined';
/**
 * Check to see if this is a Deno environment.
 * @see https://docs.deno.com/api/deno/~/Deno
 * @type {boolean}
 */ var isDeno = typeof Deno !== 'undefined';
/**
 * Check if this is a server runtime
 * @type {boolean}
 */ var isServerRuntime = isNode || isBun || isDeno;
/**
 * Get the name of the method for a given getter or setter.
 *
 * @param {string} prop The name of the property.
 * @param {string} type Either “get” or “set”.
 * @return {string}
 */ function getMethodName(prop, type) {
    if (prop.indexOf(type.toLowerCase()) === 0) {
        return prop;
    }
    return "".concat(type.toLowerCase()).concat(prop.substr(0, 1).toUpperCase()).concat(prop.substr(1));
}
/**
 * Check to see if the object is a DOM Element.
 *
 * @param {*} element The object to check.
 * @return {boolean}
 */ function isDomElement(element) {
    return Boolean(element && element.nodeType === 1 && 'nodeName' in element && element.ownerDocument && element.ownerDocument.defaultView);
}
/**
 * Check to see whether the value is a number.
 *
 * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
 * @param {*} value The value to check.
 * @param {boolean} integer Check if the value is an integer.
 * @return {boolean}
 */ function isInteger(value) {
    // eslint-disable-next-line eqeqeq
    return !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value;
}
/**
 * Check to see if the URL is a Vimeo url.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */ function isVimeoUrl(url) {
    return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(url);
}
/**
 * Check to see if the URL is for a Vimeo embed.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */ function isVimeoEmbed(url) {
    var expr = /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
    return expr.test(url);
}
function getOembedDomain(url) {
    var match = (url || '').match(/^(?:https?:)?(?:\/\/)?([^/?]+)/);
    var domain = (match && match[1] || '').replace('player.', '');
    var customDomains = [
        '.videoji.hk',
        '.vimeo.work',
        '.videoji.cn'
    ];
    for(var _i = 0, _customDomains = customDomains; _i < _customDomains.length; _i++){
        var customDomain = _customDomains[_i];
        if (domain.endsWith(customDomain)) {
            return domain;
        }
    }
    return 'vimeo.com';
}
/**
 * Get the Vimeo URL from an element.
 * The element must have either a data-vimeo-id or data-vimeo-url attribute.
 *
 * @param {object} oEmbedParameters The oEmbed parameters.
 * @return {string}
 */ function getVimeoUrl() {
    var oEmbedParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var id = oEmbedParameters.id;
    var url = oEmbedParameters.url;
    var idOrUrl = id || url;
    if (!idOrUrl) {
        throw new Error('An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.');
    }
    if (isInteger(idOrUrl)) {
        return "https://vimeo.com/".concat(idOrUrl);
    }
    if (isVimeoUrl(idOrUrl)) {
        return idOrUrl.replace('http:', 'https:');
    }
    if (id) {
        throw new TypeError("\u201C".concat(id, "\u201D is not a valid video id."));
    }
    throw new TypeError("\u201C".concat(idOrUrl, "\u201D is not a vimeo.com url."));
}
/* eslint-disable max-params */ /**
 * A utility method for attaching and detaching event handlers
 *
 * @param {EventTarget} target
 * @param {string | string[]} eventName
 * @param {function} callback
 * @param {'addEventListener' | 'on'} onName
 * @param {'removeEventListener' | 'off'} offName
 * @return {{cancel: (function(): void)}}
 */ var subscribe = function subscribe(target, eventName, callback) {
    var onName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'addEventListener';
    var offName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'removeEventListener';
    var eventNames = typeof eventName === 'string' ? [
        eventName
    ] : eventName;
    eventNames.forEach(function(evName) {
        target[onName](evName, callback);
    });
    return {
        cancel: function cancel() {
            return eventNames.forEach(function(evName) {
                return target[offName](evName, callback);
            });
        }
    };
};
/**
 * Find the iframe element that contains a specific source window
 *
 * @param {Window} sourceWindow The source window to find the iframe for
 * @param {Document} [doc=document] The document to search within
 * @return {HTMLIFrameElement|null} The iframe element if found, otherwise null
 */ function findIframeBySourceWindow(sourceWindow) {
    var doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    if (!sourceWindow || !doc || typeof doc.querySelectorAll !== 'function') {
        return null;
    }
    var iframes = doc.querySelectorAll('iframe');
    for(var i = 0; i < iframes.length; i++){
        if (iframes[i] && iframes[i].contentWindow === sourceWindow) {
            return iframes[i];
        }
    }
    return null;
}
var arrayIndexOfSupport = typeof Array.prototype.indexOf !== 'undefined';
var postMessageSupport = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && typeof window.postMessage !== 'undefined';
if (!isServerRuntime && (!arrayIndexOfSupport || !postMessageSupport)) {
    throw new Error('Sorry, the Vimeo Player API is not available in this browser.');
}
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable";
function createCommonjsModule(fn, module) {
    return module = {
        exports: {}
    }, fn(module, module.exports), module.exports;
}
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */ (function(self1) {
    if (self1.WeakMap) {
        return;
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var hasDefine = Object.defineProperty && function() {
        try {
            // Avoid IE8's broken Object.defineProperty
            return Object.defineProperty({}, 'x', {
                value: 1
            }).x === 1;
        } catch (e) {}
    }();
    var defineProperty = function(object, name, value) {
        if (hasDefine) {
            Object.defineProperty(object, name, {
                configurable: true,
                writable: true,
                value: value
            });
        } else {
            object[name] = value;
        }
    };
    self1.WeakMap = function() {
        // ECMA-262 23.3 WeakMap Objects
        function WeakMap1() {
            if (this === void 0) {
                throw new TypeError("Constructor WeakMap requires 'new'");
            }
            defineProperty(this, '_id', genId('_WeakMap'));
            // ECMA-262 23.3.1.1 WeakMap([iterable])
            if (arguments.length > 0) {
                // Currently, WeakMap `iterable` argument is not supported
                throw new TypeError('WeakMap iterable is not supported');
            }
        }
        // ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)
        defineProperty(WeakMap1.prototype, 'delete', function(key) {
            checkInstance(this, 'delete');
            if (!isObject(key)) {
                return false;
            }
            var entry = key[this._id];
            if (entry && entry[0] === key) {
                delete key[this._id];
                return true;
            }
            return false;
        });
        // ECMA-262 23.3.3.3 WeakMap.prototype.get(key)
        defineProperty(WeakMap1.prototype, 'get', function(key) {
            checkInstance(this, 'get');
            if (!isObject(key)) {
                return void 0;
            }
            var entry = key[this._id];
            if (entry && entry[0] === key) {
                return entry[1];
            }
            return void 0;
        });
        // ECMA-262 23.3.3.4 WeakMap.prototype.has(key)
        defineProperty(WeakMap1.prototype, 'has', function(key) {
            checkInstance(this, 'has');
            if (!isObject(key)) {
                return false;
            }
            var entry = key[this._id];
            if (entry && entry[0] === key) {
                return true;
            }
            return false;
        });
        // ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)
        defineProperty(WeakMap1.prototype, 'set', function(key, value) {
            checkInstance(this, 'set');
            if (!isObject(key)) {
                throw new TypeError('Invalid value used as weak map key');
            }
            var entry = key[this._id];
            if (entry && entry[0] === key) {
                entry[1] = value;
                return this;
            }
            defineProperty(key, this._id, [
                key,
                value
            ]);
            return this;
        });
        function checkInstance(x, methodName) {
            if (!isObject(x) || !hasOwnProperty.call(x, '_id')) {
                throw new TypeError(methodName + ' method called on incompatible receiver ' + typeof x);
            }
        }
        function genId(prefix) {
            return prefix + '_' + rand() + '.' + rand();
        }
        function rand() {
            return Math.random().toString().substring(2);
        }
        defineProperty(WeakMap1, '_polyfill', true);
        return WeakMap1;
    }();
    function isObject(x) {
        return Object(x) === x;
    }
})(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : commonjsGlobal);
var npo_src = createCommonjsModule(function(module) {
    /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/ (function UMD(name, context, definition) {
        // special form of UMD for polyfilling across evironments
        context[name] = context[name] || definition();
        if (module.exports) {
            module.exports = context[name];
        }
    })("Promise", typeof commonjsGlobal != "undefined" ? commonjsGlobal : commonjsGlobal, function DEF() {
        var builtInProp, cycle, scheduling_queue, ToString = Object.prototype.toString, timer = typeof setImmediate != "undefined" ? function timer(fn) {
            return setImmediate(fn);
        } : setTimeout;
        // dammit, IE8.
        try {
            Object.defineProperty({}, "x", {});
            builtInProp = function builtInProp(obj, name, val, config) {
                return Object.defineProperty(obj, name, {
                    value: val,
                    writable: true,
                    configurable: config !== false
                });
            };
        } catch (err) {
            builtInProp = function builtInProp(obj, name, val) {
                obj[name] = val;
                return obj;
            };
        }
        // Note: using a queue instead of array for efficiency
        scheduling_queue = function Queue() {
            var first, last, item;
            function Item(fn, self1) {
                this.fn = fn;
                this.self = self1;
                this.next = void 0;
            }
            return {
                add: function add(fn, self1) {
                    item = new Item(fn, self1);
                    if (last) {
                        last.next = item;
                    } else {
                        first = item;
                    }
                    last = item;
                    item = void 0;
                },
                drain: function drain() {
                    var f = first;
                    first = last = cycle = void 0;
                    while(f){
                        f.fn.call(f.self);
                        f = f.next;
                    }
                }
            };
        }();
        function schedule(fn, self1) {
            scheduling_queue.add(fn, self1);
            if (!cycle) {
                cycle = timer(scheduling_queue.drain);
            }
        }
        // promise duck typing
        function isThenable(o) {
            var _then, o_type = typeof o;
            if (o != null && (o_type == "object" || o_type == "function")) {
                _then = o.then;
            }
            return typeof _then == "function" ? _then : false;
        }
        function notify() {
            for(var i = 0; i < this.chain.length; i++){
                notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
            }
            this.chain.length = 0;
        }
        // NOTE: This is a separate function to isolate
        // the `try..catch` so that other code can be
        // optimized better
        function notifyIsolated(self1, cb, chain) {
            var ret, _then;
            try {
                if (cb === false) {
                    chain.reject(self1.msg);
                } else {
                    if (cb === true) {
                        ret = self1.msg;
                    } else {
                        ret = cb.call(void 0, self1.msg);
                    }
                    if (ret === chain.promise) {
                        chain.reject(TypeError("Promise-chain cycle"));
                    } else if (_then = isThenable(ret)) {
                        _then.call(ret, chain.resolve, chain.reject);
                    } else {
                        chain.resolve(ret);
                    }
                }
            } catch (err) {
                chain.reject(err);
            }
        }
        function resolve(msg) {
            var _then, self1 = this;
            // already triggered?
            if (self1.triggered) {
                return;
            }
            self1.triggered = true;
            // unwrap
            if (self1.def) {
                self1 = self1.def;
            }
            try {
                if (_then = isThenable(msg)) {
                    schedule(function() {
                        var def_wrapper = new MakeDefWrapper(self1);
                        try {
                            _then.call(msg, function $resolve$() {
                                resolve.apply(def_wrapper, arguments);
                            }, function $reject$() {
                                reject.apply(def_wrapper, arguments);
                            });
                        } catch (err) {
                            reject.call(def_wrapper, err);
                        }
                    });
                } else {
                    self1.msg = msg;
                    self1.state = 1;
                    if (self1.chain.length > 0) {
                        schedule(notify, self1);
                    }
                }
            } catch (err) {
                reject.call(new MakeDefWrapper(self1), err);
            }
        }
        function reject(msg) {
            var self1 = this;
            // already triggered?
            if (self1.triggered) {
                return;
            }
            self1.triggered = true;
            // unwrap
            if (self1.def) {
                self1 = self1.def;
            }
            self1.msg = msg;
            self1.state = 2;
            if (self1.chain.length > 0) {
                schedule(notify, self1);
            }
        }
        function iteratePromises(Constructor, arr, resolver, rejecter) {
            for(var idx = 0; idx < arr.length; idx++){
                (function IIFE(idx) {
                    Constructor.resolve(arr[idx]).then(function $resolver$(msg) {
                        resolver(idx, msg);
                    }, rejecter);
                })(idx);
            }
        }
        function MakeDefWrapper(self1) {
            this.def = self1;
            this.triggered = false;
        }
        function MakeDef(self1) {
            this.promise = self1;
            this.state = 0;
            this.triggered = false;
            this.chain = [];
            this.msg = void 0;
        }
        function Promise1(executor) {
            if (typeof executor != "function") {
                throw TypeError("Not a function");
            }
            if (this.__NPO__ !== 0) {
                throw TypeError("Not a promise");
            }
            // instance shadowing the inherited "brand"
            // to signal an already "initialized" promise
            this.__NPO__ = 1;
            var def = new MakeDef(this);
            this["then"] = function then(success, failure) {
                var o = {
                    success: typeof success == "function" ? success : true,
                    failure: typeof failure == "function" ? failure : false
                };
                // Note: `then(..)` itself can be borrowed to be used against
                // a different promise constructor for making the chained promise,
                // by substituting a different `this` binding.
                o.promise = new this.constructor(function extractChain(resolve, reject) {
                    if (typeof resolve != "function" || typeof reject != "function") {
                        throw TypeError("Not a function");
                    }
                    o.resolve = resolve;
                    o.reject = reject;
                });
                def.chain.push(o);
                if (def.state !== 0) {
                    schedule(notify, def);
                }
                return o.promise;
            };
            this["catch"] = function $catch$(failure) {
                return this.then(void 0, failure);
            };
            try {
                executor.call(void 0, function publicResolve(msg) {
                    resolve.call(def, msg);
                }, function publicReject(msg) {
                    reject.call(def, msg);
                });
            } catch (err) {
                reject.call(def, err);
            }
        }
        var PromisePrototype = builtInProp({}, "constructor", Promise1, /*configurable=*/ false);
        // Note: Android 4 cannot use `Object.defineProperty(..)` here
        Promise1.prototype = PromisePrototype;
        // built-in "brand" to signal an "uninitialized" promise
        builtInProp(PromisePrototype, "__NPO__", 0, /*configurable=*/ false);
        builtInProp(Promise1, "resolve", function Promise$resolve(msg) {
            var Constructor = this;
            // spec mandated checks
            // note: best "isPromise" check that's practical for now
            if (msg && typeof msg == "object" && msg.__NPO__ === 1) {
                return msg;
            }
            return new Constructor(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") {
                    throw TypeError("Not a function");
                }
                resolve(msg);
            });
        });
        builtInProp(Promise1, "reject", function Promise$reject(msg) {
            return new this(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") {
                    throw TypeError("Not a function");
                }
                reject(msg);
            });
        });
        builtInProp(Promise1, "all", function Promise$all(arr) {
            var Constructor = this;
            // spec mandated checks
            if (ToString.call(arr) != "[object Array]") {
                return Constructor.reject(TypeError("Not an array"));
            }
            if (arr.length === 0) {
                return Constructor.resolve([]);
            }
            return new Constructor(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") {
                    throw TypeError("Not a function");
                }
                var len = arr.length, msgs = Array(len), count = 0;
                iteratePromises(Constructor, arr, function resolver(idx, msg) {
                    msgs[idx] = msg;
                    if (++count === len) {
                        resolve(msgs);
                    }
                }, reject);
            });
        });
        builtInProp(Promise1, "race", function Promise$race(arr) {
            var Constructor = this;
            // spec mandated checks
            if (ToString.call(arr) != "[object Array]") {
                return Constructor.reject(TypeError("Not an array"));
            }
            return new Constructor(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") {
                    throw TypeError("Not a function");
                }
                iteratePromises(Constructor, arr, function resolver(idx, msg) {
                    resolve(msg);
                }, reject);
            });
        });
        return Promise1;
    });
});
/**
 * @module lib/callbacks
 */ var callbackMap = new WeakMap();
/**
 * Store a callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
 *        The callback to call or an object with resolve and reject functions for a promise.
 * @return {void}
 */ function storeCallback(player, name, callback) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    if (!(name in playerCallbacks)) {
        playerCallbacks[name] = [];
    }
    playerCallbacks[name].push(callback);
    callbackMap.set(player.element, playerCallbacks);
}
/**
 * Get the callbacks for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @return {function[]}
 */ function getCallbacks(player, name) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    return playerCallbacks[name] || [];
}
/**
 * Remove a stored callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @param {function} [callback] The specific callback to remove.
 * @return {boolean} Was this the last callback?
 */ function removeCallback(player, name, callback) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    if (!playerCallbacks[name]) {
        return true;
    }
    // If no callback is passed, remove all callbacks for the event
    if (!callback) {
        playerCallbacks[name] = [];
        callbackMap.set(player.element, playerCallbacks);
        return true;
    }
    var index = playerCallbacks[name].indexOf(callback);
    if (index !== -1) {
        playerCallbacks[name].splice(index, 1);
    }
    callbackMap.set(player.element, playerCallbacks);
    return playerCallbacks[name] && playerCallbacks[name].length === 0;
}
/**
 * Return the first stored callback for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @return {function} The callback, or false if there were none
 */ function shiftCallbacks(player, name) {
    var playerCallbacks = getCallbacks(player, name);
    if (playerCallbacks.length < 1) {
        return false;
    }
    var callback = playerCallbacks.shift();
    removeCallback(player, name, callback);
    return callback;
}
/**
 * Move callbacks associated with an element to another element.
 *
 * @param {HTMLElement} oldElement The old element.
 * @param {HTMLElement} newElement The new element.
 * @return {void}
 */ function swapCallbacks(oldElement, newElement) {
    var playerCallbacks = callbackMap.get(oldElement);
    callbackMap.set(newElement, playerCallbacks);
    callbackMap.delete(oldElement);
}
/**
 * @module lib/postmessage
 */ /**
 * Parse a message received from postMessage.
 *
 * @param {*} data The data received from postMessage.
 * @return {object}
 */ function parseMessageData(data) {
    if (typeof data === 'string') {
        try {
            data = JSON.parse(data);
        } catch (error) {
            // If the message cannot be parsed, throw the error as a warning
            console.warn(error);
            return {};
        }
    }
    return data;
}
/**
 * Post a message to the specified target.
 *
 * @param {Player} player The player object to use.
 * @param {string} method The API method to call.
 * @param {string|number|object|Array|undefined} params The parameters to send to the player.
 * @return {void}
 */ function postMessage(player, method, params) {
    if (!player.element.contentWindow || !player.element.contentWindow.postMessage) {
        return;
    }
    var message = {
        method: method
    };
    if (params !== undefined) {
        message.value = params;
    }
    // IE 8 and 9 do not support passing messages, so stringify them
    var ieVersion = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, '$1'));
    if (ieVersion >= 8 && ieVersion < 10) {
        message = JSON.stringify(message);
    }
    player.element.contentWindow.postMessage(message, player.origin);
}
/**
 * Parse the data received from a message event.
 *
 * @param {Player} player The player that received the message.
 * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
 * @return {void}
 */ function processData(player, data) {
    data = parseMessageData(data);
    var callbacks = [];
    var param;
    if (data.event) {
        if (data.event === 'error') {
            var promises = getCallbacks(player, data.data.method);
            promises.forEach(function(promise) {
                var error = new Error(data.data.message);
                error.name = data.data.name;
                promise.reject(error);
                removeCallback(player, data.data.method, promise);
            });
        }
        callbacks = getCallbacks(player, "event:".concat(data.event));
        param = data.data;
    } else if (data.method) {
        var callback = shiftCallbacks(player, data.method);
        if (callback) {
            callbacks.push(callback);
            param = data.value;
        }
    }
    callbacks.forEach(function(callback) {
        try {
            if (typeof callback === 'function') {
                callback.call(player, param);
                return;
            }
            callback.resolve(param);
        } catch (e) {
        // empty
        }
    });
}
/**
 * @module lib/embed
 */ var oEmbedParameters = [
    'airplay',
    'audio_tracks',
    'audiotrack',
    'autopause',
    'autoplay',
    'background',
    'byline',
    'cc',
    'chapter_id',
    'chapters',
    'chromecast',
    'color',
    'colors',
    'controls',
    'dnt',
    'end_time',
    'fullscreen',
    'height',
    'id',
    'initial_quality',
    'interactive_params',
    'keyboard',
    'loop',
    'maxheight',
    'max_quality',
    'maxwidth',
    'min_quality',
    'muted',
    'play_button_position',
    'playsinline',
    'portrait',
    'preload',
    'progress_bar',
    'quality',
    'quality_selector',
    'responsive',
    'skipping_forward',
    'speed',
    'start_time',
    'texttrack',
    'thumbnail_id',
    'title',
    'transcript',
    'transparent',
    'unmute_button',
    'url',
    'vimeo_logo',
    'volume',
    'watch_full_video',
    'width'
];
/**
 * Get the 'data-vimeo'-prefixed attributes from an element as an object.
 *
 * @param {HTMLElement} element The element.
 * @param {Object} [defaults={}] The default values to use.
 * @return {Object<string, string>}
 */ function getOEmbedParameters(element) {
    var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return oEmbedParameters.reduce(function(params, param) {
        var value = element.getAttribute("data-vimeo-".concat(param));
        if (value || value === '') {
            params[param] = value === '' ? 1 : value;
        }
        return params;
    }, defaults);
}
/**
 * Create an embed from oEmbed data inside an element.
 *
 * @param {object} data The oEmbed data.
 * @param {HTMLElement} element The element to put the iframe in.
 * @return {HTMLIFrameElement} The iframe embed.
 */ function createEmbed(_ref, element) {
    var html = _ref.html;
    if (!element) {
        throw new TypeError('An element must be provided');
    }
    if (element.getAttribute('data-vimeo-initialized') !== null) {
        return element.querySelector('iframe');
    }
    var div = document.createElement('div');
    div.innerHTML = html;
    element.appendChild(div.firstChild);
    element.setAttribute('data-vimeo-initialized', 'true');
    return element.querySelector('iframe');
}
/**
 * Make an oEmbed call for the specified URL.
 *
 * @param {string} videoUrl The vimeo.com url for the video.
 * @param {Object} [params] Parameters to pass to oEmbed.
 * @param {HTMLElement} element The element.
 * @return {Promise}
 */ function getOEmbedData(videoUrl) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var element = arguments.length > 2 ? arguments[2] : undefined;
    return new Promise(function(resolve, reject) {
        if (!isVimeoUrl(videoUrl)) {
            throw new TypeError("\u201C".concat(videoUrl, "\u201D is not a vimeo.com url."));
        }
        var domain = getOembedDomain(videoUrl);
        var url = "https://".concat(domain, "/api/oembed.json?url=").concat(encodeURIComponent(videoUrl));
        for(var param in params){
            if (params.hasOwnProperty(param)) {
                url += "&".concat(param, "=").concat(encodeURIComponent(params[param]));
            }
        }
        var xhr = 'XDomainRequest' in window ? new XDomainRequest() : new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if (xhr.status === 404) {
                reject(new Error("\u201C".concat(videoUrl, "\u201D was not found.")));
                return;
            }
            if (xhr.status === 403) {
                reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
                return;
            }
            try {
                var json = JSON.parse(xhr.responseText);
                // Check api response for 403 on oembed
                if (json.domain_status_code === 403) {
                    // We still want to create the embed to give users visual feedback
                    createEmbed(json, element);
                    reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
                    return;
                }
                resolve(json);
            } catch (error) {
                reject(error);
            }
        };
        xhr.onerror = function() {
            var status = xhr.status ? " (".concat(xhr.status, ")") : '';
            reject(new Error("There was an error fetching the embed code from Vimeo".concat(status, ".")));
        };
        xhr.send();
    });
}
/**
 * Initialize all embeds within a specific element
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function initializeEmbeds() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    var elements = [].slice.call(parent.querySelectorAll('[data-vimeo-id], [data-vimeo-url]'));
    var handleError = function handleError(error) {
        if ('console' in window && console.error) {
            console.error("There was an error creating an embed: ".concat(error));
        }
    };
    elements.forEach(function(element) {
        try {
            // Skip any that have data-vimeo-defer
            if (element.getAttribute('data-vimeo-defer') !== null) {
                return;
            }
            var params = getOEmbedParameters(element);
            var url = getVimeoUrl(params);
            getOEmbedData(url, params, element).then(function(data) {
                return createEmbed(data, element);
            }).catch(handleError);
        } catch (error) {
            handleError(error);
        }
    });
}
/**
 * Resize embeds when messaged by the player.
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function resizeEmbeds() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    // Prevent execution if users include the player.js script multiple times.
    if (window.VimeoPlayerResizeEmbeds_) {
        return;
    }
    window.VimeoPlayerResizeEmbeds_ = true;
    var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin)) {
            return;
        }
        // 'spacechange' is fired only on embeds with cards
        if (!event.data || event.data.event !== 'spacechange') {
            return;
        }
        var senderIFrame = event.source ? findIframeBySourceWindow(event.source, parent) : null;
        if (senderIFrame) {
            // Change padding-bottom of the enclosing div to accommodate
            // card carousel without distorting aspect ratio
            var space = senderIFrame.parentElement;
            space.style.paddingBottom = "".concat(event.data.data[0].bottom, "px");
        }
    };
    window.addEventListener('message', onMessage);
}
/**
 * Add chapters to existing metadata for Google SEO
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function initAppendVideoMetadata() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    //  Prevent execution if users include the player.js script multiple times.
    if (window.VimeoSeoMetadataAppended) {
        return;
    }
    window.VimeoSeoMetadataAppended = true;
    var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin)) {
            return;
        }
        var data = parseMessageData(event.data);
        if (!data || data.event !== 'ready') {
            return;
        }
        var senderIFrame = event.source ? findIframeBySourceWindow(event.source, parent) : null;
        // Initiate appendVideoMetadata if iframe is a Vimeo embed
        if (senderIFrame && isVimeoEmbed(senderIFrame.src)) {
            var player = new Player(senderIFrame);
            player.callMethod('appendVideoMetadata', window.location.href);
        }
    };
    window.addEventListener('message', onMessage);
}
/**
 * Seek to time indicated by vimeo_t query parameter if present in URL
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function checkUrlTimeParam() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    //  Prevent execution if users include the player.js script multiple times.
    if (window.VimeoCheckedUrlTimeParam) {
        return;
    }
    window.VimeoCheckedUrlTimeParam = true;
    var handleError = function handleError(error) {
        if ('console' in window && console.error) {
            console.error("There was an error getting video Id: ".concat(error));
        }
    };
    var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin)) {
            return;
        }
        var data = parseMessageData(event.data);
        if (!data || data.event !== 'ready') {
            return;
        }
        var senderIFrame = event.source ? findIframeBySourceWindow(event.source, parent) : null;
        if (senderIFrame && isVimeoEmbed(senderIFrame.src)) {
            var player = new Player(senderIFrame);
            player.getVideoId().then(function(videoId) {
                var matches = new RegExp("[?&]vimeo_t_".concat(videoId, "=([^&#]*)")).exec(window.location.href);
                if (matches && matches[1]) {
                    var sec = decodeURI(matches[1]);
                    player.setCurrentTime(sec);
                }
                return;
            }).catch(handleError);
        }
    };
    window.addEventListener('message', onMessage);
}
/**
 * Updates iframe embeds to support DRM content playback by adding the 'encrypted-media' permission
 * to the iframe's allow attribute when DRM initialization fails. This function acts as a fallback
 * mechanism to enable playback of DRM-protected content in embeds that weren't properly configured.
 *
 * @return {void}
 */ function updateDRMEmbeds() {
    if (window.VimeoDRMEmbedsUpdated) {
        return;
    }
    window.VimeoDRMEmbedsUpdated = true;
    /**
   * Handle message events for DRM initialization failures
   * @param {MessageEvent} event - The message event from the iframe
   */ var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin)) {
            return;
        }
        var data = parseMessageData(event.data);
        if (!data || data.event !== 'drminitfailed') {
            return;
        }
        var senderIFrame = event.source ? findIframeBySourceWindow(event.source) : null;
        if (!senderIFrame) {
            return;
        }
        var currentAllow = senderIFrame.getAttribute('allow') || '';
        var allowSupportsDRM = currentAllow.includes('encrypted-media');
        if (!allowSupportsDRM) {
            // For DRM playback to successfully occur, the iframe `allow` attribute must include 'encrypted-media'.
            // If the video requires DRM but doesn't have the attribute, we try to add on behalf of the embed owner
            // as a temporary measure to enable playback until they're able to update their embeds.
            senderIFrame.setAttribute('allow', "".concat(currentAllow, "; encrypted-media"));
            var currentUrl = new URL(senderIFrame.getAttribute('src'));
            // Adding this forces the embed to reload once `allow` has been updated with `encrypted-media`.
            currentUrl.searchParams.set('forcereload', 'drm');
            senderIFrame.setAttribute('src', currentUrl.toString());
            return;
        }
    };
    window.addEventListener('message', onMessage);
}
/* MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Terms */ function initializeScreenfull() {
    var fn = function() {
        var val;
        var fnMap = [
            [
                'requestFullscreen',
                'exitFullscreen',
                'fullscreenElement',
                'fullscreenEnabled',
                'fullscreenchange',
                'fullscreenerror'
            ],
            // New WebKit
            [
                'webkitRequestFullscreen',
                'webkitExitFullscreen',
                'webkitFullscreenElement',
                'webkitFullscreenEnabled',
                'webkitfullscreenchange',
                'webkitfullscreenerror'
            ],
            // Old WebKit
            [
                'webkitRequestFullScreen',
                'webkitCancelFullScreen',
                'webkitCurrentFullScreenElement',
                'webkitCancelFullScreen',
                'webkitfullscreenchange',
                'webkitfullscreenerror'
            ],
            [
                'mozRequestFullScreen',
                'mozCancelFullScreen',
                'mozFullScreenElement',
                'mozFullScreenEnabled',
                'mozfullscreenchange',
                'mozfullscreenerror'
            ],
            [
                'msRequestFullscreen',
                'msExitFullscreen',
                'msFullscreenElement',
                'msFullscreenEnabled',
                'MSFullscreenChange',
                'MSFullscreenError'
            ]
        ];
        var i = 0;
        var l = fnMap.length;
        var ret = {};
        for(; i < l; i++){
            val = fnMap[i];
            if (val && val[1] in document) {
                for(i = 0; i < val.length; i++){
                    ret[fnMap[0][i]] = val[i];
                }
                return ret;
            }
        }
        return false;
    }();
    var eventNameMap = {
        fullscreenchange: fn.fullscreenchange,
        fullscreenerror: fn.fullscreenerror
    };
    var screenfull = {
        request: function request(element) {
            return new Promise(function(resolve, reject) {
                var onFullScreenEntered = function onFullScreenEntered() {
                    screenfull.off('fullscreenchange', onFullScreenEntered);
                    resolve();
                };
                screenfull.on('fullscreenchange', onFullScreenEntered);
                element = element || document.documentElement;
                var returnPromise = element[fn.requestFullscreen]();
                if (returnPromise instanceof Promise) {
                    returnPromise.then(onFullScreenEntered).catch(reject);
                }
            });
        },
        exit: function exit() {
            return new Promise(function(resolve, reject) {
                if (!screenfull.isFullscreen) {
                    resolve();
                    return;
                }
                var onFullScreenExit = function onFullScreenExit() {
                    screenfull.off('fullscreenchange', onFullScreenExit);
                    resolve();
                };
                screenfull.on('fullscreenchange', onFullScreenExit);
                var returnPromise = document[fn.exitFullscreen]();
                if (returnPromise instanceof Promise) {
                    returnPromise.then(onFullScreenExit).catch(reject);
                }
            });
        },
        on: function on(event, callback) {
            var eventName = eventNameMap[event];
            if (eventName) {
                document.addEventListener(eventName, callback);
            }
        },
        off: function off(event, callback) {
            var eventName = eventNameMap[event];
            if (eventName) {
                document.removeEventListener(eventName, callback);
            }
        }
    };
    Object.defineProperties(screenfull, {
        isFullscreen: {
            get: function get() {
                return Boolean(document[fn.fullscreenElement]);
            }
        },
        element: {
            enumerable: true,
            get: function get() {
                return document[fn.fullscreenElement];
            }
        },
        isEnabled: {
            enumerable: true,
            get: function get() {
                // Coerce to boolean in case of old WebKit
                return Boolean(document[fn.fullscreenEnabled]);
            }
        }
    });
    return screenfull;
}
/** @typedef {import('./timing-src-connector.types').PlayerControls} PlayerControls */ /** @typedef {import('timing-object').ITimingObject} TimingObject */ /** @typedef {import('./timing-src-connector.types').TimingSrcConnectorOptions} TimingSrcConnectorOptions */ /** @typedef {(msg: string) => any} Logger */ /** @typedef {import('timing-object').TConnectionState} TConnectionState */ /**
 * @type {TimingSrcConnectorOptions}
 *
 * For details on these properties and their effects, see the typescript definition referenced above.
 */ var defaultOptions = {
    role: 'viewer',
    autoPlayMuted: true,
    allowedDrift: 0.3,
    maxAllowedDrift: 1,
    minCheckInterval: 0.1,
    maxRateAdjustment: 0.2,
    maxTimeToCatchUp: 1
};
/**
 * There's a proposed W3C spec for the Timing Object which would introduce a new set of APIs that would simplify time-synchronization tasks for browser applications.
 *
 * Proposed spec: https://webtiming.github.io/timingobject/
 * V3 Spec: https://timingsrc.readthedocs.io/en/latest/
 * Demuxed talk: https://www.youtube.com/watch?v=cZSjDaGDmX8
 *
 * This class makes it easy to connect Vimeo.Player to a provided TimingObject via Vimeo.Player.setTimingSrc(myTimingObject, options) and the synchronization will be handled automatically.
 *
 * There are 5 general responsibilities in TimingSrcConnector:
 *
 * 1. `updatePlayer()` which sets the player's currentTime, playbackRate and pause/play state based on current state of the TimingObject.
 * 2. `updateTimingObject()` which sets the TimingObject's position and velocity from the player's state.
 * 3. `playerUpdater` which listens for change events on the TimingObject and will respond by calling updatePlayer.
 * 4. `timingObjectUpdater` which listens to the player events of seeked, play and pause and will respond by calling `updateTimingObject()`.
 * 5. `maintainPlaybackPosition` this is code that constantly monitors the player to make sure it's always in sync with the TimingObject. This is needed because videos will generally not play with precise time accuracy and there will be some drift which becomes more noticeable over longer periods (as noted in the timing-object spec). More details on this method below.
 */ var TimingSrcConnector = /*#__PURE__*/ function(_EventTarget) {
    _inherits(TimingSrcConnector, _EventTarget);
    var _super = _createSuper(TimingSrcConnector);
    /**
   * @param {PlayerControls} player
   * @param {TimingObject} timingObject
   * @param {TimingSrcConnectorOptions} options
   * @param {Logger} logger
   */ function TimingSrcConnector(_player, timingObject) {
        var _this;
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var logger = arguments.length > 3 ? arguments[3] : undefined;
        _classCallCheck(this, TimingSrcConnector);
        _this = _super.call(this);
        _defineProperty(_assertThisInitialized(_this), "logger", void 0);
        _defineProperty(_assertThisInitialized(_this), "speedAdjustment", 0);
        /**
     * @param {PlayerControls} player
     * @param {number} newAdjustment
     * @return {Promise<void>}
     */ _defineProperty(_assertThisInitialized(_this), "adjustSpeed", /*#__PURE__*/ function() {
            var _ref = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee(player, newAdjustment) {
                var newPlaybackRate;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while(1)switch(_context.prev = _context.next){
                        case 0:
                            if (!(_this.speedAdjustment === newAdjustment)) {
                                _context.next = 2;
                                break;
                            }
                            return _context.abrupt("return");
                        case 2:
                            _context.next = 4;
                            return player.getPlaybackRate();
                        case 4:
                            _context.t0 = _context.sent;
                            _context.t1 = _this.speedAdjustment;
                            _context.t2 = _context.t0 - _context.t1;
                            _context.t3 = newAdjustment;
                            newPlaybackRate = _context.t2 + _context.t3;
                            _this.log("New playbackRate:  ".concat(newPlaybackRate));
                            _context.next = 12;
                            return player.setPlaybackRate(newPlaybackRate);
                        case 12:
                            _this.speedAdjustment = newAdjustment;
                        case 13:
                        case "end":
                            return _context.stop();
                    }
                }, _callee);
            }));
            return function(_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }());
        _this.logger = logger;
        _this.init(timingObject, _player, _objectSpread2(_objectSpread2({}, defaultOptions), options));
        return _this;
    }
    _createClass(TimingSrcConnector, [
        {
            key: "disconnect",
            value: function disconnect() {
                this.dispatchEvent(new Event('disconnect'));
            }
        },
        {
            key: "init",
            value: function() {
                var _init = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(timingObject, player, options) {
                    var _this2 = this;
                    var playerUpdater, positionSync, timingObjectUpdater;
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while(1)switch(_context2.prev = _context2.next){
                            case 0:
                                _context2.next = 2;
                                return this.waitForTOReadyState(timingObject, 'open');
                            case 2:
                                if (!(options.role === 'viewer')) {
                                    _context2.next = 10;
                                    break;
                                }
                                _context2.next = 5;
                                return this.updatePlayer(timingObject, player, options);
                            case 5:
                                playerUpdater = subscribe(timingObject, 'change', function() {
                                    return _this2.updatePlayer(timingObject, player, options);
                                });
                                positionSync = this.maintainPlaybackPosition(timingObject, player, options);
                                this.addEventListener('disconnect', function() {
                                    positionSync.cancel();
                                    playerUpdater.cancel();
                                });
                                _context2.next = 14;
                                break;
                            case 10:
                                _context2.next = 12;
                                return this.updateTimingObject(timingObject, player);
                            case 12:
                                timingObjectUpdater = subscribe(player, [
                                    'seeked',
                                    'play',
                                    'pause',
                                    'ratechange'
                                ], function() {
                                    return _this2.updateTimingObject(timingObject, player);
                                }, 'on', 'off');
                                this.addEventListener('disconnect', function() {
                                    return timingObjectUpdater.cancel();
                                });
                            case 14:
                            case "end":
                                return _context2.stop();
                        }
                    }, _callee2, this);
                }));
                function init(_x3, _x4, _x5) {
                    return _init.apply(this, arguments);
                }
                return init;
            }()
        },
        {
            key: "updateTimingObject",
            value: function() {
                var _updateTimingObject = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(timingObject, player) {
                    var _yield$Promise$all, _yield$Promise$all2, position, isPaused, playbackRate;
                    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                        while(1)switch(_context3.prev = _context3.next){
                            case 0:
                                _context3.next = 2;
                                return Promise.all([
                                    player.getCurrentTime(),
                                    player.getPaused(),
                                    player.getPlaybackRate()
                                ]);
                            case 2:
                                _yield$Promise$all = _context3.sent;
                                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3);
                                position = _yield$Promise$all2[0];
                                isPaused = _yield$Promise$all2[1];
                                playbackRate = _yield$Promise$all2[2];
                                timingObject.update({
                                    position: position,
                                    velocity: isPaused ? 0 : playbackRate
                                });
                            case 8:
                            case "end":
                                return _context3.stop();
                        }
                    }, _callee3);
                }));
                function updateTimingObject(_x6, _x7) {
                    return _updateTimingObject.apply(this, arguments);
                }
                return updateTimingObject;
            }()
        },
        {
            key: "updatePlayer",
            value: function() {
                var _updatePlayer = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee5(timingObject, player, options) {
                    var _timingObject$query, position, velocity;
                    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                        while(1)switch(_context5.prev = _context5.next){
                            case 0:
                                _timingObject$query = timingObject.query(), position = _timingObject$query.position, velocity = _timingObject$query.velocity;
                                if (typeof position === 'number') {
                                    player.setCurrentTime(position);
                                }
                                if (!(typeof velocity === 'number')) {
                                    _context5.next = 25;
                                    break;
                                }
                                if (!(velocity === 0)) {
                                    _context5.next = 11;
                                    break;
                                }
                                _context5.next = 6;
                                return player.getPaused();
                            case 6:
                                _context5.t0 = _context5.sent;
                                if (!(_context5.t0 === false)) {
                                    _context5.next = 9;
                                    break;
                                }
                                player.pause();
                            case 9:
                                _context5.next = 25;
                                break;
                            case 11:
                                if (!(velocity > 0)) {
                                    _context5.next = 25;
                                    break;
                                }
                                _context5.next = 14;
                                return player.getPaused();
                            case 14:
                                _context5.t1 = _context5.sent;
                                if (!(_context5.t1 === true)) {
                                    _context5.next = 19;
                                    break;
                                }
                                _context5.next = 18;
                                return player.play().catch(/*#__PURE__*/ function() {
                                    var _ref2 = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(err) {
                                        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                                            while(1)switch(_context4.prev = _context4.next){
                                                case 0:
                                                    if (!(err.name === 'NotAllowedError' && options.autoPlayMuted)) {
                                                        _context4.next = 5;
                                                        break;
                                                    }
                                                    _context4.next = 3;
                                                    return player.setMuted(true);
                                                case 3:
                                                    _context4.next = 5;
                                                    return player.play().catch(function(err2) {
                                                        return console.error('Couldn\'t play the video from TimingSrcConnector. Error:', err2);
                                                    });
                                                case 5:
                                                case "end":
                                                    return _context4.stop();
                                            }
                                        }, _callee4);
                                    }));
                                    return function(_x11) {
                                        return _ref2.apply(this, arguments);
                                    };
                                }());
                            case 18:
                                this.updatePlayer(timingObject, player, options);
                            case 19:
                                _context5.next = 21;
                                return player.getPlaybackRate();
                            case 21:
                                _context5.t2 = _context5.sent;
                                _context5.t3 = velocity;
                                if (!(_context5.t2 !== _context5.t3)) {
                                    _context5.next = 25;
                                    break;
                                }
                                player.setPlaybackRate(velocity);
                            case 25:
                            case "end":
                                return _context5.stop();
                        }
                    }, _callee5, this);
                }));
                function updatePlayer(_x8, _x9, _x10) {
                    return _updatePlayer.apply(this, arguments);
                }
                return updatePlayer;
            }()
        },
        {
            key: "maintainPlaybackPosition",
            value: function maintainPlaybackPosition(timingObject, player, options) {
                var _this3 = this;
                var allowedDrift = options.allowedDrift, maxAllowedDrift = options.maxAllowedDrift, minCheckInterval = options.minCheckInterval, maxRateAdjustment = options.maxRateAdjustment, maxTimeToCatchUp = options.maxTimeToCatchUp;
                var syncInterval = Math.min(maxTimeToCatchUp, Math.max(minCheckInterval, maxAllowedDrift)) * 1000;
                var check = /*#__PURE__*/ function() {
                    var _ref3 = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee6() {
                        var diff, diffAbs, min, max, adjustment;
                        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                            while(1)switch(_context6.prev = _context6.next){
                                case 0:
                                    _context6.t0 = timingObject.query().velocity === 0;
                                    if (_context6.t0) {
                                        _context6.next = 6;
                                        break;
                                    }
                                    _context6.next = 4;
                                    return player.getPaused();
                                case 4:
                                    _context6.t1 = _context6.sent;
                                    _context6.t0 = _context6.t1 === true;
                                case 6:
                                    if (!_context6.t0) {
                                        _context6.next = 8;
                                        break;
                                    }
                                    return _context6.abrupt("return");
                                case 8:
                                    _context6.t2 = timingObject.query().position;
                                    _context6.next = 11;
                                    return player.getCurrentTime();
                                case 11:
                                    _context6.t3 = _context6.sent;
                                    diff = _context6.t2 - _context6.t3;
                                    diffAbs = Math.abs(diff);
                                    _this3.log("Drift: ".concat(diff));
                                    if (!(diffAbs > maxAllowedDrift)) {
                                        _context6.next = 22;
                                        break;
                                    }
                                    _context6.next = 18;
                                    return _this3.adjustSpeed(player, 0);
                                case 18:
                                    player.setCurrentTime(timingObject.query().position);
                                    _this3.log('Resync by currentTime');
                                    _context6.next = 29;
                                    break;
                                case 22:
                                    if (!(diffAbs > allowedDrift)) {
                                        _context6.next = 29;
                                        break;
                                    }
                                    min = diffAbs / maxTimeToCatchUp;
                                    max = maxRateAdjustment;
                                    adjustment = min < max ? (max - min) / 2 : max;
                                    _context6.next = 28;
                                    return _this3.adjustSpeed(player, adjustment * Math.sign(diff));
                                case 28:
                                    _this3.log('Resync by playbackRate');
                                case 29:
                                case "end":
                                    return _context6.stop();
                            }
                        }, _callee6);
                    }));
                    return function check() {
                        return _ref3.apply(this, arguments);
                    };
                }();
                var interval = setInterval(function() {
                    return check();
                }, syncInterval);
                return {
                    cancel: function cancel() {
                        return clearInterval(interval);
                    }
                };
            }
        },
        {
            key: "log",
            value: function log(msg) {
                var _this$logger;
                (_this$logger = this.logger) === null || _this$logger === void 0 ? void 0 : _this$logger.call(this, "TimingSrcConnector: ".concat(msg));
            }
        },
        {
            key: "waitForTOReadyState",
            value: /**
     * @param {TimingObject} timingObject
     * @param {TConnectionState} state
     * @return {Promise<void>}
     */ function waitForTOReadyState(timingObject, state) {
                return new Promise(function(resolve) {
                    var check = function check() {
                        if (timingObject.readyState === state) {
                            resolve();
                        } else {
                            timingObject.addEventListener('readystatechange', check, {
                                once: true
                            });
                        }
                    };
                    check();
                });
            }
        }
    ]);
    return TimingSrcConnector;
}(/*#__PURE__*/ _wrapNativeSuper(EventTarget));
var playerMap = new WeakMap();
var readyMap = new WeakMap();
var screenfull = {};
var Player = /*#__PURE__*/ function() {
    /**
   * Create a Player.
   *
   * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
   *        player iframe, and id, or a jQuery object.
   * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
   * @return {Player}
   */ function Player(element) {
        var _this = this;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        _classCallCheck(this, Player);
        /* global jQuery */ if (window.jQuery && element instanceof jQuery) {
            if (element.length > 1 && window.console && console.warn) {
                console.warn('A jQuery object with multiple elements was passed, using the first element.');
            }
            element = element[0];
        }
        // Find an element by ID
        if (typeof document !== 'undefined' && typeof element === 'string') {
            element = document.getElementById(element);
        }
        // Not an element!
        if (!isDomElement(element)) {
            throw new TypeError('You must pass either a valid element or a valid id.');
        }
        // Already initialized an embed in this div, so grab the iframe
        if (element.nodeName !== 'IFRAME') {
            var iframe = element.querySelector('iframe');
            if (iframe) {
                element = iframe;
            }
        }
        // iframe url is not a Vimeo url
        if (element.nodeName === 'IFRAME' && !isVimeoUrl(element.getAttribute('src') || '')) {
            throw new Error('The player element passed isn’t a Vimeo embed.');
        }
        // If there is already a player object in the map, return that
        if (playerMap.has(element)) {
            return playerMap.get(element);
        }
        this._window = element.ownerDocument.defaultView;
        this.element = element;
        this.origin = '*';
        var readyPromise = new npo_src(function(resolve, reject) {
            _this._onMessage = function(event) {
                if (!isVimeoUrl(event.origin) || _this.element.contentWindow !== event.source) {
                    return;
                }
                if (_this.origin === '*') {
                    _this.origin = event.origin;
                }
                var data = parseMessageData(event.data);
                var isError = data && data.event === 'error';
                var isReadyError = isError && data.data && data.data.method === 'ready';
                if (isReadyError) {
                    var error = new Error(data.data.message);
                    error.name = data.data.name;
                    reject(error);
                    return;
                }
                var isReadyEvent = data && data.event === 'ready';
                var isPingResponse = data && data.method === 'ping';
                if (isReadyEvent || isPingResponse) {
                    _this.element.setAttribute('data-ready', 'true');
                    resolve();
                    return;
                }
                processData(_this, data);
            };
            _this._window.addEventListener('message', _this._onMessage);
            if (_this.element.nodeName !== 'IFRAME') {
                var params = getOEmbedParameters(element, options);
                var url = getVimeoUrl(params);
                getOEmbedData(url, params, element).then(function(data) {
                    var iframe = createEmbed(data, element);
                    // Overwrite element with the new iframe,
                    // but store reference to the original element
                    _this.element = iframe;
                    _this._originalElement = element;
                    swapCallbacks(element, iframe);
                    playerMap.set(_this.element, _this);
                    return data;
                }).catch(reject);
            }
        });
        // Store a copy of this Player in the map
        readyMap.set(this, readyPromise);
        playerMap.set(this.element, this);
        // Send a ping to the iframe so the ready promise will be resolved if
        // the player is already ready.
        if (this.element.nodeName === 'IFRAME') {
            postMessage(this, 'ping');
        }
        if (screenfull.isEnabled) {
            var exitFullscreen = function exitFullscreen() {
                return screenfull.exit();
            };
            this.fullscreenchangeHandler = function() {
                if (screenfull.isFullscreen) {
                    storeCallback(_this, 'event:exitFullscreen', exitFullscreen);
                } else {
                    removeCallback(_this, 'event:exitFullscreen', exitFullscreen);
                }
                // eslint-disable-next-line
                _this.ready().then(function() {
                    postMessage(_this, 'fullscreenchange', screenfull.isFullscreen);
                });
            };
            screenfull.on('fullscreenchange', this.fullscreenchangeHandler);
        }
        return this;
    }
    /**
   * Check to see if the URL is a Vimeo URL.
   *
   * @param {string} url The URL string.
   * @return {boolean}
   */ _createClass(Player, [
        {
            key: "callMethod",
            value: /**
     * Get a promise for a method.
     *
     * @param {string} name The API method to call.
     * @param {...(string|number|object|Array)} args Arguments to send via postMessage.
     * @return {Promise}
     */ function callMethod(name) {
                var _this2 = this;
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                if (name === undefined || name === null) {
                    throw new TypeError('You must pass a method name.');
                }
                return new npo_src(function(resolve, reject) {
                    // We are storing the resolve/reject handlers to call later, so we
                    // can’t return here.
                    return _this2.ready().then(function() {
                        storeCallback(_this2, name, {
                            resolve: resolve,
                            reject: reject
                        });
                        if (args.length === 0) {
                            args = {};
                        } else if (args.length === 1) {
                            args = args[0];
                        }
                        postMessage(_this2, name, args);
                    }).catch(reject);
                });
            }
        },
        {
            key: "get",
            value: function get(name) {
                var _this3 = this;
                return new npo_src(function(resolve, reject) {
                    name = getMethodName(name, 'get');
                    // We are storing the resolve/reject handlers to call later, so we
                    // can’t return here.
                    return _this3.ready().then(function() {
                        storeCallback(_this3, name, {
                            resolve: resolve,
                            reject: reject
                        });
                        postMessage(_this3, name);
                    }).catch(reject);
                });
            }
        },
        {
            key: "set",
            value: function set(name, value) {
                var _this4 = this;
                return new npo_src(function(resolve, reject) {
                    name = getMethodName(name, 'set');
                    if (value === undefined || value === null) {
                        throw new TypeError('There must be a value to set.');
                    }
                    // We are storing the resolve/reject handlers to call later, so we
                    // can’t return here.
                    return _this4.ready().then(function() {
                        storeCallback(_this4, name, {
                            resolve: resolve,
                            reject: reject
                        });
                        postMessage(_this4, name, value);
                    }).catch(reject);
                });
            }
        },
        {
            key: "on",
            value: function on(eventName, callback) {
                if (!eventName) {
                    throw new TypeError('You must pass an event name.');
                }
                if (!callback) {
                    throw new TypeError('You must pass a callback function.');
                }
                if (typeof callback !== 'function') {
                    throw new TypeError('The callback must be a function.');
                }
                var callbacks = getCallbacks(this, "event:".concat(eventName));
                if (callbacks.length === 0) {
                    this.callMethod('addEventListener', eventName).catch(function() {
                    // Ignore the error. There will be an error event fired that
                    // will trigger the error callback if they are listening.
                    });
                }
                storeCallback(this, "event:".concat(eventName), callback);
            }
        },
        {
            key: "off",
            value: function off(eventName, callback) {
                if (!eventName) {
                    throw new TypeError('You must pass an event name.');
                }
                if (callback && typeof callback !== 'function') {
                    throw new TypeError('The callback must be a function.');
                }
                var lastCallback = removeCallback(this, "event:".concat(eventName), callback);
                // If there are no callbacks left, remove the listener
                if (lastCallback) {
                    this.callMethod('removeEventListener', eventName).catch(function(e) {
                    // Ignore the error. There will be an error event fired that
                    // will trigger the error callback if they are listening.
                    });
                }
            }
        },
        {
            key: "loadVideo",
            value: function loadVideo(options) {
                return this.callMethod('loadVideo', options);
            }
        },
        {
            key: "ready",
            value: function ready() {
                var readyPromise = readyMap.get(this) || new npo_src(function(resolve, reject) {
                    reject(new Error('Unknown player. Probably unloaded.'));
                });
                return npo_src.resolve(readyPromise);
            }
        },
        {
            key: "addCuePoint",
            value: function addCuePoint(time) {
                var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return this.callMethod('addCuePoint', {
                    time: time,
                    data: data
                });
            }
        },
        {
            key: "removeCuePoint",
            value: function removeCuePoint(id) {
                return this.callMethod('removeCuePoint', id);
            }
        },
        {
            key: "enableTextTrack",
            value: function enableTextTrack(language) {
                var kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var showing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
                if (!language) {
                    throw new TypeError('You must pass a language.');
                }
                return this.callMethod('enableTextTrack', {
                    language: language,
                    kind: kind,
                    showing: showing
                });
            }
        },
        {
            key: "disableTextTrack",
            value: function disableTextTrack() {
                return this.callMethod('disableTextTrack');
            }
        },
        {
            key: "selectAudioTrack",
            value: function selectAudioTrack(language, kind) {
                if (!language) {
                    throw new TypeError('You must pass a language.');
                }
                return this.callMethod('selectAudioTrack', {
                    language: language,
                    kind: kind
                });
            }
        },
        {
            key: "selectDefaultAudioTrack",
            value: function selectDefaultAudioTrack() {
                return this.callMethod('selectDefaultAudioTrack');
            }
        },
        {
            key: "pause",
            value: function pause() {
                return this.callMethod('pause');
            }
        },
        {
            key: "play",
            value: function play() {
                return this.callMethod('play');
            }
        },
        {
            key: "requestFullscreen",
            value: function requestFullscreen() {
                if (screenfull.isEnabled) {
                    return screenfull.request(this.element);
                }
                return this.callMethod('requestFullscreen');
            }
        },
        {
            key: "exitFullscreen",
            value: function exitFullscreen() {
                if (screenfull.isEnabled) {
                    return screenfull.exit();
                }
                return this.callMethod('exitFullscreen');
            }
        },
        {
            key: "getFullscreen",
            value: function getFullscreen() {
                if (screenfull.isEnabled) {
                    return npo_src.resolve(screenfull.isFullscreen);
                }
                return this.get('fullscreen');
            }
        },
        {
            key: "requestPictureInPicture",
            value: function requestPictureInPicture() {
                return this.callMethod('requestPictureInPicture');
            }
        },
        {
            key: "exitPictureInPicture",
            value: function exitPictureInPicture() {
                return this.callMethod('exitPictureInPicture');
            }
        },
        {
            key: "getPictureInPicture",
            value: function getPictureInPicture() {
                return this.get('pictureInPicture');
            }
        },
        {
            key: "remotePlaybackPrompt",
            value: function remotePlaybackPrompt() {
                return this.callMethod('remotePlaybackPrompt');
            }
        },
        {
            key: "unload",
            value: function unload() {
                return this.callMethod('unload');
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var _this5 = this;
                return new npo_src(function(resolve) {
                    readyMap.delete(_this5);
                    playerMap.delete(_this5.element);
                    if (_this5._originalElement) {
                        playerMap.delete(_this5._originalElement);
                        _this5._originalElement.removeAttribute('data-vimeo-initialized');
                    }
                    if (_this5.element && _this5.element.nodeName === 'IFRAME' && _this5.element.parentNode) {
                        // If we've added an additional wrapper div, remove that from the DOM.
                        // If not, just remove the iframe element.
                        if (_this5.element.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== _this5.element.parentNode) {
                            _this5.element.parentNode.parentNode.removeChild(_this5.element.parentNode);
                        } else {
                            _this5.element.parentNode.removeChild(_this5.element);
                        }
                    }
                    // If the clip is private there is a case where the element stays the
                    // div element. Destroy should reset the div and remove the iframe child.
                    if (_this5.element && _this5.element.nodeName === 'DIV' && _this5.element.parentNode) {
                        _this5.element.removeAttribute('data-vimeo-initialized');
                        var iframe = _this5.element.querySelector('iframe');
                        if (iframe && iframe.parentNode) {
                            // If we've added an additional wrapper div, remove that from the DOM.
                            // If not, just remove the iframe element.
                            if (iframe.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== iframe.parentNode) {
                                iframe.parentNode.parentNode.removeChild(iframe.parentNode);
                            } else {
                                iframe.parentNode.removeChild(iframe);
                            }
                        }
                    }
                    _this5._window.removeEventListener('message', _this5._onMessage);
                    if (screenfull.isEnabled) {
                        screenfull.off('fullscreenchange', _this5.fullscreenchangeHandler);
                    }
                    resolve();
                });
            }
        },
        {
            key: "getAutopause",
            value: function getAutopause() {
                return this.get('autopause');
            }
        },
        {
            key: "setAutopause",
            value: function setAutopause(autopause) {
                return this.set('autopause', autopause);
            }
        },
        {
            key: "getBuffered",
            value: function getBuffered() {
                return this.get('buffered');
            }
        },
        {
            key: "getCameraProps",
            value: function getCameraProps() {
                return this.get('cameraProps');
            }
        },
        {
            key: "setCameraProps",
            value: function setCameraProps(camera) {
                return this.set('cameraProps', camera);
            }
        },
        {
            key: "getChapters",
            value: function getChapters() {
                return this.get('chapters');
            }
        },
        {
            key: "getCurrentChapter",
            value: function getCurrentChapter() {
                return this.get('currentChapter');
            }
        },
        {
            key: "getColor",
            value: function getColor() {
                return this.get('color');
            }
        },
        {
            key: "getColors",
            value: function getColors() {
                return npo_src.all([
                    this.get('colorOne'),
                    this.get('colorTwo'),
                    this.get('colorThree'),
                    this.get('colorFour')
                ]);
            }
        },
        {
            key: "setColor",
            value: function setColor(color) {
                return this.set('color', color);
            }
        },
        {
            key: "setColors",
            value: function setColors(colors) {
                if (!Array.isArray(colors)) {
                    return new npo_src(function(resolve, reject) {
                        return reject(new TypeError('Argument must be an array.'));
                    });
                }
                var nullPromise = new npo_src(function(resolve) {
                    return resolve(null);
                });
                var colorPromises = [
                    colors[0] ? this.set('colorOne', colors[0]) : nullPromise,
                    colors[1] ? this.set('colorTwo', colors[1]) : nullPromise,
                    colors[2] ? this.set('colorThree', colors[2]) : nullPromise,
                    colors[3] ? this.set('colorFour', colors[3]) : nullPromise
                ];
                return npo_src.all(colorPromises);
            }
        },
        {
            key: "getCuePoints",
            value: function getCuePoints() {
                return this.get('cuePoints');
            }
        },
        {
            key: "getCurrentTime",
            value: function getCurrentTime() {
                return this.get('currentTime');
            }
        },
        {
            key: "setCurrentTime",
            value: function setCurrentTime(currentTime) {
                return this.set('currentTime', currentTime);
            }
        },
        {
            key: "getDuration",
            value: function getDuration() {
                return this.get('duration');
            }
        },
        {
            key: "getEnded",
            value: function getEnded() {
                return this.get('ended');
            }
        },
        {
            key: "getLoop",
            value: function getLoop() {
                return this.get('loop');
            }
        },
        {
            key: "setLoop",
            value: function setLoop(loop) {
                return this.set('loop', loop);
            }
        },
        {
            key: "setMuted",
            value: function setMuted(muted) {
                return this.set('muted', muted);
            }
        },
        {
            key: "getMuted",
            value: function getMuted() {
                return this.get('muted');
            }
        },
        {
            key: "getPaused",
            value: function getPaused() {
                return this.get('paused');
            }
        },
        {
            key: "getPlaybackRate",
            value: function getPlaybackRate() {
                return this.get('playbackRate');
            }
        },
        {
            key: "setPlaybackRate",
            value: function setPlaybackRate(playbackRate) {
                return this.set('playbackRate', playbackRate);
            }
        },
        {
            key: "getPlayed",
            value: function getPlayed() {
                return this.get('played');
            }
        },
        {
            key: "getQualities",
            value: function getQualities() {
                return this.get('qualities');
            }
        },
        {
            key: "getQuality",
            value: function getQuality() {
                return this.get('quality');
            }
        },
        {
            key: "setQuality",
            value: function setQuality(quality) {
                return this.set('quality', quality);
            }
        },
        {
            key: "getRemotePlaybackAvailability",
            value: function getRemotePlaybackAvailability() {
                return this.get('remotePlaybackAvailability');
            }
        },
        {
            key: "getRemotePlaybackState",
            value: function getRemotePlaybackState() {
                return this.get('remotePlaybackState');
            }
        },
        {
            key: "getSeekable",
            value: function getSeekable() {
                return this.get('seekable');
            }
        },
        {
            key: "getSeeking",
            value: function getSeeking() {
                return this.get('seeking');
            }
        },
        {
            key: "getTextTracks",
            value: function getTextTracks() {
                return this.get('textTracks');
            }
        },
        {
            key: "getAudioTracks",
            value: function getAudioTracks() {
                return this.get('audioTracks');
            }
        },
        {
            key: "getEnabledAudioTrack",
            value: function getEnabledAudioTrack() {
                return this.get('enabledAudioTrack');
            }
        },
        {
            key: "getDefaultAudioTrack",
            value: function getDefaultAudioTrack() {
                return this.get('defaultAudioTrack');
            }
        },
        {
            key: "getVideoEmbedCode",
            value: function getVideoEmbedCode() {
                return this.get('videoEmbedCode');
            }
        },
        {
            key: "getVideoId",
            value: function getVideoId() {
                return this.get('videoId');
            }
        },
        {
            key: "getVideoTitle",
            value: function getVideoTitle() {
                return this.get('videoTitle');
            }
        },
        {
            key: "getVideoWidth",
            value: function getVideoWidth() {
                return this.get('videoWidth');
            }
        },
        {
            key: "getVideoHeight",
            value: function getVideoHeight() {
                return this.get('videoHeight');
            }
        },
        {
            key: "getVideoUrl",
            value: function getVideoUrl() {
                return this.get('videoUrl');
            }
        },
        {
            key: "getVolume",
            value: function getVolume() {
                return this.get('volume');
            }
        },
        {
            key: "setVolume",
            value: function setVolume(volume) {
                return this.set('volume', volume);
            }
        },
        {
            key: "setTimingSrc",
            value: function() {
                var _setTimingSrc = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee(timingObject, options) {
                    var _this6 = this;
                    var connector;
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while(1)switch(_context.prev = _context.next){
                            case 0:
                                if (timingObject) {
                                    _context.next = 2;
                                    break;
                                }
                                throw new TypeError('A Timing Object must be provided.');
                            case 2:
                                _context.next = 4;
                                return this.ready();
                            case 4:
                                connector = new TimingSrcConnector(this, timingObject, options);
                                postMessage(this, 'notifyTimingObjectConnect');
                                connector.addEventListener('disconnect', function() {
                                    return postMessage(_this6, 'notifyTimingObjectDisconnect');
                                });
                                return _context.abrupt("return", connector);
                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this);
                }));
                function setTimingSrc(_x, _x2) {
                    return _setTimingSrc.apply(this, arguments);
                }
                return setTimingSrc;
            }()
        }
    ], [
        {
            key: "isVimeoUrl",
            value: function isVimeoUrl$1(url) {
                return isVimeoUrl(url);
            }
        }
    ]);
    return Player;
}(); // Setup embed only if this is not a server runtime
if (!isServerRuntime) {
    screenfull = initializeScreenfull();
    initializeEmbeds();
    resizeEmbeds();
    initAppendVideoMetadata();
    checkUrlTimeParam();
    updateDRMEmbeds();
}
const __TURBOPACK__default__export__ = Player;
}),
];

//# sourceMappingURL=_b0737eae._.js.map