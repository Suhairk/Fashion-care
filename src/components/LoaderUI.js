import { BoxesLoader ,ScatterBoxLoader,BookLoader,XlviLoader } from "react-awesome-loaders"

import '../components/compStyles/LoaderUI.css'
const LoaderUI = () => (
  <div className = "loader-class" >
    <XlviLoader
    boxColors={["#EF4444", "#F59E0B", "#6366F1"]}
    desktopSize={"128px"}
    mobileSize={"80px"} 
    />
    
  </div>
)

export default LoaderUI