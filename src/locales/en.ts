// locales/en.ts
export default {
    hello: 'Hello',
    currentLanguage: 'EN',
    language: {
        Language: "Language",
        Currency: "Currency",
        Cerrency_price: "USD: $"
        
    },
    landing: {
        hero: {
            title: "Turn your passion",
            title_span: "into income",
            sub_title_1: "The simplest platform to sell online with only",
            sub_title_2: "2.5%",
            sub_title_3: "commission",
            sans_frais: "No hidden fees",
            support: "24/7 Support",
            demarrer: "Get started now - €25/year",
            demo: "See demo"
        },
        cta: {
            title: "Ready to start selling?",
            sub_title: "Join our professional platform today",
            signup: " Sign up now",
            abonment: "Annual subscription for €25 - Immediate access"
        },
        features: {
            title: "Why sell on our platform ?",
            items: [
                {
                    title: "Simplified Inventory",
                    description: "Intuitive dashboard with real-time stock management and low stock alerts"
                },
                {
                    title: "Unbeatable Commission",
                    description: "Only 2-3% per transaction (vs 10-15% elsewhere) with guaranteed weekly payments"
                },
                {
                    title: "Instant Activation",
                    description: "Start selling in 5 minutes, no documents or identity verification required"
                },
                {
                    title: "Qualified Audience",
                    description: "Direct access to our thousands of monthly active buyers across Europe and worldwide"
                },
                {
                    title: "Maximum Security",
                    description: "Anti-fraud protection and military-grade banking encryption"
                },
                {
                    title: "Global Expansion",
                    description: "Sell in 28 European countries without customs formalities"
                }
            ]
        },

        faq: {
            title: "Frequently Asked Questions",
            items: [
                {
                    question: "1. What documents are needed to sign up ?",
                    answer: "No documents are required to start selling. Our platform is open to everyone without prior identity verification."
                },
                {
                    question: "2. How do I create my seller account ?",
                    answer: "Click 'Sign up', enter your email, choose a password and pay the annual €25 subscription. No documents required."
                },
                {
                    question: "3. What are the commission fees ?",
                    answer: "We take only 2-3% per sale, well below market standards (typically 10-15%)."
                },
                {
                    question: "4. How are payments processed ?",
                    answer: "Funds are transferred directly to your bank account every week. We use Stripe for secure transfers."
                },
                {
                    question: "5. Can I sell any type of product ?",
                    answer: "Yes, as long as your products are legal. Some regulated categories (alcohol, tobacco) require age verification."
                },
                {
                    question: "6. How does delivery work ?",
                    answer: "You handle logistics yourself or use our partnership with carriers at preferential rates."
                },
                {
                    question: "7. Can I cancel my subscription ?",
                    answer: "Yes, anytime from your dashboard. No refund for the current year, but no penalty."
                }
            ]
        },
        footer: {
            year: "All rights reserved.",
            CGU: "Terms of Service",
            confidentiality: "Privacy Policy",
            legal: "Legal Notice"
        }
    }
} as const