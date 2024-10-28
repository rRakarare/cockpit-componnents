import { z } from "zod";

const ChatSchema = z.object({
  id: z.string(),
  name: z.string(),
  projectId: z.string(),
});


const SourceSchema = z.object({
  id: z.string(),
  fileName: z.string(),
  context: z.string(),
  projectId: z.string(),
  fileSize: z.number(),
});

const UserSchema = z.object({
  id: z.string(),
  role: z.enum(["owner", "guest"]),
  email: z.string(),
});


export const ProjectSchema = z.object({
  id: z.string(),
  icon: z.string(),
  name: z.string(),
  description: z.string(),
  context: z.string(),
  chats: z.array(ChatSchema),
  updatedAt: z.string(),
  currentSize: z.number(),
  sources: z.array(SourceSchema),
  users: z.array(UserSchema),
});

export type ProjectType = z.infer<typeof ProjectSchema>;

export const dummyProjects: ProjectType[] = [
  {
    id: "proj-001",
    name: "AI Ethics Research",
    context: "Exploring ethical considerations in AI development and deployment",
    icon: "🤖",
    description: "A project dedicated to discussing and analyzing ethical issues surrounding artificial intelligence.",
    updatedAt: "2024-10-15T14:30:00Z",
    currentSize: 65,
    chats: [

    ],
    sources: [

    ],
    users: [
      { id: "user-001", role: "owner", email: "alice@example.com" },

    ]
  },
  {
    id: "proj-002",
    name: "Climate Change Analysis",
    context: "Analyzing global climate data and discussing potential solutions",
    icon: "🌍",
    description: "A project focused on understanding climate change trends and exploring mitigation strategies.",
    updatedAt: "2024-06-18T09:45:00Z",
    currentSize: 78,
    chats: [
      { id: "chat-004", name: "Temperature Anomalies", projectId: "proj-002" },
      { id: "chat-005", name: "Renewable Energy Solutions", projectId: "proj-002" },

    ],
    sources: [
      {
        id: "src-003",
        projectId: "proj-002",
        fileName: "ipcc_report_2022.pdf",
        context: "Latest IPCC report on climate change impacts and adaptation",
        fileSize: 5120
      },
      {
        id: "src-004",
        projectId: "proj-002",
        fileName: "renewable_energy_trends.csv",
        context: "Dataset of global renewable energy adoption rates",
        fileSize: 768
      }
    ],
    users: [
      { id: "user-004", role: "owner", email: "david@example.com" },
      { id: "user-005", role: "guest", email: "eva@example.com" }
    ]
  },
  {
    id: "proj-003",
    name: "Language Learning Assistant",
    context: "Helping users learn new languages through interactive conversations",
    icon: "🗣️",
    description: "An AI-powered language learning project that engages users in conversations to improve their skills.",
    updatedAt: "2024-05-20T11:15:00Z",
    currentSize: 42,
    chats: [
      { id: "chat-007", name: "Spanish Beginner Dialogue", projectId: "proj-003" },
      { id: "chat-008", name: "French Intermediate Practice", projectId: "proj-003" },

    ],
    sources: [
      {
        id: "src-005",
        projectId: "proj-003",
        fileName: "common_phrases.json",
        context: "JSON file containing common phrases in multiple languages",
        fileSize: 256
      },
      {
        id: "src-006",
        projectId: "proj-003",
        fileName: "grammar_rules.md",
        context: "Markdown file with grammar rules for various languages",
        fileSize: 128
      }
    ],
    users: [
      { id: "user-006", role: "owner", email: "frank@example.com" },
      { id: "user-007", role: "guest", email: "grace@example.com" },
    ]
  },
  {
    id: "proj-004",
    name: "Personal Finance Advisor",
    context: "Providing personalized financial advice and answering money-related questions",
    icon: "💰",
    description: "An AI-driven project to help users make informed decisions about their personal finances.",
    updatedAt: "2023-06-22T16:20:00Z",
    currentSize: 31,
    chats: [
      { id: "chat-010", name: "Budgeting Tips", projectId: "proj-004" },
      { id: "chat-011", name: "Investment Strategies", projectId: "proj-004" },
      { id: "chat-012", name: "Debt Management", projectId: "proj-004" }
    ],
    sources: [
      {
        id: "src-007",
        projectId: "proj-004",
        fileName: "financial_terms_glossary.txt",
        context: "Text file containing definitions of common financial terms",
        fileSize: 64
      },
      {
        id: "src-008",
        projectId: "proj-004",
        fileName: "market_data_api.json",
        context: "JSON configuration for connecting to a financial market data API",
        fileSize: 32
      }
    ],
    users: [
      { id: "user-010", role: "owner", email: "jack@example.com" },
      { id: "user-011", role: "guest", email: "karen@example.com" }
    ]
  },
  {
    id: "proj-005",
    name: "Cooking Recipe Generator",
    context: "Creating and customizing recipes based on user preferences and dietary restrictions",
    icon: "🍳",
    description: "An AI project that generates unique recipes and provides cooking advice.",
    updatedAt: "2023-06-25T13:50:00Z",
    currentSize: 89,
    chats: [
      { id: "chat-013", name: "Vegan Meal Ideas", projectId: "proj-005" },
      { id: "chat-014", name: "Low-Carb Recipes", projectId: "proj-005" },
      { id: "chat-015", name: "Wine Pairing Suggestions", projectId: "proj-005" }
    ],
    sources: [
      {
        id: "src-009",
        projectId: "proj-005",
        fileName: "ingredient_database.sql",
        context: "SQL database of ingredients and their nutritional information",
        fileSize: 4096
      },
      {
        id: "src-010",
        projectId: "proj-005",
        fileName: "cooking_techniques.yaml",
        context: "YAML file describing various cooking techniques and their applications",
        fileSize: 512
      }
    ],
    users: [
      { id: "user-012", role: "owner", email: "liam@example.com" },
      { id: "user-013", role: "guest", email: "mia@example.com" },
      { id: "user-014", role: "guest", email: "noah@example.com" }
    ]
  }
];
