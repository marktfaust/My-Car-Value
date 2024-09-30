import { rm } from 'fs/promises';
import { join } from 'path';

global.beforeEach(async () => {
  /* Deletes test databases that are created during test runs before execution of next test. 
  This way, can run "signup" or similar test without having to change hardcoded test email each time! */ 
  try {
    await rm(join(__dirname, '..', 'test.sqlite'));
  } catch (err) {
    /* Don't throw error if test.sqlite file does not already exist */
  }
});
