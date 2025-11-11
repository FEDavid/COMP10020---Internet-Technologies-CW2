// Page component for the Events page
import { ReadAll } from './server/read';

export default function Events() {
    return (
        <section>
            {/* View events */}
            <ReadAll />
        </section>
    );
}