import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
export const getCases = createAsyncThunk("tracker/getCases", async (data) => {
    const { countryCode, countryName } = { ...data }

    const URL = typeof countryCode === "undefined" ? process.env.REACT_APP_COVID_URL : `${process.env.REACT_APP_COVID_URL}/countries/${countryCode}`
    const result = (await axios.get(`${URL}`)).data
    return { result, countryName: countryName || "Global" }

})
export const trackerSlice = createSlice({
    name: "tracker",
    initialState: {
        cases: [],
        status: "idle",
        countryName: "Global",
        error: ""
    },
    reducers: {},
    extraReducers: {
        [getCases.pending]: (state, action) => {
            state.status = "pending"
        },
        [getCases.fulfilled]: (state, action) => {
            state.status = "succeeded"
            state.cases = action.payload.result
            state.countryName = action.payload.countryName
        },
        [getCases.rejected]: (state, action) => {
            state.status = "failed"
            state.error = action.payload
        }
    }
})

export default trackerSlice.reducer