class RateLimitService {
  private requests: Map<string, number> = new Map();
  private windowSize: number;
  private maxRequests: number;

  constructor(windowSize: number, maxRequests: number) {
    this.windowSize = windowSize;
    this.maxRequests = maxRequests;
  }

  public isRateLimited(key: string): boolean {
    if (!this.requests.has(key)) {
      this.requests.set(key, 1);
      setTimeout(() => this.requests.delete(key), this.windowSize);
      return false;
    }

    const requestsCount = this.requests.get(key) || 0;
    if (requestsCount < this.maxRequests) {
      this.requests.set(key, requestsCount + 1);
      return false;
    }

    return true;
  }
}

// Example usage
const rateLimitService = new RateLimitService(60000, 5); // 5 requests per minute

// Check if a user is rate limited
const userId = "user123";
if (rateLimitService.isRateLimited(userId)) {
  console.log("Rate limited. Please try again later.");
} else {
  console.log("Request allowed.");
}
