import { Drivers, Storage } from '@ionic/storage';

const storage = new Storage({
  name: '__propuestaS2',
  driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
});
storage.create();

export default storage;
