import $ from 'jquery';
import FlipClock from './libs/flipclock.min';

$(function() {
    var clock;

    $('.js-countdown').each(function () {
        var currentDate = new Date();
        var futureDate  = new Date(currentDate.getFullYear(), 1, 2);
        var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

        clock = $(this).FlipClock(diff, {
            clockFace: 'HourlyCounter',
            autoStart: true,
            countdown: true,
            language: 'ru'
        });
    });
});
