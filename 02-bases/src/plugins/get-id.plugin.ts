import { v4 as uuidv4 } from 'uuid';
// import * as uuidv4 from 'uuid/v4';

export const getUUID = () => {
  return uuidv4();
};
