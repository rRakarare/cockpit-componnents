import { ImagePromptDetailType } from "../db/imagePrompt";

export const imagePromptDummyData: ImagePromptDetailType[] = [
    {
      id: BigInt(1),
      image_uuid: "550e8400-e29b-41d4-a716-446655440000",
      mongo_uuid: "5f7b5e7e9b8f3e2d1c6a8b4a",
      user_id: BigInt(1001),
      title: "Futuristic Cityscape",
      input_prompt: "Create a vibrant futuristic cityscape with flying cars and holographic billboards",
      created_at: new Date("2023-06-15T09:30:00Z"),
      updated_at: new Date("2023-06-15T09:35:00Z"),
      images: [
        {
          id: BigInt(101),
          imageMessageUUID: "a1b2c3d4-e5f6-4a5b-9c8d-1e2f3a4b5c6d",
          aiModelId: BigInt(1),
          url: "https://picsum.photos/700/700"
        },
        {
          id: BigInt(102),
          imageMessageUUID: "b2c3d4e5-f6a7-5b6c-0d1e-2f3a4b5c6d7e",
          aiModelId: BigInt(1),
          url: "https://picsum.photos/700/700"
        },
        {
          id: BigInt(103),
          imageMessageUUID: "c3d4e5f6-a7b8-6c7d-1e2f-3a4b5c6d7e8f",
          aiModelId: BigInt(1),
          url: "https://picsum.photos/700/700"
        },
        {
          id: BigInt(104),
          imageMessageUUID: "d4e5f6a7-b8c9-7d8e-2f3a-4b5c6d7e8f9g",
          aiModelId: BigInt(1),
          url: "https://picsum.photos/700/700"
        }
      ]
    },
    {
      id: BigInt(2),
      image_uuid: "6b3a9c5d-7e8f-42a1-b3c4-556677889900",
      mongo_uuid: null,
      user_id: BigInt(1002),
      title: "Enchanted Forest",
      input_prompt: "Generate an enchanted forest scene with magical creatures and glowing plants",
      created_at: new Date("2023-06-16T14:45:00Z"),
      updated_at: new Date("2023-06-16T14:50:00Z"),
      images: [
        {
          id: BigInt(201),
          imageMessageUUID: "e5f6a7b8-c9d0-8e9f-3a4b-5c6d7e8f9g0h",
          aiModelId: BigInt(2),
          url: "https://picsum.photos/700/700"
        },
        {
          id: BigInt(202),
          imageMessageUUID: "f6a7b8c9-d0e1-9f0a-4b5c-6d7e8f9g0h1i",
          aiModelId: BigInt(2),
          url: "https://picsum.photos/700/700"
        },
        {
          id: BigInt(203),
          imageMessageUUID: "a7b8c9d0-e1f2-0a1b-5c6d-7e8f9g0h1i2j",
          aiModelId: BigInt(2),
          url: "https://picsum.photos/700/700"
        },
        {
          id: BigInt(204),
          imageMessageUUID: "b8c9d0e1-f2a3-1b2c-6d7e-8f9g0h1i2j3k",
          aiModelId: BigInt(2),
          url: "https://picsum.photos/700/700"
        }
      ]
    },
    {
      id: BigInt(3),
      image_uuid: "7c4b0d6e-8f9a-43b2-c5d6-667788990011",
      mongo_uuid: "6a8b4c2e0d1f3a5b7c9e1d3f",
      user_id: BigInt(1003),
      title: "Underwater Adventure",
      input_prompt: "Create an underwater scene with colorful coral reefs and exotic sea creatures",
      created_at: new Date("2023-06-17T11:15:00Z"),
      updated_at: new Date("2023-06-17T11:20:00Z"),
      images: [
        {
          id: BigInt(301),
          imageMessageUUID: "c9d0e1f2-a3b4-2c3d-7e8f-9g0h1i2j3k4l",
          aiModelId: BigInt(3),
          url: "https://picsum.photos/700/700"
        },
        {
          id: BigInt(302),
          imageMessageUUID: "d0e1f2a3-b4c5-3d4e-8f9g-0h1i2j3k4l5m",
          aiModelId: BigInt(3),
          url: "https://picsum.photos/700/700"
        },
        {
          id: BigInt(303),
          imageMessageUUID: "e1f2a3b4-c5d6-4e5f-9g0h-1i2j3k4l5m6n",
          aiModelId: BigInt(3),
          url: "https://picsum.photos/700/700"
        },
        {
          id: BigInt(304),
          imageMessageUUID: "f2a3b4c5-d6e7-5f6g-0h1i-2j3k4l5m6n7o",
          aiModelId: BigInt(3),
          url: "https://picsum.photos/700/700"
        }
      ]
    }
  ];