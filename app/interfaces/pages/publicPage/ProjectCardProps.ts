export interface ProjectCardProps {
  project: {
    slug: string;
    featured: boolean;
    name: string;
    learning: boolean;
    live_link?: string | undefined;
    associated_with?: string | undefined;
    client_code_link?: string | undefined;
    server_code_link?: string | undefined;
    doc_link?: string | undefined;
    role?: string | undefined;
    tech_stack: string[];
    details: string[];
  };
}
