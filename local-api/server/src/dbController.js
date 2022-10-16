import { LowSync, JSONFileSync } from 'lowdb';

const adapter = new JSONFileSync('./src/db.json');
const db = new LowSync(adapter);

export default db;

// const basePath = resolve();
//
// const filenames = {
//   messages: resolve(basePath, 'src/db/messages.json'),
//   users: resolve(basePath, 'src/db/users.json')
// }
//
// export const readDB = target => {
//   try {
//     return JSON.parse(fs.readFileSync(filenames[target], 'utf-8'));
//   }catch (e) {
//     console.error(e);
//   }
// }
//
// export const writeDB = (target, data) => {
//   try {
//     return fs.writeFileSync(filenames[target], JSON.stringify(data))
//   }catch (e) {
//     console.error(e);
//   }
// }
