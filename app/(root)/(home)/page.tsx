import  MeetingTypeList  from "@/components/MeetingTypeList";
import Image from "next/image";
import Meeting from "../meeting/[id]/page";

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      {/* Hero section wrapper */}
      <div className="relative h-[303px] w-full rounded-[20px] overflow-hidden">
        {/* Desktop/Tablet background image */}
        <Image
          src="/images/hero-background.jpg"
          alt="Hero background"
          width={1920}
          height={1080}
          className="hidden h-full w-full object-cover md:block"
        />

        {/* Mobile background color */}
        <div className="h-full w-full bg-gray-800 md:hidden"></div>

        {/* Overlay content (same for both mobile & desktop) */}
        <div className="absolute inset-0 flex flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
