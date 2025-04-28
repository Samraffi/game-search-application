import { DataProvider } from 'react-admin';

import { getList } from './getList';
import { getOne } from './getOne';
import { getMany } from './getMany';
import { getManyReference } from './getManyReference';
import { update } from './update';
import { updateMany } from './updateMany';
import { create } from './create';
import { deleteOne } from './deleteOne';
import { deleteMany } from './deleteMany';

export const dataProvider: DataProvider = {
  getList,
  getOne,
  getMany,
  getManyReference,
  update,
  updateMany,
  create,
  delete: deleteOne,
  deleteMany,
};
