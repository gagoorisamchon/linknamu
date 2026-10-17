import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={160}
        height={160}
        priority
        className="h-36 w-36 rounded-full border border-foreground object-cover sm:h-40 sm:w-40"
      />
      <h1 className="mt-6 text-2xl font-bold">{name}</h1>
      <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
