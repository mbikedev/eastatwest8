import { NextResponse } from 'next/server'

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID
  
  return NextResponse.json({
    apiKeyPresent: !!apiKey,
    apiKeyLength: apiKey ? apiKey.length : 0,
    apiKeyPrefix: apiKey ? apiKey.substring(0, 4) : null,
    mapIdPresent: !!mapId,
    mapIdLength: mapId ? mapId.length : 0,
    mapIdPrefix: mapId ? mapId.substring(0, 4) : null,
    nodeEnv: process.env.NODE_ENV,
    allEnvVars: Object.keys(process.env).filter(key => key.includes('GOOGLE'))
  })
} 