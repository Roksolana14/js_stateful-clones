'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const copyState = { ...state };
  const stateHistory = [];

  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(copyState, action.extraData);
    }

    if (action.type === 'removeProperties') {
      for (const keyToRemove of action.keysToRemove) {
        delete copyState[keyToRemove];
      }
    }

    if (action.type === 'clear') {
      for (const key in copyState) {
        delete copyState[key];
      }
    }
    stateHistory.push({ ...copyState });
  }

  return stateHistory;
}

module.exports = transformStateWithClones;
