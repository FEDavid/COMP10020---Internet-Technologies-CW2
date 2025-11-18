export default function About() {
return (
    <div className="min-h-screen flex flex-col items-center bg-[var(--background)] text-[var(--foreground)] px-4">

    <h1 className="text-5xl font-bold mt-12 text-center text-[#43619f]">About</h1>

    <div className="flex-1 flex items-center justify-center w-full">
        <div className="p-8 rounded-xl shadow-lg max-w-2xl text-center bg-[#43619f] text-white">
        <p className="text-lg leading-relaxed">
            This website has been created for the Paisley Highland Games as part of the second coursework for the Internet Technologies course. 
            The site has been developed by <strong>David Mould</strong> and <strong>Lea-Line Saad</strong>, providing information about events, teams, and contact details. 
            Our goal is to give visitors a clear and enjoyable experience while exploring the highlights of the Highland Games.
        </p>
        </div>
    </div>
    </div>
);
}
