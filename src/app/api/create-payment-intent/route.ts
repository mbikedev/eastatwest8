import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-07-30.basil'
})

export async function POST(request: NextRequest) {
  try {
    const { orderId, amount, currency = 'eur' } = await request.json()

    if (!orderId || !amount) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      metadata: {
        orderId,
        integration_check: 'accept_a_payment'
      },
      automatic_payment_methods: {
        enabled: true,
      },
      payment_method_types: ['card', 'paypal'],
      description: `Order ${orderId} - East at West Restaurant`,
    })

    return NextResponse.json({
      success: true,
      data: {
        client_secret: paymentIntent.client_secret,
        payment_intent_id: paymentIntent.id
      }
    })

  } catch (error) {
    console.error('Payment intent creation error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create payment intent' },
      { status: 500 }
    )
  }
} 