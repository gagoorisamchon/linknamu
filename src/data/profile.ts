// 보여주기용 더미 데이터 — 실제 내용으로 교체 예정
export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "신개발",
  bio: "풀스택 개발자: 요즘은 AI개발에 관심이 많아요.",
  imageUrl: "/IMG_0176.jpeg",
};

export const links: LinkItem[] = [
  { id: "github", title: "깃허브", url: "https://github.com/gagoorisamchon" },
  { id: "blog", title: "블로그", url: "https://legal-guide.tistory.com" },
  { id: "email", title: "이메일", url: "mailto:itssogood@naver.com" },
];
