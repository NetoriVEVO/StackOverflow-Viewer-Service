interface IAuthorQuestion {
	answer_count: number;
	tags: string[];
	title: string;
	view_count: number;
	is_answered: boolean;
}

interface IAuthorPosts {
	has_more: boolean;
	items: IAuthorQuestion[];
	quota_max: number;
	quota_remaining: number
}

export interface IQuickViewSlice {
	authorPosts: IAuthorPosts | null,
	isOpenedQuickView: boolean
}