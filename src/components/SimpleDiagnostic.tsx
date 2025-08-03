'use client'

import { useEffect, useState } from 'react'

const SimpleDiagnostic: React.FC = () => {
  const [diagnosticData, setDiagnosticData] = useState<any>(null)

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID
    
    setDiagnosticData({
      status: apiKey ? 'success' : 'error',
      message: apiKey ? 'Environment variables loaded successfully' : 'API key missing from environment variables',
      apiKeyPresent: !!apiKey,
      apiKeyLength: apiKey ? apiKey.length : 0,
      apiKeyPrefix: apiKey ? apiKey.substring(0, 4) : null,
      mapIdPresent: !!mapId,
      mapIdLength: mapId ? mapId.length : 0,
      mapIdPrefix: mapId ? mapId.substring(0, 4) : null
    })
  }, [])

  if (!diagnosticData) {
    return (
      <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">
          🔍 Simple Diagnostic
        </h3>
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-600"></div>
          <span className="text-yellow-700">Loading...</span>
        </div>
      </div>
    )
  }

  const isSuccess = diagnosticData.status === 'success'

  return (
    <div className={`p-4 border rounded-lg ${
      isSuccess 
        ? 'border-green-200 bg-green-50' 
        : 'border-red-200 bg-red-50'
    }`}>
      <h3 className={`text-lg font-semibold mb-2 ${
        isSuccess ? 'text-green-800' : 'text-red-800'
      }`}>
        {isSuccess ? '✅' : '❌'} Simple Diagnostic
      </h3>
      
      <div className="space-y-2 text-sm">
        <div>
          <strong>Status:</strong> {diagnosticData.status}
        </div>
        
        <div>
          <strong>Message:</strong> {diagnosticData.message}
        </div>
        
        <div>
          <strong>API Key:</strong> {diagnosticData.apiKeyPresent ? '✅ Present' : '❌ Missing'} 
          {diagnosticData.apiKeyPresent && ` (${diagnosticData.apiKeyLength} chars, starts with ${diagnosticData.apiKeyPrefix})`}
        </div>
        
        <div>
          <strong>Map ID:</strong> {diagnosticData.mapIdPresent ? '✅ Present' : '⚠️ Missing'} 
          {diagnosticData.mapIdPresent && ` (${diagnosticData.mapIdLength} chars, starts with ${diagnosticData.mapIdPrefix})`}
        </div>
      </div>
      
      {!isSuccess && (
        <div className="mt-3 p-3 bg-yellow-100 border border-yellow-300 rounded">
          <h4 className="font-semibold text-yellow-800 mb-2">Next Steps:</h4>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Check your <code>.env.local</code> file has the correct API key</li>
            <li>• Make sure the file is in the project root (same level as package.json)</li>
            <li>• Restart your development server after making changes</li>
            <li>• Check that there are no spaces around the = sign</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default SimpleDiagnostic 