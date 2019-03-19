import { MyModModule } from './my-mod.module';

describe('MyModModule', () => {
  let myModModule: MyModModule;

  beforeEach(() => {
    myModModule = new MyModModule();
  });

  it('should create an instance', () => {
    expect(myModModule).toBeTruthy();
  });
});
