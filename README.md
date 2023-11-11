# Acorn Start - NextJS
This repo serves as an example for a full-stack NextJS app that is deployable via Acorn.

## Running

The Acornfile for this repository comes with argument customization to make running it flexible. If you would like to overwrite default values, you can pass arguments.

```shell
acorn run . --db-user non-default --db-password non-default
```

Here are all of the available run options:

| Option               | Default                                              | Description                                                                                                                                       |
|----------------------|------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| --db-user            | secret://db-user-creds/username                      | Defaults to a generated basic secret's username.   If both the DB's user and password are non-default, a secret is not created.                   |
| --db-pass            | secret://db-user-creds/password                      | Defaults to a generated basic secret's password.   If both the DB's user and password are non-default, a secret is not created.                    |
| --db-host            | db:3306/app?charset=utf8mb4&parseTime=True&loc=Local | Defaults to an inferred host.  If this is set to be non-default, a DB container will not be created.                                              |

### Locally
To get started locally, simply run:

```shell
$ acorn dev .
```

**Note**: When running locally through development mode, [Prisma Studio](https://www.prisma.io/docs/concepts/components/prisma-studio) is enabled. This is only true when running in development mode. In any other scenario the `studio` container will not exist.

### On Cluster
Along with this repo, there are customized [GitHub Actions](./.github/workflows/acorn.yaml) that will build and push the Acornfile to `ghcr.io` on a push to `main` or new tag. When running on cluster, you can reference your `ghcr.io` image.

```shell
acorn run ghcr.io/acorn-io/acorn-starter-nextjs
```