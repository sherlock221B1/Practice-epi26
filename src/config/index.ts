export interface Config {
  backofficeApiUrl: string;
}

const config: Config = {
  backofficeApiUrl: process.env.NEXT_PUBLIC_BACKOFFICE_API_URL || "",
};

export default config;
