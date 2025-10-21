import { UserType } from '@/lib/type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState: UserType | null = null

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: UserType | null, action: PayloadAction<UserType>) => {
      state = action.payload
    },
    clearUser: (_state) => {
      return null
    },
  },
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
