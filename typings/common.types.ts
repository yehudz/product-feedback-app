export type User = {
  image: string;
  name: string;
  username: string
}

export type Comment = {
  content: string;
  id: number;
  user: User;
  username: string
  replies?: string[]
}

export interface Request {
  category: string;
  comments?: Comment[];
  description: string;
  id: number;
  status: string;
  title: string;
  upvotes: number
  request: any
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
  menuItems: string[]
  setFeedbackTitle: (feedbackTitle: string)=> void
  setCategorySelection: (categorySelection: string)=> void
  setMessage: (message: string)=> void
  saveFeedbackApiCall: ()=> void
}