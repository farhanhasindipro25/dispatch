export interface ProjectCardProps {
  project: {
    slug: string;
    cover: string;
    featured: boolean;
    name: string;
    learning: boolean;
    category: string;
    live_link?: string | undefined;
    associated_with?: string | undefined;
    client_code_link?: string | undefined;
    server_code_link?: string | undefined;
    doc_link?: string | undefined;
    role?: string | undefined;
    tech_stack: string[];
    details: {
      project_description: string;
      features: string[];
    };
  };
}
