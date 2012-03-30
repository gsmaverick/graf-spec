var hints = {
  "package": {
    "home":         "<h3>GRAF Spec Explorer</h3><p>Click on properties inside the code window to learn more about their function.</p><p>All files inside a GRAF data set must be in JSON format "
                    + "and adhere to the names listed on the left-hand menu.</p>",
    "name":         "<p>It may happen that a city has multiple GRAF datasets for different things so it's best to give each data set a name that is descriptive of what data is contains.</p>",
    "license":      "<p>License that the data set is released under.  This can be a string or a link to the text of the license.  A file called LICENSE should be included with every GRAF "
                    + "package that contains all licensing information that governs the usage and distribution of the data set.</p>",
    "created_at":   "<p>Date and time this specific revision of the data set was created.</p>",
    "version":      "<p>Defines the version of the GRAF spec this data set uses.</p>",
    "municipality": "<p>Contains extra information about the municipality that this data set covers.</p>",
    "city":         "<p></p>",
    "province":     "<p></p>",
    "country":      "<p></p>",
    "website":      "<p>This can be the URL of the city's home page or a link to their open data page.</p>",
    "schema":       "<p>Since GRAF allows you to flexibly add arbitrary fields to your data this array defines any extra fields that have been added to this data set.</p>",
    "table":        "<p>One which `table` was the field added.</p>",
    "field":        "<p>The name of the field that was added.</p>",
    "description":  "<p>Lets the users of data set know what the purpose of the added field is.</p>",
    "type":         "<p>This can be empty if the type of the field doesn't matter otherwise is should be one of the JSON data types.</p>"
  },

  "facilities": {
    "home": "<h3>Facilities</h3><p>This file lists all the facilities within a municipality.  A facility would include places such as an aquatic center, a park, etc but does not specify a specific `resource` within"
            + " that facility.</p>",
    "id": "<p>An unique integer identifying this facility.  It must only be unique among other facilities within the data set.</p>",
    "name": "<p>Name of the facility</p>",
    "address": "<p>Street address of the facility; this is not used to generate the values of <code>lat</code> and <code>lng</code> as they should be included in the data set.</p>",
    "city": "",
    "phone": "<p>A string representation of the facility's phone number.  It should be 9-10 characters in length and consist only of digits.",
    "email": ""
  },

  "resources": {
    "home": "<h3>Resources</h3><p>Examples of resources would include pools, soccer fields and rinks.</p>",
    "id": "<p>An unique integer identifying this resource.  It must only be unique among other resources within the data set.</p>",
    "facility_id": "<p>Identifies the facility this resource belongs to.</p>",
    "name": "<p>Name of the resource</p>",
  },

  "activities": {
    "home": "<h3>Activities</h3><p>Each activity is tied to a particular resource within the data set.  Examples of activities would include public swim or public skate.</p>",
    "id": "<p>An unique integer identifying this activity.  It must only be unique among other activities within the data set.</p>",
    "resource_id": "<p>Identifies the resource where this activity is offered.</p>",
    "name": "<p>User-friendly name of the activity.</p>",
    "fee_class": "<p>A reference to the fee class which describes the costs for this activity.</p>"
  },

  "activity_times": {
    "home": "<h3>Activity Times</h3><p>Scheduling information for activities that are offered.</p>",
    "id": "<p>An unique integer identifying this activity time.  It must only be unique among other activity times within the data set.</p>",
    "activity_id": "<p>Identifies the activity which this time slot is being defined for.</p>",
    "start_time": "<p>Times must be 5 digits in HH:MM format (H:MM is also accepted, if the hour begins with 0). Do not pad times with spaces.</p>",
    "end_time": "<p>Times must be 5 digits in HH:MM format (H:MM is also accepted, if the hour begins with 0). Do not pad times with spaces.</p>",
    "start_date": "<p>Some activities may only be offered within a certain time frame and these two fields allow that.  If these values are not present it is assumed that the activities are always offered."
                  + "  Format of the field is YYYYMMDD.</p>",
    "end_date": "<p>Some activities may only be offered within a certain time frame and these two fields allow that.  If these values are not present it is assumed that the activities are always offered."
                  + "  Format of the field is YYYYMMDD.</p>"
  }
};