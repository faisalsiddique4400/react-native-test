import { StyleSheet } from 'react-native';
import { moderateScale,scale, verticalScale } from 'react-native-size-matters';
import { FONTS_STYLE } from '../../shared/themes';

const styles = colors =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors?.secondary,
          },
        
          flatListContainer: {
            paddingHorizontal: scale(20),
            paddingVertical: moderateScale(15),
          },
          heading: [
            
            FONTS_STYLE.HEADER,
            {
              marginVertical:verticalScale(5),
              textAlign:'center',
              color: colors.black,
            },
          ],
    })

    export default styles