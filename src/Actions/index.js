import { CHNAGE_CURRENT_NOTE } from './actionTypes';

export const changeCurrentNote = note => ({
    type: CHNAGE_CURRENT_NOTE,
    currentNote: note
})