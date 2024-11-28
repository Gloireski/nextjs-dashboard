module.exports = {

"[project]/.next-internal/server/app/query/route/actions.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
__turbopack_export_value__({});
}}),
"[project]/app/query/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$postgres$40$0$2e$8$2e$0$2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$index$2d$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@vercel+postgres@0.8.0/node_modules/@vercel/postgres/dist/index-node.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$postgres$40$0$2e$8$2e$0$2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$chunk$2d$WDBQYBZQ$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@vercel+postgres@0.8.0/node_modules/@vercel/postgres/dist/chunk-WDBQYBZQ.js [app-route] (ecmascript) <locals>");
;
const client = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$postgres$40$0$2e$8$2e$0$2f$node_modules$2f40$vercel$2f$postgres$2f$dist$2f$chunk$2d$WDBQYBZQ$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].connect();
async function listInvoices() {
    const data = await client.sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;
    // const data = await sql<Revenue>`SELECT * FROM revenue`;
    return data.rows;
}
async function GET() {
    // return Response.json({
    //   message:
    //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
    // });
    try {
        return Response.json(await listInvoices());
    } catch (error) {
        return Response.json({
            error
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/esm/build/templates/app-route.js { INNER_APP_ROUTE => \"[project]/app/query/route.ts [app-route] (ecmascript)\" } [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "patchFetch": (()=>patchFetch),
    "routeModule": (()=>routeModule),
    "serverHooks": (()=>serverHooks),
    "workAsyncStorage": (()=>workAsyncStorage),
    "workUnitAsyncStorage": (()=>workUnitAsyncStorage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$route$2f$module$2e$compiled$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/esm/server/route-modules/app-route/module.compiled.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/esm/server/route-kind.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$patch$2d$fetch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/esm/server/lib/patch-fetch.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$query$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/query/route.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$query$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$query$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "";
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$route$2f$module$2e$compiled$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppRouteRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RouteKind"].APP_ROUTE,
        page: "/query/route",
        pathname: "/query",
        filename: "route",
        bundlePath: ""
    },
    resolvedPagePath: "[project]/app/query/route.ts",
    nextConfigOutput,
    userland: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$query$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;
function patchFetch() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$patch$2d$fetch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchFetch"])({
        workAsyncStorage,
        workUnitAsyncStorage
    });
}
;
 //# sourceMappingURL=app-route.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=_b0bb27._.js.map