/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
'use strict';

const PropTypes = require('prop-types');

const createStrictShapeTypeChecker = require('createStrictShapeTypeChecker');

const PointPropType = createStrictShapeTypeChecker({
  x: PropTypes.number,
  y: PropTypes.number,
});

module.exports = PointPropType;
