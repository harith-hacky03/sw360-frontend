#!/bin/bash

# Copyright (C) SW360 Frontend Authors (see <https://github.com/eclipse-sw360/sw360-frontend/blob/main/NOTICE>)

# SPDX-License-Identifier: EPL-2.0
# License-Filename: LICENSE

set -e

# Add directory as safe
git config --global --add safe.directory /workspaces/sw360-frontend

# Install npm packages to development
npm install