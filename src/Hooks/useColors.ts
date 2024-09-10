import { create } from "zustand"

interface GlobalColors {
	colors: DriverColor[],
	updateColors: (newColor: DriverColor[]) => void
}

export const useColors = create<GlobalColors>((set) => ({
	colors: [],
	updateColors: (newColors: DriverColor[]) => set({colors: newColors })
}))
