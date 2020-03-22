import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

// Reactotron.setAsyncStorageHandler() // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
//   .configure() // controls connection & communication settings
//   .useReactNative() // add all built-in react native plugins
//   .connect(); // let's connect!

const reactotron = Reactotron.configure({
  name: 'React Native Demo',
})
  .use(reactotronRedux())
  .connect();
export default reactotron;
