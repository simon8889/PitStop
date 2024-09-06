import { create } from "zustand";

interface GlobalSession {
	session: Session | null,
	updateSession: (newSession: Session) => void
}

export const useSession = create<GlobalSession>((set) => ({
	session: null,
	updateSession: (newSession: Session) => set({session: newSession})
}))