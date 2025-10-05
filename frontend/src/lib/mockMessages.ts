// Mock conversation data matching backend schema (LangGraph-like).
// Used for developing frontend logic before wiring real API streaming.
import type { Message } from "@/types/message";

export const mockMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    sections: [
      {
        type: "text",
        content:
          "Welcome back. Who would you like to reconnect with today, or is there something new you'd like to capture?",
      },
    ],
  },
  {
    id: "2",
    role: "user",
    sections: [
      {
        type: "text",
        content: "Hi I met someone interesting today in a trade show I attended.",
      },
    ],
  },
  {
    id: "3",
    role: "assistant",
    sections: [
      {
        type: "text",
        content:
          "Great! Would you like to capture their contact details now, or start by telling me what stood out about the interaction?",
      },
    ],
  },
  {
    id: "4",
    role: "user",
    sections: [
      {
        type: "text",
        content:
          "She is the buyer of an important retailer in South America. I'm interested in making business with them. They could be great buyers for my products.",
      },
    ],
  },
  {
    id: "5",
    role: "assistant",
    sections: [
      {
        type: "text",
        content:
          "Got it. I'll create a draft contact entry for her and associate it with a potential business goal. What's her name, and do you remember her company or title?",
      },
    ],
  },
  {
    id: "6",
    role: "user",
    sections: [
      {
        type: "text",
        content:
          "Sure. She's Martha and works and Fishmart. She manages purchases for 4 stores that were opened 19, 15, 10 and 7 years ago.",
      },
    ],
  },
  {
    id: "7",
    role: "assistant",
    sections: [
      {
        type: "text",
        content:
          "Thanks. Creating a new contact draft:\n\n**Rendering small widget with name 'Martha', initials 'M', status dot (draft), and no goal link badge yet.**\n\nWould you like to confirm or add more details about your conversation with Martha? I can help enrich her profile or start drafting a goal based on this opportunity.",
      },
    ],
  },
  {
    id: "8",
    role: "user",
    sections: [
      {
        type: "text",
        content:
          "I would like to add more details about the conversation. Please, ask me one question at a time until you have enough information to have a more informed picture.",
      },
    ],
  },
  {
    id: "9",
    role: "assistant",
    sections: [
      {
        type: "text",
        content:
          "Great. Let's start simple:\n\nWhat exactly did you and Martha talk about at the trade show?",
      },
    ],
  },
  {
    id: "10",
    role: "user",
    sections: [
      {
        type: "text",
        content:
          "She told me that she was there looking for suppliers and I told her I'd be honored to be given the opportunity to be her supplier. She told me the challenges of supplying her firm like low prices and having to provide terms that were sometimes onerous financially. I assured we were very competitive and that we could finance some working capital provided the growth opportunities were there. She said that she could test our product in her 4 stores and from there we could expand to the rest of the chain which has hundreds of stores.",
      },
    ],
  },
  {
    id: "11",
    role: "assistant",
    sections: [
      {
        type: "text",
        content:
          "Thanks. That gives me strong strategic context.\n\nNext question:  \nDid you discuss any next steps—like a follow-up meeting, sending her information, or product samples?",
      },
    ],
  },
  {
    id: "12",
    role: "user",
    sections: [
      {
        type: "text",
        content:
          "Yes. I am supposed to mail samples in the next few days. I requested a meeting for a follow up but she said she wanted to receive the samples and see them before agreeing to a next meeting. I was concerned that she didn't ask for prices which can show a lack of interest in doing business.",
      },
    ],
  },
  {
    id: "13",
    role: "assistant",
    sections: [
      {
        type: "text",
        content:
          "Understood. That adds nuance to the opportunity.\n\nOne more question:  \nDo you recall if you discussed any specific product types or categories that she was most interested in?",
      },
    ],
  },
  {
    id: "14",
    role: "user",
    sections: [
      {
        type: "text",
        content:
          "Yes. I sell scallops and she said she was interested that we could provide off season since we're a marine culture company.",
      },
    ],
  },
  {
    id: "15",
    role: "assistant",
    sections: [
      {
        type: "text",
        content:
          "Perfect. That helps define both opportunity and differentiation.\n\nBased on what you've shared, I can enrich Martha's profile with:\n- Interest in scallops and off-season supply\n- Concern with supplier pricing and terms\n- Open to testing through 4 stores\n- Waiting on samples before confirming next steps\n- Possibly cautious or hesitant based on lack of pricing discussion\n\nWould you like me to enrich the contact profile now and update her status, or proceed with drafting a follow-up goal?",
      },
    ],
  },
  {
    id: "16",
    role: "user",
    sections: [
      {
        type: "text",
        content: "Yes. render the information...",
      },
    ],
  },
  {
    id: "17",
    role: "assistant",
    sections: [
      {
        type: "text",
        content:
          "**Rendering medium widget for contact 'Martha'**  \nFields:  \n- **Name:** Martha  \n- **Role & Company:** Buyer · Fishmart  \n- **Contact Status:** Draft  \n- **Tags:** Scallops, Trade Show, Off-Season Supply, Financial Terms, Sample Pending  \n- **Last Interaction:** Today  \n- **Linked Goals:** None yet  \n- **Suggested Actions:** 'Enrich Profile', 'Draft Follow-Up Goal', 'Summarize Meeting', 'Set Reminder'\n\nLet me know what you'd like to do next.",
      },
    ],
  },
];


