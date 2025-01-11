window.onload = function () {
  //<editor-fold desc="Changeable Configuration Block">

  const matcher = location.hash.match(/^#([0-9a-z-])+$/);
  const repository = matcher ? matcher[1] : 'openapi-ui';

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: `https://nana4rider.github.io/${repository}/openapi.json`,
    dom_id: "#swagger-ui",
    deepLinking: true,
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    plugins: [SwaggerUIBundle.plugins.DownloadUrl],
    layout: "StandaloneLayout",
  });

  //</editor-fold>
};
