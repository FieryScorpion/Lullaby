import Stripe from "stripe";

export const stripe = new Stripe{
    process.env.STRIPE_SECRET_KEY,
    {
        apiVersion: '2022-1-15',
        appInfo: {
            name: 'Lullabby',
        }
    }
}
