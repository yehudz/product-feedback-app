export type User = {
  image: string;
  name: string;
  username: string
  0: User
}

export type Comment = {
  content: string;
  id: number;
  user: User;
  username: string
  replies?: string[]
}

export type Reply = {
  content: string;
  id: number;
  commentId: number;
  replyingTo: string;
  user: User[]
}

export interface Request {
  category: string;
  comments: Comment[];
  description: string;
  id: number;
  status: string;
  title: string;
  upvotes: number
  request?: Request
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
  isEdit?: boolean
  statusMenuItems?: string[]
  setStatus?: (status: string)=> void
  showDeleteWarning?: ()=> void
  saveButtonText?: string
}