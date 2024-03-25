import Stripe from "stripe";

export const stripe = new Stripe(

    process.env.STRIPE_SECRET_KEY ?? '',
    {
        apiVersion: '2023-3-15',
        appInfo: {
            name: 'Lullaby',
            version: '0.1.0'
        }
    }
);
