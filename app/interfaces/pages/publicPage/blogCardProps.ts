
export interface BlogCardProps {
  blog: {
    slug: string;
    title: string;
    date: string;
    description: string[];
    image?: any;
    client_code_link?: string;
    server_code_link?: string;
    live_link?: string;
  };
}
