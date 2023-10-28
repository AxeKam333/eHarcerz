import { Form } from "antd";

interface AddFormProps {
    form: any;
    children: any;
}

export function AddForm(props: AddFormProps) {

    return (<>
    <Form form={props.form}>
        {props.children}
    </Form>
    </>)
}