import React from 'react'

function Container({children, clasname}) {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 ${clasname}`}>
      {children}
    </div>
  )
}

export default Container
