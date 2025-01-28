export type PageProps = {
  params: Promise<{ slug?: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
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
