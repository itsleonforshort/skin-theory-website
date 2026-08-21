/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Web3Forms access key. Used by the contact form and the checkout order
   * submission. Registered in ENV-VARS-USED.md and .env.example.
   * The site works without it; forms show a calm message instead of sending.
   */
  readonly VITE_WEB3FORMS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
