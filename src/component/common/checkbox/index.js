import {useField } from 'formik';
import classnames from "classnames";

const Checkbox = ({ children, ...props }) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
      <div className="form-check mt-4 border border-3 border-dark rounded p-4" style={{height: 90+"px"}}>
        <input type="checkbox" className={classnames("form-check-input",
                                              {"is-invalid": meta.touched && meta.error},
                                              {"is-valid": meta.touched && !meta.error}) + " m-1"}
                                {...field} {...props}/> 
        <label className="form-check-label" htmlFor={props.id || props.name}>
            {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="invalid-feedback">
              {meta.error}
          </div> 
        ) : null}
      </div>
    );
  };

export default Checkbox;