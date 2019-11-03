$(function () {

    $('.date-time').mask('00/00/0000 00:00:00');
    $('.time').mask('00:00:00');

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $("#newFastEvent").click(function () {

        clearMessages('.message');
        resetForm("#formFastEvent");
        $("#modalFastEvent input[name='id']").val('');

        showModalCreateFastEvent = true;

        $('#modalFastEvent').modal('show');
        $("#modalFastEvent #titleModal").text('Criar Evento Rápido');
        $("#modalFastEvent button.deleteFastEvent").css("display","none");
    });


    $(document).on('click','.event', function () {

        clearMessages('.message');
        resetForm("#formFastEvent");

        showModalUpdateFastEvent = true;

        let Event = JSON.parse($(this).attr('data-event'));

        $('#modalFastEvent').modal('show');
        $("#modalFastEvent #titleModal").text('Alterar Evento Rápido');
        $("#modalFastEvent button.deleteFastEvent").css("display","flex");

        $("#modalFastEvent input[name='id']").val(Event.id);
        $("#modalFastEvent input[name='title']").val(Event.title);
        $("#modalFastEvent input[name='start']").val(Event.start);
        $("#modalFastEvent input[name='end']").val(Event.end);
        $("#modalFastEvent input[name='color']").val(Event.color);

    });

    $(".saveFastEvent").click(function () {

        let id = $("#modalFastEvent input[name='id']").val();

        let title = $("#modalFastEvent input[name='title']").val();

        let start = $("#modalFastEvent input[name='start']").val();

        let end = $("#modalFastEvent input[name='end']").val();

        let color = $("#modalFastEvent input[name='color']").val();

        let Event = {
            title: title,
            start: start,
            end: end,
            color: color,
        };

        let route;

        if(id == ''){
            route = routeEvents('routeFastEventStore');
        }else{
            route = routeEvents('routeFastEventUpdate');
            Event.id = id;
            Event._method = 'PUT';
        }

        sendEvent(route,Event);

    });


    $(".deleteFastEvent").click(function () {

        let id = $("#modalFastEvent input[name='id']").val();


        let Event = {
            id: id,
            _method: 'DELETE'
        };

        let route = routeEvents('routeFastEventDelete');

        showModalUpdateFastEvent = true;
        sendEvent(route,Event);

        $(`#boxFastEvent${id}`).remove();

    });


    $(".deleteEvent").click(function () {

        let id = $("#modalCalendar input[name='id']").val();

        let Event = {
            id: id,
            _method: 'DELETE'
        };

        let route = routeEvents('routeEventDelete');

        sendEvent(route,Event);

    });

   $(".saveEvent").click(function () {

       let id = $("#modalCalendar input[name='id']").val();

       let title = $("#modalCalendar input[name='title']").val();

       let start = moment($("#modalCalendar input[name='start']").val(),"DD/MM/YYYY HH:mm:ss").format("YYYY-MM-DD HH:mm:ss");

       let end = moment($("#modalCalendar input[name='end']").val(),"DD/MM/YYYY HH:mm:ss").format("YYYY-MM-DD HH:mm:ss");

       let color = $("#modalCalendar input[name='color']").val();

       let description = $("#modalCalendar textarea[name='description']").val();

       let Event = {
           title: title,
           start: start,
           end: end,
           color: color,
           description: description,
       };

       let route;

       if(id == ''){
           route = routeEvents('routeEventStore');
       }else{
           route = routeEvents('routeEventUpdate');
           Event.id = id;
           Event._method = 'PUT';
       }

       sendEvent(route,Event);

   });


});

let objCalendar;
let showModalUpdateFastEvent = false;
let showModalCreateFastEvent = false;

function sendEvent(route, data_) {

    $.ajax({
        url: route,
        data: data_,
        method: 'POST',
        dataType: 'json',
        success: function (json) {

            if (json) {
                objCalendar.refetchEvents();
                $("#modalCalendar").modal('hide');
            }

            if(showModalUpdateFastEvent === true){
                showModalUpdateFastEvent = false;
                $("#modalFastEvent").modal('hide');

                let stringJson = `{"id":"${data_.id}","title":"${data_.title}","color":"${data_.color}","start":"${data_.start}","end":"${data_.end}"}`;

                $(`#boxFastEvent${data_.id}`).attr('data-event', stringJson);
                $(`#boxFastEvent${data_.id}`).text(data_.title);
                $(`#boxFastEvent${data_.id}`).css({
                    "backgroundColor": `${data_.color}`,
                    "border": `1px solid ${data_.color}`});

            }

            if(showModalCreateFastEvent === true){
                showModalCreateFastEvent = false;
                $("#modalFastEvent").modal('hide');

                let stringJson = `{"id":"${json.created}","title":"${data_.title}","color":"${data_.color}","start":"${data_.start}","end":"${data_.end}"}`;

                let newEvent = `<div id="boxFastEvent${json.created}"
                        style="padding: 4px; border: 1px solid ${data_.color}; background-color: ${data_.color}"
                        class='fc-event event text-center'
                        data-event='${stringJson}'>
                        ${data_.title}
                    </div>`;
                $('#external-events-list').append(newEvent);

            }
        },
        error:function (json) {

            let responseJSON = json.responseJSON.errors;

            $(".message").html(loadErrors(responseJSON));
        }
    });
}

function loadErrors(response) {

    let boxAlert = `<div class="alert alert-danger">`;

    for (let fields in response){
        boxAlert += `<span>${response[fields]}</span><br/>`;
    }

    boxAlert += `</div>`;

    return boxAlert.replace(/\,/g,"<br/>");
}

function routeEvents(route) {
    return document.getElementById('calendar').dataset[route];
}

function clearMessages(element){
    $(element).text('');
}
function resetForm(form){
    $(form)[0].reset();
}
