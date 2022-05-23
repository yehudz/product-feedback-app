export type User = {
  image: string;
  name: string;
  username: string
}

export type Comment = {
  content: string;
  id: number;
  user: User;
  replies?: string[]
}

export type Request = {
  category: string;
  comments?: Comment[];
  description: string;
  id: number;
  status: string;
  title: string;
  upvotes: number
}

export interface Requests {
    current: User;
    productRequests: Request[];
}

export interface CardProps {
  icon: string
  text: string
  title: string
  titleLabel: string
  category: string
  categoryLabel: string
  detail: string
  detailLabel: string
}