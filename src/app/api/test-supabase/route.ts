import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabaseServer';

export async function GET() {
  try {
    const supabase = await createClient();
    
    // First, let's check what columns exist in the reservations table
    const { data: tableInfo, error: tableError } = await supabase
      .rpc('get_table_columns', { table_name: 'reservations' })
      .single();
    
    if (tableError) {
      // If the RPC doesn't exist, let's try a different approach
      console.log('RPC not available, trying direct query...');
      
      // Try to get table structure by querying with a limit
      const { error } = await supabase
        .from('reservations')
        .select('*')
        .limit(0); // This will return column info without data
      
      if (error) {
        console.error('Supabase test error:', error);
        return NextResponse.json({ 
          success: false, 
          error: error.message,
          code: error.code,
          details: error.details,
          hint: 'The reservations table might not exist or have different column names'
        }, { status: 500 });
      }
      
      return NextResponse.json({ 
        success: true, 
        message: 'Supabase connection successful',
        tableExists: true,
        note: 'Table exists but column structure unknown. Check Supabase dashboard for actual column names.'
      });
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Supabase connection successful',
      tableColumns: tableInfo
    });
    
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Unexpected error occurred' 
    }, { status: 500 });
  }
} 