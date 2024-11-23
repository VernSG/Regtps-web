import { HeroVideoDialog } from "../components/ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/lI2pbqlBQkU?si=8tptNvTWViyWd0LV"
        thumbnailSrc="https://regtps-web.vercel.app/screen1.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/lI2pbqlBQkU?si=8tptNvTWViyWd0LV"
        thumbnailSrc="https://regtps-web.vercel.app/screen1.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
