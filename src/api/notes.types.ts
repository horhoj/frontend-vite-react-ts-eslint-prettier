export type Delay = () => Promise<void>;
export type GenerateId = () => string;

export interface Note {
  id: string;
  parentId: string | null;
  text: string;
}

export type ErrorRandomized = () => boolean;
