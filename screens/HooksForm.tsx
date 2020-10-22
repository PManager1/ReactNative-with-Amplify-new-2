import React from "react";
import { useForm } from "react-hook-form";
    

export default function HooksForm(props) {
  console.log(' 6- in HooksForm -- props =', props );

      const { register, handleSubmit } = useForm({
        // defaultValues: preloadedValues
      });

      const onSubmit = (data) => {
        alert(JSON.stringify(data));
      };
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            ref={register}
            placeholder="Company Name"
            defaultValue={props.route.params.item.companyName} 
            type="text"
            name="companyName"
          />
          <input
            ref={register}
            placeholder="executive FirstName"
            defaultValue={props.route.params.item.executiveFirstName}
            type="text"
            name="executiveFirstName"
          />
          <button>Submit</button>
        </form>
      );
    }
    