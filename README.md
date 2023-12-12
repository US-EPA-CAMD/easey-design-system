# easey-design-system package
[![GitHub](https://img.shields.io/github/license/US-EPA-CAMD/easey-design-system)](https://github.com/US-EPA-CAMD/easey-design-system/blob/develop/LICENSE.md)
[![GitHub version](https://badge.fury.io/gh/US-EPA-CAMD%2Feasey-design-system.svg)](https://badge.fury.io/gh/US-EPA-CAMD%2Feasey-design-system)
[![Release Workflow](https://github.com/US-EPA-CAMD/easey-design-system/workflows/Release%20Workflow/badge.svg)](https://github.com/US-EPA-CAMD/easey-design-system/actions)<br>

The easey-design-system package contains shared code from across the US-EPA-CAMD project. 
 
# Downloading and using easey-design-system

## Getting Started
These instructions will get you a copy of the project package up and running and downloaded.

### Prerequisites
- Project running node
- A ```.yarnrc``` file existing in the root directory, with the contents of: ``` @us-epa-camd:registry=https://npm.pkg.github.com ```
- [Authenticate to github package registry on local machine](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)

### Installing
- Select desired version of package. The most up to date package version is [![GitHub version](https://badge.fury.io/gh/US-EPA-CAMD%2Feasey-design-system.svg)](https://badge.fury.io/gh/US-EPA-CAMD%2Feasey-design-system) . <br>
- In terminal execute ```yarn add @us-epa-camd/easey-design-system``` for latest current version or ```yarn add @us-epa-camd/easey-design-system@VERSION``` to install a specific version

### Using
- Import desired files from folder within package.
- For example, to insert the Header: ``` import { Header } from '@us-epa-camd/easey-design-system/Header'; ```

# Adding and publishing to easey-design-system

## Getting Started 
These instructions will show you how to edit the existing package, and publish a new version.

### Prerequisites
- Clone easey-design-system github master branch on your local machine

### Viewing the storybook locally
- After invoking the ```yarn``` command to download the projects packages, invoke ```yarn storybook```

### Adding Components
- Add a new directory to the Components folder within the src of the easey-design-system
- Populate directory with the .scss styling file for your component, the base .tsx React component, and a .stories.tsx file for the [storybook](https://storybook.js.org/docs/writing-stories)
- Finally, export * from the component within the src/index.ts

## Publishing new package version
- On the current branch in terminal, add all file changes with ```git add .```
- Commit files using ``` yarn commit ``` which executes the [commitizen](https://commitizen-tools.github.io/commitizen/) plugin, a commit formatter that is digestible by [semantic-release](https://semantic-release.gitbook.io/semantic-release/)
- Follow the prompts and create your commit
- Push the commit to your current branch
``` git push origin CURRENT_BRANCH```
- Github workflows for this package are set up to create new package versions whenever a push or merge to the ```N.B.x, N.x (N is a number), master, next, next-major, beta, or alpha``` branches is executed
- Semantic-Release will version all code automatically, based on the input received from the commitizen commit

## Maintenance Releases
[semantic-release](https://semantic-release.gitbook.io/semantic-release/) supports releasing patches for previously released versions where it is not possible to fully upgrade to the more recent versions. This is accomplished using the `N.N.x and N.x` branch names where N is the version you want to release a patch. If it is required to release a patch to a previously released version then the following steps must be followed to properly release a new patch version.

1. Determine the version to be patched
2. Clone or pull latest from easey-common
3. Create `N.N.x` or `N.x` branch
   - If the version has subsequent versions after it
     - Create `N.N.x` branch with N being the major and minor version of the version being patched
     - Example using v1.0.0 to be patched and the v1.0.0 release tag
       - `git checkout -b 1.0.x v1.0.0`
   - If the version does NOT have subsequent versions after it
     - Create `N.x` branch with N being the major version of the version being patched
     - Example using v1.1.0 to be patched and the v1.1.0 release tag
       - `git checkout -b 1.x v1.1.0`
4. Implement changes in `N.N.x` or `N.x` branch and then follow the same steps above to commit changes using `yarn commit`
5. Release workflow will release a new patch version for the version you choose to be patched

## License & Contributing
This project is licensed under the MIT License. We encourage you to read this project’s [License](https://github.com/US-EPA-CAMD/devops/blob/master/LICENSE), [Contributing Guidelines](https://github.com/US-EPA-CAMD/devops/blob/master/CONTRIBUTING.md), and [Code of Conduct](https://github.com/US-EPA-CAMD/devops/blob/master/CODE_OF_CONDUCT.md).

## Disclaimer
The United States Environmental Protection Agency (EPA) GitHub project code is provided on an "as is" basis and the user assumes responsibility for its use. EPA has relinquished control of the information and no longer has responsibility to protect the integrity , confidentiality, or availability of the information. Any reference to specific commercial products, processes, or services by service mark, trademark, manufacturer, or otherwise, does not constitute or imply their endorsement, recommendation or favoring by EPA. The EPA seal and logo shall not be used in any manner to imply endorsement of any commercial product or activity by EPA or the United States Government.
