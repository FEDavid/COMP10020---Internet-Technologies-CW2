import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-2 bg-(--background) h-full w-full">
      <h1 className="text-4xl font-bold mb-6 text-[#43619f]">
        Welcome to the Paisley Highland Games!
      </h1>
      <p className="text-lg text-center max-w-2xl mb-8 text-gray-700 dark:text-gray-300">Experience the thrill of traditional Scottish sports, music, and culture right here in Paisley. Join us for a day filled with excitement, camaraderie, and unforgettable memories!
      </p>
      <div className="relative w-full h-64 sm:h-96">
      <Image
        src="/media/View_of_Paisley_from_Saucelhill_Park,_Renfrewshire.jpg"
        alt="Paisley Highland Games"
        fill={true}
        className="object-none"
      />
      <p>By <a href="//commons.wikimedia.org/wiki/User:Rosser1954" title="User:Rosser1954">Rosser1954</a> - <span className="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=84180765">Link</a></p>
      </div>

      <h2 className="text-4xl font-bold mb-4 mt-8 text-[#43619f]">
        Upcoming Events
      </h2>

      <div className="flex flex-row justify-center gap-4 mb-10 w-full max-w-4xl">

  <div className="relative w-1/3 h-48">
    <Image
      src="/media/pipe-band-marching-at-the-ballater-highland-games.jpg"
      alt="Event 1"
      fill
      className="object-cover rounded-lg"
    />
    <p className="text-xs text-center mt-1 text-gray-600">
      Source: <a href="https://www.visitscotland.com/things-to-do/events/highland-games" target="_blank" rel="noopener noreferrer" className="underline">VisitScotland</a>
    </p>
  </div>


  <div className="relative w-1/3 h-48">
    <Image
      src="/media/first-game-photo.jpg"
      alt="Event 2"
      fill
      className="object-cover rounded-lg"
    />
    <p className="text-xs text-center mt-1 text-gray-600">
      Source: <a href="https://menskiltoutfit.com/top-10-highland-games-in-the-usa/" target="_blank" rel="noopener noreferrer" className="underline">MensKiltOutfit</a>
    </p>
  </div>


  <div className="relative w-1/3 h-48">
    <Image
      src="/media/second-game-photo.jpg"
      alt="Event 3"
      fill
      className="object-cover rounded-lg"
    />
    <p className="text-xs text-center mt-1 text-gray-600">
      Source: <a href="https://scotlandshotel.com/attractions/pitlochry-highland-games/" target="_blank" rel="noopener noreferrer" className="underline">ScotlandHotel</a>
    </p>
  </div>
</div>

    </section>
  );
}
