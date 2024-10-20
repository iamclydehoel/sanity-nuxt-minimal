<script lang="ts">
import { renderStudio } from "sanity";
import config from "~~/sanity/sanity.config"

const div = document.createElement('div')
div.classList.add('studio')
document.body.innerHTML = ''
document.body.appendChild(div)
renderStudio(div, config);
</script>
<style lang="css">
html, 
body,
.studio {
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>