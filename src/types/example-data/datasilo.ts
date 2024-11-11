import { DataSiloDetailType } from "../db/dataSilo";

export const dataSiloDetailsDummyData: DataSiloDetailType[] = [
    {
      id: BigInt(1),
      data_silo_uuid: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      owner_id: BigInt(1001),
      collection_name: "Customer Support Queries",
      description: "Data silo for customer support related conversations and queries",
      cluster_url: "https://api.customersupport.llmchat.com",
      api_key: "cs_1234567890abcdef",
      display_name: "Customer Support",
      users: [
        {
          name: "Alice Johnson",
          user_uuid: "u-abc-123-456",
          email: "alice.johnson@example.com",
          image_url: "https://avatars.example.com/alice.jpg"
        },
        {
          name: "Bob Smith",
          user_uuid: "u-def-789-012",
          email: "bob.smith@example.com",
          image_url: null
        }
      ],
      icon: "users",
      color: "hsl(var(--icon-1))",
      path: "/customer-support",
      system_message: "You are a helpful customer support assistant. Provide accurate and friendly responses to customer queries.",
      access_type: "company",
      company_id: BigInt(5001),
      created_at: new Date("2023-01-15T10:30:00Z"),
      updated_at: new Date("2023-06-20T14:45:00Z"),
      chatCount: 2,
      chats: [
        {
          owner_id: BigInt(1001),
          access_type: "shared",
          created_at: new Date("2023-06-19T09:15:00Z"),
          updated_at: new Date("2023-06-19T09:30:00Z"),
          chat_uuid: "chat-xyz-789-012",
          title: "Product Return Inquiry",
          summary: "Customer asking about the return policy for a recently purchased item",
          ai_model_id: "gpt-4"
        },
        {
          owner_id: BigInt(1002),
          access_type: "private",
          created_at: new Date("2023-06-20T11:00:00Z"),
          updated_at: new Date("2023-06-20T11:10:00Z"),
          chat_uuid: "chat-uvw-345-678",
          title: "Shipping Delay Question",
          summary: "Customer inquiring about a delay in their order shipment",
          ai_model_id: "claude-v1"
        }
      ],
      groups: [
        {
          id: BigInt(101),
          description: "Team handling general customer inquiries",
          company_id: BigInt(5001),
          group_uuid: "g-123-abc-456",
          name: "General Support",
          created_by: BigInt(1001)
        }
      ]
    },
    {
      id: BigInt(2),
      data_silo_uuid: "e23f1c8d-7a6b-4d9e-b543-1f8a9c2b3d4e",
      owner_id: BigInt(1002),
      collection_name: "Sales Leads",
      description: "Data silo for managing and tracking sales leads",
      cluster_url: "https://api.sales.llmchat.com",
      api_key: "sl_9876543210fedcba",
      display_name: "Sales Pipeline",
      users: [
        {
          name: "Charlie Davis",
          user_uuid: "u-ghi-345-678",
          email: "charlie.davis@example.com",
          image_url: "https://avatars.example.com/charlie.jpg"
        }
      ],
      icon: "briefcase",
      color: "hsl(var(--icon-3))",
      path: "/sales-pipeline",
      system_message: "You are a sales assistant. Help with lead qualification and provide relevant product information.",
      access_type: "shared",
      company_id: BigInt(5001),
      created_at: new Date("2023-02-01T08:00:00Z"),
      updated_at: new Date("2023-06-21T16:30:00Z"),
      chatCount: 1,
      chats: [
        {
          owner_id: BigInt(1002),
          access_type: "shared",
          created_at: new Date("2023-06-21T14:00:00Z"),
          updated_at: new Date("2023-06-21T14:20:00Z"),
          chat_uuid: "chat-lmn-901-234",
          title: "Enterprise Solution Inquiry",
          summary: "Potential client asking about our enterprise-level solutions",
          ai_model_id: "gpt-4"
        }
      ],
      groups: [
        {
          id: BigInt(102),
          description: "Sales team focused on enterprise clients",
          company_id: BigInt(5001),
          group_uuid: "g-456-def-789",
          name: "Enterprise Sales",
          created_by: BigInt(1002)
        },
        {
          id: BigInt(103),
          description: "Sales team handling small and medium businesses",
          company_id: BigInt(5001),
          group_uuid: "g-789-ghi-012",
          name: "SMB Sales",
          created_by: BigInt(1002)
        }
      ]
    },
    {
      id: BigInt(3),
      data_silo_uuid: "a1b2c3d4-e5f6-4a5b-9c8d-7e6f5a4b3c2d",
      owner_id: BigInt(1003),
      collection_name: "Product Development",
      description: "Data silo for product development and feature requests",
      cluster_url: "https://api.product.llmchat.com",
      api_key: "pd_5678901234abcdef",
      display_name: "Product Roadmap",
      users: [
        {
          name: "Diana Evans",
          user_uuid: "u-jkl-567-890",
          email: "diana.evans@example.com",
          image_url: "https://avatars.example.com/diana.jpg"
        },
        {
          name: "Ethan Foster",
          user_uuid: "u-mno-678-901",
          email: "ethan.foster@example.com",
          image_url: null
        },
        {
          name: "Fiona Grant",
          user_uuid: "u-pqr-789-012",
          email: "fiona.grant@example.com",
          image_url: "https://avatars.example.com/fiona.jpg"
        }
      ],
      icon: "edit",
      color: "hsl(var(--icon-5))",
      path: "/product-development",
      system_message: "You are a product development assistant. Help with feature ideation and prioritization.",
      access_type: "private",
      company_id: BigInt(5001),
      created_at: new Date("2023-03-10T13:45:00Z"),
      updated_at: new Date("2023-06-22T11:20:00Z"),
      chatCount: 2,
      chats: [
        {
          owner_id: BigInt(1003),
          access_type: "private",
          created_at: new Date("2023-06-22T09:30:00Z"),
          updated_at: new Date("2023-06-22T10:00:00Z"),
          chat_uuid: "chat-stu-345-678",
          title: "New Feature Brainstorming",
          summary: "Discussion about potential new features for the Q3 release",
          ai_model_id: "claude-v1"
        },
        {
          owner_id: BigInt(1004),
          access_type: "private",
          created_at: new Date("2023-06-22T10:15:00Z"),
          updated_at: new Date("2023-06-22T10:45:00Z"),
          chat_uuid: "chat-vwx-456-789",
          title: "UI/UX Improvements",
          summary: "Exploring ideas for enhancing user interface and experience",
          ai_model_id: "gpt-4"
        }
      ],
      groups: [
        {
          id: BigInt(104),
          description: "Core product development team",
          company_id: BigInt(5001),
          group_uuid: "g-012-jkl-345",
          name: "Product Core",
          created_by: BigInt(1003)
        }
      ]
    }
  ];