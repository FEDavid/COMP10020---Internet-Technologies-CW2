'use client';

export default function EventsList({ events }: { events: any[] }) {

    return (
        <div id="viewEvents">
            <h1 className="text-3xl font-bold underline mb-4">View Events</h1>
            <ul className="grid gap-4">
                {events.map((row, i) => (
                    <li
                        key={row.id ?? i}
                        className="p-2 bg-gray-700 rounded-lg grid grid-cols-[1fr_auto] items-center gap-2"
                    >
                        <span>{row.event_date.toDateString()}: {row.event_desc}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
