import dynamic from 'next/dynamic';

// Lazy load admin components since they're rarely accessed
export const LazyAdminReservations = dynamic(() => import('../app/admin/reservations/page'), {
  loading: () => (
    <div className="p-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 rounded w-64 mb-4"></div>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-16 bg-gray-300 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: false
});

export const LazyAdminComments = dynamic(() => import('../app/admin/comments/page'), {
  loading: () => (
    <div className="p-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 rounded w-64 mb-4"></div>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-24 bg-gray-300 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: false
});

// Note: Chart components can be added when needed
// export const LazyChart = dynamic(() => import('chart-library'), {
//   loading: () => <div>Loading chart...</div>,
//   ssr: false
// }); 