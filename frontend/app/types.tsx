export interface Book {
  id: number;
  title: string;
  author: string;
  publishedYear: number;
  imageUrl: string;
  description: string;
  publisher: string;
}

export interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}