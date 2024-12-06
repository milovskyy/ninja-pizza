import { create } from "zustand"

type Store = {
  showModal: boolean
  setShowModal: (value: boolean) => void
}

const useModalStore = create<Store>((set) => ({
  showModal: false,
  setShowModal: (value: boolean) => set({ showModal: value }),
}))

export default useModalStore
