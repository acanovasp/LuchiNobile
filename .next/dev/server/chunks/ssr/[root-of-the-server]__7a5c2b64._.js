module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/sanity.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "client",
    ()=>client,
    "urlFor",
    ()=>urlFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/client/dist/index.browser.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/image-url/lib/index.js [app-rsc] (ecmascript) <locals>");
;
;
const projectId = ("TURBOPACK compile-time value", "sxz4wjzb");
const dataset = ("TURBOPACK compile-time value", "production") || 'production';
const client = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
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
    const builder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(client);
    return builder.image(source);
}
}),
"[project]/lib/queries.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllProjects",
    ()=>getAllProjects,
    "getFeaturedProjects",
    ()=>getFeaturedProjects,
    "getProjectBySlug",
    ()=>getProjectBySlug,
    "getSiteSettings",
    ()=>getSiteSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sanity.ts [app-rsc] (ecmascript)");
;
async function getFeaturedProjects() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"]) return [];
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"].fetch(`*[_type == "project" && isFeatured == true] | order(order asc) {
      _id,
      title,
      client,
      slug,
      order,
      isFeatured,
      "previewVideoUrl": previewVideo.asset->url,
      archiveSize,
      fullVimeoId,
      thumbnail
    }`);
}
async function getAllProjects() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"]) return [];
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"].fetch(`*[_type == "project"] | order(order asc) {
      _id,
      title,
      client,
      slug,
      order,
      isFeatured,
      "previewVideoUrl": previewVideo.asset->url,
      archiveSize,
      fullVimeoId,
      thumbnail
    }`);
}
async function getProjectBySlug(slug) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"]) return null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"].fetch(`*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      client,
      slug,
      order,
      isFeatured,
      "previewVideoUrl": previewVideo.asset->url,
      archiveSize,
      fullVimeoId,
      thumbnail
    }`, {
        slug
    });
}
async function getSiteSettings() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"]) return null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"].fetch(`*[_type == "siteSettings"][0] {
      _id,
      aboutText,
      contactEmail
    }`);
}
}),
"[project]/components/MainPageClient.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/MainPageClient.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/MainPageClient.tsx <module evaluation>", "default");
}),
"[project]/components/MainPageClient.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/MainPageClient.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/MainPageClient.tsx", "default");
}),
"[project]/components/MainPageClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MainPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/MainPageClient.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MainPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/MainPageClient.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MainPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/queries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MainPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MainPageClient.tsx [app-rsc] (ecmascript)");
;
;
;
// Sample WebM video URL for testing (short loop)
const sampleVideoUrl = 'https://videos.pexels.com/video-files/5752729/5752729-hd_1920_1080_30fps.mp4';
// Default data for when Sanity is not configured
const defaultFeaturedProjects = [
    {
        _id: '1',
        title: 'The Hands That Make Champions',
        client: 'Estrella Galicia',
        slug: {
            current: 'hands-that-make-champions'
        },
        order: 1,
        isFeatured: true,
        previewVideoUrl: sampleVideoUrl,
        archiveSize: 'large',
        fullVimeoId: '824804225',
        thumbnail: null
    },
    {
        _id: '2',
        title: 'El Món Ens Mira',
        client: 'FC Barcelona',
        slug: {
            current: 'el-mon-ens-mira'
        },
        order: 2,
        isFeatured: true,
        previewVideoUrl: sampleVideoUrl,
        archiveSize: 'small',
        fullVimeoId: '824804225',
        thumbnail: null
    },
    {
        _id: '3',
        title: 'A New Way To Win',
        client: 'Oxdog',
        slug: {
            current: 'a-new-way-to-win'
        },
        order: 3,
        isFeatured: true,
        previewVideoUrl: sampleVideoUrl,
        archiveSize: 'small',
        fullVimeoId: '824804225',
        thumbnail: null
    },
    {
        _id: '4',
        title: 'I Embrace Who I Am',
        client: 'Rosa Clará',
        slug: {
            current: 'i-embrace-who-i-am'
        },
        order: 4,
        isFeatured: true,
        previewVideoUrl: sampleVideoUrl,
        archiveSize: 'large',
        fullVimeoId: '824804225',
        thumbnail: null
    },
    {
        _id: '5',
        title: 'Dani Is Calling',
        client: 'OK Mobility',
        slug: {
            current: 'dani-is-calling'
        },
        order: 5,
        isFeatured: true,
        previewVideoUrl: sampleVideoUrl,
        archiveSize: 'small',
        fullVimeoId: '824804225',
        thumbnail: null
    }
];
// All projects for the archive (featured + additional)
const defaultAllProjects = [
    ...defaultFeaturedProjects,
    {
        _id: '6',
        title: 'Summer Dreams',
        client: 'Mango',
        slug: {
            current: 'summer-dreams'
        },
        order: 6,
        isFeatured: false,
        previewVideoUrl: sampleVideoUrl,
        archiveSize: 'small',
        fullVimeoId: '824804225',
        thumbnail: null
    },
    {
        _id: '7',
        title: 'The Journey',
        client: 'Nike',
        slug: {
            current: 'the-journey'
        },
        order: 7,
        isFeatured: false,
        previewVideoUrl: sampleVideoUrl,
        archiveSize: 'large',
        fullVimeoId: '824804225',
        thumbnail: null
    },
    {
        _id: '8',
        title: 'Urban Stories',
        client: 'Adidas',
        slug: {
            current: 'urban-stories'
        },
        order: 8,
        isFeatured: false,
        previewVideoUrl: sampleVideoUrl,
        archiveSize: 'small',
        fullVimeoId: '824804225',
        thumbnail: null
    },
    {
        _id: '9',
        title: 'Moments',
        client: 'Apple',
        slug: {
            current: 'moments'
        },
        order: 9,
        isFeatured: false,
        previewVideoUrl: sampleVideoUrl,
        archiveSize: 'small',
        fullVimeoId: '824804225',
        thumbnail: null
    },
    {
        _id: '10',
        title: 'Breaking Limits',
        client: 'Red Bull',
        slug: {
            current: 'breaking-limits'
        },
        order: 10,
        isFeatured: false,
        previewVideoUrl: sampleVideoUrl,
        archiveSize: 'large',
        fullVimeoId: '824804225',
        thumbnail: null
    },
    {
        _id: '11',
        title: 'Taste of Home',
        client: 'Coca-Cola',
        slug: {
            current: 'taste-of-home'
        },
        order: 11,
        isFeatured: false,
        previewVideoUrl: sampleVideoUrl,
        archiveSize: 'small',
        fullVimeoId: '824804225',
        thumbnail: null
    },
    {
        _id: '12',
        title: 'New Horizons',
        client: 'Samsung',
        slug: {
            current: 'new-horizons'
        },
        order: 12,
        isFeatured: false,
        previewVideoUrl: sampleVideoUrl,
        archiveSize: 'small',
        fullVimeoId: '824804225',
        thumbnail: null
    }
];
const defaultSiteSettings = {
    _id: 'settings',
    aboutText: `Director, creativo y guionista argentino con base en Barcelona. Se formó en la Escuelita y Guionarte (Buenos Aires). Su obra ofrece una mirada sensible, cuidada y honesta sobre la experiencia humana, construida a través de composiciones minimalistas, un uso consciente del movimiento y la creación de universos realistas.

Confía profundamente en la práctica como escuela. En las ejecuciones simples pero contundentes. En la magia de los procesos. Entiende que en todo(s) hay algo por decir, y que vivir para descubrirlo es un privilegio.`,
    contactEmail: 'luchinobile@docestudios.com'
};
async function HomePage() {
    let featuredProjects = defaultFeaturedProjects;
    let allProjects = defaultAllProjects;
    let siteSettings = defaultSiteSettings;
    // Try to fetch from Sanity if configured
    if ("TURBOPACK compile-time truthy", 1) {
        try {
            const [featured, all, settings] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFeaturedProjects"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllProjects"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiteSettings"])()
            ]);
            if (featured && featured.length > 0) {
                featuredProjects = featured;
            }
            if (all && all.length > 0) {
                allProjects = all;
            }
            if (settings) {
                siteSettings = settings;
            }
        } catch (error) {
            console.error('Error fetching from Sanity:', error);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MainPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        featuredProjects: featuredProjects,
        allProjects: allProjects,
        siteSettings: siteSettings
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 197,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7a5c2b64._.js.map