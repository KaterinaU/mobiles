import { PhoneSpecName, PhoneType } from '../../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PhoneService } from '../../../api/services/PhoneServise/PhoneServise';

interface TableRowType {
  specName: PhoneSpecName;
  specValues: string[];
}
interface PhonesState {
  loading: 'idle' | 'pending' | 'success' | 'failed';
  phones: PhoneType[];
  displayedPhonesCount: number;
  tableRows: TableRowType[];
  isError: boolean;
}

export const initialState: PhonesState = {
  loading: 'idle',
  phones: [],
  displayedPhonesCount: 3,
  tableRows: [],
  isError: false,
};

export const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  selectors: {
    selectDisplayedPhonesCount: (state: PhonesState) => {
      return state.displayedPhonesCount;
    },
    selectRemainingPhones: (state: PhonesState) => {
      if (!state.phones) {
        return [];
      }
      return state.phones.slice(state.displayedPhonesCount);
    },
    selectDisplayedPhones: (state: PhonesState) => {
      if (!state.phones) {
        return [];
      }
      return state.phones.slice(0, state.displayedPhonesCount);
    },
    selectTableRows: (state: PhonesState) => {
      return state.tableRows;
    },
  },
  reducers: {
    setDisplayedPhonesCount(state, action: PayloadAction<number>) {
      state.displayedPhonesCount = action.payload;
    },
    replacePhones(state, action: PayloadAction<{ oldPhoneId: number; newPhoneId: number }>) {
      const { oldPhoneId, newPhoneId } = action.payload;
      const oldIndex = state.phones.findIndex((phone) => phone.id === oldPhoneId);
      const newIndex = state.phones.findIndex((phone) => phone.id === newPhoneId);

      if (oldIndex !== -1 && newIndex !== -1) {
        [state.phones[oldIndex], state.phones[newIndex]] = [state.phones[newIndex], state.phones[oldIndex]];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(PhoneService.getPhones.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(PhoneService.getPhones.fulfilled, (state, action) => {
        state.loading = 'success';
        if (Array.isArray(action.payload)) {
          state.phones = action.payload;
        } else {
          state.phones = [];
        }
      })
      .addCase(PhoneService.getPhones.rejected, (state) => {
        state.loading = 'failed';
        state.isError = true;
      });
  },
});

export const { selectDisplayedPhonesCount, selectRemainingPhones, selectDisplayedPhones, selectTableRows } =
  phonesSlice.selectors;

export const { setDisplayedPhonesCount, replacePhones } = phonesSlice.actions;
