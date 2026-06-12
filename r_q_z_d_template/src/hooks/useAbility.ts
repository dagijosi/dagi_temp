export const useAbility = () => {
  return {
    can: (params: { permission?: string[]; role?: string[]; entitlement?: string }) => {
      void params; // Mark as used for linter
      return true;
    },
    isPlatformMode: false,
  };
};
