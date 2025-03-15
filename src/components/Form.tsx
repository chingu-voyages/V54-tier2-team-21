import { Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form"
import { Inputs } from "../types";

const Form = ({onFormSubmit}) => {

    const {
        register,
        handleSubmit,
      } = useForm<Inputs>();
    //   watch,
    //   formState: { errors },
    const onSubmit: SubmitHandler<Inputs> = (data) => onFormSubmit(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
           <TextField id="persona" label="Persona" variant="outlined" {...register("persona")} sx={{ m: 2 }}/>
          </div>
          <div>
            <TextField id="context" label="Context" variant="outlined"  {...register("context")} sx={{ m: 2 }}/>
          </div>
          <div>
            <TextField id="task" label="Task" variant="outlined"  {...register("task")} sx={{ m: 2 }}/>
          </div>
          <div>
            <TextField id="output" label="Output" variant="outlined"  {...register("output")} sx={{ m: 2 }}/>
          </div>
          <div>
            <TextField id="constraint" label="Constraint" variant="outlined"  {...register("constraint")} sx={{ m: 2 }}/>
          </div>
          <Button variant="contained" type="submit">Generate</Button>
        </form>
    )
}

export default Form;