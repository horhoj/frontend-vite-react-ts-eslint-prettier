import { IS_FAKE_API_CONSOLE_LOG, NOTES_NETWORK_ERROR_RATE, NOTES_REQUEST_DELAY } from './const';
import { Delay, ErrorRandomized, GenerateId, Note } from './notes.types';
import { delay } from '~/utils/delay';

const START_ID = 6;

const store: Note[] = [
  { id: '1', parentId: null, text: 'note 1' },
  { id: '2', parentId: null, text: 'note 2' },
  { id: '3', parentId: '2', text: 'note 3' },
  { id: '4', parentId: '3', text: 'note 4' },
  { id: '5', parentId: '4', text: 'note 5' },
  { id: '6', parentId: '4', text: 'note 6' },
];

export const makeGenerateId = (startId: number): GenerateId => {
  let lastId = startId;

  return () => {
    lastId++;
    return lastId.toString();
  };
};

export const makeErrorRandomized =
  (rate: number, random = Math.random): ErrorRandomized =>
  () =>
    random() < rate;

export class NotesApi {
  public static ERROR_PATCH_NOTE_NOT_FOUND = 'patchNote: note not found';
  public static ERROR_ADD_NOTE_PARENT_NOT_FOUND = 'addNote: parent note not found';
  public static ERROR_DELETE_NOTE_NOT_FOUND = 'deleteNote: note not found';
  public static ERROR_NETWORK = 'network error';
  private delay: Delay;
  private store: Note[];
  private generateId: GenerateId;
  private errorRandomized: ErrorRandomized;
  public constructor(store: Note[], delay: Delay, generateId: GenerateId, errorRandomized: ErrorRandomized) {
    this.store = store;
    this.delay = delay;
    this.generateId = generateId;
    this.errorRandomized = errorRandomized;
  }

  private async system(methodName: string) {
    if (IS_FAKE_API_CONSOLE_LOG) {
      // eslint-disable-next-line no-console
      console.log(methodName);
    }

    await this.delay();
    if (this.errorRandomized()) {
      throw new Error(NotesApi.ERROR_NETWORK);
    }
  }

  public async fetchNotes(parentId: Note['parentId']) {
    await this.system('fetchNotes');
    return this.store.filter((note) => note.parentId === parentId);
  }

  public async patchNote(id: Note['id'], text: Note['text']) {
    await this.system('patchNote');
    const index = this.store.findIndex((note) => note.id === id);
    if (index === -1) {
      throw new Error(NotesApi.ERROR_PATCH_NOTE_NOT_FOUND);
    }
    this.store[index].text = text;
  }

  public async addNote(parentId: Note['parentId'], text: Note['text']) {
    await this.system('addNote');
    if (parentId !== null) {
      const parentIndex = this.store.findIndex((note) => note.id === parentId);
      if (parentIndex === -1) {
        throw new Error(NotesApi.ERROR_ADD_NOTE_PARENT_NOT_FOUND);
      }
    }
    const id = this.generateId();
    this.store.push({ id, parentId, text });
  }

  public async deleteNote(id: Note['id']) {
    await this.system('deleteNote');
    const index = this.store.findIndex((note) => note.id === id);
    if (index === -1) {
      throw new Error(NotesApi.ERROR_DELETE_NOTE_NOT_FOUND);
    }

    const storeChildrenMap: Record<Note['id'], Note['id'][]> = {};
    this.store.forEach((note) => {
      storeChildrenMap[note.id] = [];
    });
    this.store.forEach((note) => {
      if (note.parentId !== null) {
        storeChildrenMap[note.parentId].push(note.id);
      }
    });

    const deletedIds = new Set<Note['id']>();

    const stack: Note['id'][] = [id];
    while (stack.length > 0) {
      const currentId = stack.shift();
      if (currentId !== undefined) {
        const children = storeChildrenMap[currentId];
        children.forEach((childId) => stack.push(childId));
        deletedIds.add(currentId);
      }
    }
    const resultNote = this.store.filter((note) => !deletedIds.has(note.id));
    this.store.splice(0, this.store.length);
    this.store.push(...resultNote);
  }
}

export const notesApi = new NotesApi(
  store,
  () => delay(NOTES_REQUEST_DELAY),
  makeGenerateId(START_ID),
  makeErrorRandomized(NOTES_NETWORK_ERROR_RATE),
);
