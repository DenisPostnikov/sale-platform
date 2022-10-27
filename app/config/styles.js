import { Platform} from "react-native";

import colors from './color';

export default {
  text: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    fontSize: 18,
    color: colors.dark,
  }
}
