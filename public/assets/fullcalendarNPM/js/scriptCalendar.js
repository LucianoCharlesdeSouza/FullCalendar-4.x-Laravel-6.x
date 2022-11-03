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

document.addEventListener('DOMContentLoaded', function() {
    var Calendar = FullCalendar.Calendar;
    var Draggable = FullCalendarInteraction.Draggable

    /* initialize the external events
    -----------------------------------------------------------------*/

    var containerEl = document.getElementById('external-events-list');
    new Draggable(containerEl, {
        itemSelector: '.fc-event',
    });


    /* initialize the calendar
    -----------------------------------------------------------------*/

    var calendarEl = document.getElementById('calendar');
    var calendar = new Calendar(calendarEl, {
        plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        // validRange: {
        //     start: '2022-08-01',
        //     end: '2022-08-10'
        // },
        navLinks: true,
        locale: 'pt-br',
        navLinks: true,
        eventLimit: true,
        selectable:true,
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar
        drop: function(element) {

            let Event = JSON.parse(element.draggedEl.dataset.event);

            // is the "remove after drop" checkbox checked?
            if (document.getElementById('drop-remove').checked) {
                // if so, remove the element from the "Draggable Events" list
                element.draggedEl.parentNode.removeChild(element.draggedEl);

                Event._method = "DELETE";
                sendEvent(routeEvents('routeFastEventDelete'), Event);
            }

            let start = moment(`${element.dateStr} ${Event.start}`).format("YYYY-MM-DD HH:mm:ss");
            let end = moment(`${element.dateStr} ${Event.end}`).format("YYYY-MM-DD HH:mm:ss");

            Event.start = start;
            Event.end = end;

            delete Event.id;
            delete Event._method;

            sendEvent(routeEvents('routeEventStore'), Event);

        },
        eventDrop: function(element){

            let start = moment(element.event.start).format("YYYY-MM-DD HH:mm:ss");
            let end = moment(element.event.end).format("YYYY-MM-DD HH:mm:ss");

            let newEvent = {
                _method:'PUT',
                title: element.event.title,
                id: element.event.id,
                start: start,
                end: end
            };

            sendEvent(routeEvents('routeEventUpdate'),newEvent,calendar);

        },
        eventClick: function(element){
            clearMessages('.message');
            resetForm("#formEvent");

            $("#modalCalendar").modal('show');
            $("#modalCalendar #titleModal").text('Alterar Evento');
            $("#modalCalendar button.deleteEvent").css("display","flex");

            let id = element.event.id;
            $("#modalCalendar input[name='id']").val(id);

            let title = element.event.title;
            $("#modalCalendar input[name='title']").val(title);

            let start = moment(element.event.start).format("DD/MM/YYYY HH:mm:ss");
            $("#modalCalendar input[name='start']").val(start);

            let end = moment(element.event.end).format("DD/MM/YYYY HH:mm:ss");
            $("#modalCalendar input[name='end']").val(end);

            let color = element.event.backgroundColor;
            $("#modalCalendar input[name='color']").val(color);

            let description = element.event.extendedProps.description;
            $("#modalCalendar textarea[name='description']").val(description);


        },
        eventResize: function(element){
            let start = moment(element.event.start).format("YYYY-MM-DD HH:mm:ss");
            let end = moment(element.event.end).format("YYYY-MM-DD HH:mm:ss");

            let newEvent = {
                _method:'PUT',
                title: element.event.title,
                id: element.event.id,
                start: start,
                end: end
            };

            sendEvent(routeEvents('routeEventUpdate'),newEvent);
        },
        select: function(element){

            clearMessages('.message');
            resetForm("#formEvent");
            $("#modalCalendar input[name='id']").val('');

            $("#modalCalendar").modal('show');
            $("#modalCalendar #titleModal").text('Adicionar Evento');
            $("#modalCalendar button.deleteEvent").css("display","none");

            let start = moment(element.start).format("DD/MM/YYYY HH:mm:ss");
            $("#modalCalendar input[name='start']").val(start);

            let end = moment(element.end).format("DD/MM/YYYY HH:mm:ss");
            $("#modalCalendar input[name='end']").val(end);

            $("#modalCalendar input[name='color']").val("#3788D8");

            calendar.unselect();

        },
        eventReceive: function(element){
            element.event.remove();
        },
        dayRender: function (date) {
            // console.log(date);
        // if (date > maxDate){
        //     $(cell).addClass('disabled');
        // }
        },
        events: routeEvents('routeLoadEvents'),

    });
    objCalendar = calendar;
    calendar.render();

});
