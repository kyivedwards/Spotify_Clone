
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'aa5856ac3dmsh0bf3d027051d59bp1e8b6ejsn359fbbc8d83c');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/world?country_code=DZ'}),
    })
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;
