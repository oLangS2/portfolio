import React from 'react'

const ModalSkeleton = () => {
  return (
    <div className="skel">
      <div className="skeleton" style={{ width: '60%', height: '30px', marginBottom: '38px' }}></div>
      <div className="skeleton" style={{ width: '100%', height: '70px', marginBottom: '30px' }}></div>
      <div className="skeleton" style={{ width: '60%', height: '45px', marginBottom: '10px' }}></div>
      <div className="skeleton" style={{ width: '60%', height: '45px', marginBottom: '100px' }}></div>
      <div className="skeleton" style={{ width: '30%', height: '25px', marginBottom: '10px' }}></div>
      <div className="skeleton" style={{ width: '100%', height: '100px', marginBottom: '10px' }}></div>
      <div className="skeleton" style={{ width: '100%', height: '100px' }}></div>
    </div>
  )
}

export default ModalSkeleton;