/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly USER1_EMAIL?: string;
  readonly USER1_PASSWORD?: string;
  readonly USER1_NAME?: string;
  readonly USER2_EMAIL?: string;
  readonly USER2_PASSWORD?: string;
  readonly USER2_NAME?: string;
  readonly USER3_EMAIL?: string;
  readonly USER3_PASSWORD?: string;
  readonly USER3_NAME?: string;
  readonly USER4_EMAIL?: string;
  readonly USER4_PASSWORD?: string;
  readonly USER4_NAME?: string;
  readonly USER5_EMAIL?: string;
  readonly USER5_PASSWORD?: string;
  readonly USER5_NAME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
