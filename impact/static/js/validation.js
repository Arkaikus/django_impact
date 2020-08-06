(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    /*
                    $(form).find('.select2').toArray()
                        .forEach(function (elem) {
                            $(elem).next('.select2-container').toArray()
                                .forEach(function (container) {
                                    if(!$(elem).val()){
                                        $(container).addClass('has-danger');
                                        $(container).next('.invalid-feedback').addClass('d-block')
                                    }else {
                                        $(container).removeClass('has-danger');
                                        $(container).addClass('has-success');
                                        $(container).next('.invalid-feedback').removeClass('d-block')
                                    }
                                });
                        });
                     */
                    Swal.fire({
                        type:'error',
                        title:'<strong style="color:#dc3545;">Por favor complete los campos del formulario</strong>',
                        position:'bottom-right',
                        toast:true,
                        showConfirmButton: false,
                        timer:2000
                    });
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

/*
$(document).ready(function(){
    $.fn.select2.defaults.set( "theme", "bootstrap" );
    $.fn.select2.defaults.set( "language", "es" );

    $('.select2').select2({width: '100%'});
    $(".csvdrop").dropify({
        error:{"fileExtension":"Solo los siguientes formatos de archivo están permitidos: (.csv)."},
        messages: {
            'default': 'Arrastre y suelte un archivo o haga click aquí',
            'replace': 'Arrastre y suelte un archivo o haga click aquí para reemplazar',
            'remove':  'Eliminar',
            'error':   'Ha ocurrido un error'
        }});
    $(".imgdrop").dropify({
        error:{"fileExtension":"Solo los siguientes formatos de archivo están permitidos: (.png, .jpg)."},
        messages: {
            'default': 'Arrastre y suelte un archivo o haga click aquí',
            'replace': 'Arrastre y suelte un archivo o haga click aquí para reemplazar',
            'remove':  'Eliminar',
            'error':   'Ha ocurrido un error'
        }});
    var selects = document.getElementsByClassName('select2');
    Array.prototype.filter.call(selects, function(select) {
        $(select).on('change',function(){
            $(select).next('.select2-container').toArray()
                .forEach(function (container) {
                    if(!$(select).val()){
                        $(container).removeClass('has-success');
                        $(container).addClass('has-danger');
                        $(container).next('.invalid-feedback').addClass('d-block')
                    }else {
                        $(container).removeClass('has-danger');
                        $(container).addClass('has-success');
                        $(container).next('.invalid-feedback').removeClass('d-block')
                    }
                });
        });
    });
});
*/