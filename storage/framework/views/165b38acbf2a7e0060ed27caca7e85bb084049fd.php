<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset='utf-8'/>
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

    <title>FullCalendar 4.3 with Laravel And NPM</title>

    <link href='<?php echo e(url(mix('assets/fullcalendarNPM/css/fullcalendar.css'))); ?>' rel='stylesheet'/>
    <link href='<?php echo e(url(mix('assets/fullcalendarNPM/css/bootstrap.css'))); ?>' rel='stylesheet'/>
    <link href='<?php echo e(url(mix('assets/fullcalendarNPM/css/style.css'))); ?>' rel='stylesheet'/>

</head>
<body>

<div id='wrap'><?php echo $__env->yieldContent('content'); ?></div>

<div style='clear:both'></div>

<script src='<?php echo e(asset('assets/fullcalendarNPM/js/fullcalendar.js')); ?>'></script>
<script src='<?php echo e(asset('assets/fullcalendarNPM/js/jquery-and-mask-and-moment.js')); ?>'></script>
<script src='<?php echo e(asset('assets/fullcalendarNPM/js/bootstrap.js')); ?>'></script>

<script src='<?php echo e(asset('assets/fullcalendarNPM/js/scriptCalendar.js')); ?>'></script>


</body>
</html>
<?php /**PATH /var/www/app/resources/views/fullcalendar/template/master.blade.php ENDPATH**/ ?>