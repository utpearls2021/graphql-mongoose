export class CompanyException extends Error {
  constructor(message?: string) {
    super(message || "company name must be more then 2 characters");
  }
}