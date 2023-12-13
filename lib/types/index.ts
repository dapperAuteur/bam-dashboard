export interface MediaInterface {
  externalMediaFile: string | number | boolean | readonly string[] | readonly number[] | readonly boolean[] | null | undefined;
  _id: string;
  title: string;
  description: string;
  duration: string;
  genre: string;
  tags: string[];
  performers: string;
  thumbnail_url: string;
  media_type: string;
}

export interface FinAcctInterface {
  _id: string;
  account_name: string;
  current_value: string;
  account_type: string;
  fin_int: string;
  manager: string;
  tranx: TransactionInterface[];
}

export interface TransactionInterface {
  _id: string;
  budget_id: string;
  budget: BudgetInterface;
  currency_id: string
  currency: string;
  fin_acct: FinAcctInterface[];
  fin_acc_id: string;
  occurrence_string: string;
  tranx_event: string;
  tranx_credit: number;
  tranx_debit: number;
  description: string;
  vendor: VendorInterface[]
}

export interface BudgetInterface {
  _id: string;
  budget_name: string;
  budget_value: number;
  budget_balance: number;
  budget_manager: PersonInterface;
  tranx: TransactionInterface[];
}

export interface UserInterface {
  _id: string;
  email: string;
  role: number;
  roles: string[];
  name: string;
  username: string;
  userRole: string[];
  password: string;
  profile_image_url: string;
  tranx: TransactionInterface[];
}

export interface VendorInterface {
  _id: string;
  vendor_name: string;
  black_owned: boolean;
  contact: PersonInterface[];
  description: string;
  tranx: TransactionInterface[];
}

export interface PersonInterface {
  _id: string;
  vendor: VendorInterface[];
  budget_managed: BudgetInterface[];
  email: string[];
  phone_number: string[];
  tranx: TransactionInterface[];
  nickname: string[];
}

export interface SocialProfileInterface {
  id: string;
  provider: string;
  subprovider: string;
  name: string;
  socialAccount: {
    id: string;
    name: string;
    image: string;
  },
  profileBoards: []
}

export interface WorkspaceInterface {
  id?: string;
  name: string;
  image: string;
  owner: {
    email: string;
  }
  plan: {
    name: string;
  }
}

export interface ScheduledSocialPostInterface {
  id: string;
  scheduleAt: string;
  postGroup: {
    posts: SocialPostInterface[];
  }
  schedules: ScheduleInterface[];
}

export interface SocialPostInterface {
  caption: string;
  creatives: []
}

export interface ScheduleInterface {
  error: string;
  socialProfile: {
    provider: string;
    name: string;
    socialId: string;
  }
}