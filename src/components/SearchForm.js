import React, { Component } from 'react';
import { Form, Field } from 'react-form-field';

class SearchForm extends Component {
  render() {
    let doSomething = () => {

    }
    return (
      <Form onSubmit={doSomething}>
        <Field
          defaultValue=""
          validate={val => val ? undefined : 'Come on! Drop a URL 😛'}
        >
          {({ touched, touch, update, error, value }) =>
            <div>
              <input
                type="text"
                onChange={update} // update value and touch field
                onBlur={touch} // touch field
                value={value}
              />

              {touched && error &&
                <p style={{ color: 'red' }}>{error}</p>
              }
            </div>
          }
        </Field>
      </Form>
    );
  }
}

export default SearchForm;
