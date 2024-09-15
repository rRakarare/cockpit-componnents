import { ChatType } from "./types";

export const chats: ChatType[] = [
  {
    _id: 1,
    model: "GPT-4o",
    title: "Greetings",
    updatedAt: "2023-01-01",
    user: "Alice",
    messages: [
      {
        content: "Hi there!",
        createdContentAtt: "2022-01-01T10:00:00",
        role: "user",
        _id: "1",
      },
      {
        content: "Hello! How can I assist you today?",
        createdContentAtt: "2022-01-01T10:01:00",
        role: "assistant",
        _id: "2",
      },
    ],
  },
  {
    _id: 2,
    model: "Claude 3.5 Sonnet",
    title: "Poetry",
    updatedAt: "2024-01-02",
    user: "Bob",
    messages: [
      {
        content: "I love poetry!",
        createdContentAtt: "2022-01-02T14:00:00",
        role: "user",
        _id: "3",
      },
      {
        content:
          "Great! I can generate beautiful poems for you. What kind of poem are you looking for?",
        createdContentAtt: "2022-01-02T14:01:00",
        role: "assistant",
        _id: "4",
      },
    ],
  },
  {
    _id: 3,
    model: "GPT-4",
    title: "Weather",
    updatedAt: "2024-09-03",
    user: "Charlie",
    messages: [
      {
        content: "What's the weather like today?",
        createdContentAtt: "2022-01-03T09:00:00",
        role: "user",
        _id: "5",
      },
      {
        content: "The weather is sunny with a high of 25°C.",
        createdContentAtt: "2022-01-03T09:01:00",
        role: "assistant",
        _id: "6",
      },
    ],
  },
  {
    _id: 4,
    model: "GPT-4o",
    title: "Recipes",
    updatedAt: "2022-01-04",
    user: "David",
    messages: [
      {
        content: "I'm looking for a recipe for chocolate cake.",
        createdContentAtt: "2022-01-04T15:00:00",
        role: "user",
        _id: "7",
      },
      {
        content: "Sure! Here's a delicious chocolate cake recipe for you.",
        createdContentAtt: "2022-01-04T15:01:00",
        role: "assistant",
        _id: "8",
      },
    ],
  },
  {
    _id: 5,
    model: "Claude 3.5 Sonnet",
    title: "Books",
    updatedAt: "2022-01-05",
    user: "Emily",
    messages: [
      {
        content: "Can you recommend a good book to read?",
        createdContentAtt: "2022-01-05T11:00:00",
        role: "user",
        _id: "9",
      },
      {
        content: "Of course! I have a great book recommendation for you.",
        createdContentAtt: "2022-01-05T11:01:00",
        role: "assistant",
        _id: "10",
      },
    ],
  },
  {
    _id: 6,
    model: "GPT-4",
    title: "Movies",
    updatedAt: "2022-01-06",
    user: "Frank",
    messages: [
      {
        content: "What's a good movie to watch tonight?",
        createdContentAtt: "2022-01-06T19:00:00",
        role: "user",
        _id: "11",
      },
      {
        content: "I have the perfect movie recommendation for you!",
        createdContentAtt: "2022-01-06T19:01:00",
        role: "assistant",
        _id: "12",
      },
    ],
  },
  {
    _id: 7,
    model: "GPT-4o",
    title: "Travel",
    updatedAt: "2022-01-07",
    user: "Grace",
    messages: [
      {
        content: "I'm planning a trip. Any travel recommendations?",
        createdContentAtt: "2022-01-07T13:00:00",
        role: "user",
        _id: "13",
      },
      {
        content: "Absolutely! I can help you with travel recommendations.",
        createdContentAtt: "2022-01-07T13:01:00",
        role: "assistant",
        _id: "14",
      },
    ],
  },
  {
    _id: 8,
    model: "Claude 3.5 Sonnet",
    title: "Music",
    updatedAt: "2022-01-08",
    user: "Henry",
    messages: [
      {
        content: "What's your favorite music genre?",
        createdContentAtt: "2022-01-08T17:00:00",
        role: "user",
        _id: "15",
      },
      {
        content: "I enjoy a wide range of music genres. How about you?",
        createdContentAtt: "2022-01-08T17:01:00",
        role: "assistant",
        _id: "16",
      },
    ],
  },
  {
    _id: 9,
    model: "GPT-4",
    title: "Sports",
    updatedAt: "2022-01-09",
    user: "Isabella",
    messages: [
      {
        content: "Which sports do you enjoy watching?",
        createdContentAtt: "2022-01-09T12:00:00",
        role: "user",
        _id: "17",
      },
      {
        content: "I'm a big fan of various sports. What about you?",
        createdContentAtt: "2022-01-09T12:01:00",
        role: "assistant",
        _id: "18",
      },
    ],
  },
  {
    _id: 10,
    model: "GPT-4o",
    title: "Technology",
    updatedAt: "2022-01-10",
    user: "Jack",
    messages: [
      {
        content: "What's the latest technology trend?",
        createdContentAtt: "2022-01-10T16:00:00",
        role: "user",
        _id: "19",
      },
      {
        content:
          "There are many exciting technology trends happening right now.",
        createdContentAtt: "2022-01-10T16:01:00",
        role: "assistant",
        _id: "20",
      },
    ],
  },
];
