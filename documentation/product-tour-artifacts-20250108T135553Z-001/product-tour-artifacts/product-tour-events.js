function setupListeners () { // 15-08-2024
  const eventLog = document.getElementById('event-log');
  //console.log(`%cEvent log textarea ${eventLog ? "WAS" : "NOT"} found!`, "color: gold;");
  if (!eventLog) {
    return;
  }

  const events = [];

  function logEvent(eventType, detail) {
    const eventSchema = {
      "$schema": "https://json-schema.org/draft/2019-09/schema",
      "type": "object",
      "properties": {
        "event": {
          "examples": [eventType],
          "description": "name of the event",
          "title": "event",
          "type": "string",
          "$id": "#root/event/"
        },
        "pageComponents": {
          "title": "pageComponents",
          "type": "object",
          "properties": {
            "pageComponents": {
              "additionalItems": false,
              "description": "On component click array",
              "title": "pageComponents",
              "type": "array",
              "items": [
                {
                  "name": {
                    "$id": "#root/pageComponents/pageComponents/name/",
                    "description": "Name of component clicked",
                    "examples": [detail.sectionName || detail.altText || detail.functionName || ''],
                    "title": "name",
                    "type": "string"
                  }
                }
              ],
              "required": ["name"],
              "$id": "#root/pageComponents/pageComponents/"
            }
          },
          "required": ["pageComponents"],
          "unevaluatedProperties": false,
          "$id": "#root/pageComponents/"
        }
      },
      "required": ["event", "pageComponents"],
      "unevaluatedProperties": false,
      "$id": "https://github.tools.sap/CXS/event-schema/tree/develop/schemas/sap.ies.cxs.eddl.pagecomponentclick.v.0.1.json"
    };

    events.push(eventSchema);
    const eventText = JSON.stringify(eventSchema, null, 2);
    console.log(`%c${eventText}`, "color: green;");
    if (!!eventLog) {
      eventLog.value += eventText + '\n';
      eventLog.scrollTop = eventLog.scrollHeight; // Auto-scroll to the bottom
    }
  }

  document.addEventListener('tourStarted', (event) => logEvent('tourStarted', event.detail));
  document.addEventListener('imageLoaded', (event) => logEvent('imageLoaded', event.detail));
  document.addEventListener('accordionHeaderClicked', (event) => logEvent('accordionHeaderClicked', event.detail));
  document.addEventListener('carouselPrevClicked', (event) => logEvent('carouselPrevClicked', event.detail));
  document.addEventListener('carouselNextClicked', (event) => logEvent('carouselNextClicked', event.detail));
}

setupListeners();