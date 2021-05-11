import {Dimensions} from 'react-native';
import {DEFAULT_WINDOW_WIDTH} from '../constants';

const width = Dimensions.get('window').width;
const toNormalSize = n => (width * n) / DEFAULT_WINDOW_WIDTH;

export default toNormalSize;
