export interface User {
  id: string;
  avatarUrl: string;
  username: string;
  firstname: string;
  lastname: string;
}

export interface MessageData {
    id: string,
    sender?: string,
    chatRoom?: string,
    sentAt?: string,
    content: string,
}

export interface Conversation {
    id: string; // conversation id
    members: Array<string> // id of members
    isSelected?: boolean;
    selectedChat: string | null
    setSelectedChat: (chat: string | null) => void
}

export interface ConversationData {
  id: string; // conversation id
  members: Array<string> // id of members
}