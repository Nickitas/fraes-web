import { downloadsPageContent } from "../constants";

export const AuthNotice = () => {
  const { authNotice } = downloadsPageContent;

  return (
    <div className="rounded-lg border bg-amber-50/50 p-4 sm:p-6 dark:bg-amber-950/20">
      <p className="text-xs text-amber-900 sm:text-sm dark:text-amber-200">
        <strong>{authNotice.title}:</strong> {authNotice.content}
      </p>
    </div>
  );
};
