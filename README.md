This repo contains the Backstage plugins created and maintained by [Glent](https://glent.io). Glent is a SaaS Backstage solution.

Amongst others, the following plugins can be found within this repo:

- [Github Pull Requests](https://www.npmjs.com/package/@kozmoai/backstage-plugin-github-pull-requests)

- [Github Insights](https://www.npmjs.com/package/@kozmoai/backstage-plugin-github-insights)

- [AWS Lambda](https://www.npmjs.com/package/@kozmoai/backstage-plugin-aws-lambda)

- [Jira](https://www.npmjs.com/package/@kozmoai/backstage-plugin-jira)

- [Datadog](https://www.npmjs.com/package/@kozmoai/backstage-plugin-datadog)

- [Travis CI](https://www.npmjs.com/package/@kozmoai/backstage-plugin-travis-ci)

- [Security Insights](https://www.npmjs.com/package/@kozmoai/backstage-plugin-security-insights)

- [Buildkite](https://www.npmjs.com/package/@kozmoai/backstage-plugin-buildkite)

- [Bugsnag](https://www.npmjs.com/package/@kozmoai/backstage-plugin-bugsnag)

- [Argo CD](https://www.npmjs.com/package/@kozmoai/backstage-plugin-argo-cd) (created in collaboration with [American Airlines](https://github.com/AmericanAirlines))

- [Argo CD Backend](https://www.npmjs.com/package/@kozmoai/backstage-plugin-argo-cd-backend) (contributed by [American Airlines](https://github.com/AmericanAirlines))

- [Cloudsmith](https://www.npmjs.com/package/@kozmoai/backstage-plugin-cloudsmith)

Installation instructions for each plugin can be found in their individual README files.

Backstage is an open platform for creating developer portals. To learn more about the problems it can help solve, please check out our [Ultimate Guide to Backstage by Spotify](https://glent.io/backstage-spotify/).

##

## Getting Started

To get up and running with this repository, you will need to clone it off of GitHub and run an initial build.

```bash
git clone https://github.com/kozmoai/glent-backstage-plugins.git
cd glent-backstage-plugins
```

## Fetch dependencies and run an initial build from root directory

```bash
yarn install
yarn tsc
yarn build
```

You will be able to see plugins which are already integrated and installed in package.json inside

```bash
cd packages/app
```

folder.

Inside this repository you can add other plugins by running

```bash
// packages/app
yarn add <<plugin>>
```

followed by

```bash
// packages/app
yarn install
```

and running same command in root directory.

You should be able to run application from root directory, by running

```bash
yarn dev
```

## Structure of the repository.

This repository is a place where all of the kozmoai plugins we are developed are integrated under `/plugins` folder. Depending on the type of the plugin they are separated in frontend or backend folder. Please note the scaffolder actions are handled separately. Plugins may be used and/or modified by following steps below:

### Plugins container

Navigate to

```bash
cd glent-backstage-plugin/plugins
cd backend/frontend
cd selected-plugin
```

Plugin folders consist separate unit tests per every plugin, while general e2e tests are written under

```bash
cd glent-backstage-plugin/packages/app/cypress/integration
```

folder.

### Sample service

In order to make E2E testing isolated from real entities, we have created `test-entity.yaml` under `packages/entitites`, which will be shown as sample-service entity when you start the app. This is used only for testing purposes and can be modified accordingly.

```bash
cd glent-backstage-plugin/plugins
cd backend or cd frontend
cd selected-plugin
```

Plugin folders consist of separate unit tests for each plugin, while general E2E tests are written under

```bash
cd glent-backstage-plugin/packages/app/cypress/integration
```

folder.

## Community

- [Discord chatroom](https://discord.gg/d9SJrQR5uH) - Get support
- [Contributing](https://github.com/kozmoai/glent-backstage-plugins/blob/master/CONTRIBUTING.md) - Start here if you want to contribute
- Give us a star ⭐️ - If you are using Backstage or think it is an interesting project, we would love a star ❤️

## License

Copyright 2022 Larder Software Limited. Licensed under the Apache License, Version 2.0: http://www.apache.org/licenses/LICENSE-2.0
