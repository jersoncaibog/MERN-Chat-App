import { create } from 'zustand';

interface AuthStore {
    accessToken: string | null,
    setAccessToken: (token: string | null) => void,
    clearAccessToken: () => void,
}

const useAuthStore = create<AuthStore>((set) => ({
    accessToken: null,
    setAccessToken: (token) => set({ accessToken: token }),
    clearAccessToken: () => set({ accessToken: null }),
}));

export default useAuthStore