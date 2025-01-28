export type SubscribeResponse = Promise<{
  error?: string;
  success?: string;
}>;

export type SharingSites =
  | "Email"
  | "Facebook"
  | "Linkedin"
  | "Pinterest"
  | "Twitter";
