import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-2 bg-(--background) h-full">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
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
    </section>
  );
}
