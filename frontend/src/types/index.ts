export interface User {
  id: string;
  avatarUrl: string;
  username: string;
  firstname: string;
  lastname: string;
}

export interface MessageData {
    id?: string,
    sender?: string,
    chatRoom?: string,
    sentAt?: number,
    content: string,
}

export interface Conversation {
    id?: string; // conversation id
    members: Array<string> // id of members
    isSelected?: boolean;
}