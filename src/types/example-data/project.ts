import { ProjectDetailType } from "../db/project";

export const projectDetailsDummyData: ProjectDetailType[] = [
  {
    id: BigInt(1),
    project_uuid: "proj-uuid-123abc-456def",
    name: "Customer Support AI Assistant",
    description: "An AI-powered assistant to help our customer support team handle inquiries more efficiently.",
    owner_id: BigInt(1001),
    ai_model_id: BigInt(5001),
    current_knowledge_usage: 75.5,
    users: [
      {
        name: "Alice Johnson",
        user_uuid: "user-uuid-alice-789",
        email: "alice.johnson@example.com",
        image_url: "https://example.com/avatars/alice.jpg",
        projectRole: "owner"
      },
      {
        name: "Bob Smith",
        user_uuid: "user-uuid-bob-012",
        email: "bob.smith@example.com",
        image_url: null,
        projectRole: "member"
      }
    ],
    icon: "users",
    color: "hsl(var(--icon-3))",
    custom_instruction: "Focus on providing accurate and helpful responses to customer inquiries. Maintain a friendly and professional tone.",
    access_type: "shared",
    created_at: new Date("2023-05-15T10:30:00Z"),
    updated_at: new Date("2023-06-20T14:45:00Z"),
    chatCount: 2,
    chats: [
      {
        owner_id: BigInt(1001),
        ai_model_id: "gpt-4",
        access_type: "shared",
        created_at: new Date("2023-06-18T09:15:00Z"),
        updated_at: new Date("2023-06-18T09:45:00Z"),
        chat_uuid: "chat-uuid-cust-001",
        title: "Product Return Inquiry",
        summary: "Assisted customer with return process for a defective product."
      },
      {
        owner_id: BigInt(1002),
        ai_model_id: "gpt-3.5-turbo",
        access_type: "private",
        created_at: new Date("2023-06-19T11:30:00Z"),
        updated_at: new Date("2023-06-19T11:55:00Z"),
        chat_uuid: "chat-uuid-cust-002",
        title: "Shipping Delay Question",
        summary: "Provided information about shipping delays and estimated delivery times."
      }
    ],
    groups: [
      {
        id: BigInt(101),
        name: "Customer Support Team",
        description: "Group for customer support representatives",
        group_uuid: "group-uuid-supp-101",
        company_id: BigInt(5001),
        created_by: BigInt(1001)
      }
    ],
    contents: [
      {
        type: "text",
        content_uuid: "content-uuid-faq-001",
        file_name: "customer_faq.pdf",
        document_type: "application/pdf",
        size: BigInt(2048000),
        uploaded_by: BigInt(1001),
        url: "https://example.com/documents/customer_faq.pdf"
      }
    ]
  },
  {
    id: BigInt(2),
    project_uuid: "proj-uuid-789ghi-012jkl",
    name: "Sales Pitch Generator",
    description: "An AI tool to help sales representatives create personalized sales pitches.",
    owner_id: BigInt(1002),
    ai_model_id: BigInt(5002),
    current_knowledge_usage: 60.2,
    users: [
      {
        name: "Charlie Davis",
        user_uuid: "user-uuid-charlie-345",
        email: "charlie.davis@example.com",
        image_url: "https://example.com/avatars/charlie.jpg",
        projectRole: "owner"
      },
      {
        name: "Diana Evans",
        user_uuid: "user-uuid-diana-678",
        email: "diana.evans@example.com",
        image_url: "https://example.com/avatars/diana.jpg",
        projectRole: "member"
      },
      {
        name: "Ethan Foster",
        user_uuid: "user-uuid-ethan-901",
        email: "ethan.foster@example.com",
        image_url: null,
        projectRole: "member"
      }
    ],
    icon: "briefcase",
    color: "hsl(var(--icon-2))",
    custom_instruction: "Generate compelling sales pitches tailored to the prospect's industry and needs. Focus on benefits and value proposition.",
    access_type: "private",
    created_at: new Date("2023-04-10T08:00:00Z"),
    updated_at: new Date("2023-06-22T16:30:00Z"),
    chatCount: 1,
    chats: [
      {
        owner_id: BigInt(1002),
        ai_model_id: "gpt-4",
        access_type: "private",
        created_at: new Date("2023-06-21T13:00:00Z"),
        updated_at: new Date("2023-06-21T13:30:00Z"),
        chat_uuid: "chat-uuid-sales-001",
        title: "Tech Startup Pitch",
        summary: "Generated a pitch for a SaaS product targeting tech startups."
      }
    ],
    groups: [
      {
        id: BigInt(102),
        name: "Sales Team",
        description: "Group for sales representatives",
        group_uuid: "group-uuid-sales-102",
        company_id: BigInt(5001),
        created_by: BigInt(1002)
      }
    ],
    contents: [
      {
        type: "text",
        content_uuid: "content-uuid-sales-001",
        file_name: "sales_templates.docx",
        document_type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        size: BigInt(1536000),
        uploaded_by: BigInt(1002),
        url: "https://example.com/documents/sales_templates.docx"
      },
      {
        type: "text",
        content_uuid: "content-uuid-sales-002",
        file_name: "product_catalog.pdf",
        document_type: "application/pdf",
        size: BigInt(5120000),
        uploaded_by: BigInt(1002),
        url: "https://example.com/documents/product_catalog.pdf"
      }
    ]
  },
  {
    id: BigInt(3),
    project_uuid: "proj-uuid-345mno-678pqr",
    name: "HR Policy Assistant",
    description: "An AI assistant to help employees understand and navigate company HR policies.",
    owner_id: BigInt(1003),
    ai_model_id: null,
    current_knowledge_usage: null,
    users: [
      {
        name: "Fiona Grant",
        user_uuid: "user-uuid-fiona-234",
        email: "fiona.grant@example.com",
        image_url: "https://example.com/avatars/fiona.jpg",
        projectRole: "owner"
      }
    ],
    icon: "user",
    color: "hsl(var(--icon-5))",
    custom_instruction: null,
    access_type: "shared",
    created_at: new Date("2023-06-01T09:00:00Z"),
    updated_at: new Date("2023-06-01T09:00:00Z"),
    chatCount: 0,
    chats: [],
    groups: [],
    contents: []
  }
];