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

<div id='wrap'><?php echo $__env->yieldContent('content'); ?></div>
<div style='clear:both'></div>

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

<?php /**PATH H:\xampp\htdocs\laravel-6\fullcalendar\resources\views/fullcalendar/template/master.blade.php ENDPATH**/ ?>