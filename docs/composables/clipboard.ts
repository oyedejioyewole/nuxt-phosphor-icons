export const useClipboardContent = async (content: string) => {
  const { copy } = useClipboard({ legacy: true });

  await copy(content);
  push.success("Copied!");
};
