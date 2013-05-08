
var {ArrayAdapter} = android.widget;
var {Intent} = android.content;
var {Uri} = android.net;

var items = ["Draw"];

activity.on({
    create: function(bundle) {
        var adapter = new ArrayAdapter(activity,
                android.R.layout.simple_list_item_1, items);
        activity.setListAdapter(adapter);
    },

    click: function(item) {
        var class = com.fun.draw[items[item]];
        var intent = new Intent(activity, class);
        activity.startActivity(intent);
    }
});