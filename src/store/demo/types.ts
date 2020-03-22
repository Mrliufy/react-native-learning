export const UPDATE_TEXT = 'UPDATE_TEXT';

export interface UpdateTextAction {
  type: typeof UPDATE_TEXT;
  payload: string;
}

export interface DemoState {
  text: string;
}

export type DemoActionTypes = UpdateTextAction;
