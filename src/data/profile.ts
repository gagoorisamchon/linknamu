// 보여주기용 더미 데이터 — 실제 내용으로 교체 예정
export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "신 클로",
  bio: "세계 최강 바이브코더",
  imageUrl: "/profile-placeholder.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com" },
];
