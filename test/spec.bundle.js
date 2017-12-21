// require all modules follwing spec pattern
// pass `true` for recursive
let context = require.context("../src", true, /\.spec\.(js|jsx)$/);

context.keys().forEach(context);

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });
