$(function (){
    var listItem, itemStatues, eventType;

    $('ul').on(
        'click mouseover',
        ':not(#four)',
        {status: 'important'},
        function (e){
            listItem = 'Item: ' + e.target.textContent + '<br />';
            itemStatues = 'Statues: ' + e.data.status + '<br />';
            eventType = 'Event: ' + e.type;
            $('#notes').html(listItem + itemStatues + eventType);
        }
    );

});