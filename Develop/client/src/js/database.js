import { openDB } from 'idb';

const initdb = async () => 
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  const connect = await openDB('jate', 1);
  const action = connect.transaction('jate', 'readwrite');
  const open = action.objectStore('jate');
  const request = open.put({ value: content });
  const confirm = await request.done;
  console.log('The data was saved to the db', confirm);
};

export const getDb = async () => {
  const connect = await openDB('jate', 1);
  const action = connect.transaction('jate', 'readonly');
  const open = action.objectStore('jate');
  const request = open.getAll();
  const confirm = await request.done;
  console.log('confirm.value', confirm);
  return confirm;
};

initdb();

