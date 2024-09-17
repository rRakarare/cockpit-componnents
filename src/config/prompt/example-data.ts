import { PromptType } from "./types";

export const prompts: PromptType[] = [
    {
        _id: "001",
        user: {
          _id: "u001",
          name: "John Doe"
        },
        name: "Email Composer",
        path: "/prompts/email-composer",
        type: "prompt",
        category: {
          _id: "c001",
          name: "Writing"
        },
        subCategory: {
          _id: "sc001",
          name: "Business Communication"
        },
        icon: "mail",
        color: "hsl(var(--prompt-1))",
        prompt: "Compose a professional email to [recipient] regarding [topic]. The tone should be [formal/informal] and include [specific details].",
        description: "Generate tailored business emails quickly and efficiently.",
        model: "gpt-4",
        company: {
          _id: "comp001",
          name: "TechCorp",
          address: "123 Tech Street, San Francisco, CA 94105",
          systemMessage: "You are an AI assistant for TechCorp, focused on professional communication."
        },
        library: "company"
      },
      {
        _id: "002",
        user: {
          _id: "u002",
          name: "Jane Smith"
        },
        name: "Code Explainer",
        path: "/prompts/code-explainer",
        type: "prompt",
        category: {
          _id: "c002",
          name: "Programming"
        },
        subCategory: {
          _id: "sc002",
          name: "Code Analysis"
        },
        icon: "edit",
        color: "hsl(var(--prompt-2))",
        prompt: "Explain the following code snippet in simple terms: [code snippet]",
        description: "Break down complex code into easy-to-understand explanations.",
        model: "gpt-3.5-turbo",
        company: {
          _id: "comp002",
          name: "CodeMasters Inc.",
          address: "456 Coding Lane, Austin, TX 78701",
          systemMessage: "You are a coding expert, specializing in explaining complex code to beginners."
        },
        library: "master"
      },
      {
        _id: "003",
        user: {
          _id: "u003",
          name: "Alice Johnson"
        },
        name: "Travel Itinerary Planner",
        path: "/prompts/travel-planner",
        type: "prompt",
        category: {
          _id: "c003",
          name: "Travel"
        },
        subCategory: {
          _id: "sc003",
          name: "Itinerary"
        },
        icon: "map",
        color: "hsl(var(--prompt-3))",
        prompt: "Create a [number of days] day itinerary for a trip to [destination], including must-see attractions, local cuisine recommendations, and transportation options.",
        description: "Plan detailed travel itineraries for any destination.",
        model: "gpt-4",
        company: {
          _id: "comp003",
          name: "Wanderlust Adventures",
          address: "789 Explorer Ave, New York, NY 10001",
          systemMessage: "You are a knowledgeable travel assistant, helping users plan their perfect trips."
        },
        library: "company"
      },
      {
        _id: "004",
        user: {
          _id: "u004",
          name: "Bob Williams"
        },
        name: "Recipe Generator",
        path: "/prompts/recipe-generator",
        type: "prompt",
        category: {
          _id: "c004",
          name: "Cooking"
        },
        subCategory: {
          _id: "sc004",
          name: "Recipe Creation"
        },
        icon: "home",
        color: "hsl(var(--prompt-4))",
        prompt: "Create a recipe using the following ingredients: [list of ingredients]. The dish should be suitable for [dietary restrictions] and take no more than [time limit] to prepare.",
        description: "Generate unique recipes based on available ingredients and dietary needs.",
        model: "gpt-3.5-turbo",
        company: {
          _id: "comp004",
          name: "Culinary Creations",
          address: "101 Gourmet Street, Chicago, IL 60601",
          systemMessage: "You are a creative chef, specializing in developing recipes from various ingredients."
        },
        library: "master"
      },
      {
        _id: "005",
        user: {
          _id: "u005",
          name: "Emma Davis"
        },
        name: "Marketing Slogan Creator",
        path: "/prompts/slogan-creator",
        type: "prompt",
        category: {
          _id: "c005",
          name: "Marketing"
        },
        subCategory: {
          _id: "sc005",
          name: "Branding"
        },
        icon: "message",
        color: "hsl(var(--prompt-5))",
        prompt: "Create a catchy marketing slogan for [product/service] that highlights its [key features/benefits] and appeals to [target audience].",
        description: "Generate memorable slogans for marketing campaigns.",
        model: "gpt-4",
        company: {
          _id: "comp005",
          name: "BrandBoosters",
          address: "222 Madison Ave, New York, NY 10016",
          systemMessage: "You are a creative marketing expert, specializing in crafting compelling slogans and taglines."
        },
        library: "company"
      },
      {
        _id: "006",
        user: {
          _id: "u006",
          name: "Michael Brown"
        },
        name: "Data Analyst",
        path: "/prompts/data-analyst",
        type: "prompt",
        category: {
          _id: "c006",
          name: "Data Science"
        },
        subCategory: {
          _id: "sc006",
          name: "Data Analysis"
        },
        icon: "briefcase",
        color: "hsl(var(--prompt-1))",
        prompt: "Analyze the following dataset: [dataset]. Provide insights on [specific metrics], identify trends, and suggest potential actions based on the findings.",
        description: "Extract valuable insights from complex datasets.",
        model: "gpt-4",
        company: {
          _id: "comp006",
          name: "DataDriven Solutions",
          address: "333 Analytics Blvd, Boston, MA 02108",
          systemMessage: "You are a data analysis expert, skilled in interpreting complex datasets and providing actionable insights."
        },
        library: "master"
      },
      {
        _id: "007",
        user: {
          _id: "u007",
          name: "Sophia Lee"
        },
        name: "Language Translator",
        path: "/prompts/language-translator",
        type: "prompt",
        category: {
          _id: "c007",
          name: "Language"
        },
        subCategory: {
          _id: "sc007",
          name: "Translation"
        },
        icon: "message",
        color: "hsl(var(--prompt-2))",
        prompt: "Translate the following text from [source language] to [target language], maintaining the original tone and context: [text to translate]",
        description: "Accurate translations between multiple languages.",
        model: "gpt-3.5-turbo",
        company: {
          _id: "comp007",
          name: "Global Linguists",
          address: "444 Babel Street, San Diego, CA 92101",
          systemMessage: "You are a multilingual translator, capable of translating between various languages while preserving context and nuance."
        },
        library: "company"
      },
      {
        _id: "008",
        user: {
          _id: "u008",
          name: "David Wilson"
        },
        name: "Personal Fitness Trainer",
        path: "/prompts/fitness-trainer",
        type: "prompt",
        category: {
          _id: "c008",
          name: "Health"
        },
        subCategory: {
          _id: "sc008",
          name: "Fitness"
        },
        icon: "user",
        color: "hsl(var(--prompt-3))",
        prompt: "Create a [duration] workout plan for [fitness goal], suitable for someone with [fitness level] and access to [available equipment]. Include warm-up, main exercises, and cool-down routines.",
        description: "Generate personalized workout plans tailored to individual needs and goals.",
        model: "gpt-4",
        company: {
          _id: "comp008",
          name: "FitLife Pro",
          address: "555 Muscle Beach, Los Angeles, CA 90291",
          systemMessage: "You are a knowledgeable personal trainer, creating customized workout plans to help clients achieve their fitness goals."
        },
        library: "master"
      },
      {
        _id: "009",
        user: {
          _id: "u009",
          name: "Olivia Taylor"
        },
        name: "Creative Writing Assistant",
        path: "/prompts/creative-writing",
        type: "prompt",
        category: {
          _id: "c009",
          name: "Writing"
        },
        subCategory: {
          _id: "sc009",
          name: "Fiction"
        },
        icon: "edit",
        color: "hsl(var(--prompt-4))",
        prompt: "Write a short story in the [genre] genre, featuring a character who [character description] and faces a conflict involving [conflict description]. The story should be approximately [word count] words long.",
        description: "Generate creative short stories based on specific parameters.",
        model: "gpt-4",
        company: {
          _id: "comp009",
          name: "StoryForge Publishing",
          address: "666 Imagination Lane, Portland, OR 97201",
          systemMessage: "You are a creative writing assistant, helping authors develop unique and engaging short stories."
        },
        library: "company"
      },
      {
        _id: "010",
        user: {
          _id: "u010",
          name: "James Anderson"
        },
        name: "Financial Advisor",
        path: "/prompts/financial-advisor",
        type: "prompt",
        category: {
          _id: "c010",
          name: "Finance"
        },
        subCategory: {
          _id: "sc010",
          name: "Investment"
        },
        icon: "briefcase",
        color: "hsl(var(--prompt-5))",
        prompt: "Provide investment advice for someone with [income level], [risk tolerance], and [financial goals]. Consider factors such as [specific factors] and suggest a diversified portfolio allocation.",
        description: "Offer personalized financial advice and investment strategies.",
        model: "gpt-4",
        company: {
          _id: "comp010",
          name: "WealthWise Advisors",
          address: "777 Wall Street, New York, NY 10005",
          systemMessage: "You are a knowledgeable financial advisor, providing tailored investment advice based on individual circumstances and goals."
        },
        library: "master"
      },
      {
        _id: "011",
        user: {
          _id: "u011",
          name: "Emily Clark"
        },
        name: "Social Media Content Creator",
        path: "/prompts/social-media-content",
        type: "prompt",
        category: {
          _id: "c011",
          name: "Marketing"
        },
        subCategory: {
          _id: "sc011",
          name: "Social Media"
        },
        icon: "users",
        color: "hsl(var(--prompt-1))",
        prompt: "Create a series of [number] social media posts for [platform] to promote [product/service]. Include engaging captions, relevant hashtags, and ideas for visuals that align with the brand's [tone/style].",
        description: "Generate creative and engaging social media content for various platforms.",
        model: "gpt-3.5-turbo",
        company: {
          _id: "comp011",
          name: "ViralVision Marketing",
          address: "888 Influencer Ave, Los Angeles, CA 90028",
          systemMessage: "You are a social media expert, creating viral-worthy content that resonates with target audiences across different platforms."
        },
        library: "company"
      },
      {
        _id: "012",
        user: {
          _id: "u012",
          name: "Daniel Martinez"
        },
        name: "Legal Document Drafter",
        path: "/prompts/legal-document-drafter",
        type: "prompt",
        category: {
          _id: "c012",
          name: "Legal"
        },
        subCategory: {
          _id: "sc012",
          name: "Contract Drafting"
        },
        icon: "edit",
        color: "hsl(var(--prompt-2))",
        prompt: "Draft a [type of legal document] for [specific purpose], including clauses for [key points to cover]. Ensure the language is clear, concise, and legally sound.",
        description: "Generate professional legal documents tailored to specific needs.",
        model: "gpt-4",
        company: {
          _id: "comp012",
          name: "LegalEase Solutions",
          address: "999 Justice Road, Washington, D.C. 20001",
          systemMessage: "You are a legal document specialist, drafting precise and comprehensive legal documents for various purposes."
        },
        library: "master"
      },
      {
        _id: "013",
        user: {
          _id: "u013",
          name: "Sarah Thompson"
        },
        name: "Product Description Writer",
        path: "/prompts/product-description",
        type: "prompt",
        category: {
          _id: "c013",
          name: "E-commerce"
        },
        subCategory: {
          _id: "sc013",
          name: "Product Listings"
        },
        icon: "mail",
        color: "hsl(var(--prompt-3))",
        prompt: "Write a compelling product description for [product name], highlighting its [key features], [benefits], and [unique selling points]. The description should be approximately [word count] words and appeal to [target audience].",
        description: "Create engaging product descriptions that drive sales.",
        model: "gpt-3.5-turbo",
        company: {
          _id: "comp013",
          name: "ConvertCopy",
          address: "111 E-commerce Plaza, Seattle, WA 98101",
          systemMessage: "You are a skilled copywriter, crafting persuasive product descriptions that highlight key features and benefits to drive consumer interest."
        },
        library: "company"
      },
];
