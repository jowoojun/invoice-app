import { enableES5, produce } from 'immer';

const utilProduce = (...args) => {
  enableES5();
  return produce(...args);
};

export default utilProduce;