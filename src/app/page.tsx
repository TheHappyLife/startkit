import CustomLink from "@/components/tool/CustomLink";

export default function IntroPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Intro Page</h1>
      <CustomLink href="/home">Home page</CustomLink>
      <CustomLink href="/landing">Landing page</CustomLink>
    </div>
  );
}
