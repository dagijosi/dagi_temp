export const useBusinessModules = () => {
  return {
    isModuleEnabled: (moduleName?: string) => {
      void moduleName; // Mark as used for linter
      return true;
    },
  };
};
