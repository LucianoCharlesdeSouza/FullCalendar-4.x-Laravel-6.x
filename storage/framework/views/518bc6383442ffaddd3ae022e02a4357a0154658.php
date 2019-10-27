<?php $__env->startSection('content'); ?>

    <?php echo $__env->make('fullcalendar.modais.events', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php echo $__env->make('fullcalendar.modais.fastEvents', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

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

<?php $__env->stopSection(); ?>

<?php echo $__env->make('fullcalendar.template.masterNPM', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH H:\xampp\htdocs\laravel-6\fullcalendar\resources\views/fullcalendar/views/calendarNPM.blade.php ENDPATH**/ ?>