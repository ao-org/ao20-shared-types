/**
 * Request body for the sendNewsletter endpoint.
 * Derived from Newsletter.controller.js.
 */
export interface NewsletterRequest {
  subject: string;
  content: string;
}

/**
 * Response from the sendNewsletter endpoint.
 * Derived from Newsletter.controller.js.
 */
export interface NewsletterResponse {
  message: string;
  successCount: number;
  failureCount: number;
  totalAttempted: number;
}
