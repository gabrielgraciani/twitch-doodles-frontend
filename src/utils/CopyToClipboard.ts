interface CopyToClipboardProps {
  content: string;
  isCopyingToClipboard: boolean;
  setIsCopyingToClipboard: (e: boolean) => void;
}

export default function CopyToClipboard({
  content,
  isCopyingToClipboard,
  setIsCopyingToClipboard,
}: CopyToClipboardProps): void {
  if (!isCopyingToClipboard) {
    navigator.clipboard.writeText(content);

    setIsCopyingToClipboard(true);
    setTimeout(() => {
      setIsCopyingToClipboard(false);
    }, [2000]);
  }
}
