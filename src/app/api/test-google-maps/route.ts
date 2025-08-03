import { NextResponse } from 'next/server'

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID
  
  if (!apiKey) {
    return NextResponse.json({
      status: 'error',
      message: 'Google Maps API key is missing from environment variables',
      details: 'Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env.local file'
    }, { status: 400 })
  }

  if (!mapId) {
    return NextResponse.json({
      status: 'warning',
      message: 'Google Maps Map ID is missing',
      details: 'Add NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID to your .env.local file for Advanced Markers support',
      apiKeyPresent: true,
      apiKeyLength: apiKey.length,
      apiKeyPrefix: apiKey.substring(0, 4)
    }, { status: 200 })
  }

  // Test the API key by making a request to Google Maps API
  try {
    const testUrl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
    const response = await fetch(testUrl)
    
          if (response.ok) {
        return NextResponse.json({
          status: 'success',
          message: 'Google Maps API key is valid and working',
          apiKeyPresent: true,
          apiKeyLength: apiKey.length,
          apiKeyPrefix: apiKey.substring(0, 4), // Show first 4 characters for verification
          mapIdPresent: !!mapId,
          mapIdLength: mapId ? mapId.length : 0,
          mapIdPrefix: mapId ? mapId.substring(0, 4) : null
        })
      } else {
              return NextResponse.json({
          status: 'error',
          message: 'Google Maps API key validation failed',
          details: `HTTP ${response.status}: ${response.statusText}`,
          apiKeyPresent: true,
          apiKeyLength: apiKey.length,
          apiKeyPrefix: apiKey.substring(0, 4),
          mapIdPresent: !!mapId,
          mapIdLength: mapId ? mapId.length : 0,
          mapIdPrefix: mapId ? mapId.substring(0, 4) : null
        }, { status: 400 })
    }
  } catch (error) {
            return NextResponse.json({
          status: 'error',
          message: 'Failed to validate Google Maps API key',
          details: error instanceof Error ? error.message : 'Unknown error',
          apiKeyPresent: true,
          apiKeyLength: apiKey.length,
          apiKeyPrefix: apiKey.substring(0, 4),
          mapIdPresent: !!mapId,
          mapIdLength: mapId ? mapId.length : 0,
          mapIdPrefix: mapId ? mapId.substring(0, 4) : null
        }, { status: 500 })
  }
} 