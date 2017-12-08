import { BModule } from './b.module';

describe('AModule', () => {
  it('should work', () => {
    expect(new BModule()).toBeDefined();
  });
});
