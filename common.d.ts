/** Error shape returned by the API (derived from src/utils/errors.js) */
export interface ApiError {
  message: string;
  code: string;
}

/**
 * HTTP status code union mapping for API error responses.
 * Maps each error class from src/utils/errors.js to its status code.
 */
export interface ApiErrorResponse {
  statusCode: 400 | 401 | 403 | 404 | 409 | 202 | 422;
  error: ApiError;
}

/** Generic paginated response wrapper */
export interface PaginatedResponse<T> {
  results: T[];
  totalCount: number;
  page: number;
  pageSize: number;
}

/** Generic success response wrapper */
export interface ApiSuccessResponse<T> {
  data: T;
}

/** Pagination query parameters */
export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortDirection?: "asc" | "desc";
}
