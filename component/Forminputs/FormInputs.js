
import React, { Component } from "react";

function FieldGroup({ label, ...props }) {

  var inputel= <input className={props.bsClass +" w-full"} type={props.type} placeholder={props.placeholder} value={props.defaultValue} /> ;
  if(props.disabled){
        inputel= <input className={props.bsClass +" w-full"} type={props.type} placeholder={props.placeholder} value={props.defaultValue} disabled/> ;
  }else if(props.multiple){
    inputel= <input className={props.bsClass +" w-full"} type={props.type} placeholder={props.placeholder} value={props.defaultValue} multiple/> ;

  }else{
    inputel= <input className={props.bsClass +" w-full"} type={props.type} placeholder={props.placeholder} value={props.defaultValue} /> ;
  }


  return (
    <div className="form-group ">
      <label>{label}</label><br />
      {inputel}
    </div>
  );
}

export class FormInputs extends Component {
  render() {
    var row = [];
    for (var i = 0; i < this.props.ncols.length; i++) {
      row.push(
        <div key={i} className={this.props.ncols[i]+ " col-span-12"}>
          <FieldGroup {...this.props.properties[i]} />
        </div>
      );
    }
    return <div className="grid grid-cols-12 gap-3 mb-4">{row}</div>;
  }
}

export default FormInputs;
