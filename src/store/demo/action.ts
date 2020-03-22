import {UPDATE_TEXT, UpdateTextAction} from './types.ts';

export function updateText(text: string): UpdateTextAction {
  return {
    type: UPDATE_TEXT,
    payload: text,
  };
}
