import _ from 'lodash'
import messages from 'core/lib/translation.preprocessor'
import * as corePlugins from 'core/plugins'
import * as themePlugins from 'theme/plugins'
import * as coreMixins from 'core/mixins'
import * as themeMixins from 'theme/mixins'
import * as coreFilters from 'core/filters'
import * as themeFilters from 'theme/filters'

/**
 * Return messages load from both: core/resource/i18n and theme/resource/i18n
 */
export function translations () {
  return messages
}

/**
 * Return plugins load from both: core/plugins and theme/plugins
 */
export function plugins () {
  return _.merge(corePlugins, themePlugins)
}

/**
 * Return mixins load from both: core/mixins and theme/mixins
 */
export function mixins () {
  return _.merge(coreMixins, themeMixins)
}

/**
 * Return filters load from both: core/filters and theme/filters
 */
export function filters () {
  return _.merge(themeFilters, coreFilters)
}

export function corePage (path) {
  return require('core/pages/' + path + '.vue') // using webpack path alias  - core/pages = core/pages
}

export function coreComponent (path) {
  return require('core/components/' + path + '.vue') // using webpack path alias  - core/omponents = core/components
}

export function extendStore (coreStore, extendStore) {
  return _.merge(coreStore, extendStore)
}

export function registerTheme (themeName, app, routes, store) {
  let themeEntryPoint = require('theme/index.js')
  if (themeEntryPoint != null && themeEntryPoint.hasOwnProperty('default')) {
    themeEntryPoint.default(app, routes, store) // register theme
  } else {
    throw new Error('Wrong theme name: ' + themeName)
  }
}
