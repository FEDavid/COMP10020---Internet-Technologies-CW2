// Page component for the Teams page
import { ReadAll } from './actions/server/read';
import { NewComment } from './actions/server/create';
import AddCommentForm from './actions/client/AddComment';

export default function Teams() {
    return (
        <section>
            {/* View comments */}
            <div id="viewComments">
                <ReadAll />
            </div>
            {/* Add Comment Form */}
            <div id="addComments" className='mt-8'>
                <AddCommentForm />
            </div>
        </section>
    );
}