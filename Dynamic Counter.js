<script>
    jQuery(function($) {
        var min = 10;
        var max = 300;
        min = Math.ceil(min);
        max = Math.floor(max);
        var r = Math.floor(Math.random() * (max - min + 1)) + min;
        var inc = '0';
        var mytimeAgo = ['1', '2', '3', '4', '5', '10', '-1', '-2', '-3', '-4', '-5'];
        var randomlytimeAgo = '';
        var currentmytimeAgo = '';
        var plus = ['10', '20', '15'];
        var randomlytimeAgo = '';
        var currentmytimeAgo = '';
        var range = '';
        setInterval(function() {
            randomlytimeAgo = Math.floor(Math.random() * mytimeAgo.length);
            currentmytimeAgo = mytimeAgo[randomlytimeAgo];
            r = parseInt(r) + parseInt(currentmytimeAgo);
            if (r <= 10) {
                range = Math.floor(Math.random() * plus.length);
                var final = plus[range];
                r = r + final;
            }
            if (r > 300) {
                range = Math.floor(Math.random() * plus.length);
                var final = plus[range];
                r = r - final;
            }
            jQuery("#dynamic_counter").html(r);
        }, 2000);
    });
</script>
