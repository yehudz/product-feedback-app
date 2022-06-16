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
  comments: Comment[];
  description: string;
  id: number;
  status: string;
  title: string;
  upvotes: number
  request: any
  liked: boolean
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
  setFeedbackTitle: (feedbackTitle: string)=> string | void
  setCategorySelection: (categorySelection: string)=> string | void
  setMessage: (message: string)=> string | void
  saveFeedbackApiCall: ()=> void
  request?: Request
  isEdit: boolean
  statusMenuItems: string[]
  setStatus: (status: string)=> void
  showDeleteWarning: ()=> void
}