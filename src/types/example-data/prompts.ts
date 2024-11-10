import { PromptDetailType } from "../db/prompt";

export const promptDetailsDummyData: PromptDetailType[] = [
    {
      chats: [
        {
          title: "Customer Support Inquiry",
          owner_id: BigInt("1234567890"),
          ai_model_id: "gpt-4",
          access_type: "private",
          created_at: new Date("2023-06-15T10:30:00Z"),
          updated_at: new Date("2023-06-15T11:45:00Z"),
          chat_uuid: "c1b94f3d-7b6e-4b8a-9c1f-8e9b7f3d2a1e",
          summary: "Resolved issue with account login and password reset"
        },
        {
          title: "Product Feature Discussion",
          owner_id: BigInt("1234567890"),
          ai_model_id: "gpt-3.5-turbo",
          access_type: "shared",
          created_at: new Date("2023-06-14T14:20:00Z"),
          updated_at: new Date("2023-06-14T16:10:00Z"),
          chat_uuid: "a2c85e4f-9d7b-4c9a-8d2e-1f3g4h5i6j7k",
          summary: null
        }
      ],
      color: "hsl(var(--icon-1))",
      id: BigInt("1"),
      name: "Customer Support Assistant",
      icon: "users",
      description: "AI-powered assistant for handling customer inquiries and support tickets",
      owner_id: BigInt("9876543210"),
      ai_model_id: BigInt("1"),
      current_knowledge_usage: 75.5,
      users: [
        {
          name: "John Doe",
          email: "john.doe@example.com",
          user_uuid: "u1a2b3c4-5d6e-7f8g-9h0i-j1k2l3m4n5o6",
          image_url: "https://example.com/images/john_doe.jpg"
        },
        {
          name: "Jane Smith",
          email: "jane.smith@example.com",
          user_uuid: "u7p8q9r0-1s2t-3u4v-5w6x-y7z8a9b0c1d2",
          image_url: null
        }
      ],
      access_type: "company",
      created_at: new Date("2023-06-01T09:00:00Z"),
      updated_at: new Date("2023-06-15T16:30:00Z"),
      chatCount: 2,
      mongo_uuid: "m1n2o3p4-5q6r-7s8t-9u0v-w1x2y3z4a5b6",
      project_id: "proj-cust-support-001",
      data_silo_id: "ds-support-knowledge-base",
      groups: [
        {
          id: BigInt("101"),
          name: "Customer Support Team",
          description: "Group for customer support representatives",
          group_uuid: "g1h2i3j4-5k6l-7m8n-9o0p-q1r2s3t4u5v6",
          company_id: BigInt("5555"),
          created_by: BigInt("9876543210")
        }
      ],
      company_id: BigInt("5555"),
      prompt_uuid: "p1q2r3s4-5t6u-7v8w-9x0y-z1a2b3c4d5e6",
      prompt_content: "You are a helpful customer support assistant. Provide clear and concise answers to customer inquiries."
    },
    {
      chats: [
        {
          title: "Product Recommendation Chat",
          owner_id: BigInt("2345678901"),
          ai_model_id: "gpt-4",
          access_type: "private",
          created_at: new Date("2023-06-16T13:15:00Z"),
          updated_at: new Date("2023-06-16T13:45:00Z"),
          chat_uuid: "d2e3f4g5-6h7i-8j9k-0l1m-2n3o4p5q6r7",
          summary: "Recommended suitable products based on customer preferences"
        }
      ],
      color: "hsl(var(--icon-3))",
      id: BigInt("2"),
      name: "Product Recommendation Engine",
      icon: "briefcase",
      description: "AI-powered product recommendation system for personalized shopping experiences",
      owner_id: BigInt("8765432109"),
      ai_model_id: BigInt("2"),
      current_knowledge_usage: 62.8,
      users: [
        {
          name: "Alice Johnson",
          email: "alice.johnson@example.com",
          user_uuid: "u3c4d5e6-7f8g-9h0i-1j2k-l3m4n5o6p7q8",
          image_url: "https://example.com/images/alice_johnson.jpg"
        }
      ],
      access_type: "public",
      created_at: new Date("2023-06-10T11:30:00Z"),
      updated_at: new Date("2023-06-16T14:00:00Z"),
      chatCount: 1,
      mongo_uuid: null,
      project_id: "proj-product-rec-001",
      data_silo_id: "ds-product-catalog",
      groups: [],
      company_id: BigInt("6666"),
      prompt_uuid: "p7s8t9u0-1v2w-3x4y-5z6a-7b8c9d0e1f2g",
      prompt_content: "You are a product recommendation assistant. Analyze customer preferences and suggest suitable products."
    },
    {
      chats: [
        {
          title: "Meeting Schedule Assistant",
          owner_id: BigInt("3456789012"),
          ai_model_id: "gpt-3.5-turbo",
          access_type: "shared",
          created_at: new Date("2023-06-17T09:00:00Z"),
          updated_at: new Date("2023-06-17T09:30:00Z"),
          chat_uuid: "e3f4g5h6-7i8j-9k0l-1m2n-3o4p5q6r7s8",
          summary: "Scheduled team meeting and sent invitations to participants"
        },
        {
          title: "Calendar Management",
          owner_id: BigInt("3456789012"),
          ai_model_id: "gpt-3.5-turbo",
          access_type: "private",
          created_at: new Date("2023-06-17T10:15:00Z"),
          updated_at: new Date("2023-06-17T10:45:00Z"),
          chat_uuid: "f4g5h6i7-8j9k-0l1m-2n3o-4p5q6r7s8t9",
          summary: "Optimized daily schedule and resolved conflicts"
        },
        {
          title: "Task Prioritization",
          owner_id: BigInt("3456789012"),
          ai_model_id: "gpt-3.5-turbo",
          access_type: "private",
          created_at: new Date("2023-06-17T14:00:00Z"),
          updated_at: new Date("2023-06-17T14:30:00Z"),
          chat_uuid: "g5h6i7j8-9k0l-1m2n-3o4p-5q6r7s8t9u0",
          summary: null
        }
      ],
      color: "hsl(var(--icon-5))",
      id: BigInt("3"),
      name: "Personal Assistant Bot",
      icon: "calendar",
      description: "AI-powered personal assistant for managing schedules, tasks, and appointments",
      owner_id: BigInt("7654321098"),
      ai_model_id: BigInt("3"),
      current_knowledge_usage: 45.2,
      users: [
        {
          name: "Bob Williams",
          email: "bob.williams@example.com",
          user_uuid: "u5d6e7f8-9g0h-1i2j-3k4l-m5n6o7p8q9r0",
          image_url: "https://example.com/images/bob_williams.jpg"
        },
        {
          name: "Carol Davis",
          email: "carol.davis@example.com",
          user_uuid: "u7e8f9g0-1h2i-3j4k-5l6m-n7o8p9q0r1s2",
          image_url: null
        },
        {
          name: "David Brown",
          email: "david.brown@example.com",
          user_uuid: "u9f0g1h2-3i4j-5k6l-7m8n-o9p0q1r2s3t4",
          image_url: "https://example.com/images/david_brown.jpg"
        }
      ],
      access_type: "shared",
      created_at: new Date("2023-06-12T08:45:00Z"),
      updated_at: new Date("2023-06-17T15:00:00Z"),
      chatCount: 3,
      mongo_uuid: "m5n6o7p8-9q0r-1s2t-3u4v-w5x6y7z8a9b0",
      project_id: "proj-personal-assist-001",
      data_silo_id: "ds-calendar-tasks",
      groups: [
        {
          id: BigInt("102"),
          name: "Executive Team",
          description: "Group for company executives",
          group_uuid: "g7h8i9j0-1k2l-3m4n-5o6p-q7r8s9t0u1v2",
          company_id: BigInt("7777"),
          created_by: BigInt("7654321098")
        },
        {
          id: BigInt("103"),
          name: "Project Managers",
          description: "Group for project management team",
          group_uuid: "g9i0j1k2-3l4m-5n6o-7p8q-r9s0t1u2v3w4",
          company_id: BigInt("7777"),
          created_by: BigInt("7654321098")
        }
      ],
      company_id: BigInt("7777"),
      prompt_uuid: "p9t0u1v2-3w4x-5y6z-7a8b-9c0d1e2f3g4h",
      prompt_content: "You are a personal assistant AI. Help manage schedules, prioritize tasks, and coordinate meetings efficiently."
    }
  ];