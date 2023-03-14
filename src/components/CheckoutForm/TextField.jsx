import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

export default function FormInput({ name, label, required }) {
    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                control={control}
                defaultValue=""//used for uncontrolled form components
                name={name}
                render={({ field }) => <TextField {...field} fullWidth label={label} required={required} />}//required is used for error checking to ensure fields are entered, label refers to the field name.
            />
        </Grid>
    );
}

