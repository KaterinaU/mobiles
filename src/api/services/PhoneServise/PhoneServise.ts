import { createAsyncThunk } from '@reduxjs/toolkit';

import { PhoneType } from '../../../types';
import { baseUrl } from '../api';

interface GetPhonesResponse {
  phonesData: PhoneType[];
}

export const PhoneService = {
  getPhones: createAsyncThunk('phones', async (): Promise<GetPhonesResponse> => {
    const response = await fetch(`${baseUrl}/phones.json`);

    if (!response.ok) {
      throw new Error('Failed to fetch phones');
    }
    return await response.json();
  }),
};
