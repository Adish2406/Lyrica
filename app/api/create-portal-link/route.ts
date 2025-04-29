import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from "next/headers";
import { NextResponse } from 'next/server';

import { stripe } from '@/libs/stripe';
import { getURL } from '@/libs/helpers';
import { createOrRetrieveCustomer } from '@/libs/supabaseAdmin';

export async function POST(req: Request) {
    try {
      const { priceId } = await req.json();
  
      if (!priceId) {
        return new NextResponse("Price ID is required", { status: 400 });
      }
  
      const supabase = createRouteHandlerClient({ cookies });
      const {
        data: { user },
      } = await supabase.auth.getUser();
  
      if (!user) {
        return new NextResponse("User not found", { status: 401 });
      }
  
      const customer = await createOrRetrieveCustomer({
        uuid: user.id,
        email: user.email || "",
      });
  
      if (!customer) {
        return new NextResponse("Customer not found", { status: 500 });
      }
  
      const session = await stripe.checkout.sessions.create({
        customer,
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        success_url: `${getURL()}/account`,
        cancel_url: `${getURL()}/`,
      });
  
      return NextResponse.json({ sessionId: session.id });
    } catch (error) {
      console.log("Checkout Session Error:", error);
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  }
  