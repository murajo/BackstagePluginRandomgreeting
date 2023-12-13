import { randomgreetingPlugin } from './plugin';

describe('randomgreeting', () => {
  it('should export plugin', () => {
    expect(randomgreetingPlugin).toBeDefined();
  });
});
