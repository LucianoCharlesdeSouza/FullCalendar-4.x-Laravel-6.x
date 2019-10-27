<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset='utf-8'/>
    <link href='<?php echo e(asset('assets/fullcalendar/packages/core/main.css')); ?>' rel='stylesheet'/>
    <link href='<?php echo e(asset('assets/fullcalendar/packages/daygrid/main.css')); ?>' rel='stylesheet'/>
    <link href='<?php echo e(asset('assets/fullcalendar/packages/timegrid/main.css')); ?>' rel='stylesheet'/>
    <link href='<?php echo e(asset('assets/fullcalendar/packages/list/main.css')); ?>' rel='stylesheet'/>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link href='<?php echo e(asset('assets/fullcalendar/css/style.css')); ?>' rel='stylesheet'/>

    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

    <title>FullCalendar 4.3 with Laravel</title>
</head>
<body>

<?php echo $__env->make('fullcalendar.modais.events', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php echo $__env->make('fullcalendar.modais.fastEvents', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

<div id='wrap'>

    <div id='external-events'>
        <h4>Eventos Rápidos</h4>

        <div id='external-events-list'>

            <?php if(isset($fastEvents)): ?>
                <?php $__empty_1 = true; $__currentLoopData = $fastEvents; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $fastEvent): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                    <div
                        style="padding: 4px; border: 1px solid <?php echo e($fastEvent->color); ?>; background-color: <?php echo e($fastEvent->color); ?>"
                        class='fc-event'
                        data-event='{"id":"<?php echo e($fastEvent->id); ?>","title":"<?php echo e($fastEvent->title); ?>","color":"<?php echo e($fastEvent->color); ?>","start":"<?php echo e($fastEvent->start); ?>","end":"<?php echo e($fastEvent->end); ?>"}'>
                        <?php echo e($fastEvent->title); ?>

                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                    <p>Não há eventos rápidos a serem visualizados</p>
                <?php endif; ?>
            <?php endif; ?>

        </div>

        <p>
            <input type='checkbox' id='drop-remove'/>
            <label for='drop-remove'>remover após arrastar</label>
            <button class="btn btn-sm btn-success" id="newFastEvent">Criar novo evento</button>
        </p>
    </div>


    <div
        id='calendar'
        data-route-load-events="<?php echo e(route('routeLoadEvents')); ?>"
        data-route-event-update="<?php echo e(route('routeEventUpdate')); ?>"
        data-route-event-store="<?php echo e(route('routeEventStore')); ?>"
        data-route-event-delete="<?php echo e(route('routeEventDelete')); ?>"

        data-route-fast-event-delete="<?php echo e(route('routeFastEventDelete')); ?>"
        data-route-fast-event-update="<?php echo e(route('routeFastEventUpdate')); ?>"
        data-route-fast-event-store="<?php echo e(route('routeFastEventStore')); ?>">
    </div>

    <div style='clear:both'></div>

</div>

<script src='<?php echo e(asset('assets/fullcalendar/packages/core/main.js')); ?>'></script>
<script src='<?php echo e(asset('assets/fullcalendar/packages/interaction/main.js')); ?>'></script>
<script src='<?php echo e(asset('assets/fullcalendar/packages/daygrid/main.js')); ?>'></script>
<script src='<?php echo e(asset('assets/fullcalendar/packages/timegrid/main.js')); ?>'></script>
<script src='<?php echo e(asset('assets/fullcalendar/packages/list/main.js')); ?>'></script>

<script src='<?php echo e(asset('assets/fullcalendar/packages/core/locales-all.js')); ?>'></script>

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>

<script src='<?php echo e(asset('assets/fullcalendar/js/script.js')); ?>'></script>

<script src='<?php echo e(asset('assets/fullcalendar/js/calendar.js')); ?>'></script>


</body>
</html>

<?php /**PATH H:\xampp\htdocs\laravel-6\fullcalendar\resources\views/fullcalendar/master.blade.php ENDPATH**/ ?>