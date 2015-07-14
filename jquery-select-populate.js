$.fn.populate = function (dataArray) {
    var $selectbox = $(this);
 
    if ($selectbox.is("select")) {
        $.each(dataArray, function (i, data) {
            $selectbox.append('<option value="' + data.value + '">' + data.key + '</option>');
        });
    }
};
