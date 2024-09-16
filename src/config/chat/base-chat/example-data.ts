import { ChatType } from "./types";

export const chats: ChatType[] = [
  {
    _id: "chat001",
    user: "user123",
    title: "Exploring Mars Colonization",
    model: "GPT-4",
    urlGenerated: false,
    type: "chat",
    messages: [
      {
        _id: "msg001",
        role: "user",
        type: "text",
        content: "What are the main challenges of colonizing Mars?",
        createdContentAt: "2024-09-16T10:30:00Z",
        metadata: {},
      },
      {
        _id: "msg002",
        role: "assistant",
        type: "text",
        content:
          "The main challenges of colonizing Mars include: 1) Harsh environment with extreme temperatures and radiation. 2) Lack of breathable atmosphere. 3) Limited water resources. 4) Difficulty in growing food. 5) Psychological effects of isolation. 6) Logistical challenges of transporting supplies.",
        createdContentAt: "2024-09-16T10:31:30Z",
        metadata: {},
      },
    ],
    createdAt: "2024-09-16T10:30:00Z",
    updatedAt: "2024-09-16T10:31:30Z",
  },
  {
    _id: "chat002",
    user: "user456",
    title: "Quantum Computing Basics",
    model: "Claude 3.5 Sonnet",
    urlGenerated: false,
    type: "chat",
    messages: [
      {
        _id: "msg003",
        role: "user",
        type: "text",
        content: "Can you explain quantum superposition in simple terms?",
        createdContentAt: "2024-09-16T11:15:00Z",
        metadata: {},
      },
      {
        _id: "msg004",
        role: "assistant",
        type: "text",
        content:
          "Quantum superposition is like a coin spinning in the air. While it's spinning, it's neither heads nor tails, but a combination of both possibilities. Only when we observe it (or in quantum terms, measure it) does it 'collapse' into one definite state.",
        createdContentAt: "2024-09-16T11:16:45Z",
        metadata: {},
      },
    ],
    createdAt: "2024-09-16T11:15:00Z",
    updatedAt: "2024-09-16T11:16:45Z",
  },
  {
    _id: "chat003",
    user: "user789",
    title: "Sustainable Fashion",
    model: "GPT-4o",
    urlGenerated: true,

type: "chat",    messages: [
      {
        _id: "msg005",
        role: "user",
        type: "text",
        content:
          "What are some eco-friendly materials used in sustainable fashion?",
        createdContentAt: "2024-09-16T13:00:00Z",
        metadata: {},
      },
      {
        _id: "msg006",
        role: "assistant",
        type: "text",
        content:
          "Eco-friendly materials in sustainable fashion include: 1) Organic cotton. 2) Hemp. 3) Bamboo. 4) Recycled polyester. 5) Tencel (made from wood pulp). 6) Cork. 7) Piñatex (made from pineapple leaf fibers). These materials have lower environmental impact compared to traditional fabrics.",
        createdContentAt: "2024-09-16T13:01:30Z",
        metadata: {},
      },
    ],
    assistantId: "asst_001",
    threadId: "thread_001",
    createdAt: "2024-09-16T13:00:00Z",
    updatedAt: "2024-09-16T13:01:30Z",
  },
  {
    _id: "chat004",
    user: "user101",
    title: "AI in Healthcare",
    model: "GPT-4",
    urlGenerated: false,
    type: "chat",
    messages: [
      {
        _id: "msg007",
        role: "user",
        type: "text",
        content: "How is AI being used in early disease detection?",
        createdContentAt: "2024-09-16T14:45:00Z",
        metadata: {},
      },
      {
        _id: "msg008",
        role: "assistant",
        type: "text",
        content:
          "AI is being used in early disease detection through: 1) Analysis of medical imaging (e.g., detecting cancers in X-rays or MRIs). 2) Processing of genetic data to identify risk factors. 3) Monitoring wearable device data for anomalies. 4) Analyzing electronic health records to predict potential health issues. These applications can help identify diseases at earlier, more treatable stages.",
        createdContentAt: "2024-09-16T14:46:30Z",
        metadata: {},
      },
    ],
    createdAt: "2024-09-16T14:45:00Z",
    updatedAt: "2024-09-16T14:46:30Z",
  },
  {
    _id: "chat005",
    user: "user202",
    title: "Future of Transportation",
    model: "Claude 3.5 Sonnet",
    urlGenerated: true,

type: "chat",    messages: [
      {
        _id: "msg009",
        role: "user",
        type: "text",
        content: "What's the current state of flying car technology?",
        createdContentAt: "2024-09-16T16:30:00Z",
        metadata: {},
      },
      {
        _id: "msg010",
        role: "assistant",
        type: "text",
        content:
          "Flying car technology, often referred to as eVTOL (electric Vertical Take-Off and Landing) vehicles, has made significant progress. Several companies like Joby Aviation, Lilium, and Volocopter have developed prototypes and are in various stages of testing and certification. These vehicles are designed for urban air mobility, with electric propulsion systems and vertical take-off capabilities. While not yet commercially available, many predict limited commercial operations could begin within the next 3-5 years, pending regulatory approvals and infrastructure development.",
        createdContentAt: "2024-09-16T16:31:45Z",
        metadata: {},
      },
    ],
    assistantId: "asst_002",
    threadId: "thread_002",
    createdAt: "2024-09-16T16:30:00Z",
    updatedAt: "2024-09-16T16:31:45Z",
  },
  {
    _id: "chat006",
    user: "user303",
    title: "Cryptography Basics",
    model: "GPT-4o",
    urlGenerated: false,
    type: "chat",
    messages: [
      {
        _id: "msg011",
        role: "user",
        type: "text",
        content:
          "What's the difference between symmetric and asymmetric encryption?",
        createdContentAt: "2024-09-16T18:00:00Z",
        metadata: {},
      },
      {
        _id: "msg012",
        role: "assistant",
        type: "text",
        content:
          "Symmetric encryption uses the same key for both encryption and decryption. It's fast but requires secure key exchange. Asymmetric encryption uses a pair of keys: public and private. The public key can be freely shared and is used for encryption, while the private key is kept secret and used for decryption. It's slower but solves the key distribution problem and enables digital signatures.",
        createdContentAt: "2024-09-16T18:01:30Z",
        metadata: {},
      },
    ],
    createdAt: "2024-09-16T18:00:00Z",
    updatedAt: "2024-09-16T18:01:30Z",
  },
  {
    _id: "chat007",
    user: "user404",
    title: "Culinary Adventures",
    model: "GPT-4",
    urlGenerated: true,

type: "chat",    messages: [
      {
        _id: "msg013",
        role: "user",
        type: "text",
        content: "What are some unique street foods from around the world?",
        createdContentAt: "2024-09-16T19:45:00Z",
        metadata: {},
      },
      {
        _id: "msg014",
        role: "assistant",
        type: "text",
        content:
          "Some unique street foods from around the world include: 1) Takoyaki (octopus balls) from Japan. 2) Cuy (guinea pig) from Peru. 3) Balut (fertilized duck egg) from the Philippines. 4) Currywurst from Germany. 5) Jianbing (savory crepes) from China. 6) Bunny Chow (curry in a bread loaf) from South Africa. 7) Smørrebrød (open-faced sandwiches) from Denmark. These foods offer a taste of local culinary traditions and ingredients.",
        createdContentAt: "2024-09-16T19:46:30Z",
        metadata: {},
      },
    ],
    assistantId: "asst_003",
    threadId: "thread_003",
    createdAt: "2024-09-16T19:45:00Z",
    updatedAt: "2024-09-16T19:46:30Z",
  },
  {
    _id: "chat008",
    user: "user505",
    title: "Renewable Energy",
    model: "Claude 3.5 Sonnet",
    urlGenerated: false,
    type: "chat",
    messages: [
      {
        _id: "msg015",
        role: "user",
        type: "text",
        content: "What are the latest advancements in solar panel technology?",
        createdContentAt: "2024-09-16T21:15:00Z",
        metadata: {},
      },
      {
        _id: "msg016",
        role: "assistant",
        type: "text",
        content:
          "Recent advancements in solar panel technology include: 1) Perovskite solar cells, which promise higher efficiency and lower costs. 2) Bifacial solar panels that can absorb light from both sides. 3) Building-integrated photovoltaics (BIPV) for seamless integration into architecture. 4) Transparent solar cells for use in windows. 5) Solar skin technology for customizable panel appearances. 6) Improved energy storage solutions to address intermittency issues.",
        createdContentAt: "2024-09-16T21:16:45Z",
        metadata: {},
      },
    ],
    createdAt: "2024-09-16T21:15:00Z",
    updatedAt: "2024-09-16T21:16:45Z",
  },
  {
    _id: "chat009",
    user: "user606",
    title: "Ancient Civilizations",
    model: "GPT-4o",
    urlGenerated: true,

type: "chat",    messages: [
      {
        _id: "msg017",
        role: "user",
        type: "text",
        content:
          "What were some of the most impressive engineering feats of ancient civilizations?",
        createdContentAt: "2024-09-16T23:00:00Z",
        metadata: {},
      },
      {
        _id: "msg018",
        role: "assistant",
        type: "text",
        content:
          "Ancient civilizations achieved remarkable engineering feats, including: 1) The Great Pyramid of Giza in Egypt. 2) The Roman aqueduct system. 3) The Great Wall of China. 4) Machu Picchu in Peru. 5) The Taj Mahal in India. 6) The Colosseum in Rome. 7) The ancient city of Petra in Jordan. 8) The Hanging Gardens of Babylon. These structures demonstrate advanced knowledge of mathematics, architecture, and resource management.",
        createdContentAt: "2024-09-16T23:01:30Z",
        metadata: {},
      },
    ],
    assistantId: "asst_004",
    threadId: "thread_004",
    createdAt: "2024-09-16T23:00:00Z",
    updatedAt: "2024-09-16T23:01:30Z",
  },
  {
    _id: "chat010",
    user: "user707",
    title: "Space Exploration",
    model: "GPT-4",
    urlGenerated: false,
    type: "chat",
    messages: [
      {
        _id: "msg019",
        role: "user",
        type: "text",
        content:
          "What are the current plans for exploring Jupiter's moon Europa?",
        createdContentAt: "2024-09-17T00:30:00Z",
        metadata: {},
      },
      {
        _id: "msg020",
        role: "assistant",
        type: "text",
        content:
          "NASA's Europa Clipper mission, scheduled to launch in October 2024, is the primary plan for exploring Jupiter's moon Europa. The spacecraft will orbit Jupiter and conduct multiple close flybys of Europa to investigate its potential habitability. It will use a suite of instruments to study the moon's icy surface, subsurface ocean, and thin atmosphere. The mission aims to determine if Europa could harbor conditions suitable for life.",
        createdContentAt: "2024-09-17T00:31:45Z",
        metadata: {},
      },
    ],
    createdAt: "2024-09-17T00:30:00Z",
    updatedAt: "2024-09-17T00:31:45Z",
  },
  {
    _id: "chat011",
    user: "user808",
    title: "Artificial General Intelligence",
    model: "Claude 3.5 Sonnet",
    urlGenerated: true,

type: "chat",    messages: [
      {
        _id: "msg021",
        role: "user",
        type: "text",
        content:
          "What are the main challenges in developing Artificial General Intelligence (AGI)?",
        createdContentAt: "2024-09-17T02:15:00Z",
        metadata: {},
      },
      {
        _id: "msg022",
        role: "assistant",
        type: "text",
        content:
          "The main challenges in developing AGI include: 1) Achieving human-level reasoning and problem-solving across diverse domains. 2) Developing systems that can learn and adapt like humans. 3) Creating AGI with common sense understanding and contextual awareness. 4) Ensuring AGI systems are safe, ethical, and aligned with human values. 5) Overcoming hardware limitations for the massive computational requirements. 6) Addressing the philosophical and ethical implications of creating human-level artificial intelligence.",
        createdContentAt: "2024-09-17T02:16:30Z",
        metadata: {},
      },
    ],
    assistantId: "asst_005",
    threadId: "thread_005",
    createdAt: "2024-09-17T02:15:00Z",
    updatedAt: "2024-09-17T02:16:30Z",
  },
];
