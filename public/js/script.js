$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

// Show Data
$('body').on('click', '.btn-show', function (e) {
    e.preventDefault();

    var url = $(this).attr('href');

    $.ajax({
        url: url,
        dataType: 'html',
        type: 'GET',
        success: function (response) {
            $('.modal-body').html(response);
        }
    })

    $('#modal').modal('show');
    $('#btn-save').hide();


})

$('body').on('click', '#btn-create', function (e) {
    e.preventDefault();

    var url = $(this).attr('href');

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'html',
        success: function (response) {
            $('.modal-body').html(response);
        }
    })

    $('#modal').modal('show');
    $('#btn-save').show();
})

// Store Create Data
$('body').on('click', '#btn-save', function (e) {
    e.preventDefault();

    var form = $('.modal-body form'),
        url = $('.modal-body form').attr('action'),
        name = $('#name').val(),
        email = $('#email').val(),
        token = $('meta[name="csrf-token"]').attr('content');
        password = $('#password').val();

    $.ajax({
        url: url + '?_token=' + token,
        type: 'POST',
        data: new FormData(form[0]),
        contentType: false,
        processData: false,
        success: function (response) {
            if (response.message === 'stored') {
                swal({
                    type: 'success',
                    title: 'Success',
                    text: 'Data has been added',
                    showConfirmButton: false,
                    timer: 3000
                })
            }
        }
    })

    $('#modal').modal('hide');
    $('#table-user').DataTable().ajax.reload();
})

// Edit function
// $('body').on('click', '.modal-show', function (e) {
//     e.preventDefault();

//     var url = $(this).attr('href');

//     $.ajax({
//         url: url,
//         type: 'GET',
//         dataType: 'html',
//         success: function (response) {
//             $('.modal-body').html(response);
//         }
//     })

//     $('#modal').modal('show');
//     $('#btn-save').text('Update');
// });

// // Update function
// $('body').on('click', '#btn-save', function (e) {
//     e.preventDefault();

//     var form = $('.modal-body form'),
//         url = form.attr('action');

//     $.ajax({
//         url: url,
//         type: 'POST',
//         data: new FormData(form[0]),
//         contentType: false,
//         processData: false,
//         success: function (response) {
//             swal({
//                 type: 'success',
//                 text: 'Data has been updated !',
//                 showConfirmButton: false,
//                 timer: 3000,
//             })

//         }
//     })
//     $('#modal').modal('hide');
//     $('#table-user').DataTable().ajax.reload();
// })


// Delete Function
$('body').on('click', '.btn-delete', function (e) {
    e.preventDefault();

    var url = $(this).attr('href'),
        token = $('meta[name="csrf-token"]').attr('content');

    swal({
        type: 'warning',
        text: 'Are You Sure to Delete It ?',
        confirmButtonColor: '#FF0000',
        confirmButtonText: 'Yes, delete it !',
        showCancelButton: true,
        cancelButtonColor: '#C0C0C0'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                url: url,
                type: 'POST',
                data: {
                    '_method': 'DELETE',
                    '_token': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (response) {
                    swal({
                        type: 'success',
                        text: 'Delete Successfull !',
                        showConfirmButton: false,
                        timer: 3000,
                    })

                }
            })
            $('#table-user').DataTable().ajax.reload();
        }
    })

})
