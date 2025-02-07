export type PageProps = {
  searchParams: URLSearchParams;
};

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

export type Theme = "light" | "dark" | "red";
