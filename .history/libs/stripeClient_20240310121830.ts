import { loadStripe, Stripe } from "@stripe/stripe-js";
let stripePromise: Promise<Stripe | null>;

