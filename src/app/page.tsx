import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-4 py-12 sm:py-16">
      <ProfileHeader name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />
      <ul className="mt-10 flex flex-col gap-6">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard title={link.title} url={link.url} />
          </li>
        ))}
      </ul>
    </main>
  );
}
