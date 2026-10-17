type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-16 w-full items-center justify-center rounded-2xl border border-foreground text-lg font-semibold transition-colors hover:bg-foreground hover:text-background"
    >
      {title}
    </a>
  );
}
