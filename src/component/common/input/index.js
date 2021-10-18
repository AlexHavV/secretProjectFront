import {useField } from 'formik';
import classnames from "classnames";
import bootstrap from 'bootstrap'

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className="mt-4 border border-3 border-dark rounded p-4" style={{height: 150+"px"}}>
        <label htmlFor={props.id || props.name} className="form-label">{label}</label>
        <input className={classnames("form-control",
                                              {"is-invalid": meta.touched && meta.error},
                                              {"is-valid": meta.touched && !meta.error})} {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="invalid-feedback">
              {meta.error}
          </div> 
        ) : null}
      </div>
    );
  };

  export default TextInput;