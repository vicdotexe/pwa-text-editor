import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('documents')) {
        console.log('document database already exists');
        return;
      }
      db.createObjectStore('documents', { keyPath: 'id', autoIncrement: true });
      console.log('document database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {

  const db = await openDB('jate');
  const tx = db.transaction('documents', 'readwrite');
  const store = tx.objectStore('documents');
  console.log('storing content', content)
  await store.put({id:1, text:content});
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const db = await openDB('jate');
  const tx = db.transaction('documents', 'readonly');
  const store = tx.objectStore('documents');
  const result = await store.get(1);
  console.log('getting result', result)
  return result ? result.text : undefined;
};

initdb();
