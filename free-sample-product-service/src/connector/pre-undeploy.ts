import dotenv from 'dotenv';
dotenv.config();

import { assertError } from '../utils/assert.utils';
import { deleteCartUpdateExtension, deleteChannelAndInventory } from './actions';

async function preUndeploy(): Promise<void> {
  await deleteChannelAndInventory();
  await deleteCartUpdateExtension();
}

export async function run(): Promise<void> {
  try {
    await preUndeploy();
  } catch (error) {
    assertError(error);
    process.stderr.write(`Pre-undeploy failed: ${error.message}`);
    process.exitCode = 1;
  }
}

run();
