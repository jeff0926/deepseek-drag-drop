# Digital Experience Fragments

Enables teams across SAP to engineer, release and embed web based apps into the digital experience; enabling portable, multi-homed deployments

## Publishing new releases

A simple release and publish workflow has been setup to roll out new versions of Digital Experience Fragments. The process is as follows:

1. Finish development + successful testing
2. Create a new release here: https://github.tools.sap/sapudex/digital-experience-fragments/releases/new
    1. Choose tag: Create a new tag on publishing following [semantic versioning](https://semver.org/), e.g. v1.0.2
    2. Choose `main` branch as target
    3. Press `Generate release notes`
    4. Check release title is equal to tag name and check release notes
    5. Publish release
3. Publishing a new release will trigger a GitHub Action to publish the needed Digital Experience Fragments to UDEx CDN
    * Status of the Action can be checked here: https://github.tools.sap/sapudex/digital-experience-fragments/actions/workflows/publish.yaml

The published assets are available in the UDEx CDN in a:
* versioned form: https://cdn.udex.services.sap.com/dxf/v0.0.1/product-tour/product-tour.js
* latest form: https://cdn.udex.services.sap.com/dxf/latest/product-tour/product-tour.js
