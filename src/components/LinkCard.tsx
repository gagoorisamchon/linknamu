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
      className="flex h-14 w-full items-center justify-center rounded-2xl border border-white/70 bg-white/45 text-[15px] font-semibold shadow-[0_8px_24px_-14px_rgb(120_70_40/0.35)] backdrop-blur-md transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/65 hover:shadow-[0_14px_30px_-14px_rgb(120_70_40/0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:h-16 sm:text-base"
    >
      {title}
    </a>
  );
}
