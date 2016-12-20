$(document).ready(function() {
    $('.profile-background').hide();

    $('.profile-more').on('click', function() {
        var sid = $(this).data('speaker-id');
        $('.profile-background[data-speaker-id="' + $(this).data('speaker-id') + '"]').show();
    });

    $('.profile-background:not(.profile-detail)').on('click', function() {
        $('.profile-background').hide();
    });
});