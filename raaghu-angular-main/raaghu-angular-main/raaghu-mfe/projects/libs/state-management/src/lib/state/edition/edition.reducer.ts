import { createReducer, on } from "@ngrx/store";
import { deleteEditionFailure, deleteEditionSuccess, getEditionFailure, getEditionInfo, getEditionInfoFailure, getEditionInfoSuccess, getEditionPageComboboxItems, getEditionPageComboboxItemsFailure, getEditionPageComboboxItemsSuccess, getEditions, getEditionSuccess, getEditionUpdateSuccess, getTenantCount, getTenantCountFailure, getTenantCountSuccess } from "./edition.action";
import { Edition, EditionItem } from "./edition.model";


export interface EditionsState {
    editions: EditionItem[]
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const editionInitialState: EditionsState = {
    editions: [],
    error: null,
    status: 'pending',
};

export const EditionReducer = createReducer(
    editionInitialState,
    on(getEditions, (state) => ({ ...state, status: 'loading' })),
    on(getEditionSuccess, (state, { editions }) => ({
        ...state,
        editions: editions.items,
        error: null,
        status: 'success',
    })),

    on(getEditionUpdateSuccess, (state, { edition }) => {
        const data = state.editions.map((x) => {
            return x.id === edition.id ? edition : x
        })
        return {
            ...state,
            editions:data ,
            error: null,
            status: 'success',
        }
    }),
    on(getEditionFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(deleteEditionFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))
)

export interface EditionInfoState {
    editionInfo: any
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}
export const editInfoInitialState: EditionInfoState = {
    editionInfo: {},
    error: null,
    status: 'pending',
};
export const EditionInfoReducer = createReducer(
    editionInitialState,
    on(getEditionInfo, (state) => ({ ...state, status: 'loading' })),
    on(getEditionInfoSuccess, (state, { editionInfo }) => ({
        ...state,
        editionInfo: editionInfo,
        error: null,
        status: 'success',
    })),
    on(getEditionInfoFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))

)

export interface EditionsPageComboboxState {
  editionComboboxItem: any[]
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}
export const editionPageComboboxInitialState: EditionsPageComboboxState = {
  editionComboboxItem: [],
  error: null,
  status: 'pending',
};
export const EditionPageComboboxReducer = createReducer(
  editionPageComboboxInitialState,
  on(getEditionPageComboboxItems, (state) => ({ ...state, status: 'loading' })),
  on(getEditionPageComboboxItemsSuccess, (state, { editionComboboxItem }) => ({
    ...state,
    editionComboboxItem: editionComboboxItem,
    error: null,
    status: 'success',
  })),
  on(getEditionPageComboboxItemsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))

)

export interface TenantCountState {
  tenantCount: number;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}
export const initialTenatCountState: TenantCountState = {
  tenantCount:0,
  error: null,
  status: 'pending',
};
export const TenantCountReducer = createReducer(
  initialTenatCountState,
  on(getTenantCount, (state) => ({ ...state, status: 'loading' })),
  on(getTenantCountSuccess, (state, { tenantCount }) => ({
    ...state,
    tenantCount: tenantCount,
    error: null,
    status: 'success',
  })),
  on(getTenantCountFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))

)
