import AnimatedDiv from "@/components/common/AnimatedDiv";
import HeroVideoDialog from "./HeroVideoDialog";
import CarouselSlider from "@/components/common/CarouselSlider";

const MusicalPerformance = () => {
  const songPerformances: {
    thumbnailUrl: string;
    songUrl: string;
  }[] = [
    {
      thumbnailUrl: "/images/musicalPerformance/1.jpg",
      songUrl: "https://www.youtube.com/embed/jkURtI3ohE8",
    },
    {
      thumbnailUrl: "/images/musicalPerformance/2.jpg",
      songUrl: "https://www.youtube.com/embed/Tbc2ACcxocg",
    },
  ];

  const performanceYoutubeVideos = songPerformances.map(
    (performance, index) => (
      <AnimatedDiv key={"pytv" + index}>
        <HeroVideoDialog
          className="block w-[60%] mx-auto"
          animationStyle="from-center"
          videoSrc={performance.songUrl}
          thumbnailSrc={performance.thumbnailUrl}
          thumbnailAlt="Hero Video"
        />
      </AnimatedDiv>
    )
  );

  return (
    <section className="about h-screen py-32">
      <header className="text-center">
        <AnimatedDiv className="text-5xl font-semibold" _delay={1.5}>
          Musical Performances
        </AnimatedDiv>
        <AnimatedDiv
          className="border-none w-[80px] h-[1px] bg-black dark:bg-white mt-5 mx-auto"
          children={null}
          _delay={1.8}
        ></AnimatedDiv>
      </header>

      <AnimatedDiv _delay={1.9}>
        <CarouselSlider
          contents={performanceYoutubeVideos}
          contentClassName="mx-auto mt-16"
        ></CarouselSlider>
      </AnimatedDiv>
    </section>
  );
};

export default MusicalPerformance;
