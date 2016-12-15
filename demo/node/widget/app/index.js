define(["lib/LayerDrag", "lib/functions"], function($LayerDrag, $func) {
    var index = {
        init: function() {
            var LayerDrag_1 = new $LayerDrag();
            LayerDrag_1.init({
                wrapper_box_selector: "section.wrap ul.box",
                items_box_drag_class: "draging",
                items_box_space_class: "space"
            });

            var LayerDrag_2=new $LayerDrag();
            LayerDrag_2.init({
                wrapper_box_selector: "section.wrap ul.box_vertical",
                items_box_drag_class: "draging",
                items_box_space_class: "space"
            });
        }
    };

    return index;
});
