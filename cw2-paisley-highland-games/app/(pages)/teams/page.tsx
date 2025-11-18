// Page component for the Teams page
import { ReadAll } from './actions/server/read';
import AddTeamForm from './actions/client/AddTeam';

export default async function Teams() {
    return (
        <section>
            {/* Add Team Form */}
            <div id="addTeams" className='mt-8'>
                <AddTeamForm />
            </div>
            {/* View teams */}
            <div id="viewTeams">
                {await ReadAll()}
            </div>
        </section>
    );
}