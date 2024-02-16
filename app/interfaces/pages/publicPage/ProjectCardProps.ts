export interface ProjectCardProps {
  project: {
    name: string;
    live_link?: string;
    associated_with?: string;
    client_code_link?: string;
    server_code_link?: string;
    doc_link?: string;
    role?: string;
    tech_stack: string[];
  };
}
