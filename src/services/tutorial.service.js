import { getDatabase, ref, push, update, remove } from 'firebase/database';
import { database } from '../firebase'; // Assuming this imports your Firebase configuration

const db = getDatabase(database);

class TutorialDataService {
 getAll() {
    return ref(db, '/tutorials');
 }

 create(tutorial) {
    return push(ref(db, '/tutorials'), tutorial);
 }

 update(key, value) {
    return update(ref(db, `/tutorials/${key}`), value);
 }

 delete(key) {
    return remove(ref(db, `/tutorials/${key}`));
 }

 deleteAll() {
    return remove(ref(db, '/tutorials'));
 }
}

export default new TutorialDataService();
