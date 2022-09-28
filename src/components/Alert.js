import React from 'react'

export default function Alert(props) {
    const capatilize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
  <div style={{height: '55px'}}>  { props.alert && <div class={`alert alert-${props.alert.mode} alert-dismissible fade show width-100" role="alert`}>
<strong> {capatilize(props.alert.mode)}</strong> {props.alert.msg}
   
  </div>}
</div>
   
  )
}
