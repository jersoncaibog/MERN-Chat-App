import { create } from 'zustand';

interface AuthStore {
    userId: string | null,
    setUserId: (userId: string | null) => void,
    accessToken: string | null,
    setAccessToken: (token: string | null) => void,
    clearAccessToken: () => void,
}

const useAuthStore = create<AuthStore>((set) => ({
    userId: null,
    setUserId: (userId) => set({ userId }),
    accessToken: null,
    setAccessToken: (token) => set({ accessToken: token }),
    clearAccessToken: () => set({ accessToken: null }),
}));

export default useAuthStore