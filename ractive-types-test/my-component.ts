import Ractive, { InitOpts } from 'ractive';

export class MyComponent extends Ractive {
  constructor(opts?: InitOpts) { super(opts); }

  myFeature() {
    console.info('MyComponent.myFeature');
  }
}

Ractive.extendWith(MyComponent, {
  template: 'hello!',

  on: {
    asd() {
      this.myFeature();
    }
  }
});
