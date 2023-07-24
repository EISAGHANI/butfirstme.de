export default function login_validate(values) {
    const errors = {}
    if (!values.email) {
        errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid"
    }
    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 6) {
        errors.password = "Password must be more than 6 characters"
    }
        
    return errors
}

export function registerValidate(values) {   
    const errors = {};
    if (!values.firstName) {
        errors.firstName = "required"
    }
    if (!values.lastName) {
        errors.lastName = "required"
    }
    if (!values.email) {
        errors.email = "required"
    }
    if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "invalid"
    }
    if (!values.password) {
        errors.password = "required"
    }
    if (values.password.length < 6) {
        errors.password = "must be more than 6 characters"
    }
    return errors
}