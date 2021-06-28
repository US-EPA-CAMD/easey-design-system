# EASEY Design System & Component Library
[![GitHub](https://img.shields.io/github/license/US-EPA-CAMD/easey-design-system)](https://github.com/US-EPA-CAMD/easey-design-system/blob/develop/LICENSE)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=US-EPA-CAMD_easey-design-system&metric=alert_status)](https://sonarcloud.io/dashboard?id=US-EPA-CAMD_easey-design-system)
[![Develop Branch Pipeline](https://github.com/US-EPA-CAMD/easey-design-system/workflows/Develop%20Branch%20Workflow/badge.svg)](https://github.com/US-EPA-CAMD/easey-design-system/actions)<br>
Easey Design System & components library for EPA CAMD Systems
​

## Getting Started
​
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Installing
1. Open your terminal and navigate to the directory you wish to store this repository.

2. Clone this repository

    ```shell
    # If using SSH
    git clone git@github.com:US-EPA-CAMD/easey-design-system.git

    # If using HTTPS
    git clone https://github.com/US-EPA-CAMD/easey-design-system.git
    ```

3. Navigate to the root project directory

    ```
    cd easey-design-system
    ```

4. Make changes as needed


### Commit & Push to git

```bash
$ git add -A
$ git commit -m "insert comment here..."
$ git push
```


### [Versioning](https://docs.npmjs.com/cli/v6/commands/npm-version)
```bash
$ npm version [<newversion> | major | minor | patch] 
```

The newversion argument should be a valid semver string, a valid second argument to semver.inc (one of patch, minor, major, prepatch, preminor, premajor, prerelease), or from-git. In the second case, the existing version will be incremented by 1 in the specified field. from-git will try to read the latest git tag, and use that as the new npm version.

#### Patch version 0.0.x
```bash
$ npm version patch
```

#### Minor version 0.x.0
```bash
$ npm version minor
```

#### Major version x.0.0
```bash
$ npm version major
```

#### New version
```bash
$ npm version x.x.x
```

#### Adding commit message
If supplied with -m or --message config option, npm will use it as a commit message when creating a version commit. If the message config contains %s then that will be replaced with the resulting version number.

```bash
$ npm version patch -m "Upgrade to %s for [details of new version]"
```


### Publish
This is a manual way to publish, however, the CI/CD publish workflow will take care of publishing when a new release is created.

```bash
$ npm publish
```


## License & Contributing
​
This project is licensed under the MIT License. We encourage you to read this project’s [License](LICENSE), [Contributing Guidelines](CONTRIBUTING.md), and [Code of Conduct](CODE_OF_CONDUCT.md).
