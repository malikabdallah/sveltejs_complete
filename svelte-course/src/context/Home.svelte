<script>
    import Button from "../lib/Button.svelte";
    import Field from "./Field.svelte";
    import Form from "./Form.svelte";
    import {validateRequiredField, validateEmail} from "./validation";

    alert("home");
</script>


<Form on:submit="{(e)=>{
    console.log("e "+JSON.stringify(e.detail))

}}" initialValue={{n:'Test',password:'test',email:'test@gamil.com'}}>
    <Field label="username" name="username" type="text" validate={validateRequiredField}/>
    <Field label="email" name="email" type="email" validate={(value,label)=>{
        return validateEmail(value,label) && validateRequiredField(value,label)
    }}/>
    <Field label="password" name="password" type="password" validate={validateRequiredField}/>
    <Button type="submit">Submit</Button>

</Form>


