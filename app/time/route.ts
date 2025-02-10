export const dynamic = 'force-static'
// export const revalidate = 60
// export async function GET(){
//     return Response.json({time: new Date()});
//     // return Response.json({time: new Date().toLocaleTimeString()});
// }

export async function GET() {
    return new Response(JSON.stringify({ time: new Date() }), {
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "s-maxage=60, stale-while-revalidate=30", // Cache for 60s, allow stale data for 30s
        },
    });
}
