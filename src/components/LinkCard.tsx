type LinkCardProps = {
  title: string;
  url: string;
  clickCount: number;
  isCountLoaded: boolean;
  onClick: () => void;
};

// 1,000 이상은 "1.2천", "3.4만"처럼 짧게 줄여 작은 자리에도 들어가게 한다
const compactNumber = new Intl.NumberFormat("ko-KR", {
  notation: "compact",
  maximumFractionDigits: 1,
});

export default function LinkCard({ title, url, clickCount, isCountLoaded, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative flex h-14 w-full items-center justify-center rounded-2xl border border-white/70 bg-white/45 px-16 text-[15px] font-semibold shadow-[0_8px_24px_-14px_rgb(120_70_40/0.35)] backdrop-blur-md transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/65 hover:shadow-[0_14px_30px_-14px_rgb(120_70_40/0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:h-16 sm:text-base"
    >
      <span className="truncate">{title}</span>
      <span
        title={`${clickCount.toLocaleString("ko-KR")}회 클릭`}
        className={`absolute right-5 text-xs font-medium tabular-nums text-muted transition-opacity duration-300 ${
          isCountLoaded ? "opacity-100" : "opacity-50"
        }`}
      >
        <span className="sr-only">클릭 수 </span>
        {compactNumber.format(clickCount)}회
      </span>
    </a>
  );
}
