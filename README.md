# Prevajanje programskih jezikov

## Moodle hook

Paste this as the HTML of the task description (More buttons ```↴```, HTML ```<>```), substitute ```{{url}}``` with a URL that points to a HTML page, which will then be displayed inside of the description box.
Unfortunately, this needs to be done manually.

```html
<iframe name="task-description" style="width: 100%; height: 100px" src="{{url}}" frameborder="0" scrolling="no"></iframe>
<script>
    window.addEventListener("message", function(e) {
        const iframe = document.getElementsByName("task-description")[0];
        if (iframe.contentWindow === e.source) {
            iframe.style.height = e.data + "px";
        }
    })
</script>
```
