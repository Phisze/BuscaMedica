  $(document).ready(function() {
  
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                     notEmpty: {
                        message: 'Por favor informe seu nome completo'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Por favor informe seu e-mail'
                    },
                    emailAddress: {
                        message: 'Por favor informe seu e-mail'
                    }
                }
            },
            crm: {
                validators: {
                    notEmpty: {
                        message: 'Por favor informe o números de CRM'
                    },
                    regexp: {
                        regexp: '^[0-9]',
                        message: 'Por favor digite apenas números'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Por favor informe seu numero de telefone'
                    },
                    /*regexp: {
                        regexp: '/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/',
                        message: 'Por favor digite apenas números'
                    }*/
                   phone: {
                        country: 'BR',
                        message: 'Por favor informe um numero de telefone com DD'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Por favor informe nome da estado'
                    }
                }
            },
            city: {
                validators: {
                    notEmpty: {
                        message: 'Por favor informe nome da cidade'
                    }
                }
            },
            neighborhood: {
                validators: {
                     notEmpty: {
                        message: 'Por favor informe nome do bairro'
                    }
                }
            },
            street: {
                validators: {
                     notEmpty: {
                        message: 'Por favor informe nome da rua'
                    }
                }
            },
            number: {
                validators: {
                     notEmpty: {
                        message: 'Por favor informe número'
                    },
                regexp: {
                        regexp: '^[0-9]',
                        message: 'Por favor digite apenas números'
                    }
                }
            },
            cep: {
                validators: {
                    notEmpty: {
                        message: 'Por favor informe O CEP'
                    },
                    regexp: {
                        regexp: '^\\d{5}[-]\\d{3}$',
                        message: 'O CEP contém 8 digitos'
                    }
                }
            },
            plan: {
                validators: {
                    notEmpty: {
                        message: 'Por favor informe do plano de saúde'
                    }
                }
            },
            provedor: {
                validators: {
                    notEmpty: {
                        message: 'Por favor informe o provedor'
                    }
                }
            },
            titulo: {
                validators: {
                    notEmpty: {
                        message: 'Por favor informe o seu título'
                    }
                }
            },
            facul: {
                validators: {
                    notEmpty: {
                        message: 'Por favor informe o seu faculdade'
                    }
                }
            },
            area: {
                validators: {
                    notEmpty: {
                        message: 'Por favor informe o sua area de atuação'
                    }
                }
            },
            date: {
                validators: {
                    date: {
                        format: 'MM/YYYY',
                         min: '01/1800',
                        max: '12/2020',
                        message: 'Não é uma data válida'
                    },
                 notEmpty: {
                        message: 'Por favor informe o uma data válida'
                    }
                }
            },
            time: {
                validators: {
                     notEmpty: {
                        message: 'Por favor informe um horario válido'
                    }
                }
            },
           }
        })
        .on('success.form.bv', function(e) {
            alert("Cadastrado com sucesso");
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});

$(document).ready(function() {
        var campos_max = 10;   //max de 10 campos
        var x = 1; // campos iniciais
        $('#add_field').click(function(e) {
                e.preventDefault();     //prevenir novos clicks
                if (x < campos_max) {
                        $('#origem').append('<input name="plan" placeholder="Plano de Saúde" class="form-control"  type="text">');
                        $('#origem1').append('<input name="provedor" placeholder="Provedor" class="form-control"  type="text">');
                        $('#origem2').append('<input name="desconto" placeholder="Desconto" class="form-control"  type="text">');
                        x++;
                }
           });
       });