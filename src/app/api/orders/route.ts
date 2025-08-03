import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json()

    // Validate required fields
    const requiredFields = ['customer_name', 'customer_email', 'customer_phone', 'delivery_type', 'delivery_date', 'delivery_time', 'total_amount']
    for (const field of requiredFields) {
      if (!orderData[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Create order in database
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert([{
        customer_name: orderData.customer_name,
        customer_email: orderData.customer_email,
        customer_phone: orderData.customer_phone,
        delivery_type: orderData.delivery_type,
        delivery_address: orderData.delivery_address,
        delivery_date: orderData.delivery_date,
        delivery_time: orderData.delivery_time,
        additional_notes: orderData.additional_notes,
        total_amount: orderData.total_amount,
        status: 'pending',
        language: orderData.language || 'en'
      }])
      .select()
      .single()

    if (orderError) {
      console.error('Order creation error:', orderError)
      return NextResponse.json(
        { success: false, error: 'Failed to create order' },
        { status: 500 }
      )
    }

    // Create order items
    if (orderData.items && orderData.items.length > 0) {
      const orderItems = orderData.items.map((item: { product_id: string; product_name: string; quantity: number; unit_price: number; total_price: number }) => ({
        order_id: order.id,
        product_id: item.product_id,
        product_name: item.product_name,
        quantity: item.quantity,
        unit_price: item.unit_price,
        total_price: item.total_price
      }))

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems)

      if (itemsError) {
        console.error('Order items creation error:', itemsError)
        // Note: We don't fail here as the order was created successfully
      }
    }

    return NextResponse.json({
      success: true,
      data: order
    })

  } catch (error) {
    console.error('Order creation error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const orderId = searchParams.get('id')

    if (!orderId) {
      return NextResponse.json(
        { success: false, error: 'Order ID is required' },
        { status: 400 }
      )
    }

    // Get order with items
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .select(`
        *,
        order_items (*)
      `)
      .eq('id', orderId)
      .single()

    if (orderError) {
      console.error('Order retrieval error:', orderError)
      return NextResponse.json(
        { success: false, error: 'Order not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: order
    })

  } catch (error) {
    console.error('Order retrieval error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve order' },
      { status: 500 }
    )
  }
} 