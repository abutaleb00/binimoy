$(document).ready(function() {
    $('#signupForm')
        .bootstrapValidator({
            message: 'This value is not valid',
            //live: 'submitted',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    }
					}
				},
				lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required and cannot be empty'
                    }
                }
				},
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required and can\'t be empty'
                        }
                    }
                },
				mobilePhone: {
                    validators: {
                        notEmpty: {
                            message: 'The mobile phone number is required'
                        },
                        digits: {
                            field: 'mobilePhone',
                            message: 'The mobile phone number is not valid! Only number'
                        },
                    }
                },
				email: {
                    validators: {
                        notEmpty: {
                            message: 'The email address is required and can\'t be empty'
                        },
                        emailAddress: {
                            message: 'The input is not a valid email address'
                        }
                    }
                },
				confirmPassword: {
                    validators: {
                        notEmpty: {
                            message: 'The confirm password is required and cannot be empty'
                        },
                        identical: {
                            field: 'password',
                            message: 'The password and its confirm are not the same'
                        },
                        different: {
                            field: 'mobilePhone',
                            message: 'The password cannot be the same as Phone Number'
                        }
                    }
                }
            }
        })
});