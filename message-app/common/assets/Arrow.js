import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = ({props, color}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M0 10.008c.008.878.362 1.717.984 2.335l7.155 7.172a1.668 1.668 0 1 0 2.352-2.368l-5.487-5.471h16.678a1.668 1.668 0 0 0 0-3.336H5.004l5.487-5.487A1.668 1.668 0 1 0 8.139.485L.984 7.656A3.336 3.336 0 0 0 0 10.008Z"
    />
  </Svg>
)
export default SvgComponent
