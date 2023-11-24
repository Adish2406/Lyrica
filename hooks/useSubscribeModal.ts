import { create } from "zustand";

interface SubscribeModaluseSubscribeModalStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

const useSubscribeModal = create<SubscribeModaluseSubscribeModalStore> ((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));

export default useSubscribeModal; 