import React from 'react'
//import {Spinner} from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
function Spinners() {
  return (
    <div className='col-lg-5 col-md-5 col-sm-6'>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <p>
            <Skeleton count={5} height = {250} width = {300} />
        </p>
    </SkeletonTheme>
    {/* <div style={{display:"flex",
alignItems:"center",
justifyContent:"center"
}}>
<Spinner animation="grow" role="status" style={{
width: "50px",
height: "50px",
marginTop:"20px"
}}>
<span className="visually-hidden">Loading...</span>
</Spinner>
<Spinner animation="grow" role="status" style={{
width: "50px",
height: "50px",
marginTop:"20px"
}}>
<span className="visually-hidden">Loading...</span>
</Spinner>
</div> */}
    </div>
  )
}


export default Spinners