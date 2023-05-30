//Node.js 18 introduced an experimental test runner which is now stable in version 20. 
import { test, mock } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';

test('my first test', (t) => {
  assert.strictEqual(1, 1);
});

test('my second test', (t) => {
  assert.strictEqual(1, 2);
});

// asynchronous test with mocking
mock.method(fs, 'readFile', async () => 'Node.js test');
test('my third test', async (t) => {
  assert.strictEqual( await fs.readFile('anyfile'), 'Node.js test' );
});