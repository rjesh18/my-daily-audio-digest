import { create } from 'zustand';

export const useUserStore = create((set) => ({
  user: {
    deliveryTime: '07:00',
    language: 'english',
    voice: 'default',
    notificationsEnabled: true,
    contentPreferences: {
      newsWeight: 1,
      fictionWeight: 1,
      learningWeight: 1,
      horoscopeEnabled: true,
      musicEnabled: true,
    },
    listeningStreak: 0,
    unlockedVoices: ['default'],
  },
  updatePreferences: (prefs) => set((state) => ({ user: { ...state.user, ...prefs } })),
  incrementStreak: () => set((state) => ({ 
    user: { ...state.user, listeningStreak: state.user.listeningStreak + 1 } 
  })),
}));